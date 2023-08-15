<script setup lang="ts">
import { ref } from 'vue';
import type { AdviserItem } from '@/type';
import StudentService from '@/services/StudentService';
const professer = ref<AdviserItem | null>(null)
const props = defineProps({
    id: String
})

StudentService.getAdviserById(Number(props.id))
    .then((response) => {
        professer.value = response.data
    })
    .catch((error) =>{
        console.log(error)
    })

</script>

<template>
    <div class="my-10">
        <h1 class="text-center text-3xl">Professer ID: {{  professer?.professorID }}</h1>
        <div class="my-5">
            <div class="justify-center my-auto grid gap-3">
                <img :src="professer?.profileImage" alt="Student Image" class="h-48 w-36" />
                <div class="font-mono text-left">
                    <p>Name: {{ professer?.name }} {{ professer?.surname }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

