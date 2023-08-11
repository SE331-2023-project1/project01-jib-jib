<script setup lang="ts">
import StudentService from '@/services/StudentService'
import type { studentInfo } from '@/student'
import StudentCard from '@/components/StudentCard.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
const students: Ref<Array<studentInfo>> = ref([])
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
StudentService.getStudent().then((response) => {
  students.value = response.data
})
</script>

<template>
  <div class="student">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </div>
</template>
