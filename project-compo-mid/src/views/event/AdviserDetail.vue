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
        <h1>Adviser</h1>
    </div>
</template>