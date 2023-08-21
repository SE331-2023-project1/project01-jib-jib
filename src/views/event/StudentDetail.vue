<script setup lang="ts">
import { type StudentItem } from "@/type";
import { computed, ref, type PropType } from "vue";
import { useMessageStore } from "@/stores/message";

const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true,
  },
});
const store = useMessageStore();
const message = computed(() => store.getMessage(String(props.student?.id)));
const detail = computed(() => store.getDetail(String(props.student?.id)));
const newDetail = ref("");
function addDetail() {
  store.addDetail(String(props.student?.id), newDetail.value);
  //clear input box
  newDetail.value = "";
}
</script>

<template>
  <div v-if="student" class="font-mono grid grid-cols-2">
    <p class="font-semibold text-left">Name:</p>
    <p class="text-center">{{ student.name }}</p>
    <p class="font-semibold text-left">SurName:</p>
    <p class="text-center">{{ student.surname }}</p>
    <p class="font-semibold text-left">Course:</p>
    <p class="text-center">{{ student.courses.toString() }}</p>
    <div v-if="message">
      <h1 class="font-semibold text-left">Comment from Advisor</h1>
      <p>{{ message }}</p>
    </div>
    <div v-if="detail && detail.length">
      <h1>Student Deatail</h1>
      <p v-for="(details, index) in detail" :key="index">{{ details }}</p>
    </div>
    <div class="addDetail">
      <input
        type="text"
        v-model="newDetail"
        placeholder="Add Student Detail.."
      />
      <button @click="addDetail">Add Detail</button>
    </div>
  </div>
</template>
