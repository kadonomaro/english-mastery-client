<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { useTooltip } from "@/composables/tooltip.ts";
    import { Lesson } from "@/api/services/lessons/types.ts";
    import BaseButton from "@/components/ui/BaseButton.vue";
    import BaseTooltip from "@/components/ui/BaseTooltip.vue";
    import LessonInfo from "@/components/lessons/LessonInfo.vue";

    const router = useRouter();
    const { tooltip, onTooltipEnter, onTooltipLeave } = useTooltip();

    type Props = {
        lesson: Lesson;
    };

    const { lesson } = defineProps<Props>();

    const onClick = () => {
        router.push({ name: "LessonsDetail", params: { id: lesson.id } });
    };
</script>

<template>
    <div class="home-lessons-card" @mouseenter="onTooltipEnter" @mouseleave="onTooltipLeave">
        <div class="home-lessons-card__button">
            <base-button class="home-lessons-card">
                <div class="home-lessons-card__name">
                    {{ lesson.name }}
                </div>
            </base-button>
        </div>

        <div class="home-lessons-card__tooltip">
            <base-tooltip :is-active="tooltip">
                <lesson-info :lesson="lesson"></lesson-info>
                <base-button is-success @click="onClick">Начать</base-button>
            </base-tooltip>
        </div>
    </div>
</template>

<style lang="scss">
    .home-lessons-card {
        position: relative;
    }
</style>
