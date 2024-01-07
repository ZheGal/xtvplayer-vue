<template>
  <div class="category">
    <div class="title">{{ category.description }}</div>
    <div class="stations">
      <template v-for="(station, index) in stations" :key="`stations_${index}`">
        <station-item :station="station" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogCategory } from '@/schemas/catalog.schema';
import StationItem from './StationItem.vue';
import { computed } from 'vue';
import { usePlayerStore } from '../stores/player';

const store = usePlayerStore();
const props = defineProps<{
  category: CatalogCategory;
}>();
const stations = computed(() =>
  store.stations.filter((station) => station.category_id === props.category.id)
);
</script>

<style lang="scss" scoped>
.category {
  .title {
    @apply text-center p-2;
  }
  .stations {
    @apply bg-white flex text-black flex-wrap justify-center p-4 gap-4;
    .station {
      @apply aspect-square w-[150px] cursor-pointer;
      > img {
        @apply pointer-events-none select-none;
      }
    }
  }
}
</style>
