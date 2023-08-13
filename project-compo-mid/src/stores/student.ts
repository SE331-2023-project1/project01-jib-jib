import type { StudentItem, AdviserItem } from "@/type";
import { defineStore } from "pinia";
export const useStudentStore = defineStore('student',{
    state: () => ({
        student: null as StudentItem | null,
        adviser: null as AdviserItem | null
    }),
    actions: {
        setStudent(student: StudentItem) {
            this.student = student
        },
        setAdviser(adviser: AdviserItem ){
            this.adviser = adviser
        }
    }
})