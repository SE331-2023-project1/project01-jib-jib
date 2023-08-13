<script setup lang="ts">
import { ref } from 'vue';
import { type StudentItem } from '@/type';
import StudentService from '@/services/StudentService';

const student = ref<StudentItem | null>(null)
const props = defineProps({
    id: String
})

StudentService.getStudentById(Number(props.id))
.then((response) => {
    student.value = response.data
}).catch((error) => {
    console.log(error)
})
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