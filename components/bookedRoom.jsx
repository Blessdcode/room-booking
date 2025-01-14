"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BookedRoom = () => {
  const [bookedRoom, setBookedRoom] = useState([]);

  useEffect(() => {
    const storedRoom = JSON.parse(localStorage.getItem("bookedRoom")) || [];
    setBookedRoom(Array.isArray(storedRoom) ? storedRoom : [storedRoom]);
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("bookedRoom");
    alert("Room deleted successfully");
  };

  return (
    <div>
      {bookedRoom.length === 0 ? (
        <p>No room has been booked yet.</p>
      ) : (
        <div>
          {bookedRoom.map((room) => (
            <div key={room.$id}>
              <div className="bg-white shadow rounded-lg p-6">
                <Link
                  href="/"
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
                        <span className="font-semibold text-gray-800">
                          Size:{" "}
                        </span>{" "}
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
                        <span className="font-semibold text-gray-800">
                          Price:{" "}
                        </span>
                        ${room.price}/hour
                      </li>
                      <li>
                        <span className="font-semibold text-gray-800">
                          Address:{" "}
                        </span>{" "}
                        {room.address}
                      </li>
                    </ul>
                    <button
                      className="mt-7 bg-red-700 p-2 rounded-lg hover:bg-red-500 text-white "
                      onClick={handleDelete}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedRoom;
