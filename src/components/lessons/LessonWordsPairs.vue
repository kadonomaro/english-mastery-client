<script setup lang="ts">
    import { computed, onMounted, reactive, ref, toRefs, watch } from "vue";
    import { useRouter } from "vue-router";
    import { arrayShuffle } from "@/utils";
    import { soundService } from "@/services/sound.ts";
    import { LessonDetail } from "@/api/services/lessons/types.ts";
    import BaseButton from "@/components/ui/BaseButton.vue";

    const router = useRouter();

    const TIMEOUT = 200;

    type Props = {
        lessons: LessonDetail[];
    };

    const props = defineProps<Props>();
    const { lessons } = toRefs(props);

    const pairs = ref(lessons);
    const completedPairs = ref(0);

    const translateList = computed(() => {
        return arrayShuffle(pairs.value);
    });

    const isEqual = computed(() => {
        return selected.nameId === selected.translateId;
    });

    const selected = reactive({
        nameId: "",
        translateId: "",
    });

    watch(
        () => `${selected.nameId}_${selected.translateId}`,
        (value) => {
            if (value.split("_").filter(Boolean).length === 2) {
                checkPairs();
            }
        },
    );

    const onSelectPair = (id: string, type: "nameId" | "translateId") => {
        selected[type] = id;
    };

    const checkPairs = () => {
        isEqual.value ? setSuccessState() : setErrorState();
    };

    const clearSelected = () => {
        selected.nameId = "";
        selected.translateId = "";
    };

    const isSuccess = ref(false);
    const setSuccessState = () => {
        completedPairs.value++;

        if (completedPairs.value === pairs.value.length) {
            setFinishState();
        }
        soundService.play("success");

        isSuccess.value = true;
        setTimeout(() => {
            isSuccess.value = false;
            const index = pairs.value.findIndex((pair) => pair.id === selected.nameId);
            pairs.value[index].completed = true;
            clearSelected();
        }, TIMEOUT);
    };

    const isError = ref(false);
    const setErrorState = () => {
        soundService.play("error");

        isError.value = true;
        setTimeout(() => {
            isError.value = false;
            clearSelected();
        }, TIMEOUT);
    };

    const setFinishState = () => {
        setTimeout(() => {
            soundService.play("finish");
            router.push({ name: "Home" });
        }, 1000);
    };

    onMounted(() => {
        soundService.play("start");
    });
</script>

<template>
    <div class="lesson-words-pairs" :class="{ 'is-disabled': isSuccess || isError }">
        <div class="lesson-words-pairs__inner">
            <div class="lesson-words-pairs__group">
                <div v-for="pair in pairs" :key="pair.id" class="lesson-words-pairs__button">
                    <base-button
                        :is-active="selected.nameId === pair.id"
                        :is-success="isEqual && isSuccess && selected.nameId === pair.id"
                        :is-error="isError && selected.nameId === pair.id"
                        :is-disabled="pair.completed"
                        @click="onSelectPair(pair.id, 'nameId')"
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
                        :is-active="selected.translateId === pair.id"
                        :is-success="isEqual && isSuccess && selected.translateId === pair.id"
                        :is-error="isError && selected.translateId === pair.id"
                        :is-disabled="pair.completed"
                        @click="onSelectPair(pair.id, 'translateId')"
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
