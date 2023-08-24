<script setup lang="ts">
import { type AdviserItem, type StudentItem } from "@/type";
import { ref, type PropType } from "vue";
import { useMessageStore } from "@/stores/message";
import router from "@/router";
const props = defineProps({
  professer: {
    type: Object as PropType<AdviserItem>,
    require: true,
  },
  student: {
    type: Object as PropType<StudentItem>,
    require: true,
  },
});

const store = useMessageStore();
const comment = ref("");
function onSubmit() {
  store.updateMessage(String(props.student?.id), comment.value); // assuming adviserId is available from props or elsewhere
  comment.value = "";
  router.push({
    name: "student-detail",
  });
}

function flashMessagge() {
  store.updateflashcard("Welcome to Adviser Profile")
  setTimeout(() => {
    store.resetflashcard()
  }, 3000)
  router.push({
    name: 'professer-profile',
    params: {
      id: props.professer?.id
    }
  })
}
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="mx-auto">
      <img :src="professer?.profileImage" alt="Student Image" class="h-38 w-32 border-2 border-black object-cover" />
    </div>

    <div class="font-mono text-center">
      <div class="grid grid-cols-2 gap-2">
        <p class="font-semibold">Name-Surname:</p>
        <p>{{ professer?.name }} {{ professer?.surname }}</p>
        <p class="font-semibold">ProfesserID:</p>
        <p>{{ professer?.professorID }}</p>
        <p class="font-semibold">Student Name:</p>
        <p>{{ student?.name }} {{ student?.surname }}</p>
      </div>
    </div>
  </div>
  <div>
    <div class="text-center">
      <button @click="flashMessagge" class="font-extrabold hover:text-red-800 font-mono underline">Click to see more
        details</button>
    </div>
    <div class="text-center font-mono">
      <input type="text" placeholder="Enter comment .." v-model="comment"
        class="border-2 border-black h-16 w-80 p-2 break-words mt-2 text-center" />
      <div>
        <button @click="onSubmit" class="my-2 hover:text-red-800 font-extrabold underline">Submit</button>
      </div>
    </div>
  </div>
</template>
