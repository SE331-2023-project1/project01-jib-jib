<script setup lang="ts">
import { useStudentStore } from '@/stores/student'
import { storeToRefs } from 'pinia';
import  { ref } from 'vue'

const store = useStudentStore()
const { student, professer} = storeToRefs(store)
const id = ref(student?.value?.id)
</script>

<template>
     <div v-if="student" class="flex flex-col items-center gap-4 mt-6">
        <img :src="student?.profileImage" alt="Student Image" class="border-2 border-black h-48 w-42 object-cover" />
        <h1 class="font-mono font-bold text-2xl"> StudentID: {{ student.studentID }}</h1>
        <div class="mb-4">
            <RouterLink :to="{ name: 'student-detail', params: { id } }" class="font-mono font-semibold hover:text-red-800"> Details </RouterLink>
            |
            <RouterLink :to="{ name: 'adviser-detail', params: { id } }" class="font-mono font-semibold hover:text-red-800"> Adviser </RouterLink>
        </div>

        <RouterView :student="student" :professer="professer"></RouterView>
    </div>
</template>