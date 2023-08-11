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
  <div>
    <div v-if="student" class="studentCard">
      <div class="student-img">
        <img :src="student.profileImage" alt="Student Image" />
      </div>
      <div class="student-info">
        <p>Student ID: {{ student.studentID }}</p>
        <p>Name: {{ student.name }}</p>
        <p>Surname: {{ student.surname }}</p>
        <p>Course: {{ student.courses.toString() }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.studentCard {
  display: flex;
  flex-direction: row;
  text-align: left;
  border: solid 2px;
  margin: 10px;
  padding: 10px;
}
</style>
