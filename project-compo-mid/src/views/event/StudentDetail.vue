<script setup lang="ts">
import { type StudentItem } from '@/type';
import type { PropType } from 'vue';

defineProps({
    student: {
        type: Object as PropType<StudentItem>,
        require: true
    }
})

</script>

<template>
    <div v-if="student" class="font-mono grid grid-cols-2 ">
        <p class="font-semibold text-center">Name: </p>
        <p class="text-center"> {{ student.name }}</p>
        <p class="font-semibold text-center">SurName: </p>
        <p class="text-center"> {{ student.surname }}</p>
        <p class="font-semibold text-center">Course: </p>
        <p class="text-center"> {{ student.courses.toString() }}</p>
    </div>
</template>