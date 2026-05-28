# Codexpol — Ideas & Improvements

## Copywriting — przegląd języka

Cały tekst wymaga przejścia pod kątem lekkości — miejscami za ciężko, za korporacyjnie.
Najlepiej razem: przeglądamy `pl.json` sekcja po sekcji, podrasowujemy na bieżąco.
`en.json` aktualizujemy po polskim — EN jest wtórny.

## Trust indicators

Pasek statystyk w Codexpol voice, np.:
*"37 lat na rynku. 5 produktów. 1 incydent z drukarką."*

## Blog firmowy

Decyzja: najprawdopodobniej **tylko lore** — nie budować technicznie, tylko wspomnieć że istniał.
*"Bożenka prowadziła firmowego bloga w latach 2009–2011. Zostały trzy posty."* — najbardziej Codexpol.

Jeśli jednak budować: bohaterowie jako autorzy (Bożenka, Marta, Mariusz który napisał jeden post o strategii i zniknął).

## Nowe sekcje

- [ ] Client testimonials — 3–4 made-up quotes, dry Codexpol humor style
  - for Skill Issue, office software, or both?
  - ideas: "Nasze CV przestały wyglądać jak formularze ZUS.", "System działa. Nie pytamy jak.", "Bożenka powiedziała żebyśmy wzięli. Wzięliśmy."

## Software biurowy — produkty

Strona `/produkty` istnieje z 7 produktami (SIGMA FK, HERMES, TECZKA 95, KOM-BIT, VATOWIEC, ZAPORA, LEGACY).

Brainstorm dodatkowych nazw na przyszłość (nie budować — lore):

Biuromat PRO, InterKadry 2000, Kancelista, RejestrX, Kadrowiec GT Turbo, JANUSZ ERP,
Wilczek Suite, Płatnik Bis, MAGAZYN.EXE, BiuroSQL, Papirus FK, INFOSYSTEM Tulipan,
SOFT-PROJEKT Handel, MATRIX Finanse i Księgowość, MERKURY ERP, RAMZES 7,
Fakturownik Plus, BiurSoft ERP, Ewidencja.NET, MikroFakt, Księga Plus 4, FIRMA 2001,
Sekretariat PRO MAX, OptiKadry, e-Deklarant, Druczek Gold, COMP-EXPERT FK,
VARIANT Kadry, KOMA Ewidencja, DATA-BIT HR

Tagline przykłady (styl Codexpol):
- "Liczy wynagrodzenia od 1995. Miliony przelewów. Zdecydowana większość — poprawna."
- "Bo papier gdzieś musi leżeć. Od 2001 leży u nas."
- "Hania szukała właśnie tego formularza, kiedy znalazła Skill Issue."
- "Teczki. Ale w komputerze. Zgodne z RODO — zapytaj prawnika, nie nas."

## Team — pozostałe

- [ ] Hania easter egg card na `/kadry` — portret do wygenerowania
- [ ] Zdecydować co zrobić z `polish_team.png` — hero albo origin section?
- [ ] English personas (Carol, Lauren, Chloe) — wire up when EN subpage is needed

## Content

- [ ] Skill Issue CTAs — zamienić anchor linki na prawdziwy URL po deployu
- [ ] Origin story section — przywrócić gdy Skill Issue będzie live?
- [ ] EN translations — przegląd tonu (obecnie zbyt dosłowne, mogłoby być śmieszniejsze)

## Tech

- [ ] `VITE_API_URL` / prod build config when deploying
- [ ] OG tags / social preview image
- [ ] Analytics — dodać jeśli potrzebne (Bożenka by uznała cookie bannery za irytujące)
