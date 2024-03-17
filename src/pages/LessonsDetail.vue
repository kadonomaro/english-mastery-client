<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import { useLessonsStore } from "@/store";
    import { LessonDetail } from "@/api/services/lessons/types.ts";
    import LessonWordsPairs from "@/components/lessons/LessonWordsPairs.vue";

    const route = useRoute();

    const { getLessonsItem } = useLessonsStore();

    const lessons = ref<LessonDetail[]>([]);

    onMounted(async () => {
        lessons.value = await getLessonsItem(route.params.id as string);
    });
</script>

<template>
    <div class="lessons-page">
        <div class="container">
            <lesson-words-pairs :lessons="lessons"></lesson-words-pairs>
        </div>
    </div>
</template>

<style lang="scss"></style>
