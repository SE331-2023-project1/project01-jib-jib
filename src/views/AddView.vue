<script setup lang="ts">
import { ref } from "vue";
import { useAdviserStore } from "@/stores/newAdviser";
import type { AdviserItem } from "@/type";
import { useMessageStore } from "@/stores/message";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const store = useMessageStore();
const { flashMessage } = storeToRefs(store);
const router = useRouter();
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
  if (
    Iadviser.value.name &&
    Iadviser.value.surname &&
    Iadviser.value.professorID &&
    Iadviser.value.profileImage
  ) {
    adviserStore.addTemporaryAdviser(Iadviser.value);
    store.updateflashcard("Advisoer Data alraedy update");
    setTimeout(() => {
      store.resetflashcard();
      router.push({
        name: "professer",
      });
    }, 2000);
  } else {
    alert("Please fill in all the required fields before adding.");
  }
}
</script>

<template>
  <div class="flex justify-center">
    <img
      alt="Vue logo"
      src="https://logolook.net/wp-content/uploads/2021/11/Hogwarts-Logo.png"
      class="mt-5 h-40 w-70"
    />
  </div>
  <div class="mx-20 my-10 text-center">
    <div class="my-10">
      <p class="text-2xl font-mono font-bold text-center">
        Add Adviser Details
      </p>
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-2 gap-2 font-mono">
        <p class="text-left">Profresser-ID:</p>
        <input
          v-model="Iadviser.professorID"
          placeholder="Add ProfresserID..."
          class="text-center border-2"
        />
        <p class="text-left">Name:</p>
        <input
          v-model="Iadviser.name"
          placeholder="Add Name..."
          class="text-center border-2"
        />
        <p class="text-left">SurName:</p>
        <input
          v-model="Iadviser.surname"
          placeholder="Add SurName..."
          class="text-center border-2"
        />
        <p class="text-left">Image-URL:</p>
        <input
          v-model="Iadviser.profileImage"
          placeholder="Add Image-URL..."
          class="text-center border-2"
        />
        <p class="text-center text-blue-600">{{ flashMessage }}</p>
      </div>
    </div>
    <div class="text-center m-8">
      <button
        @click="addAdviser"
        class="border-2 border-black bg-red-800 font-mono text-white p-2"
      >
        Add Adviser
      </button>
    </div>
  </div>
</template>
