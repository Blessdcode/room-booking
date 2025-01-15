import React from "react";
import styles from "@/styles";
import { Rooms } from "@/data/rooms";
import MyRoomsCards from "@/components/myRoomsCards";

const pages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
      {Rooms.map((room) => (
        <MyRoomsCards
          key={room.$id}
          name={room.name}
          description={room.description}
          capacity={room.capacity}
          image={room.image}
          room={room}
          address={room.address}
          price={room.price}
        />
      ))}
    </div>
  );
};

export default pages;
