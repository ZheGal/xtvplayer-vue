<template>
  <button
    ref="innerRef"
    class="station"
    v-wave
    :alt="station.title"
    :title="station.title"
    @click="handleClick"
  >
    <transition name="station-active">
      <div class="station-active" v-if="isActiveStation">
        <img src="/icon/volume.svg" />
      </div>
    </transition>
    <img :src="station.cover" :alt="station.title" :title="station.title" />
    <el-popover
      v-if="station && 'stations' in station"
      ref="popoverRef"
      :virtual-ref="innerRef"
      trigger="click"
      :title="station.title"
      virtual-triggering
      width="500px"
    >
      <inner-stations :stations="station" />
    </el-popover>
  </button>
</template>

<script setup lang="ts">
import type { CatalogStation, CatalogStationVariants } from '@/schemas/catalog.schema';
import InnerStations from './InnerStations.vue';
import { usePlayerStore } from '@/stores/player';
import { computed, ref } from 'vue';

const innerRef = ref();
const popoverRef = ref();
const store = usePlayerStore();
const props = defineProps<{ station: CatalogStation | CatalogStationVariants }>();
const isActiveStation = computed(() => {
  if (props.station && 'stream' in props.station) {
    return store.active?.stream === props.station?.stream;
  }
  if (props.station && 'stations' in props.station) {
    const find = props.station.stations.find((station) => station.stream === store.active?.stream);
    if (find) return true;
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
