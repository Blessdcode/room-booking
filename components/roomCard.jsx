import React from "react";
import { Rooms } from "@/data/rooms";
import RoomsCards from "./roomsCards";
const RoomCard = () => {
  return (
    <div>
      {Rooms.map((room) => (
        <RoomsCards
          key={room.$id}
          name={room.name}
          description={room.description}
          capacity={room.capacity}
          image={room.image}
          room={room}
          address={address}
          price={price}
        />
      ))}
    </div>
  );
};

export default RoomCard;
