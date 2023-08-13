<script setup lang="ts">
import { type StudentItem } from '@/type';
import type { PropType } from 'vue';
import ReviewForm from '@/views/'

defineProps({
    student: {
        type: Object as PropType<StudentItem>,
        require: true
    }
})

</script>

<template>
    <div v-if="student" class="font-mono grid grid-cols-2 ">
        <p class="font-semibold text-left">Name: </p>
        <p class="text-center"> {{ student.name }}</p>
        <p class="font-semibold text-left">SurName: </p>
        <p class="text-center"> {{ student.surname }}</p>
        <p class="font-semibold text-left">Course: </p>
        <p class="text-center"> {{ student.courses.toString() }}</p>
    </div>
</template>