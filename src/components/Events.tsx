type Event = {
  id: number;
  sport: string;
  name: string;
};

export const Events = ({ events }: { events: Event[] }) => (
  <>
    <section className="flex h-hero min-h-300 items-center justify-center">
      <h1 className="text-center text-3xl">Už nikdy nesportuj sám</h1>
    </section>
    <section className="grid grid-cols-1 gap-x-20 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map(({ id, sport, name }) => (
        <article
          className="flex h-article flex-col justify-between bg-primary p-4"
          key={id}
        >
          <p>{sport}</p>
          <span className="flex items-center justify-between">
            <p>od: {name}</p>
            <button className=" transition-property: background-color transition-duration: 0.3s transition-timing-function: h-rounded bg-secondary px-4 py-2 text-white ease-in-out hover:bg-tertiary">
              Otevřít
            </button>
          </span>
        </article>
      ))}
    </section>
  </>
);
