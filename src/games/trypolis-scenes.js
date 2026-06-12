import ksiazeArt from '../../ascii-art/trypolis-ksiaze.txt?raw'
import komnataArt from '../../ascii-art/trypolis-komnata.txt?raw'
import koniecArt from '../../ascii-art/trypolis-koniec.txt?raw'

export const start = 'pt_intro'
export const initialFlags = {}

export const scenes = {

  pt_intro: {
    art: ksiazeArt,
    choices: [
      { label: 'games.trypolis.scenes.pt_intro.c0', next: 'pt_komnata' },
    ],
  },

  pt_komnata: {
    art: komnataArt,
    choices: [
      { label: 'games.trypolis.scenes.pt_komnata.c0', next: 'pt_koniec' },
      { label: 'games.trypolis.scenes.pt_komnata.c1', next: 'pt_koniec' },
    ],
  },

  pt_koniec: {
    art: koniecArt,
    ending: true,
    endingLabel: 'games.trypolis.scenes.pt_koniec.ending',
  },

}
