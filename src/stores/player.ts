import type {
  CatalogCategory,
  CatalogStation,
  CatalogStationVariants
} from '@/schemas/catalog.schema';
import { catalog } from '@/static/catalog';
import { defineStore } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export const usePlayerStore = defineStore('player', () => {
  const isPlaying = ref<boolean>(false);
  const active = ref<CatalogStation>();
  const categories = ref<CatalogCategory[]>(catalog.categories);
  const stations = ref<(CatalogStation | CatalogStationVariants)[]>(catalog.stations);
  const audio = ref<HTMLAudioElement>();
  const volume = ref<number>(1);
  const router = useRouter();
  const allStations = computed(() =>
    stations.value
      .map((station) => (station && 'stations' in station ? [...station.stations] : station))
      .flat()
  );

  function selectStation(station: CatalogStation) {
    stop();
    active.value = station;
    play();
    router.push({ name: 'station', params: { alias: active.value.alias } });
  }

  function play() {
    if (!active.value?.stream) return;
    if (!audio.value) {
      audio.value = new Audio();
    }
    audio.value.src = active.value?.stream;
    audio.value.volume = volume.value;

    setTimeout(() => {
      audio.value?.play();
      isPlaying.value = Boolean(!audio.value?.paused);
      setMediaSessionMetadata();
    }, 200);
  }

  function stop() {
    if (audio.value && audio.value.played) {
      audio.value.pause();
      audio.value.removeAttribute('src');
      audio.value.load();
    }
    active.value = undefined;
    isPlaying.value = false;
    audio.value = undefined;
    navigator.mediaSession.metadata = null;
    router.push({ name: 'home' });
  }

  function playOrPause() {
    if (audio.value?.paused && active.value) {
      selectStation(active.value);
    }
    if (audio.value && audio.value.played) {
      isPlaying.value = false;
      audio.value.pause();
    }
    setMediaSessionMetadata();
  }

  function prevStation() {
    if (active.value) {
      const currentIndex = allStations.value.indexOf(active.value);
      const find = allStations.value[currentIndex - 1];
      const last = allStations.value[allStations.value.length - 1];
      const result = find ?? last;
      selectStation(result);
    }
  }

  function nextStation() {
    if (active.value) {
      const currentIndex = allStations.value.indexOf(active.value);
      const find = allStations.value[currentIndex + 1];
      const first = allStations.value[0];
      const result = find ?? first;
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

    navigator.mediaSession.setActionHandler('previoustrack', () => prevStation());
    navigator.mediaSession.setActionHandler('nexttrack', () => nextStation());
    navigator.mediaSession.setActionHandler('pause', () => playOrPause());
    navigator.mediaSession.setActionHandler('play', () => playOrPause());
  });

  const setMediaSessionMetadata = () => {
    if (!active.value) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: active.value.title,
      artist: active.value.description,
      album: active.value.title
    });
  };

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
