<script setup lang="ts"></script>

<template>
    <router-link :to="{ name: 'Home' }" class="the-logo">
        <img class="the-logo__image" src="/static/logo.svg" alt="" />
        <span class="the-logo__text">English Mastery</span>
    </router-link>
</template>

<style lang="scss">
    .the-logo {
        display: block;
        text-decoration: none;
        @include media($bp-desktop-sm) {
            display: flex;
            align-items: center;
        }
    }

    .the-logo__image {
        width: 40px;
        height: 40px;
        @include media($bp-desktop-sm) {
            width: 60px;
            height: 60px;
        }
    }

    .the-logo__text {
        display: none;
        @include media($bp-desktop-sm) {
            display: block;
            color: #f7c100;
            font-size: 20px;
            font-weight: 500;
        }
    }
</style>
