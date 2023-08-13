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
     <div v-if="student">
        <h1>{{ student.studentID }}</h1>
        <div>
            <RouterLink :to="{ name: 'student-detail', params: { id } }"> Details </RouterLink>
            |
            <RouterLink :to="{ name: 'adviser-detail', params: { id } }"> Adviser </RouterLink>
        </div>

        <RouterView :student="student"></RouterView>
    </div>
</template>