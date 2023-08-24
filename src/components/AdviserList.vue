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
  <div class="flex justify-center items-center mb-2">
      <div v-if="professer" class="border-2 w-3/4 h-38 p-2 bg-red-800 text-white rounded-md">
        <div class="flex row-auto">
          <div class="mr-2">
            <img :src="professer?.profileImage" alt="Student Image" class="border-2 border-black h-36 w-30 object-cover" />
          </div>
          <div class="ml-2 text-left">
            <p class="text-lg font-mono font-bold">Name: {{ professer.name }} {{ professer.surname }}</p>
            <p class="text-lg font-mono">ProfesserID: {{ professer?.professorID }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
