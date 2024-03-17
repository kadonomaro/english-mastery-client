<script setup lang="ts">
    import BaseIcon from "@/components/ui/BaseIcon.vue";
</script>

<template>
    <div class="control-streak">
        <base-icon class="control-streak__icon" name="flame"></base-icon>
        <div class="control-streak__text">1</div>
    </div>
</template>

<style lang="scss">
    .control-streak {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border-radius: 12px;
        transition: background-color 0.2s ease-in;
        &:hover {
            background-color: #f7f7f7;
        }
    }

    .control-streak__icon {
        width: 24px;
        height: 24px;
        margin-right: 3px;
        @include media($bp-desktop-sm) {
            width: 30px;
            height: 30px;
            margin-right: 6px;
        }
    }

    .control-streak__text {
        color: #ff9600;
        font-size: 14px;
        font-weight: 700;
    }
</style>
