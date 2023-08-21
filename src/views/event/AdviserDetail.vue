<script setup lang="ts">
import { type AdviserItem, type StudentItem } from "@/type";
import { computed, ref, type PropType } from "vue";
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
const detail = computed(() => store.getDetail(String(props.professer?.id)));
const newDetail = ref("");
function addDetail() {
  store.addDetail(String(props.professer?.id), newDetail.value);
  newDetail.value = "";
}
</script>

<template>
  <div class="grid grid-cols-2">
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
        <div v-if="detail && detail.length">
          <h1>professer Deatail</h1>
          <p v-for="(details, index) in detail" :key="index">{{ details }}</p>
        </div>
        <p>{{ student?.name }}</p>
        <div class="addDetail">
          <input
            type="text"
            v-model="newDetail"
            placeholder="Add Professer Detail.."
          />
          <button @click="addDetail">Add Detail</button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <RouterLink
      :to="{ name: 'professer-profile', params: { id: professer?.id } }"
      >More Details</RouterLink
    >
  </div>
  <div class="flex justify-center my-5">
    <input type="text" placeholder="Enter comment .." v-model="comment" />
    <button @click="onSubmit">Submit</button>
  </div>
</template>
