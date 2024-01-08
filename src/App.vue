<template>
  <router-view />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { usePlayerStore } from './stores/player';

const store = usePlayerStore();
const defaultIcons = {
  'apple-touch-icon': '/icon/apple-touch-icon.png',
  '32x32': '/icon/favicon-32x32.png',
  '16x16': '/icon/favicon-16x16.png'
};

watch(
  () => store.isPlaying,
  () => {
    const appleTouchIcon: HTMLLinkElement | null = document.querySelector(
      "link[rel='apple-touch-icon']"
    );
    const favicon32: HTMLLinkElement | null = document.querySelector(
      "link[rel='icon'][sizes='32x32']"
    );
    const favicon16: HTMLLinkElement | null = document.querySelector(
      "link[rel='icon'][sizes='16x16']"
    );

    if (appleTouchIcon && favicon32 && favicon16) {
      appleTouchIcon.href = store.active?.cover ?? defaultIcons['apple-touch-icon'];
      favicon32.href = store.active?.cover ?? defaultIcons['32x32'];
      favicon16.href = store.active?.cover ?? defaultIcons['16x16'];
    }
  }
);
</script>
