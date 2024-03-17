<script setup lang="ts">
    import BaseIcon from "@/components/ui/BaseIcon.vue";
</script>

<template>
    <div class="control-store">
        <base-icon class="control-store__icon" name="gem"></base-icon>
        <div class="control-store__text">1000</div>
    </div>
</template>

<style lang="scss">
    .control-store {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border-radius: 12px;
        transition: background-color 0.2s ease-in;
        &:hover {
            background-color: #f7f7f7;
        }
    }

    .control-store__icon {
        width: 24px;
        height: 24px;
        margin-right: 3px;
        @include media($bp-desktop-sm) {
            width: 30px;
            height: 30px;
            margin-right: 6px;
        }
    }

    .control-store__text {
        color: #1cb0f6;
        font-size: 14px;
        font-weight: 700;
    }
</style>
