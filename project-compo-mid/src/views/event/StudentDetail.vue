<script setup lang="ts">
import { type StudentItem } from '@/type'
import { computed, type PropType } from 'vue'
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router'
const store = useMessageStore()
defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
const router = useRouter()
const studentId = router.currentRoute.value.params.id
const studentComment = computed(() => {
  return store.getCommentForStudent(String(studentId))
})
</script>

<template>
  <div v-if="student" class="font-mono grid grid-cols-2">
    <p class="font-semibold text-left">Name:</p>
    <p class="text-center">{{ student.name }}</p>
    <p class="font-semibold text-left">SurName:</p>
    <p class="text-center">{{ student.surname }}</p>
    <p class="font-semibold text-left">Course:</p>
    <p class="text-center">{{ student.courses.toString() }}</p>
    <div class="message">
      <h1>Comment from Advisor</h1>
      <p>{{ studentComment }}</p>
    </div>
  </div>
</template>
