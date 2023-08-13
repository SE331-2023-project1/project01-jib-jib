<script setup lang="ts">
import { useStudentStore } from '@/stores/student'
import { storeToRefs } from 'pinia';
import  { ref } from 'vue'

const store = useStudentStore()
const student = storeToRefs(store).student
const id = ref(student?.value?.id)
</script>

<template>
     <div v-if="student" class="flex flex-col items-center gap-4 mt-4">
        <img :src="student?.profileImage" alt="Student Image" class="h-48 w-36" />
        <h1 class="font-mono font-bold text-2xl"> StudentID: {{ student.studentID }}</h1>
        <div>
            <RouterLink :to="{ name: 'student-detail', params: { id } }" class="font-mono font-semibold"> Details </RouterLink>
            |
            <RouterLink :to="{ name: 'adviser-detail', params: { id } }" class="font-mono font-semibold"> Adviser </RouterLink>
        </div>

        <RouterView :student="student"></RouterView>
    </div>
</template>