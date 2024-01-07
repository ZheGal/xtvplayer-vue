<template>
  <button v-wave class="station" :alt="station.title" :title="station.title" @click="handleClick">
    <transition name="station-active">
      <div class="station-active" v-if="isActiveStation">
        <img src="/icon/volume.svg" />
      </div>
    </transition>
    <img :src="station.cover" :alt="station.title" :title="station.title" />
  </button>
</template>

<script setup lang="ts">
import type { CatalogStation, CatalogStationVariants } from '@/schemas/catalog.schema';
import { usePlayerStore } from '@/stores/player';
import { computed } from 'vue';

const store = usePlayerStore();
const props = defineProps<{ station: CatalogStation | CatalogStationVariants }>();
const isActiveStation = computed(() => {
  if (props.station && 'stream' in props.station) {
    return store.active?.stream === props.station?.stream;
  }
  return false;
});

function handleClick() {
  if (props.station && 'stream' in props.station) {
    if (props.station?.stream === store.active?.stream) {
      store.stop();
    } else {
      if (!props.station.stream) return;
      store.selectStation(props.station);
    }
  }
}
</script>

<style lang="scss" scoped>
.station {
  @apply relative rounded-xl overflow-hidden;
  @apply hover:shadow-2xl hover:scale-105 duration-300;
  &-active {
    @apply absolute bg-black/50 inset-0 duration-500;
    > img {
      @apply scale-50 opacity-80;
    }

    &-enter-active,
    &-leave-active {
      @apply opacity-100;
    }

    &-enter-from,
    &-leave-to {
      @apply opacity-0;
    }
  }
}
</style>
