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
    <div class="grid grid-cols-2">
        <div class="mx-auto">
            <img :src="professer?.profileImage" alt="Student Image" class="h-48 w-36" />
        </div>
        <div class="font-mono text-center">
            <div class="grid grid-cols-2 gap-2">
                <p>Name-Surname: </p>
                <p>{{ professer?.name }} {{ professer?.surname }}</p>
                <p>ProfesserID: </p>
                <p>{{ professer?.professorID }}</p>
            </div>            
        </div>
    </div>
    <div>
        <RouterLink :to="{ name: 'professer-profile', params: { id: professer?.id } }">More Details</RouterLink>
    </div>
</template>