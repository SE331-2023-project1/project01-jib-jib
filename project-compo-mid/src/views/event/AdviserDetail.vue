<script setup lang="ts">
import { type AdviserItem } from '@/type';
import type { PropType } from 'vue';

defineProps({
    professer: {
        type: Object as PropType<AdviserItem>,
            require: true
    }
})

</script>

<template>
    <div v-if="professer">
        <h1>Adviser {{ professer.name }}</h1>
        
    </div>
</template>