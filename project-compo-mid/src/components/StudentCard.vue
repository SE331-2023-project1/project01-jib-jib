<script setup lang="ts">
import type { StudentItem } from '@/type'
import { type PropType } from 'vue'
const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
</script>
<template>
  <div class="flex justify-center items-center mb-2">
    <div v-if="student" class="border-2 w-3/4 h-38 p-2 bg-yellow-600 text-yellow-900 rounded-md">
      <div class="flex row-auto">
        <div class="mr-2">
          <img :src="student.profileImage" alt="Student Image" class="h-36 w-30" />
        </div>
        <div class="ml-2 text-left">
          <p class="text-lg font-mono font-bold">Student ID: {{ student.studentID }}</p>
          <p>Name: {{ student.name }}</p>
          <p>Surname: {{ student.surname }}</p>
          <p>Course:</p>
          <p class="text-xs">{{ student.courses.toString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
