import ksiazeArt from '../../ascii-art/trypolis-ksiaze.txt?raw'
import ksiazeArtEn from '../../ascii-art/trypolis-ksiaze.en.txt?raw'
import komnataArt from '../../ascii-art/trypolis-komnata.txt?raw'
import komnataArtEn from '../../ascii-art/trypolis-komnata.en.txt?raw'
import koniecArt from '../../ascii-art/trypolis-koniec.txt?raw'
import koniecArtEn from '../../ascii-art/trypolis-koniec.en.txt?raw'

export const start = 'pt_intro'
export const initialFlags = {}

export const scenes = {

  pt_intro: {
    art: { pl: ksiazeArt, en: ksiazeArtEn },
    choices: [
      { label: 'games.trypolis.scenes.pt_intro.c0', next: 'pt_komnata' },
    ],
  },

  pt_komnata: {
    art: { pl: komnataArt, en: komnataArtEn },
    choices: [
      { label: 'games.trypolis.scenes.pt_komnata.c0', next: 'pt_koniec' },
      { label: 'games.trypolis.scenes.pt_komnata.c1', next: 'pt_koniec' },
    ],
  },

  pt_koniec: {
    art: { pl: koniecArt, en: koniecArtEn },
    ending: true,
    endingLabel: 'games.trypolis.scenes.pt_koniec.ending',
  },

}
