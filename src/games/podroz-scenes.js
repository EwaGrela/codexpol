import teczkaArt from '../../ascii-art/podroz-teczka.txt?raw'
import teczkaArtEn from '../../ascii-art/podroz-teczka.en.txt?raw'
import wyliczenieArt from '../../ascii-art/podroz-wyliczenie.txt?raw'
import wyliczenieArtEn from '../../ascii-art/podroz-wyliczenie.en.txt?raw'
import bufetArt from '../../ascii-art/podroz-bufet.txt?raw'
import bufetArtEn from '../../ascii-art/podroz-bufet.en.txt?raw'
import zlaWskazowkaArt from '../../ascii-art/podroz-zla-wskazowka.txt?raw'
import zlaWskazowkaArtEn from '../../ascii-art/podroz-zla-wskazowka.en.txt?raw'
import kioskRestaArt from '../../ascii-art/podroz-kiosk-reszta.txt?raw'
import kioskRestaArtEn from '../../ascii-art/podroz-kiosk-reszta.en.txt?raw'
import nieznajomyRozmowaArt from '../../ascii-art/podroz-nieznajomy-rozmowa.txt?raw'
import nieznajomyRozmowaArtEn from '../../ascii-art/podroz-nieznajomy-rozmowa.en.txt?raw'
import peronArt from '../../ascii-art/podroz-peron.txt?raw'
import peronArtEn from '../../ascii-art/podroz-peron.en.txt?raw'
import przedzialArt from '../../ascii-art/podroz-przedział.txt?raw'
import przedzialArtEn from '../../ascii-art/podroz-przedział.en.txt?raw'
import katowiceDworzecArt from '../../ascii-art/podroz-katowice-dworzec.txt?raw'
import katowiceDworzecArtEn from '../../ascii-art/podroz-katowice-dworzec.en.txt?raw'
import szukanieBiuraArt from '../../ascii-art/podroz-szukanie-biura.txt?raw'
import szukanieBiuraArtEn from '../../ascii-art/podroz-szukanie-biura.en.txt?raw'
import barMlecznyArt from '../../ascii-art/podroz-bar-mleczny.txt?raw'
import barMlecznyArtEn from '../../ascii-art/podroz-bar-mleczny.en.txt?raw'
import biuroArt from '../../ascii-art/podroz-biuro.txt?raw'
import biuroArtEn from '../../ascii-art/podroz-biuro.en.txt?raw'
import argumentacjaArt from '../../ascii-art/podroz-argumentacja.txt?raw'
import argumentacjaArtEn from '../../ascii-art/podroz-argumentacja.en.txt?raw'
import fakturaArt from '../../ascii-art/podroz-faktura.txt?raw'
import fakturaArtEn from '../../ascii-art/podroz-faktura.en.txt?raw'
import kioskArt from '../../ascii-art/podroz-kiosk.txt?raw'
import kioskArtEn from '../../ascii-art/podroz-kiosk.en.txt?raw'
import powrotArt from '../../ascii-art/podroz-powrot.txt?raw'
import powrotArtEn from '../../ascii-art/podroz-powrot.en.txt?raw'
import przedzialPowrotArt from '../../ascii-art/podroz-przedział-powrot.txt?raw'
import przedzialPowrotArtEn from '../../ascii-art/podroz-przedział-powrot.en.txt?raw'
import ksiegowoscArt from '../../ascii-art/podroz-ksiegowosc.txt?raw'
import ksiegowoscArtEn from '../../ascii-art/podroz-ksiegowosc.en.txt?raw'

export const start = 'pd_peron'
export const initialFlags = {}

export const scenes = {

  pd_peron: {
    art: { pl: peronArt, en: peronArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_peron.c0', next: 'pd_bufet' },
      { label: 'games.podroz.scenes.pd_peron.c1', next: 'pd_przedzial' },
    ],
  },

  pd_bufet: {
    art: { pl: bufetArt, en: bufetArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_bufet.c0', next: 'pd_przedzial' },
    ],
  },

  pd_przedzial: {
    art: { pl: przedzialArt, en: przedzialArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_przedzial.c0', next: 'pd_katowice_dworzec' },
    ],
  },

  pd_katowice_dworzec: {
    art: { pl: katowiceDworzecArt, en: katowiceDworzecArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_katowice_dworzec.c0', next: 'pd_zla_wskazowka' },
      { label: 'games.podroz.scenes.pd_katowice_dworzec.c1', next: 'pd_szukanie_biura' },
    ],
  },

  pd_zla_wskazowka: {
    art: { pl: zlaWskazowkaArt, en: zlaWskazowkaArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_zla_wskazowka.c0', next: 'pd_szukanie_biura' },
    ],
  },

  pd_szukanie_biura: {
    art: { pl: szukanieBiuraArt, en: szukanieBiuraArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_szukanie_biura.c0', next: 'pd_bar_mleczny' },
      { label: 'games.podroz.scenes.pd_szukanie_biura.c1', next: 'pd_biuro' },
    ],
  },

  pd_bar_mleczny: {
    art: { pl: barMlecznyArt, en: barMlecznyArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_bar_mleczny.c0', next: 'pd_biuro' },
    ],
  },

  pd_biuro: {
    art: { pl: biuroArt, en: biuroArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_biuro.c0', next: 'pd_argumentacja' },
      { label: 'games.podroz.scenes.pd_biuro.c1', next: 'pd_faktura' },
    ],
  },

  pd_argumentacja: {
    art: { pl: argumentacjaArt, en: argumentacjaArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_argumentacja.c0', next: 'pd_wyliczenie' },
      { label: 'games.podroz.scenes.pd_argumentacja.c1', next: 'pd_faktura' },
    ],
  },

  pd_wyliczenie: {
    art: { pl: wyliczenieArt, en: wyliczenieArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_wyliczenie.c0', next: 'pd_faktura' },
    ],
  },

  pd_faktura: {
    art: { pl: fakturaArt, en: fakturaArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_faktura.c0', next: 'pd_kiosk' },
    ],
  },

  pd_kiosk: {
    art: { pl: kioskArt, en: kioskArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_kiosk.c0', next: 'pd_kiosk_reszta' },
      { label: 'games.podroz.scenes.pd_kiosk.c1', next: 'pd_powrot_peron' },
    ],
  },

  pd_kiosk_reszta: {
    art: { pl: kioskRestaArt, en: kioskRestaArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_kiosk_reszta.c0', next: 'pd_powrot_peron' },
    ],
  },

  pd_powrot_peron: {
    art: { pl: powrotArt, en: powrotArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_powrot_peron.c0', next: 'pd_teczka' },
      { label: 'games.podroz.scenes.pd_powrot_peron.c1', next: 'pd_przedzial_powrot' },
    ],
  },

  pd_teczka: {
    art: { pl: teczkaArt, en: teczkaArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_teczka.c0', next: 'pd_przedzial_powrot' },
    ],
  },

  pd_przedzial_powrot: {
    art: { pl: przedzialPowrotArt, en: przedzialPowrotArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_przedzial_powrot.c0', next: 'pd_nieznajomy_rozmowa' },
      { label: 'games.podroz.scenes.pd_przedzial_powrot.c1', next: 'pd_ksiegowosc' },
    ],
  },

  pd_nieznajomy_rozmowa: {
    art: { pl: nieznajomyRozmowaArt, en: nieznajomyRozmowaArtEn },
    choices: [
      { label: 'games.podroz.scenes.pd_nieznajomy_rozmowa.c0', next: 'pd_ksiegowosc' },
    ],
  },

  pd_ksiegowosc: {
    art: { pl: ksiegowoscArt, en: ksiegowoscArtEn },
    ending: true,
    endingLabel: 'games.podroz.scenes.pd_ksiegowosc.ending',
    choices: [],
  },

}
