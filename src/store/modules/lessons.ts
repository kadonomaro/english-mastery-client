import { defineStore } from "pinia";
import { api } from "@/api";
import { Lesson } from "@/api/services/lessons/types.ts";

type StoreType = {
    lessonsList: Lesson[];
};

export const useLessonsStore = defineStore("lessons", {
    state: (): StoreType => ({
        lessonsList: [],
    }),
    actions: {
        async getLessonsList() {
            this.lessonsList = await api.lessons.getAll();
        },
        getLessonsItem(id: string) {
            return api.lessons.getOne(id);
        },
    },
});
