<template>
  <div class="station" v-if="store.active">
    <div class="logo">
      <img :src="store.active.cover" :alt="store.active.title" :title="store.active.title" />
    </div>
    <div class="info">
      <div class="title">{{ store.active.title }}</div>
      <div class="description">{{ store.active.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '../stores/player';

const store = usePlayerStore();
</script>

<style lang="scss" scoped>
.station {
  @apply flex flex-row text-white h-full p-3 gap-4 items-center;

  .info {
    @apply flex flex-col justify-center;
    .title {
      @apply font-bold max-md:text-xs;
    }
    .description {
      @apply text-xs max-md:text-[10px];
    }
  }

  .logo {
    @apply rounded-lg overflow-hidden md:w-[70px] md:h-[70px];
    @apply max-md:w-[40px];
    > img {
      @apply aspect-square h-full pointer-events-none select-none;
    }
  }
}
</style>
