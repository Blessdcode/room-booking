import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <div className={`${styles.flexBetween} gap-3`}>
        <Link href="/">
          <Image
            src="/static/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className=" cursor-pointer"
          />
        </Link>
        {/* <Link href="/rooms">
          <span className="text-xl hover:text-slate-400">Rooms</span>
        </Link> */}
        <Link href="/bookings">
          <span className="text-xl hover:text-slate-400">Bookings</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
