<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { StudentItem } from '@/type'
import StudentService from '@/services/StudentService'
const student = ref<StudentItem | null>(null)
const props = defineProps({
  id: String
})

StudentService.getStudentById(Number(props.id))
  .then((response) => {
    student.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <div v-if="student">
    <p>Name: {{ student?.name }}</p>
    <p>Surname: {{ student?.surname }}</p>
    <p>Course:{{ student?.courses.toString() }}</p>
  </div>
</template>
