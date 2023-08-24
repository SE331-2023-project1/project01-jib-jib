<script setup lang="ts">
import StudentService from "@/services/StudentService";
import AdviserList from "@/components/AdviserList.vue";
import { computed, ref, watchEffect } from "vue";
import type { Ref } from "vue";
import type { AdviserItem } from "@/type";
import type { AxiosResponse } from "axios";
import { useAdviserStore } from "@/stores/newAdviser";
const adviserStore = useAdviserStore();
const professer: Ref<Array<AdviserItem>> = ref([]);
const totalEvent = ref<number>(0);
const eventsPerPage = ref(10);
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});
watchEffect(() => {
  StudentService.getAdviser(eventsPerPage.value, props.page).then(
    (response: AxiosResponse<AdviserItem[]>) => {
      professer.value = response.data;
      professer.value = [
        ...adviserStore.getTemporaryAdviser(),
        ...professer.value,
      ];
      totalEvent.value = response.headers["x-total-count"];
    }
  );
});

computed(() => {
  const totalPages = Math.ceil(totalEvent.value / eventsPerPage.value);
  return props.page.valueOf() < totalPages;
});
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
  </div>
</template>
