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
      { label: 'games.podroz.scenes.pd_peron.c0', next: 'pd_bufet' },
      { label: 'games.podroz.scenes.pd_peron.c1', next: 'pd_przedzial' },
    ],
  },

  pd_bufet: {
    art: bufetArt,
    choices: [
      { label: 'games.podroz.scenes.pd_bufet.c0', next: 'pd_przedzial' },
    ],
  },

  pd_przedzial: {
    art: przedzialArt,
    choices: [
      { label: 'games.podroz.scenes.pd_przedzial.c0', next: 'pd_katowice_dworzec' },
    ],
  },

  pd_katowice_dworzec: {
    art: katowiceDworzecArt,
    choices: [
      { label: 'games.podroz.scenes.pd_katowice_dworzec.c0', next: 'pd_zla_wskazowka' },
      { label: 'games.podroz.scenes.pd_katowice_dworzec.c1', next: 'pd_szukanie_biura' },
    ],
  },

  pd_zla_wskazowka: {
    art: zlaWskazowkaArt,
    choices: [
      { label: 'games.podroz.scenes.pd_zla_wskazowka.c0', next: 'pd_szukanie_biura' },
    ],
  },

  pd_szukanie_biura: {
    art: szukanieBiuraArt,
    choices: [
      { label: 'games.podroz.scenes.pd_szukanie_biura.c0', next: 'pd_bar_mleczny' },
      { label: 'games.podroz.scenes.pd_szukanie_biura.c1', next: 'pd_biuro' },
    ],
  },

  pd_bar_mleczny: {
    art: barMlecznyArt,
    choices: [
      { label: 'games.podroz.scenes.pd_bar_mleczny.c0', next: 'pd_biuro' },
    ],
  },

  pd_biuro: {
    art: biuroArt,
    choices: [
      { label: 'games.podroz.scenes.pd_biuro.c0', next: 'pd_argumentacja' },
      { label: 'games.podroz.scenes.pd_biuro.c1', next: 'pd_faktura' },
    ],
  },

  pd_argumentacja: {
    art: argumentacjaArt,
    choices: [
      { label: 'games.podroz.scenes.pd_argumentacja.c0', next: 'pd_wyliczenie' },
      { label: 'games.podroz.scenes.pd_argumentacja.c1', next: 'pd_faktura' },
    ],
  },

  pd_wyliczenie: {
    art: wyliczenieArt,
    choices: [
      { label: 'games.podroz.scenes.pd_wyliczenie.c0', next: 'pd_faktura' },
    ],
  },

  pd_faktura: {
    art: fakturaArt,
    choices: [
      { label: 'games.podroz.scenes.pd_faktura.c0', next: 'pd_kiosk' },
    ],
  },

  pd_kiosk: {
    art: kioskArt,
    choices: [
      { label: 'games.podroz.scenes.pd_kiosk.c0', next: 'pd_kiosk_reszta' },
      { label: 'games.podroz.scenes.pd_kiosk.c1', next: 'pd_powrot_peron' },
    ],
  },

  pd_kiosk_reszta: {
    art: kioskRestaArt,
    choices: [
      { label: 'games.podroz.scenes.pd_kiosk_reszta.c0', next: 'pd_powrot_peron' },
    ],
  },

  pd_powrot_peron: {
    art: powrotArt,
    choices: [
      { label: 'games.podroz.scenes.pd_powrot_peron.c0', next: 'pd_teczka' },
      { label: 'games.podroz.scenes.pd_powrot_peron.c1', next: 'pd_przedzial_powrot' },
    ],
  },

  pd_teczka: {
    art: teczkaArt,
    choices: [
      { label: 'games.podroz.scenes.pd_teczka.c0', next: 'pd_przedzial_powrot' },
    ],
  },

  pd_przedzial_powrot: {
    art: przedzialPowrotArt,
    choices: [
      { label: 'games.podroz.scenes.pd_przedzial_powrot.c0', next: 'pd_nieznajomy_rozmowa' },
      { label: 'games.podroz.scenes.pd_przedzial_powrot.c1', next: 'pd_ksiegowosc' },
    ],
  },

  pd_nieznajomy_rozmowa: {
    art: nieznajomyRozmowaArt,
    choices: [
      { label: 'games.podroz.scenes.pd_nieznajomy_rozmowa.c0', next: 'pd_ksiegowosc' },
    ],
  },

  pd_ksiegowosc: {
    art: ksiegowoscArt,
    ending: true,
    endingLabel: 'games.podroz.scenes.pd_ksiegowosc.ending',
    choices: [],
  },

}
