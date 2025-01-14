import RoomsCards from "@/components/roomsCards";
import { Rooms } from "@/data/rooms";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1 className="font-semibold my-8 sm:text-[40px] text-[38px] sm:leading-[70.8px] leading-[41.8px] w-full capitalize border-b-2 border-gray-600">
          Available Rooms
        </h1>
        {Rooms.map((room) => (
          <RoomsCards
            key={room.$id}
            name={room.name}
            description={room.description}
            capacity={room.capacity}
            image={room.image}
            room={room}
            address={room.address}
            price={room.price}
            id={room.$id}
            availability={room.availability}
            sqft={room.sqft}
            location={room.location}
          />
        ))}
      </main>
    </div>
  );
}
