<script setup lang="ts">
import { type AdviserItem } from '@/type';
import { ref, type PropType } from 'vue';

const props = defineProps({
    professer: {
        type: Object as PropType<AdviserItem>,
        require: true
    }
})

import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router';
const store = useMessageStore()
const comment = ref('')
const router = useRouter()
function updateComment() {
  if (props.professer && props.professer.id) {
    store.updateMessage(String(props.professer?.id), comment.value)
    router.push({
      name: 'student-detail',
      params: {
        id: props.professer?.id
      }
    })
  }
}



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
    <div class="flex justify-center my-5">
      <input type="text" placeholder="Enter comment .." v-model="comment" />
      <button @click="updateComment">Submit</button>
    </div>
</template>
