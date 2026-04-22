<script setup lang="ts">

import { type Component, computed } from 'vue';
import { useRoute } from 'vue-router';
import AuthLayout from './layouts/AuthLayout.vue';
import MainLayout from './layouts/MainLayout.vue';

const route = useRoute();

const layouts: Record<string, Component> = {
    AuthLayout,
    MainLayout,
}

const layout = computed(() => {
    const layoutName = route.meta.layout as string || 'MainLayout';
    return layouts[layoutName];
})

</script>

<template>
    <component :is="layout">
       <RouterView />
    </component>
</template>

<style scoped>



</style>
