<script setup lang="ts">
import { computed, ref, type PropType } from "vue";
import type { AdviserItem } from "@/type";
import StudentService from "@/services/StudentService";
import { useMessageStore } from "@/stores/message";
import { storeToRefs } from 'pinia'
const professer = ref<AdviserItem | null>(null);
const props = defineProps({
  id: String,
  professer: {
    type: Object as PropType<AdviserItem>,
    require: true,
  },
});

StudentService.getAdviserById(Number(props.id))
  .then((response) => {
    professer.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

const store = useMessageStore();
const detail = computed(() => store.getDetail(String(props.professer?.id)));
const newDetail = ref("");
function addDetail() {
  store.addDetail(String(props.professer?.id), newDetail.value);
  newDetail.value = "";
}
const { flashMessage} = storeToRefs(store)
</script>

<template>
  <div class="my-10">
    
    <h1 class="text-center text-3xl">
      Professer ID: {{ professer?.professorID }}
    </h1>
    <div class="my-5">
      <div class="justify-center my-auto grid gap-3">
        <img
          :src="professer?.profileImage"
          alt="Student Image"
          class="h-48 w-36 mx-auto"
        />
        <div class="font-mono text-left">
          <p>Name: {{ professer?.name }} {{ professer?.surname }}</p>
        </div>
        <div v-if="detail && detail.length">
          <h1>professer Deatail</h1>
          <p v-for="(details, index) in detail" :key="index">{{ details }}</p>
        </div>
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
  <div class="bg-red-700 transition duration-3000 my-2">
      <h4 class="text-center font-mono text-white">{{ flashMessage }}</h4>
    </div>
</template>
