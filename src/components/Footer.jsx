"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 h-40 mt-5">
      <div className="flex justify-around ">
        <div className="flex flex-col justify-center text-center ">
          <h1 className="text-3xl ">Welcome to work manager</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
          </p>
        </div>
        <div className="text-center mt-4">
          <h1>Important Links</h1>
          <ul className="flex flex-col justify-center text-center">
            <li>
              <a href="#!">Facebook</a>
            </li>
            <li>
              <a href="#!">Youtube</a>
            </li>
            <li>
              <a href="#!">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
