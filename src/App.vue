<template>
  <div class="layout">
    <div class="inner">
      <main-header />
      <main-description />
      <div class="stations-list">
        <template v-for="(category, index) in store.categories" :key="`category_${index}`">
          <category-stations :category="category" />
        </template>
      </div>
      <footer-description />
    </div>
    <main-footer />
  </div>
  <main-player />
</template>

<script setup lang="ts">
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import MainDescription from './components/MainDescription.vue';
import FooterDescription from './components/FooterDescription.vue';
import CategoryStations from './components/CategoryStations.vue';
import MainPlayer from './components/MainPlayer.vue';
import { usePlayerStore } from './stores/player';

const store = usePlayerStore();
</script>

<style>
body {
  @apply font-fira bg-[#0e5b53];
}
</style>

<style lang="scss" scoped>
.layout {
  @apply flex flex-col justify-center items-center;
  @apply w-full min-h-screen text-white pb-[100px];
  .inner {
    @apply w-full max-w-[850px] flex-1;
  }
}
</style>
