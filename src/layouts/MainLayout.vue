<script setup lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
    <div class="main-layout">
        <div class="main-layout__header">
            <the-header></the-header>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    .main-layout__header {
        @include sticky(0);
        margin-bottom: 10px;
    }
</style>
