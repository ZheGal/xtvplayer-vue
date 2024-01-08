<template>
  <teleport to="body">
    <transition name="player">
      <div class="player" v-if="store.active">
        <div class="player-container">
          <player-station />
          <player-controls />
          <player-volume />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores/player';
import PlayerStation from './PlayerStation.vue';
import PlayerControls from './PlayerControls.vue';
import PlayerVolume from './PlayerVolume.vue';

const store = usePlayerStore();
</script>

<style lang="scss" scoped>
.player {
  @apply fixed bottom-0 bg-black/70 w-full md:h-[100px];
  @apply shadow-2xl flex flex-col text-white;
  @apply rounded-t-2xl duration-500 select-none;
  @apply max-md:h-[70px] backdrop-blur-sm;

  &-enter-active,
  &-leave-active {
    @apply opacity-100 translate-y-0;
  }

  &-enter-from,
  &-leave-to {
    @apply opacity-0 translate-y-full;
  }

  .player-container {
    @apply w-full h-full px-4 grid md:grid-cols-3;
    @apply max-md:grid-cols-2;
  }
}
</style>
