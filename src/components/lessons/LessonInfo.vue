<script setup lang="ts">
    import { Lesson } from "@/api/services/lessons/types.ts";
    import BaseIcon from "@/components/ui/BaseIcon.vue";

    type Props = {
        lesson: Lesson;
    };

    const { lesson } = defineProps<Props>();

    const levelMap = {
        easy: "Лёгкая",
        medium: "Средняя",
        hard: "Тяжёлая",
    };
</script>

<template>
    <div class="lesson-info">
        <div class="lesson-info__title">{{ lesson.name }}</div>
        <div class="lesson-info__item">
            <base-icon class="lesson-info__icon" name="gym"></base-icon>
            <span>
                Сложность:&nbsp;<b>{{ levelMap[lesson.level] }}</b>
            </span>
        </div>

        <div class="lesson-info__item">
            <base-icon class="lesson-info__icon" name="timer"></base-icon>
            <span>Лучшее время:&nbsp;<b>1м 10с</b></span>
        </div>
    </div>
</template>

<style lang="scss">
    .lesson-info {
        padding-bottom: 10px;
        color: #4b4b4b;
    }

    .lesson-info__title {
        margin-bottom: 15px;
        padding-bottom: 5px;
        font-size: 20px;
        font-weight: 500;
        border-bottom: 2px solid #e5e5e5;
    }

    .lesson-info__item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
    }

    .lesson-info__icon {
        width: 30px;
        height: 30px;
        margin-right: 5px;
    }
</style>
