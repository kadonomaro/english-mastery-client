<script setup lang="ts">
    type Name = "flame" | "gem";

    type Props = {
        name: Name;
    };

    defineProps<Props>();
</script>

<template>
    <svg class="base-icon" :class="[`icon-${name}`]" xmlns="http://www.w3.org/2000/svg">
        <use
            :xlink:href="`/static/icons/sprites.svg#${name}`"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        ></use>
    </svg>
</template>

<style lang="scss"></style>
