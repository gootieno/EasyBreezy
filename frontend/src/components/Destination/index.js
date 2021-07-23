import React, { useState } from "react";
import Event from "../../components/Event";

function Destination() {
  const [events, setEvents] = useState([1, 2, 3, 4]);

  return (
    <>
      {events.map((event) => (
        <>
          <Event event={event} />
          <br />
        </>
      ))}
    </>
  );
}

export default Destination;
