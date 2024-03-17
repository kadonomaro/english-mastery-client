<script setup lang="ts">
    type Props = {
        isActive?: boolean;
        isSuccess?: boolean;
        isError?: boolean;
        isDisabled?: boolean;
    };

    defineProps<Props>();
    const emit = defineEmits(["click"]);
</script>

<template>
    <button
        class="base-button"
        :class="{
            'is-active': isActive,
            'is-error': isError,
            'is-success': isSuccess,
            'is-disabled': isDisabled,
        }"
        @click="emit('click')"
    >
        <slot></slot>
    </button>
</template>

<style lang="scss">
    .base-button {
        display: block;
        width: 100%;
        padding: 0 12px;
        color: #4b4b4b;
        font-size: 20px;
        font-weight: 500;
        line-height: 56px;
        text-align: center;
        background: #fff;
        border: 2px solid #e5e5e5;
        border-radius: 12px;
        box-shadow: 0 2px 0 0 #e5e5e5;
        cursor: pointer;
        transition:
            color 0.2s ease-in,
            background-color 0.2s ease-in,
            border-color 0.2s ease-in,
            box-shadow 0.2s ease-in;
        @include media($bp-desktop-sm) {
            padding: 0 20px;
            font-size: 24px;
        }
        &:hover {
            background-color: #f7f7f7;
        }
        &:active {
            box-shadow: none;
        }
        &.is-active {
            color: var(--active-color);
            background-color: var(--active-background);
            border-color: var(--active-border);
            box-shadow: 0 2px 0 0 var(--active-border);
        }
        &.is-success {
            color: var(--success-color);
            background-color: var(--success-background);
            border-color: var(--success-border);
            box-shadow: 0 2px 0 0 var(--success-border);
        }
        &.is-error {
            color: var(--error-color);
            background-color: var(--error-background);
            border-color: var(--error-border);
            box-shadow: 0 2px 0 0 var(--error-border);
            pointer-events: none;
        }
        &.is-disabled {
            color: var(--disabled-color);
            background-color: var(--disabled-background);
            border-color: var(--disabled-border);
            box-shadow: 0 2px 0 0 var(--disabled-border);
            pointer-events: none;
        }
    }
</style>
