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
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import MainDescription from '../components/MainDescription.vue';
import FooterDescription from '../components/FooterDescription.vue';
import CategoryStations from '../components/CategoryStations.vue';
import MainPlayer from '../components/MainPlayer.vue';
import { usePlayerStore } from '../stores/player';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = usePlayerStore();
const defaultTitle = 'XTV PLAY | Улюблене радіо всюди де є Інтернет';
const title = computed(() =>
  store.active?.title ? `${store.active?.title} - ${defaultTitle}` : defaultTitle
);

watch(
  () => title.value,
  () => {
    document.title = title.value;
  }
);

onMounted(() => {
  const alias = route.params.alias;
  if (!alias) return;
  const find = store.allStations.find((station) => station.alias === alias);
  if (find) {
    store.selectStation(find);
  }
});
</script>

<style>
body {
  @apply font-fira bg-[#0e5b53];
}
</style>

<style lang="scss" scoped>
.layout {
  @apply flex flex-col justify-center items-center;
  @apply w-full min-h-screen text-white md:pb-[100px] max-md:pb-[70px];
  .inner {
    @apply w-full max-w-[850px] flex-1;
  }
}
</style>
