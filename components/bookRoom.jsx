"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const initialFormData = {
  check_in_date: "",
  check_in_time: "",
  check_out_date: "",
  check_out_time: "",
};

const BookRoom = ({ room }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const { check_in_date, check_in_time, check_out_date, check_out_time } =
    formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const bookingData = { ...room, ...formData };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!room.$id) return;
    if ("booked" in localStorage) {
      alert("Already booked!");

      return;
    }
    
    localStorage.setItem("bookedRoom", JSON.stringify(bookingData));
    alert("Room Booked!");
    setFormData(initialFormData);
    router.push("/bookings");
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Book this Room</h2>
      <form className="mt-4" onSubmit={handelSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="check_in_date"
              className="block text-sm font-medium text-gray-700">
              Check-In Date
            </label>
            <input
              type="date"
              id="check_in_date"
              name="check_in_date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              value={check_in_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="check_in_time"
              className="block text-sm font-medium text-gray-700">
              Check-In Time
            </label>
            <input
              type="time"
              id="check_in_time"
              name="check_in_time"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              value={check_in_time}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="check_out_date"
              className="block text-sm font-medium text-gray-700">
              Check-Out Date
            </label>
            <input
              type="date"
              id="check_out_date"
              name="check_out_date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              value={check_out_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="check_out_time"
              className="block text-sm font-medium text-gray-700">
              Check-Out Time
            </label>
            <input
              type="time"
              id="check_out_time"
              name="check_out_time"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              value={check_out_time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
            Book Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookRoom;
