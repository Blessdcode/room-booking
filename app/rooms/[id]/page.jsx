import BookRoom from "@/components/bookRoom";
import { Rooms } from "@/data/rooms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  const room = Rooms.find((room) => room.$id === id);
  console.log(room);

  return (
    <div>
      <h2 className="font-semibold my-8 sm:text-[32px] text-[18px]  sm:leading-[46.8px] leading-[21.8px] w-full capitalize border-b-2 border-gray-600">
        Rooms Details
      </h2>
      <div className="bg-white shadow rounded-lg p-6">
        <Link
          href="/rooms"
          className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <span className="ml-2">Back to Rooms</span>
        </Link>

        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={`/static/rooms/${room.image}`}
            alt={`${room.name}-${room.id}`}
            width={100}
            height={100}
            objectFit="cover"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/+ZNPQAIoQM4xp5zkgAAAABJRU5ErkJggg=="
            placeholder="blur"
            className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
          />

          <div className="mt-4 sm:mt-0 sm:flex-1">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {room.name}
            </h3>
            <p className="text-gray-600 mb-4">{room.description}</p>

            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-gray-800">Size: </span>{" "}
                {room.sqft}
                sq ft
              </li>
              <li>
                <span className="font-semibold text-gray-800">
                  Availability:
                </span>
                {room.availability}
              </li>
              <li>
                <span className="font-semibold text-gray-800">Price: </span>$
                {room.price}/hour
              </li>
              <li>
                <span className="font-semibold text-gray-800">Address: </span>{" "}
                {room.address}
              </li>
            </ul>
          </div>
        </div>

        <BookRoom room={room} />
      </div>
    </div>
  );
};

export default page;
