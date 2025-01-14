import BookedRoom from "@/components/bookedRoom";
import React from "react";

export default function pages() {
  
  return (
    <div className="">
      <h2 className="font-semibold my-8 sm:text-[32px] text-[18px]  sm:leading-[46.8px] leading-[21.8px] w-full capitalize border-b-2 border-gray-600">
        Rooms Booked
      </h2>
      <BookedRoom />
    </div>
  );
}
