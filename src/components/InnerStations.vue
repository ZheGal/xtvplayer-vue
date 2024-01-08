<template>
  <div class="inner-station">
    <div class="inner-description">{{ stations.description }}</div>
    <div class="stations">
      <button
        class="station"
        v-for="(station, index) in stations.stations"
        :key="`inner-station_${index}`"
      >
        <station-item :station="station" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogStationVariants } from '@/schemas/catalog.schema';
import StationItem from './StationItem.vue';

defineProps<{
  stations: CatalogStationVariants;
}>();
</script>

<style lang="scss" scoped>
.stations {
  @apply flex flex-row flex-wrap gap-4 items-center py-4;
  .station {
    @apply md:w-[100px];
  }
}
</style>
