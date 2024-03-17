<script setup lang="ts">
    import TheLogo from "@/components/TheLogo.vue";
    import ControlStore from "@/components/controls/ControlStore.vue";
    import ControlStreak from "@/components/controls/ControlStreak.vue";
</script>

<template>
    <header class="the-header">
        <div class="the-header__logo">
            <the-logo></the-logo>
        </div>

        <div class="the-header__controls">
            <div class="the-header__control">
                <control-store></control-store>
            </div>
            <div class="the-header__control">
                <control-streak></control-streak>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .the-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 16px;
        background-color: #fff;
        border-bottom: 2px solid #e5e5e5;
    }

    .the-header__controls {
        display: flex;
        gap: 10px;
    }
</style>
