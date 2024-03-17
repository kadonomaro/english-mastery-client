<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import { useLessonsStore } from "@/store";
    import HomeLessonsCard from "@/components/home/HomeLessonsCard.vue";

    const { lessonsList } = storeToRefs(useLessonsStore());
    const { getLessonsList } = useLessonsStore();

    onMounted(() => {
        if (lessonsList.value.length === 0) {
            getLessonsList();
        }
    });
</script>

<template>
    <div class="home-lessons">
        <div class="home-lessons__list">
            <div v-for="lesson in lessonsList" :key="lesson.id" class="home-lessons__card">
                <home-lessons-card :lesson="lesson"></home-lessons-card>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-lessons__list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
