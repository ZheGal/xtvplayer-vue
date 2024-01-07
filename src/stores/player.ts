import type {
  CatalogCategory,
  CatalogStation,
  CatalogStationVariants
} from '@/schemas/catalog.schema';
import { catalog } from '@/static/catalog';
import { defineStore } from 'pinia';
import { computed, onMounted, ref } from 'vue';

export const usePlayerStore = defineStore('player', () => {
  const isPlaying = ref<boolean>(false);
  const active = ref<CatalogStation>();
  const categories = ref<CatalogCategory[]>(catalog.categories);
  const stations = ref<(CatalogStation | CatalogStationVariants)[]>(catalog.stations);
  const audio = ref<HTMLAudioElement>();
  const volume = ref<number>(1);
  const allStations = computed(() =>
    stations.value
      .map((station) => (station && 'stations' in station ? [...station.stations] : station))
      .flat()
  );

  function selectStation(station: CatalogStation) {
    stop();
    active.value = station;
    play();
  }

  function play() {
    if (!active.value?.stream) return;
    if (!audio.value) {
      audio.value = new Audio();
    }
    audio.value.src = active.value?.stream;
    audio.value.volume = volume.value;

    setTimeout(() => {
      isPlaying.value = true;
      audio.value?.play();
    }, 200);
  }

  function stop() {
    if (audio.value && audio.value.played) {
      audio.value.pause();
    }
    active.value = undefined;
    isPlaying.value = false;
    audio.value = undefined;
  }

  function playOrPause() {
    if (audio.value?.paused) {
      isPlaying.value = true;
      audio.value.play();
    }
    if (audio.value && audio.value.played) {
      isPlaying.value = false;
      audio.value.pause();
    }
  }

  function prevStation() {
    if (active.value) {
      const currentIndex = allStations.value.indexOf(active.value);
      const result = allStations.value[currentIndex - 1];
      selectStation(result);
    }
  }

  function nextStation() {
    if (active.value) {
      const currentIndex = allStations.value.indexOf(active.value);
      const result = allStations.value[currentIndex + 1];
      selectStation(result);
    }
  }

  function changeVolume() {
    if (volume.value == 0) {
      volume.value = 0.0001;
    }
    if (audio.value?.volume && volume.value) {
      audio.value.volume = volume.value;
    }
    window.localStorage.setItem('volume', String(volume.value));
  }

  onMounted(() => {
    const localVolume = window.localStorage.getItem('volume');
    const newVolume = Number(localVolume ?? 1);
    volume.value = newVolume;
  });

  return {
    isPlaying,
    active,
    categories,
    stations,
    allStations,
    volume,
    selectStation,
    play,
    stop,
    playOrPause,
    prevStation,
    nextStation,
    changeVolume
  };
});
