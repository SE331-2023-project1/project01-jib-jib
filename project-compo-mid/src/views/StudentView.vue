<script setup lang="ts">
import StudentService from '@/services/StudentService'
import type { studentInfo } from '@/student'
import StudentCard from '@/components/StudentCard.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { StudentItem } from '@/type'
import type { AxiosResponse } from 'axios'
const students: Ref<Array<studentInfo>> = ref([])
const totalEvent = ref<number>(0)
const eventsPerPage = ref(6)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
StudentService.getStudent(eventsPerPage.value, props.page).then(
  (response: AxiosResponse<StudentItem[]>) => {
    students.value = response.data
    totalEvent.value = response.headers['x-total-count']
  }
)
</script>

<template>
  <div class="student">
    <StudentCard
      v-for="student in students"
      :key="student.studentID"
      :student="student"
    ></StudentCard>
  </div>
</template>
