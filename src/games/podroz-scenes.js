import peronArt from '../../ascii-art/podroz-peron.txt?raw'
import przedzialArt from '../../ascii-art/podroz-przedział.txt?raw'
import katowiceDworzecArt from '../../ascii-art/podroz-katowice-dworzec.txt?raw'
import szukanieBiuraArt from '../../ascii-art/podroz-szukanie-biura.txt?raw'
import barMlecznyArt from '../../ascii-art/podroz-bar-mleczny.txt?raw'
import biuroArt from '../../ascii-art/podroz-biuro.txt?raw'
import argumentacjaArt from '../../ascii-art/podroz-argumentacja.txt?raw'
import fakturaArt from '../../ascii-art/podroz-faktura.txt?raw'
import kioskArt from '../../ascii-art/podroz-kiosk.txt?raw'
import powrotArt from '../../ascii-art/podroz-powrot.txt?raw'
import przedzialPowrotArt from '../../ascii-art/podroz-przedział-powrot.txt?raw'
import ksiegowoscArt from '../../ascii-art/podroz-ksiegowosc.txt?raw'

export const start = 'pd_peron'
export const initialFlags = {}

export const scenes = {

  pd_peron: {
    art: peronArt,
    choices: [
      { label: 'Czekaj na pociąg', next: 'pd_przedzial' },
    ],
  },

  pd_przedzial: {
    art: przedzialArt,
    choices: [
      { label: 'Jedź dalej', next: 'pd_katowice_dworzec' },
    ],
  },

  pd_katowice_dworzec: {
    art: katowiceDworzecArt,
    choices: [
      { label: 'Zapytaj o drogę', next: 'pd_szukanie_biura' },
      { label: 'Idź na własną rękę', next: 'pd_szukanie_biura' },
    ],
  },

  pd_szukanie_biura: {
    art: szukanieBiuraArt,
    choices: [
      { label: 'Wejdź do baru mlecznego', next: 'pd_bar_mleczny' },
      { label: 'Nie masz czasu', next: 'pd_biuro' },
    ],
  },

  pd_bar_mleczny: {
    art: barMlecznyArt,
    choices: [
      { label: 'Zjedz i idź do biura', next: 'pd_biuro' },
    ],
  },

  pd_biuro: {
    art: biuroArt,
    choices: [
      { label: 'Zapytaj o błąd w fakturze', next: 'pd_argumentacja' },
      { label: 'Podpisz od razu', next: 'pd_faktura' },
    ],
  },

  pd_argumentacja: {
    art: argumentacjaArt,
    choices: [
      { label: 'Czekaj na Panią Krystynę', next: 'pd_faktura' },
    ],
  },

  pd_faktura: {
    art: fakturaArt,
    choices: [
      { label: 'Podpisz fakturę', next: 'pd_kiosk' },
    ],
  },

  pd_kiosk: {
    art: kioskArt,
    choices: [
      { label: 'Zostań na ławce', next: 'pd_powrot_peron' },
    ],
  },

  pd_powrot_peron: {
    art: powrotArt,
    choices: [
      { label: 'Wsiądź do pociągu', next: 'pd_przedzial_powrot' },
    ],
  },

  pd_przedzial_powrot: {
    art: przedzialPowrotArt,
    choices: [
      { label: 'Wróć do Bydgoszczy', next: 'pd_ksiegowosc' },
    ],
  },

  pd_ksiegowosc: {
    art: ksiegowoscArt,
    ending: true,
    endingLabel: 'Koniec.',
    choices: [],
  },

}
