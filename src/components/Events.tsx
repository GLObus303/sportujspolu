export const mockEvents = [
  {
    id: 1,
    name: "Vendy",
    sport: "Basketball",
  },
  {
    id: 2,
    name: "Lukas",
    sport: "Football",
  },
  {
    id: 3,
    name: "Honza",
    sport: "Tennis",
  },
  {
    id: 4,
    name: "Vendy",
    sport: "Box",
  },
  {
    id: 5,
    name: "Lukas",
    sport: "Skydiving",
  },
  {
    id: 6,
    name: "Johana",
    sport: "Jogging",
  },
];

export const Events: React.FC = () => (
  <>
    {mockEvents.map(({ id, sport, name }) => (
      <article key={id}>
        <p>{sport}</p>
        <p>od: {name}</p>
        <button>Otevřít</button>
      </article>
    ))}
  </>
);
