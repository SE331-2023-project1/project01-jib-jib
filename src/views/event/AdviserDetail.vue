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

function flashMessagge(){
  store.updateflashcard("Welcome to Adviser Profile")
  setTimeout(()=>{
    store.resetflashcard()
  },3000)
  router.push({
    name: 'professer-profile',
    params: {
      id: props.professer?.id
    }
  })
}
</script>

<template>
  <div class="grid grid-cols-2 p-5">
    <div class="mx-auto">
      <img
        :src="professer?.profileImage"
        alt="Student Image"
        class="h-48 w-36"
      />
    </div>

    <div class="font-mono text-center">
      <div class="grid grid-cols-2 gap-2">
        <p>Name-Surname:</p>
        <p>{{ professer?.name }} {{ professer?.surname }}</p>
        <p>ProfesserID:</p>
        <p>{{ professer?.professorID }}</p>
        <p>Student Name:</p>
        <p>{{ student?.name }} {{ student?.surname }}</p>
      </div>
      <div class="m-5">
        <input type="text" placeholder="Enter comment .." v-model="comment" />
        <button @click="onSubmit">Submit</button>
      </div>

      <button @click="flashMessagge" class="font-extrabold text-red-700 font-mono"
      >Click to see more details</button>
    </div>
  </div>
  <div></div>
</template>
