import sasiadArt from '../../ascii-art/wczasy-sasiad.txt?raw'
import spacerArt from '../../ascii-art/wczasy-spacer.txt?raw'
import ostatniRanekArt from '../../ascii-art/wczasy-ostatni-ranek.txt?raw'
import recepcjaBasenArt from '../../ascii-art/wczasy-recepcja-basen.txt?raw'
import kawiarniaZamekArt from '../../ascii-art/wczasy-kawiarnia-zamek.txt?raw'
import recepcjaArt from '../../ascii-art/wczasy-recepcja.txt?raw'
import pokojArt from '../../ascii-art/wczasy-pokoj.txt?raw'
import pukanieArt from '../../ascii-art/wczasy-pukanie.txt?raw'
import przyStoleArt from '../../ascii-art/wczasy-przy-stole.txt?raw'
import stolowkaArt from '../../ascii-art/wczasy-stolowka.txt?raw'
import basenArt from '../../ascii-art/wczasy-basen.txt?raw'
import widokArt from '../../ascii-art/wczasy-widok.txt?raw'
import autokarArt from '../../ascii-art/wczasy-autokar.txt?raw'
import zamekArt from '../../ascii-art/wczasy-zamek.txt?raw'
import zostalArt from '../../ascii-art/wczasy-zostal.txt?raw'
import kartyArt from '../../ascii-art/wczasy-karty.txt?raw'
import telefonArt from '../../ascii-art/wczasy-telefon.txt?raw'
import wyjazd from '../../ascii-art/wczasy-wyjazd-wczesny.txt?raw'
import wymeldowanieArt from '../../ascii-art/wczasy-wymeldowanie.txt?raw'
import reklamacjaArt from '../../ascii-art/wczasy-reklamacja.txt?raw'
import koniecArt from '../../ascii-art/wczasy-koniec-a.txt?raw'
import koniecBart from '../../ascii-art/wczasy-koniec-b.txt?raw'
import koniecCart from '../../ascii-art/wczasy-koniec-c.txt?raw'
import koniecDart from '../../ascii-art/wczasy-koniec-d.txt?raw'

export const start = 'wc_recepcja'
export const initialFlags = { knocked: false, complained: false }

export const scenes = {

  wc_recepcja: {
    art: recepcjaArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_recepcja.c0', next: 'wc_recepcja_basen' },
      { label: 'games.wczasy.scenes.wc_recepcja.c1', next: 'wc_pokoj' },
    ],
  },

  wc_recepcja_basen: {
    art: recepcjaBasenArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_recepcja_basen.c0', next: 'wc_pokoj' },
    ],
  },

  wc_pokoj: {
    art: pokojArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_pokoj.c0', next: 'wc_pukanie', setsFlag: { knocked: true } },
      { label: 'games.wczasy.scenes.wc_pokoj.c1', next: 'wc_stolowka', setsFlag: { knocked: false } },
    ],
  },

  wc_pukanie: {
    art: pukanieArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_pukanie.c0', next: 'wc_przy_stole' },
      { label: 'games.wczasy.scenes.wc_pukanie.c1', next: 'wc_stolowka', setsFlag: { knocked: false } },
    ],
  },

  wc_przy_stole: {
    art: przyStoleArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_przy_stole.c0', next: 'wc_stolowka' },
    ],
  },

  wc_stolowka: {
    art: stolowkaArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_stolowka.c0', next: 'wc_sasiad' },
      { label: 'games.wczasy.scenes.wc_stolowka.c1', next: 'wc_basen' },
    ],
  },

  wc_sasiad: {
    art: sasiadArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_sasiad.c0', next: 'wc_basen' },
    ],
  },

  wc_basen: {
    art: basenArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_basen.c0', next: 'wc_widok' },
    ],
  },

  wc_widok: {
    art: widokArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_widok.c0', next: 'wc_spacer' },
      { label: 'games.wczasy.scenes.wc_widok.c1', next: 'wc_wycieczka_wybor' },
    ],
  },

  wc_spacer: {
    art: spacerArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_spacer.c0', next: 'wc_wycieczka_wybor' },
    ],
  },

  wc_wycieczka_wybor: {
    art: autokarArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_wycieczka_wybor.c0', next: 'wc_zamek' },
      { label: 'games.wczasy.scenes.wc_wycieczka_wybor.c1', next: 'wc_zostal' },
    ],
  },

  wc_zamek: {
    art: zamekArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_zamek.c0', next: 'wc_kawiarnia_zamek' },
      { label: 'games.wczasy.scenes.wc_zamek.c1', next: 'wc_karty' },
    ],
  },

  wc_kawiarnia_zamek: {
    art: kawiarniaZamekArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_kawiarnia_zamek.c0', next: 'wc_karty' },
    ],
  },

  wc_zostal: {
    art: zostalArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_zostal.c0', next: 'wc_karty' },
    ],
  },

  wc_karty: {
    art: kartyArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_karty.c0', next: 'wc_telefon_wybor' },
    ],
  },

  wc_telefon_wybor: {
    art: ostatniRanekArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_telefon_wybor.c0', next: 'wc_telefon' },
      { label: 'games.wczasy.scenes.wc_telefon_wybor.c1', next: 'wc_reklamacja_wybor' },
    ],
  },

  wc_telefon: {
    art: telefonArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_telefon.c0', next: 'wc_wyjazd_wczesny' },
    ],
  },

  wc_wyjazd_wczesny: {
    art: wyjazd,
    choices: [
      { label: 'games.wczasy.scenes.wc_wyjazd_wczesny.c0', next: 'wc_koniec_d' },
    ],
  },

  wc_reklamacja_wybor: {
    art: wymeldowanieArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_reklamacja_wybor.c0', next: 'wc_reklamacja', setsFlag: { complained: true } },
      { label: 'games.wczasy.scenes.wc_reklamacja_wybor.c1', next: 'wc_wymeldowanie' },
    ],
  },

  wc_reklamacja: {
    art: reklamacjaArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_reklamacja.c0', next: 'wc_koniec_c' },
    ],
  },

  wc_wymeldowanie: {
    art: wymeldowanieArt,
    choices: [
      { label: 'games.wczasy.scenes.wc_wymeldowanie.c0', next: 'wc_router' },
    ],
  },

  wc_router: {
    route: { flag: 'knocked', true: 'wc_koniec_b', false: 'wc_koniec_a' },
  },

  wc_koniec_a: {
    art: koniecArt,
    ending: true,
    endingLabel: 'games.wczasy.scenes.wc_koniec_a.ending',
    choices: [],
  },

  wc_koniec_b: {
    art: koniecBart,
    ending: true,
    endingLabel: 'games.wczasy.scenes.wc_koniec_b.ending',
    choices: [],
  },

  wc_koniec_c: {
    art: koniecCart,
    ending: true,
    endingLabel: 'games.wczasy.scenes.wc_koniec_c.ending',
    choices: [],
  },

  wc_koniec_d: {
    art: koniecDart,
    ending: true,
    endingLabel: 'games.wczasy.scenes.wc_koniec_d.ending',
    choices: [],
  },

}
