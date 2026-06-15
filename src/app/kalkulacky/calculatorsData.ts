export type CalculatorCategory = 'beh' | 'fitness' | 'vyziva';

export type CalculatorFaq = {
  question: string;
  answer: string;
};

export type CalculatorData = {
  slug: string;
  title: string;
  description: string;
  category: CalculatorCategory;
  intro: string;
  disclaimer?: string;
  faq: CalculatorFaq[];
  relatedSlugs: string[];
};

export const calculatorCategoryLabels: Record<CalculatorCategory, string> = {
  beh: 'Běh a vytrvalost',
  fitness: 'Fitness a síla',
  vyziva: 'Výživa',
};

export const calculatorsData: CalculatorData[] = [
  {
    slug: 'tempo-behu',
    title: 'Kalkulačka běžeckého tempa',
    description:
      'Vypočítej si běžecké tempo z vzdálenosti a času. Zjisti průměrné min/km a rychlost v km/h.',
    category: 'beh',
    intro:
      '<p>Zadej vzdálenost a celkový čas běhu a kalkulačka ti ukáže průměrné tempo v min/km i rychlost v km/h. Hodí se pro trénink i plánování závodů.</p>',
    faq: [
      {
        question: 'Co je běžecké tempo?',
        answer:
          'Tempo vyjadřuje, kolik minut běžíš na jeden kilometr (min/km). Nižší číslo znamená rychlejší běh.',
      },
      {
        question: 'Jak zadat čas?',
        answer:
          'Zadej celkový čas v minutách, například 50 pro 50 minut, nebo 62,5 pro 1 hodinu a 2,5 minuty.',
      },
    ],
    relatedSlugs: ['predikce-casu-zavodu', 'srdni-zony', 'spalene-kalorie'],
  },
  {
    slug: 'predikce-casu-zavodu',
    title: 'Predikce času závodu',
    description:
      'Odhadni čas delší trasy podle výsledku z kratšího závodu. Vzorec Riegel pro běžce.',
    category: 'beh',
    intro:
      '<p>Na základě času z kratší trasy odhadneš očekávaný čas na delší vzdálenost. Výpočet využívá Riegelův vzorec, který běžci běžně používají pro plánování maratonu nebo půlmaratonu.</p>',
    faq: [
      {
        question: 'Jak funguje Riegelův vzorec?',
        answer:
          'Predikce vychází z poměru vzdáleností a exponentu 1,06. Čím delší trasa, tím větší únava — proto odhad není lineární.',
      },
      {
        question: 'Jak zadat čas?',
        answer:
          'Formát mm:ss, například 25:00 pro 25 minut, nebo h:mm:ss pro delší časy.',
      },
    ],
    relatedSlugs: ['tempo-behu', 'srdni-zony'],
  },
  {
    slug: 'srdni-zony',
    title: 'Kalkulačka srdečních zón',
    description:
      'Vypočítej tréninkové zóny podle metody Karvonen. Ideální pro běh, cyklistiku i plavání.',
    category: 'beh',
    intro:
      '<p>Tréninkové zóny ti pomohou řídit intenzitu podle srdeční frekvence. Metoda Karvonen zohledňuje klidovou tepovou frekvenci a maximální tep.</p>',
    disclaimer:
      'Výsledky jsou orientační a nenahrazují lékařské vyšetření. Před intenzivním tréninkem se poraď se svým lékařem.',
    faq: [
      {
        question: 'Co je metoda Karvonen?',
        answer:
          'Počítá cílovou tepovou frekvenci z tepové rezervy (max − klid) a procenta intenzity.',
      },
      {
        question: 'Jak odhadnout maximální tep?',
        answer:
          'Pokud neznáš svůj max, použij odhad 220 − věk. Přesnější je max změřený na zátěžovém testu.',
      },
    ],
    relatedSlugs: ['tempo-behu', 'spalene-kalorie'],
  },
  {
    slug: 'bmi',
    title: 'BMI kalkulačka',
    description:
      'Spočítej si body mass index (BMI) z výšky a váhy. Orientační ukazatel tělesné hmotnosti.',
    category: 'fitness',
    intro:
      '<p>BMI (body mass index) je jednoduchý poměr váhy a výšky. U sportovců s vyšší svalovou hmotou může být výsledek zkreslený — ber ho jako orientační ukazatel.</p>',
    disclaimer:
      'BMI není diagnostický nástroj. Výsledek nenahrazuje lékařské posouzení. U sportovců zohledni i složení těla.',
    faq: [
      {
        question: 'Jaké BMI je normální?',
        answer: 'Obecně se za normální považuje BMI 18,5–24,9.',
      },
      {
        question: 'Platí BMI pro sportovce?',
        answer:
          'U silových a vytrvalostních sportovců s vyšší svalovou hmotou může BMI nadhodnocovat „nadváhu“.',
      },
    ],
    relatedSlugs: ['tdee', 'makra'],
  },
  {
    slug: 'tdee',
    title: 'Kalkulačka denního příjmu kalorií (TDEE)',
    description:
      'Zjisti doporučený denní příjem kalorií podle váhy, výšky, věku a aktivity. Vzorec Mifflin-St Jeor.',
    category: 'vyziva',
    intro:
      '<p>TDEE (Total Daily Energy Expenditure) odhaduje, kolik kalorií denně spálíš včetně pohybu. Výpočet využívá Mifflin-St Jeor pro bazální metabolismus a násobič aktivity.</p>',
    disclaimer:
      'Výsledek je orientační odhad. Individuální potřeby se liší — pro dietní plán se poraď s odborníkem.',
    faq: [
      {
        question: 'Co je TDEE?',
        answer:
          'Celkový denní výdej energie — kalorie, které tělo spálí za den včetně všech aktivit.',
      },
      {
        question: 'Jak zvolit úroveň aktivity?',
        answer:
          'Střední = pravidelný sport 3–5× týdně. Velmi aktivní = intenzivní trénink téměř denně.',
      },
    ],
    relatedSlugs: ['makra', 'spalene-kalorie', 'bmi'],
  },
  {
    slug: 'spalene-kalorie',
    title: 'Kalkulačka spálených kalorií',
    description:
      'Odhad spálených kalorií podle sportu, váhy a délky aktivity. MET hodnoty pro 29 sportů.',
    category: 'vyziva',
    intro:
      '<p>Spočítej, kolik kalorií přibližně spálíš při různých sportech. Výpočet využívá MET hodnoty — standardizovaný odhad intenzity aktivity.</p>',
    faq: [
      {
        question: 'Co je MET?',
        answer:
          'Metabolický ekvivalent — 1 MET odpovídá klidovému metabolismu. Běh má typicky 8–10 MET.',
      },
      {
        question: 'Jak přesný je odhad?',
        answer:
          'Závisí na intenzitě, terénu a kondici. Ber výsledek jako orientační, ne přesný údaj.',
      },
    ],
    relatedSlugs: ['tdee', 'tempo-behu', 'srdni-zony'],
  },
  {
    slug: '1rm',
    title: 'Kalkulačka 1RM (maximální váha)',
    description:
      'Odhadni své maximum na jedno opakování z váhy a počtu opakování. Vzorec Epley.',
    category: 'fitness',
    intro:
      '<p>1RM je maximální váha, kterou zvládneš na jedno opakování. Kalkulačka odhadne 1RM z submaximálního tréninku (např. 5 opakování) podle Epleyho vzorce.</p>',
    faq: [
      {
        question: 'K čemu slouží 1RM?',
        answer:
          'Pro plánování tréninkových sérií — většina programů pracuje s procenty od 1RM.',
      },
      {
        question: 'Je bezpečné testovat 1RM?',
        answer:
          'Přímý test 1RM vyžaduje zkušenost a rozcvičku. Odhad ze submaximální váhy je bezpečnější alternativa.',
      },
    ],
    relatedSlugs: ['bmi', 'makra'],
  },
  {
    slug: 'makra',
    title: 'Kalkulačka maker a bílkovin',
    description:
      'Rozdělení denního příjmu na bílkoviny, sacharidy a tuky podle váhy a aktivity.',
    category: 'vyziva',
    intro:
      '<p>Na základě denního příjmu kalorií (TDEE) ti kalkulačka navrhne rozdělení maker. Bílkoviny jsou počítány 2 g na kg tělesné váhy, tuky 25 % kalorií, zbytek sacharidy.</p>',
    disclaimer:
      'Makro rozdělení je orientační. Pro specifické cíle (hubnutí, nabírání) se poraď s výživovým poradcem.',
    faq: [
      {
        question: 'Kolik bílkovin potřebuji?',
        answer:
          'Aktivní sportovci obvykle potřebují 1,6–2,2 g bílkovin na kg váhy denně.',
      },
      {
        question: 'Proč 25 % tuků?',
        answer:
          '25 % je běžné minimum pro hormonální rovnováhu. Můžeš upravit podle preferencí.',
      },
    ],
    relatedSlugs: ['tdee', 'bmi', 'spalene-kalorie'],
  },
];

export const findCalculator = (slug: string) =>
  calculatorsData.find((calculator) => calculator.slug === slug);

export const getAllCalculatorSlugs = () =>
  calculatorsData.map((calculator) => calculator.slug);

export const getCalculatorsByCategory = (category: CalculatorCategory) =>
  calculatorsData.filter((calculator) => calculator.category === category);
