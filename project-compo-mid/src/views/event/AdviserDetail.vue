<script setup lang="ts">
import { type AdviserItem } from '@/type'
import { ref } from 'vue'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  professer: {
    type: Object as PropType<AdviserItem>,
    require: true
  }
})
import { useMessageStore } from '@/stores/message'
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
  <div v-if="professer">
    <h1>Adviser {{ professer.name }}</h1>
    <input type="text" placeholder="Enter comment .." v-model="comment" />
    <button @click="updateComment">Submit</button>
  </div>
</template>
