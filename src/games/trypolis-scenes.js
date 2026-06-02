import ksiazeArt from '../../ascii-art/trypolis-ksiaze.txt?raw'
import komnataArt from '../../ascii-art/trypolis-komnata.txt?raw'
import koniecArt from '../../ascii-art/trypolis-koniec.txt?raw'

export const start = 'pt_intro'
export const initialFlags = {}

export const scenes = {

  pt_intro: {
    art: ksiazeArt,
    choices: [
      { label: 'Wejdź przez bramę', next: 'pt_komnata' },
    ],
  },

  pt_komnata: {
    art: komnataArt,
    choices: [
      { label: 'Otwórz skrzynię', next: 'pt_koniec' },
      { label: 'Zbadaj mozaikę', next: 'pt_koniec' },
    ],
  },

  pt_koniec: {
    art: koniecArt,
    ending: true,
  },

}
