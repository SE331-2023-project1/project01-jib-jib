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
  <div class="container mx-auto flex justify-center items-center">
    <div v-if="student" class="border-2 p-2 m-2 w-96">
      <div class="flex">
        <div>
          <img :src="student.profileImage" alt="Student Image" class="h-24 w-20" />
        </div>
        <div class="ml-2">
          <p>Student ID: {{ student.studentID }}</p>
          <p>Name: {{ student.name }}</p>
          <p>Surname: {{ student.surname }}</p>
          <p>Course: {{ student.courses.toString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
