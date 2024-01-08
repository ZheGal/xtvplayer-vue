<template>
  <div class="controls">
    <button class="switchBtn" @click="store.prevStation" v-wave>
      <img src="/icon/prev.svg" />
    </button>
    <button class="playBtn" @click="store.playOrPause" v-wave>
      <img src="/icon/play.svg" v-if="!store.isPlaying" />
      <img src="/icon/pause.svg" v-if="store.isPlaying" />
    </button>
    <button class="switchBtn" @click="store.nextStation" v-wave>
      <img src="/icon/next.svg" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '../stores/player';

const store = usePlayerStore();
</script>

<style lang="scss" scoped>
.controls {
  @apply flex items-center md:justify-center gap-4;
  @apply max-md:justify-end max-md:px-4;
  .playBtn {
    @apply bg-white/90 aspect-square rounded-full;
    @apply cursor-pointer duration-150 border p-3;
    @apply hover:shadow-inner active:scale-95;
    @apply md:h-[60px] md:w-[60px];
    @apply max-md:w-[40px] max-md:h-[40px];
    > img {
      @apply pointer-events-none select-none;
    }
  }
  .switchBtn {
    @apply bg-white/90 aspect-square rounded-full;
    @apply cursor-pointer duration-150 border p-1;
    @apply hover:shadow-inner active:scale-90;
    @apply md:h-[40px] md:w-[40px];
    @apply max-md:w-[30px] max-md:h-[30px];
    > img {
      @apply pointer-events-none select-none;
    }
  }
}
</style>
