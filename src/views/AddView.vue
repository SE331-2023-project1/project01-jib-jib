<script setup lang="ts">
import { ref } from "vue";
import { useAdviserStore } from "@/stores/newAdviser";
import type { AdviserItem } from "@/type";
import router from "@/router";

const adviserStore = useAdviserStore();
const Iadviser = ref<AdviserItem>({
  id: 0,
  name: "",
  surname: "",
  professorID: 0,
  profileImage: "",
  telephone: 0,
  email: "",
});
function addAdviser() {
  adviserStore.addTemporaryAdviser(Iadviser.value);
}
</script>

<template>
  <input v-model="Iadviser.professorID" placeholder="StudentID" />
  <input v-model="Iadviser.name" placeholder="Name" />
  <input v-model="Iadviser.surname" placeholder="SurName" />
  <input v-model="Iadviser.profileImage" placeholder="image" />
  <button @click="addAdviser">Add Student</button>
</template>
