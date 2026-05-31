import teczkaArt from '../../ascii-art/podroz-teczka.txt?raw'
import wyliczenieArt from '../../ascii-art/podroz-wyliczenie.txt?raw'
import bufetArt from '../../ascii-art/podroz-bufet.txt?raw'
import zlaWskazowkaArt from '../../ascii-art/podroz-zla-wskazowka.txt?raw'
import kioskRestaArt from '../../ascii-art/podroz-kiosk-reszta.txt?raw'
import nieznajomyRozmowaArt from '../../ascii-art/podroz-nieznajomy-rozmowa.txt?raw'
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
      { label: 'Skocz po kawę do bufetu', next: 'pd_bufet' },
      { label: 'Czekaj na peronie', next: 'pd_przedzial' },
    ],
  },

  pd_bufet: {
    art: bufetArt,
    choices: [
      { label: 'Wróć na peron', next: 'pd_przedzial' },
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
      { label: 'Zapytaj o drogę', next: 'pd_zla_wskazowka' },
      { label: 'Idź na własną rękę', next: 'pd_szukanie_biura' },
    ],
  },

  pd_zla_wskazowka: {
    art: zlaWskazowkaArt,
    choices: [
      { label: 'Zawróć i szukaj na własną rękę', next: 'pd_szukanie_biura' },
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
      { label: 'Wytłumacz błąd Pani Krystynie', next: 'pd_wyliczenie' },
      { label: 'Daj spokój i podpisz', next: 'pd_faktura' },
    ],
  },

  pd_wyliczenie: {
    art: wyliczenieArt,
    choices: [
      { label: 'Podpisz i wyjdź', next: 'pd_faktura' },
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
      { label: 'Daj pięćdziesiąt i czekaj na resztę', next: 'pd_kiosk_reszta' },
      { label: 'Zostań na ławce', next: 'pd_powrot_peron' },
    ],
  },

  pd_kiosk_reszta: {
    art: kioskRestaArt,
    choices: [
      { label: 'Weź bilon i idź na peron', next: 'pd_powrot_peron' },
    ],
  },

  pd_powrot_peron: {
    art: powrotArt,
    choices: [
      { label: 'Zajrzyj do teczki', next: 'pd_teczka' },
      { label: 'Wsiądź do pociągu', next: 'pd_przedzial_powrot' },
    ],
  },

  pd_teczka: {
    art: teczkaArt,
    choices: [
      { label: 'Zamknij teczkę i wsiądź', next: 'pd_przedzial_powrot' },
    ],
  },

  pd_przedzial_powrot: {
    art: przedzialPowrotArt,
    choices: [
      { label: 'Powiedz że faktury', next: 'pd_nieznajomy_rozmowa' },
      { label: 'Powiedz "logistyka" i patrz przez okno', next: 'pd_ksiegowosc' },
    ],
  },

  pd_nieznajomy_rozmowa: {
    art: nieznajomyRozmowaArt,
    choices: [
      { label: 'Jedź dalej', next: 'pd_ksiegowosc' },
    ],
  },

  pd_ksiegowosc: {
    art: ksiegowoscArt,
    ending: true,
    endingLabel: 'Koniec.',
    choices: [],
  },

}
