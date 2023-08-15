<script setup lang="ts">
import type { AdviserItem } from '@/type'
import type { PropType } from 'vue'
defineProps({
  professer: {
    type: Object as PropType<AdviserItem>,
    require: true
  }
})
</script>

<template>
  <div class="flex justify-center items-center mb-8">
    <div v-if="professer" class="border-2 w-3/4 p-4 bg-yellow-600 text-yellow-900 rounded-md">
      <div class="flex items-center">
        <div class="mr-4">
          <img :src="professer?.profileImage" alt="professer img" class="h-28 w-24" />
        </div>
        <div class="text-left">
          <p class="text-lg font-bold">{{ professer?.name }}</p>
          <p>{{ professer?.surname }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
