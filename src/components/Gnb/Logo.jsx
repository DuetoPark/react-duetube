import React from "react";
import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";

export default function Logo() {
  return (
    <h1 className="group">
      <Link
        to="/"
        className="flex flex-nowrap gap-x-1 items-center text-2xl font-bold"
      >
        <AiFillYoutube className="text-purple-600 text-3xl group-hover:text-purple-400" />
        Duetube
      </Link>
    </h1>
  );
}
