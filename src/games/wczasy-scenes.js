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
      { label: 'Idź do pokoju', next: 'wc_pokoj' },
    ],
  },

  wc_pokoj: {
    art: pokojArt,
    choices: [
      { label: 'Zapukaj do pokoju 304', next: 'wc_pukanie', setsFlag: { knocked: true } },
      { label: 'Idź spać', next: 'wc_stolowka', setsFlag: { knocked: false } },
    ],
  },

  wc_pukanie: {
    art: pukanieArt,
    choices: [
      { label: 'Zapukaj', next: 'wc_przy_stole' },
      { label: 'Zawróć', next: 'wc_stolowka', setsFlag: { knocked: false } },
    ],
  },

  wc_przy_stole: {
    art: przyStoleArt,
    choices: [
      { label: 'Graj do końca nocy', next: 'wc_stolowka' },
    ],
  },

  wc_stolowka: {
    art: stolowkaArt,
    choices: [
      { label: 'Idź na basen', next: 'wc_basen' },
    ],
  },

  wc_basen: {
    art: basenArt,
    choices: [
      { label: 'Wróć do pokoju', next: 'wc_widok' },
    ],
  },

  wc_widok: {
    art: widokArt,
    choices: [
      { label: 'Następny dzień', next: 'wc_wycieczka_wybor' },
    ],
  },

  wc_wycieczka_wybor: {
    art: autokarArt,
    choices: [
      { label: 'Jedź na zamek', next: 'wc_zamek' },
      { label: 'Zostań w pokoju', next: 'wc_zostal' },
    ],
  },

  wc_zamek: {
    art: zamekArt,
    choices: [
      { label: 'Wróć do ośrodka', next: 'wc_karty' },
    ],
  },

  wc_zostal: {
    art: zostalArt,
    choices: [
      { label: 'Wieczór w pokoju', next: 'wc_karty' },
    ],
  },

  wc_karty: {
    art: kartyArt,
    choices: [
      { label: 'Następny dzień', next: 'wc_telefon_wybor' },
    ],
  },

  wc_telefon_wybor: {
    art: pokojArt,
    choices: [
      { label: 'Zadzwoń do domu', next: 'wc_telefon' },
      { label: 'Zostań do końca', next: 'wc_reklamacja_wybor' },
    ],
  },

  wc_telefon: {
    art: telefonArt,
    choices: [
      { label: 'Wyjedź jutro rano', next: 'wc_wyjazd_wczesny' },
    ],
  },

  wc_wyjazd_wczesny: {
    art: wyjazd,
    choices: [
      { label: 'Podpisz i wyjedź', next: 'wc_koniec_d' },
    ],
  },

  wc_reklamacja_wybor: {
    art: wymeldowanieArt,
    choices: [
      { label: 'Złóż reklamację', next: 'wc_reklamacja', setsFlag: { complained: true } },
      { label: 'Daj spokój', next: 'wc_wymeldowanie' },
    ],
  },

  wc_reklamacja: {
    art: reklamacjaArt,
    choices: [
      { label: 'Złóż i wyjdź', next: 'wc_koniec_c' },
    ],
  },

  wc_wymeldowanie: {
    art: wymeldowanieArt,
    choices: [
      { label: 'Wyjedź', next: 'wc_router' },
    ],
  },

  wc_router: {
    route: { flag: 'knocked', true: 'wc_koniec_b', false: 'wc_koniec_a' },
  },

  wc_koniec_a: {
    art: koniecArt,
    ending: true,
    endingLabel: 'Zakończenie I — Wróciłeś.',
    choices: [],
  },

  wc_koniec_b: {
    art: koniecBart,
    ending: true,
    endingLabel: 'Zakończenie II — Asymilacja.',
    choices: [],
  },

  wc_koniec_c: {
    art: koniecCart,
    ending: true,
    endingLabel: 'Zakończenie III — Zakaz wstępu.',
    choices: [],
  },

  wc_koniec_d: {
    art: koniecDart,
    ending: true,
    endingLabel: 'Zakończenie IV — Wyjechałeś wcześniej.',
    choices: [],
  },

}
