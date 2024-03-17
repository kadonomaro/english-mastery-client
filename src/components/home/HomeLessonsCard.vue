<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { Lesson } from "@/api/services/lessons/types.ts";
    import BaseButton from "@/components/ui/BaseButton.vue";

    const router = useRouter();

    type Props = {
        lesson: Lesson;
    };

    const { lesson } = defineProps<Props>();

    const goToDetail = () => {
        router.push({ name: "LessonsDetail", params: { id: lesson.id } });
    };
</script>

<template>
    <base-button class="home-lessons-card" @click="goToDetail">
        <div class="home-lessons-card__name">
            {{ lesson.name }}
        </div>
    </base-button>
</template>

<style lang="scss"></style>
