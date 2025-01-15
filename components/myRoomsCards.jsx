import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyRoomsCards = ({
  name,
  image,
  description,
  capacity,
  address,
  price,
  id,
  availability,
}) => {
  return (
    <div className="m-auto rounded-xl border-gray-400 shadow-2xl">
      <div className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col  justify-between items-start ">
        {/* <div className="flex flex-col sm:flex-row sm:space-x-4"> */}
          <div className="md:w-[440px] w-full">
            <Image
              src={`/static/rooms/${image}`}
              alt={`${name}-${id}`}
              width={100}
              height={100}
              className="w-full mb-3 sm:mb-0 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Address:</span>{" "}
              {address}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">
                {" "}
                Availability:
              </span>
              {availability}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Price:</span>$
              {price}/hour
            </p>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
              <Link
                href={`/rooms/${id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700">
                View Room
              </Link>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MyRoomsCards;
