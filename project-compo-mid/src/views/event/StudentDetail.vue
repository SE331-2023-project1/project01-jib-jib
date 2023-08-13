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
    <div v-if="student">
        <p>Name: {{ student?.name }}</p>
        <p>Surname: {{ student?.surname }}</p>
        <p>Course:{{ student?.courses.toString() }}</p>
    </div>
</template>