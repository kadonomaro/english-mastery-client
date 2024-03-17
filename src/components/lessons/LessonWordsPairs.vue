<script setup lang="ts">
    import { computed, reactive, ref, toRefs } from "vue";
    import { arrayShuffle } from "@/utils";
    import { soundService } from "@/services/sound.ts";
    import { LessonDetail } from "@/api/services/lessons/types.ts";
    import BaseButton from "@/components/ui/BaseButton.vue";

    const TIMEOUT = 300;

    type Props = {
        lessons: LessonDetail[];
    };

    const props = defineProps<Props>();
    const { lessons } = toRefs(props);

    const pairs = ref(lessons);

    const nameList = computed(() => {
        return pairs.value;
    });

    const translateList = computed(() => {
        return arrayShuffle(nameList.value);
    });

    const isEqual = computed(() => {
        return selected.nameId === selected.translateId;
    });

    const selected = reactive({
        nameId: "",
        translateId: "",
    });

    const onSelectName = (id: string) => {
        selected.nameId === id ? (selected.nameId = "") : (selected.nameId = id);
    };

    const onSelectedTranslate = (id: string) => {
        selected.translateId = id;
        checkPairs();
    };

    const checkPairs = () => {
        if (isEqual.value) {
            setSuccessState();
        } else {
            setErrorState();
        }
    };

    const isSuccess = ref(false);
    const setSuccessState = () => {
        soundService.play("success");

        isSuccess.value = true;
        setTimeout(() => {
            isSuccess.value = false;
            const index = pairs.value.findIndex((pair) => pair.id === selected.nameId);
            pairs.value[index].completed = true;
        }, TIMEOUT);
    };

    const isError = ref(false);
    const setErrorState = () => {
        soundService.play("error");

        isError.value = true;
        setTimeout(() => {
            isError.value = false;
            selected.nameId = "";
            selected.translateId = "";
        }, TIMEOUT);
    };
</script>

<template>
    <div class="lesson-words-pairs" :class="{ 'is-disabled': isSuccess || isError }">
        <div class="lesson-words-pairs__inner">
            <div class="lesson-words-pairs__group">
                <div
                    v-for="pair in nameList"
                    :key="pair.id"
                    class="lesson-words-pairs__button"
                >
                    <base-button
                        :is-active="selected.nameId === pair.id"
                        :is-success="isEqual && isSuccess && selected.nameId === pair.id"
                        :is-error="isError && selected.nameId === pair.id"
                        :is-disabled="pair.completed"
                        @click="onSelectName(pair.id)"
                    >
                        {{ pair.name }}
                    </base-button>
                </div>
            </div>

            <div class="lesson-words-pairs__group">
                <div
                    v-for="pair in translateList"
                    :key="pair.id"
                    class="lesson-words-pairs__button"
                >
                    <base-button
                        :is-success="isEqual && isSuccess && selected.translateId === pair.id"
                        :is-error="isError && selected.translateId === pair.id"
                        :is-disabled="pair.completed"
                        @click="onSelectedTranslate(pair.id)"
                    >
                        {{ pair.translate }}
                    </base-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .lesson-words-pairs__inner {
        display: flex;
        gap: 10px;
        &.is-disabled {
            pointer-events: none;
        }
    }

    .lesson-words-pairs__group {
        width: 50%;
        @include media($bp-desktop-sm) {
            width: 100%;
        }
    }

    .lesson-words-pairs__button {
        margin-bottom: 10px;
    }
</style>
