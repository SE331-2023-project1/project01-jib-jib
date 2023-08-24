<script setup lang="ts">
import StudentService from '@/services/StudentService'
import AdviserList from '@/components/AdviserList.vue'
import { computed, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import type { AdviserItem } from '@/type'
import type { AxiosResponse } from 'axios'
const professer: Ref<Array<AdviserItem>> = ref([])
const totalEvent = ref<number>(0)
const eventsPerPage = ref(6)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
watchEffect(() => {
  StudentService.getAdviser(eventsPerPage.value, props.page).then(
    (response: AxiosResponse<AdviserItem[]>) => {
      professer.value = response.data
      totalEvent.value = response.headers['x-total-count']
    }
  )
})

const hasNextPages = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / eventsPerPage.value)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-2 mt-10">
      <AdviserList
        v-for="professers in professer"
        :key="professers.professorID"
        :professer="professers"
      >
      </AdviserList>
    </div>
    <div class="flex justify-around space-x-28">
      <RouterLink
        :to="{ name: 'professer', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
        class="font-bold hover:text-red-800"
      >
        Prev page
      </RouterLink>
      <RouterLink
        :to="{ name: 'professer', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPages"
        id="page-next"
        class="font-bold hover:text-red-800"
      >
        Next page
      </RouterLink>
    </div>
  </div>
</template>
