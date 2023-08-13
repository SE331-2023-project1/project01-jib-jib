<script setup lang="ts">
import { type StudentItem, AdviserItem } from '@/type';
import type { PropType } from 'vue';

defineProps({
    student: {
        type: Object as PropType<StudentItem>,
            require: true
    },
    adviser: {
        type: Object as PropType<AdviserItem>,
            require: true
    }
})

</script>

<template>
    <div v-if="student">
        <h1>Adviser</h1>
    </div>
</template>