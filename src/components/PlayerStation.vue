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
      @apply font-bold;
    }
    .description {
      @apply text-xs;
    }
  }

  .logo {
    @apply rounded-lg overflow-hidden w-[70px] h-[70px];
    > img {
      @apply aspect-square h-full pointer-events-none select-none;
    }
  }
}
</style>
