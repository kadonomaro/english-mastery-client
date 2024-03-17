<script setup lang="ts">
    import { computed, reactive, ref } from "vue";
    import { arrayShuffle } from "@/utils";
    import { soundService } from "@/services/sound.ts";
    import BaseButton from "@/components/ui/BaseButton.vue";

    const TIMEOUT = 300;

    const pairs = ref([
        { id: 111, name: "they", translate: "они", completed: false },
        { id: 222, name: "you", translate: "ты", completed: false },
        { id: 333, name: "he", translate: "он", completed: false },
        { id: 444, name: "she", translate: "она", completed: false },
        { id: 555, name: "we", translate: "мы", completed: false },
        { id: 666, name: "boy", translate: "мальчик", completed: false },
        { id: 777, name: "girl", translate: "девочка", completed: false },
        { id: 888, name: "man", translate: "мужчина", completed: false },
        { id: 999, name: "woman", translate: "женщина", completed: false },
        { id: 1000, name: "age", translate: "возраст", completed: false },
        { id: 1111, name: "cat", translate: "кошка", completed: false },
        { id: 1222, name: "dog", translate: "собака", completed: false },
        { id: 1333, name: "small", translate: "маленький", completed: false },
        { id: 1444, name: "big", translate: "большой", completed: false },
    ]);

    const nameList = computed(() => {
        return pairs.value;
        // return pairs.value.filter((pair) => pair.completed === false);
    });

    const translateList = computed(() => {
        return arrayShuffle(nameList.value);
    });

    const isEqual = computed(() => {
        return selected.nameId === selected.translateId;
    });

    const selected = reactive({
        nameId: 0,
        translateId: 0,
    });

    const onSelectName = (id: number) => {
        selected.nameId === id ? (selected.nameId = 0) : (selected.nameId = id);
    };

    const onSelectedTranslate = (id: number) => {
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
            selected.nameId = 0;
        }, TIMEOUT);
    };
</script>

<template>
    <div class="lesson-words-pairs" :class="{ 'is-disabled': isSuccess || isError }">
        <div class="lesson-words-pairs__group">
            <div v-for="pair in nameList" :key="pair.id" class="lesson-words-pairs__button">
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
</template>

<style lang="scss">
    .lesson-words-pairs {
        display: flex;
        &.is-disabled {
            pointer-events: none;
        }
    }

    .lesson-words-pairs__group {
        padding: 12px;
        width: 50%;
        @include media($bp-desktop-sm) {
            width: 240px;
        }
    }

    .lesson-words-pairs__button {
        margin-bottom: 10px;
    }
</style>
