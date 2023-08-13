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
  <div>
    <div v-if="professer" class="border-2 rounded-md">
      <img src="professer?.profileImage" alt="professer img" />
      <h1>{{ professer?.name }}</h1>
      <h1>{{ professer?.surname }}</h1>
    </div>
  </div>
</template>
