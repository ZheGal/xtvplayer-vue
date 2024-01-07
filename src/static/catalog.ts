import type { Catalog } from '@/schemas/catalog.schema';

export const catalog: Catalog = {
  categories: [
    {
      id: 1,
      title: 'Єдині новини',
      description: '📻 Слухайте прямий ефір марафону Єдиних новин на радіо'
    },
    {
      id: 2,
      title: 'XTV Media',
      description: '📻 Радіостанції медіахолдингу XTV Media'
    },
    {
      id: 3,
      title: 'Буковинські радіостанції',
      description: '📻 Слухайте топові буковинські радіостанції на XTV PLAY'
    },
    {
      id: 4,
      title: 'Бонусні радіостанції',
      description: '📻 Бонусні радіостанції'
    },
    {
      id: 5,
      title: 'Evolution Mediaholding',
      description: '📻 Радіостанції Evolution Mediaholding'
    }
  ],
  stations: [
    {
      category_id: 1,
      title: 'XTV Media. Єдині новини',
      description: 'Разом ми сильні',
      stream: 'https://icecast.xtvmedia.pp.ua/XTV_NewsRadio.mp3',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/XTVRadioNews.png',
      alias: 'XTVRadioNews'
    },
    {
      category_id: 2,
      title: 'Ванда FM Україна',
      description: 'ОБЕРІТЬ КАНАЛ МОВЛЕННЯ РАДІО "ВАНДА FM" УКРАЇНА',
      alias: 'WandaFM',
      stations: [
        {
          category_id: 2,
          title: 'Радіо Ванда FM Україна',
          description: 'Радіо чарівного настрою',
          stream: 'https://icecast.xtvmedia.pp.ua/radiowandafm_hq.mp3',
          cover: 'https://play.xtvmedia.pp.ua/public/common/logos/wandafm.png',
          alias: 'WandaFM-air'
        },
        {
          category_id: 2,
          title: 'Ванда FM Exclusive. Нова історія',
          description: 'Найкращі моменти з проєкту',
          stream: 'https://icecast.xtvmedia.pp.ua/radiowandafm_Exclusive.mp3',
          cover: 'https://play.xtvmedia.pp.ua/public/common/logos/wandafm_exclusive.png',
          alias: 'WandaFM-exclusive'
        },
        {
          category_id: 2,
          title: 'Радіо Ванда FM #UKRNEWHITS',
          description: 'Нові українські хіти',
          stream: 'https://icecast.xtvmedia.pp.ua/radiowandafm_NEWUKRHITS.mp3',
          cover: 'https://play.xtvmedia.pp.ua/public/common/logos/wandafm_ukrnewhits.png',
          alias: 'WandaFM-ukrnewhits'
        },
        {
          category_id: 2,
          title: 'Радіо Ванда FM Top Hits',
          description: 'Тільки найновіші топ-хіти',
          stream: 'https://icecast.xtvmedia.pp.ua/radiowandafm_TopHits.mp3',
          cover: 'https://play.xtvmedia.pp.ua/public/common/logos/wandafm_tophits.png',
          alias: 'WandaFM-tophits'
        }
      ],
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/wandafm.png'
    },
    {
      category_id: 2,
      title: 'Радіо Ванда FM 2',
      description: 'Неформату теж місце на радіо!',
      stream: 'https://icecast.xtvmedia.pp.ua/WandaFM2.mp3',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/WandaFM2.png',
      alias: 'WandaFM2'
    },
    {
      category_id: 2,
      title: 'Радіо Melodeon',
      description: 'Золотий фонд золотих хітів',
      stream: 'https://icecast.xtvmedia.pp.ua/melodeon.mp3',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioMelodeon.png',
      alias: 'Melodeon'
    },
    {
      category_id: 2,
      title: 'Радіо Золота Епоха',
      description: 'Золота класика',
      stream: 'https://icecast.xtvmedia.pp.ua/RadioZolotaEpokha.mp3',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioZolotaEpokha.png',
      alias: 'RadioZolotaEpokha'
    },
    {
      category_id: 2,
      title: 'Радіо Tutti',
      description: 'Радіо шедевральної музики',
      stream: 'https://icecast.xtvmedia.pp.ua/RadioTutti.mp3',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioTutti.png',
      alias: 'RadioTutti'
    },
    {
      category_id: 2,
      title: 'Українське народне радіо',
      description: 'Українське - то своє!',
      stream: 'https://icecast.xtvmedia.pp.ua/UKRNR.mp3',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/UKRNR_v2.png',
      alias: 'UKRNR'
    },
    {
      category_id: 3,
      title: 'Буковинська хвиля. 100 FM',
      description: 'Ти в безпеці',
      stream: 'https://100.cv.ua:8443/play',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/BukWave.png',
      alias: 'BukWave'
    },
    {
      category_id: 3,
      title: 'Радіо 10',
      description: 'Чути своїх',
      stream: 'https://stream.chv.ua:8443/acc.mp3',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/Radio10CV.png',
      alias: 'Radio10'
    },
    {
      category_id: 3,
      title: 'Радіо C4',
      description: 'Заряджаємо на Перемогу',
      stream: 'https://radio.c4.com.ua:8443/320',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioC4.png',
      alias: 'RadioC4'
    },
    {
      category_id: 3,
      title: 'Радіо TVA FM',
      description: 'Налаштуйся на краще - краще для тебе!',
      stream: 'https://online-radiotva.icecast-xtvmedia.pp.ua/128',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioTVAFM.png',
      alias: 'RadioTVA'
    },
    {
      category_id: 3,
      title: 'Радіо На своїй хвилі',
      description: 'Говорить Новодністровськ!',
      stream: 'https://online-novodnistrovsk.pp.ua:8443/play128',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioNovodnistrovsk1.png',
      alias: 'RadioNovodnistrovsk'
    },
    {
      category_id: 4,
      title: 'Радіо Карантин',
      description: 'Слухай всюди!',
      stream: 'https://stream.zeno.fm/0fwnvhuhdwzuv',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/radiokarantin.png',
      alias: 'RadioKarantin'
    },
    {
      category_id: 4,
      title: 'Медленное радио',
      description: 'Зупинись. Послухай.',
      stream: 'https://online.radiokarantin.com/2dc1tfa8tc9uv',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/medlennoe.png',
      alias: 'MedlennoeRadio'
    },
    {
      category_id: 4,
      title: 'KMUSIC RADIO',
      description: 'ОБЕРІТЬ КАНАЛ МОВЛЕННЯ KMUSIC RADIO',
      alias: 'KMusicRadio',
      stations: [
        {
          category_id: 4,
          title: 'KMusic Radio',
          description: 'Радіо твоєї насолоди',
          stream: 'https://stream.zeno.fm/z9x8zy7747zuv',
          cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioKMusic.png',
          alias: 'KMusicRadio-air'
        },
        {
          category_id: 4,
          title: 'KMusic Radio. Мегахіт',
          description: 'Радіо твоєї насолоди',
          stream: 'https://stream.zeno.fm/jkatjk36u8zvv',
          cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioKMusic_megahit.png',
          alias: 'KMusicRadio-megahit'
        }
      ],
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioKMusic.png'
    },
    {
      category_id: 4,
      title: 'URC Радіо',
      description: 'Progressive Ukrainian Radio in the US',
      stream: 'https://streamer.radio.co/sdff2fd6a8/listen',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioURC.png',
      alias: 'URCRadio'
    },
    {
      category_id: 4,
      title: 'Радіо Mad FM',
      description: 'Інтернет хвиля веселих людей',
      stream: 'https://globalic.stream:1440/stream',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/MadFM.png',
      alias: 'MadFM'
    },
    {
      category_id: 4,
      title: 'Радіо Новий день 101,9 FM',
      description: 'Почни новий день - з гарного настрою!',
      stream: 'https://stream.zeno.fm/5burvqocukruv',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/1019Kr.png',
      alias: 'NewDay1019FM'
    },
    {
      category_id: 5,
      title: "Радіо П'ятниця",
      description: 'За Перемогу!',
      stream: 'https://cast.radiogroup.com.ua/radiopyatnica',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioPyatnica.png',
      alias: 'RadioPyatnica'
    },
    {
      category_id: 5,
      title: 'Lounge FM',
      description: 'Your Everyday Vacation',
      stream: 'https://cast.radiogroup.com.ua/loungefm',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/LoungeFM.png',
      alias: 'LoungeFM'
    },
    {
      category_id: 5,
      title: 'Авторадіо Україна',
      description: 'Автомобільне радіо №1',
      stream: 'https://cast.radiogroup.com.ua/avtoradio',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/AvtoRadio.png',
      alias: 'AvtoRadio'
    },
    {
      category_id: 5,
      title: 'NRJ Ukraine',
      description: 'HIT MUSIC ONLY!',
      stream: 'https://cast.radiogroup.com.ua/nrj',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/RadioNRJ.png',
      alias: 'NRJ'
    },
    {
      category_id: 5,
      title: 'Прямий FM',
      stream: 'https://cast.radiogroup.com.ua/prmfm128',
      cover: 'https://play.xtvmedia.pp.ua/public/common/logos/PrmFM.png',
      alias: 'PrmFM'
    }
  ]
};
