<script setup lang="ts">
    type Props = {
        isActive: boolean;
    };

    defineProps<Props>();
</script>

<template>
    <div class="base-tooltip" :class="{ 'is-active': isActive }">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .base-tooltip {
        position: fixed;
        z-index: 10;
        left: 15px;
        right: 15px;
        bottom: 20px;
        padding: 18px;
        background: #fff;
        border: 2px solid #e5e5e5;
        border-radius: 16px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4px);
        transition:
            transform 0.2s ease-in,
            opacity 0.2s ease-in,
            visibility 0.2s ease-in;
        &.is-active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        @include media($bp-desktop-sm) {
            position: absolute;
            top: calc(100% + 10px);
            bottom: auto;
            left: 0;
            right: auto;
            min-width: 280px;
        }
    }
</style>
