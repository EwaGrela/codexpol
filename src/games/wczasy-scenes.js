import sasiadArt from '../../ascii-art/wczasy-sasiad.txt?raw'
import sasiadArtEn from '../../ascii-art/wczasy-sasiad.en.txt?raw'
import spacerArt from '../../ascii-art/wczasy-spacer.txt?raw'
import spacerArtEn from '../../ascii-art/wczasy-spacer.en.txt?raw'
import ostatniRanekArt from '../../ascii-art/wczasy-ostatni-ranek.txt?raw'
import ostatniRanekArtEn from '../../ascii-art/wczasy-ostatni-ranek.en.txt?raw'
import recepcjaBasenArt from '../../ascii-art/wczasy-recepcja-basen.txt?raw'
import recepcjaBasenArtEn from '../../ascii-art/wczasy-recepcja-basen.en.txt?raw'
import kawiarniaZamekArt from '../../ascii-art/wczasy-kawiarnia-zamek.txt?raw'
import kawiarniaZamekArtEn from '../../ascii-art/wczasy-kawiarnia-zamek.en.txt?raw'
import recepcjaArt from '../../ascii-art/wczasy-recepcja.txt?raw'
import recepcjaArtEn from '../../ascii-art/wczasy-recepcja.en.txt?raw'
import pokojArt from '../../ascii-art/wczasy-pokoj.txt?raw'
import pokojArtEn from '../../ascii-art/wczasy-pokoj.en.txt?raw'
import pukanieArt from '../../ascii-art/wczasy-pukanie.txt?raw'
import pukanieArtEn from '../../ascii-art/wczasy-pukanie.en.txt?raw'
import przyStoleArt from '../../ascii-art/wczasy-przy-stole.txt?raw'
import przyStoleArtEn from '../../ascii-art/wczasy-przy-stole.en.txt?raw'
import stolowkaArt from '../../ascii-art/wczasy-stolowka.txt?raw'
import stolowkaArtEn from '../../ascii-art/wczasy-stolowka.en.txt?raw'
import basenArt from '../../ascii-art/wczasy-basen.txt?raw'
import basenArtEn from '../../ascii-art/wczasy-basen.en.txt?raw'
import widokArt from '../../ascii-art/wczasy-widok.txt?raw'
import widokArtEn from '../../ascii-art/wczasy-widok.en.txt?raw'
import autokarArt from '../../ascii-art/wczasy-autokar.txt?raw'
import autokarArtEn from '../../ascii-art/wczasy-autokar.en.txt?raw'
import zamekArt from '../../ascii-art/wczasy-zamek.txt?raw'
import zamekArtEn from '../../ascii-art/wczasy-zamek.en.txt?raw'
import zostalArt from '../../ascii-art/wczasy-zostal.txt?raw'
import zostalArtEn from '../../ascii-art/wczasy-zostal.en.txt?raw'
import kartyArt from '../../ascii-art/wczasy-karty.txt?raw'
import kartyArtEn from '../../ascii-art/wczasy-karty.en.txt?raw'
import telefonArt from '../../ascii-art/wczasy-telefon.txt?raw'
import telefonArtEn from '../../ascii-art/wczasy-telefon.en.txt?raw'
import wyjazd from '../../ascii-art/wczasy-wyjazd-wczesny.txt?raw'
import wyjazdEn from '../../ascii-art/wczasy-wyjazd-wczesny.en.txt?raw'
import wymeldowanieArt from '../../ascii-art/wczasy-wymeldowanie.txt?raw'
import wymeldowanieArtEn from '../../ascii-art/wczasy-wymeldowanie.en.txt?raw'
import reklamacjaArt from '../../ascii-art/wczasy-reklamacja.txt?raw'
import reklamacjaArtEn from '../../ascii-art/wczasy-reklamacja.en.txt?raw'
import koniecArt from '../../ascii-art/wczasy-koniec-a.txt?raw'
import koniecArtEn from '../../ascii-art/wczasy-koniec-a.en.txt?raw'
import koniecBart from '../../ascii-art/wczasy-koniec-b.txt?raw'
import koniecBArtEn from '../../ascii-art/wczasy-koniec-b.en.txt?raw'
import koniecCart from '../../ascii-art/wczasy-koniec-c.txt?raw'
import koniecCArtEn from '../../ascii-art/wczasy-koniec-c.en.txt?raw'
import koniecDart from '../../ascii-art/wczasy-koniec-d.txt?raw'
import koniecDArtEn from '../../ascii-art/wczasy-koniec-d.en.txt?raw'

export const start = 'wc_recepcja'
export const initialFlags = { knocked: false, complained: false }

export const scenes = {

  wc_recepcja: {
    art: { pl: recepcjaArt, en: recepcjaArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_recepcja.c0', next: 'wc_recepcja_basen' },
      { label: 'games.wczasy.scenes.wc_recepcja.c1', next: 'wc_pokoj' },
    ],
  },

  wc_recepcja_basen: {
    art: { pl: recepcjaBasenArt, en: recepcjaBasenArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_recepcja_basen.c0', next: 'wc_pokoj' },
    ],
  },

  wc_pokoj: {
    art: { pl: pokojArt, en: pokojArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_pokoj.c0', next: 'wc_pukanie', setsFlag: { knocked: true } },
      { label: 'games.wczasy.scenes.wc_pokoj.c1', next: 'wc_stolowka', setsFlag: { knocked: false } },
    ],
  },

  wc_pukanie: {
    art: { pl: pukanieArt, en: pukanieArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_pukanie.c0', next: 'wc_przy_stole' },
      { label: 'games.wczasy.scenes.wc_pukanie.c1', next: 'wc_stolowka', setsFlag: { knocked: false } },
    ],
  },

  wc_przy_stole: {
    art: { pl: przyStoleArt, en: przyStoleArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_przy_stole.c0', next: 'wc_stolowka' },
    ],
  },

  wc_stolowka: {
    art: { pl: stolowkaArt, en: stolowkaArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_stolowka.c0', next: 'wc_sasiad' },
      { label: 'games.wczasy.scenes.wc_stolowka.c1', next: 'wc_basen' },
    ],
  },

  wc_sasiad: {
    art: { pl: sasiadArt, en: sasiadArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_sasiad.c0', next: 'wc_basen' },
    ],
  },

  wc_basen: {
    art: { pl: basenArt, en: basenArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_basen.c0', next: 'wc_widok' },
    ],
  },

  wc_widok: {
    art: { pl: widokArt, en: widokArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_widok.c0', next: 'wc_spacer' },
      { label: 'games.wczasy.scenes.wc_widok.c1', next: 'wc_wycieczka_wybor' },
    ],
  },

  wc_spacer: {
    art: { pl: spacerArt, en: spacerArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_spacer.c0', next: 'wc_wycieczka_wybor' },
    ],
  },

  wc_wycieczka_wybor: {
    art: { pl: autokarArt, en: autokarArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_wycieczka_wybor.c0', next: 'wc_zamek' },
      { label: 'games.wczasy.scenes.wc_wycieczka_wybor.c1', next: 'wc_zostal' },
    ],
  },

  wc_zamek: {
    art: { pl: zamekArt, en: zamekArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_zamek.c0', next: 'wc_kawiarnia_zamek' },
      { label: 'games.wczasy.scenes.wc_zamek.c1', next: 'wc_karty' },
    ],
  },

  wc_kawiarnia_zamek: {
    art: { pl: kawiarniaZamekArt, en: kawiarniaZamekArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_kawiarnia_zamek.c0', next: 'wc_karty' },
    ],
  },

  wc_zostal: {
    art: { pl: zostalArt, en: zostalArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_zostal.c0', next: 'wc_karty' },
    ],
  },

  wc_karty: {
    art: { pl: kartyArt, en: kartyArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_karty.c0', next: 'wc_telefon_wybor' },
    ],
  },

  wc_telefon_wybor: {
    art: { pl: ostatniRanekArt, en: ostatniRanekArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_telefon_wybor.c0', next: 'wc_telefon' },
      { label: 'games.wczasy.scenes.wc_telefon_wybor.c1', next: 'wc_reklamacja_wybor' },
    ],
  },

  wc_telefon: {
    art: { pl: telefonArt, en: telefonArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_telefon.c0', next: 'wc_wyjazd_wczesny' },
    ],
  },

  wc_wyjazd_wczesny: {
    art: { pl: wyjazd, en: wyjazdEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_wyjazd_wczesny.c0', next: 'wc_koniec_d' },
    ],
  },

  wc_reklamacja_wybor: {
    art: { pl: wymeldowanieArt, en: wymeldowanieArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_reklamacja_wybor.c0', next: 'wc_reklamacja', setsFlag: { complained: true } },
      { label: 'games.wczasy.scenes.wc_reklamacja_wybor.c1', next: 'wc_wymeldowanie' },
    ],
  },

  wc_reklamacja: {
    art: { pl: reklamacjaArt, en: reklamacjaArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_reklamacja.c0', next: 'wc_koniec_c' },
    ],
  },

  wc_wymeldowanie: {
    art: { pl: wymeldowanieArt, en: wymeldowanieArtEn },
    choices: [
      { label: 'games.wczasy.scenes.wc_wymeldowanie.c0', next: 'wc_router' },
    ],
  },

  wc_router: {
    route: { flag: 'knocked', true: 'wc_koniec_b', false: 'wc_koniec_a' },
  },

  wc_koniec_a: {
    art: { pl: koniecArt, en: koniecArtEn },
    ending: true,
    endingLabel: 'games.wczasy.scenes.wc_koniec_a.ending',
    choices: [],
  },

  wc_koniec_b: {
    art: { pl: koniecBart, en: koniecBArtEn },
    ending: true,
    endingLabel: 'games.wczasy.scenes.wc_koniec_b.ending',
    choices: [],
  },

  wc_koniec_c: {
    art: { pl: koniecCart, en: koniecCArtEn },
    ending: true,
    endingLabel: 'games.wczasy.scenes.wc_koniec_c.ending',
    choices: [],
  },

  wc_koniec_d: {
    art: { pl: koniecDart, en: koniecDArtEn },
    ending: true,
    endingLabel: 'games.wczasy.scenes.wc_koniec_d.ending',
    choices: [],
  },

}
