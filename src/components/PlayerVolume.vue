<template>
  <div class="volume">
    <img src="/icon/volume.svg" class="volume-icon" />
    <el-slider
      :min="0"
      :max="1"
      :step="0.0001"
      v-model="store.volume"
      :format-tooltip="formatTooltip"
      @input="store.changeVolume"
      @change="store.changeVolume"
      class="volume-element"
      style="--el-slider-main-bg-color: #179c8e"
    />
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '../stores/player';
const store = usePlayerStore();

const formatTooltip = (val: number) => Math.floor(val * 100);
</script>

<style lang="scss" scoped>
.volume {
  @apply flex flex-row items-center justify-end gap-4 px-4;
  &-icon {
    @apply w-[25px];
  }
  &-element {
    @apply max-w-[250px];
  }
}
</style>
