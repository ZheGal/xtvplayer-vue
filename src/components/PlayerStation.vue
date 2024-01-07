<template>
  <div class="station">
    <div class="logo">
      <img :src="station.cover" :alt="station.title" :title="station.title" />
    </div>
    <div class="info">
      <div class="title">{{ station.title }}</div>
      <div class="description">{{ station.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogStation } from '@/schemas/catalog.schema';

defineProps<{
  station: CatalogStation;
}>();
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
