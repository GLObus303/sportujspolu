export const mockEvents = [
  {
    id: 'vd4n9cfhtlxj',
    name: 'Brněnský Večerní Běh: 5km Zábava pro Každého!',
    sport: 'Běh',
    date: '2023-06-20T18:00:00Z',
    location: 'Brno',
    price: 130,
    description:
      'Večerní běžecký závod přímo v centru Brna. Ideální pro začátečníky i pokročilé běžce!',
    level: 'Any',
    createdAt: '2023-04-15T10:00:00Z',
  },
  {
    id: 'bx4k8dfj3lx2',
    name: 'Brněnský Ranní Sprint: Běžecký Závod',
    sport: 'Běh',
    date: '2023-08-15T06:00:00Z',
    location: 'Brno',
    price: 250,
    description:
      'Ideální způsob, jak začít váš den! Připojte se k nám pro ranní sprint v srdci Brna.',
    level: 'Intermediate',
    createdAt: '2023-05-10T09:30:00Z',
  },
  {
    id: 'gh5m8dkl4op3',
    name: 'Maraton Brno: Výzva pro Běžce',
    sport: 'Běh',
    date: '2023-09-10T07:00:00Z',
    location: 'Brno',
    price: 350,
    description:
      'Přidejte se k nám na ročním maratonu v Brně. Otestujte své hranice na této klasické trase!',
    level: 'Advanced',
    createdAt: '2023-02-20T08:00:00Z',
  },
  {
    id: 'lk2j4bhr8ty5',
    name: 'Brněnský Půlmaraton: Poloviční Délka, Plná Zábava',
    sport: 'Běh',
    date: '2023-10-05T09:00:00Z',
    location: 'Brno',
    price: 300,
    description:
      'Ideální běžecká událost pro ty, kteří se chtějí pustit do výzvy půlmaratonu. Přijďte a běžte s námi!',
    level: 'Intermediate',
    createdAt: '2023-03-12T12:00:00Z',
  },
  {
    id: 'pr8q9fj6ukm7',
    name: 'Brněnský Běh přes Překážky: Adrenalin a Zábava',
    sport: 'Běh',
    date: '2023-07-25T16:00:00Z',
    location: 'Brno',
    price: 280,
    description:
      'Zkuste něco nového s naším během přes překážky. Vhodné pro všechny věkové skupiny!',
    level: 'Any',
    createdAt: '2023-06-01T14:00:00Z',
  },
  {
    id: 'nm7u8i9oklp0',
    name: 'Noční Běh Brno: Prozkoumejte Město Jinak',
    sport: 'Běh',
    date: '2023-11-18T20:00:00Z',
    location: 'Brno',
    price: 320,
    description:
      'Ponořte se do kouzla nočního Brna s naším nočním během. Závod pro všechny úrovně!',
    level: 'Any',
    createdAt: '2023-07-22T17:00:00Z',
  },
  {
    id: 'nm7u8i9oklp0',
    name: 'Noční Běh Brno: Prozkoumejte Město Jinak',
    sport: 'Běh',
    date: '2023-11-18T20:00:00Z',
    location: 'Brno',
    price: 320,
    description:
      'Ponořte se do kouzla nočního Brna s naším nočním během. Závod pro všechny úrovně!',
    level: 'Any',
    createdAt: '2023-07-22T17:00:00Z',
  },
  {
    id: 'xy4z5afg6hj7',
    name: 'Brněnský Víkendový Běh: Rodinná Zábava',
    sport: 'Běh',
    date: '2023-08-28T10:00:00Z',
    location: 'Brno',
    price: 150,
    description:
      'Užijte si víkendový rodinný běh v krásném prostředí Brna. Vhodné pro všechny věkové skupiny!',
    level: 'Beginner',
    createdAt: '2023-05-15T11:30:00Z',
  },
];

export const mockEvent = {
  id: 1,
  name: 'Brněnský Sportovní Běh: Závody pro Všechny Věkové Kategorie!',
  sport: 'Běh',
  date: '2023-08-28T10:00:00Z',
  location: 'Brno',
  price: 150,
  description:
    'Přijďte s přáteli a zažijte vzrušující den plný sportu a dobrodružství v rámci Brněnského Sportovního Běhu! Tato událost je otevřena všem věkovým kategoriím, takže vás zveme, abyste se připojili a vytvořili týmy pro štafetový závod.<br><br> Prozkoumáte jeden z našich krásných brněnských parků, závodíte a soupeříte s ostatními týmy, ale také se těšíte na společný čas strávený v přírodě. Spolupráce a týmový duch jsou klíčovými slovy této události, takže přijďte a podpořte se navzájem v dosažení společného cíle.',
  level: 'Beginner',
  createdAt: '2023-05-15T11:30:00Z',
  // not in API
  rating: 3.7,
  image: '/images/running/5.avif',
  allSpots: 10,
  freeSpots: 5,
  duration: 60,
  allDates: [
    '2023-08-28T10:00:00Z',
    '2023-08-29T10:00:00Z',
    '2023-08-30T10:00:00Z',
  ],
};

export const mockEventOwner = {
  id: '2tjsxi7028a7',
  email: 'tereza@beh.cz',
  name: 'Terezou',
  since: '2021',
  description:
    'Ahoj, jsem Tereza, váš průvodce světem běhu. Běh pro mě není jen sport, ale cesta k sebepoznání a osobní svobodě. Před deseti lety jsem si obula své první běžecké boty a nebyla jsem si tehdy ještě vědoma, jak velkou změnu to přinese do mého života. <br><br> Od té doby jsem v běhu našla nejen své štěstí a sílu, ale také nekonečnou inspiraci a životní rovnováhu, kterou se s vámi chci podělit. Když se rozjímám nad svým běžeckým putováním, vidím, jak každý kilometr, který jsem uběhla, mě něčemu naučil. <br><br> O pocitu svobody, když si protáhnete nohy na čerstvém vzduchu, o odhodlání, které je potřeba pro zdolání dalšího kopce, o radosti z překonání vlastních hranic a o významu odpočinku a regenerace. A právě tyto zkušenosti a poznatky chci předávat dál.',
  image: '/images/running/1.avif',
  rating: 4.8,
  reviewsCount: 16,
  reviews: [
    {
      id: '1',
      name: 'Petr',
      date: 'červen 2023',
      image: '/images/running/3.avif',
      rating: 4.5,
      comment:
        'Měl jsem úžasný zážitek, který mě opravdu oslovil. Doporučuji všem, kteří hledají kvalitní zábavu. Celkově to byl nezapomenutelný zážitek.',
    },
    {
      id: '2',
      name: 'Jana',
      image: '/images/running/2.avif',
      date: 'červen 2023',
      rating: 5,
      comment:
        'Tento zážitek byl skutečně skvělý a překonal mé očekávání. Moc se mi líbilo vše od začátku do konce. Určitě bych se ráda zúčastnila znovu. Tento zážitek byl skutečně skvělý a překonal mé očekávání. Moc se mi líbilo vše od začátku do konce. Určitě bych se ráda zúčastnila znovu. Tento zážitek byl skutečně skvělý a překonal mé očekávání. Moc se mi líbilo vše od začátku do konce. Určitě bych se ráda zúčastnila znovu.',
    },
    {
      id: '3',
      name: 'Pavel',
      image: '/images/running/1.avif',
      date: 'červen 2023',
      rating: 3.9,
      comment:
        'Zážitek byl celkem v pohodě, ale měl jsem několik výhrad. Myslím, že s několika vylepšeními by mohl být mnohem lepší. Přesto jsem rád, že jsem se zúčastnil.',
    },
  ],
};
