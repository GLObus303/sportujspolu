const Event = ({ params }: { params: { id: string } }) => (
  <div className="mt-20">My Event: {params.id}</div>
);

export default Event;
