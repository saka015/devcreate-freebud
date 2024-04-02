import React from "react";
import { Divider } from "@nextui-org/react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full bg-black p-8 text-white">
        <div className="text">
          <div className="flex flex-wrap justify-between gap-4 px-4 py-2">
            <ul>
              <li className="mr-4">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "200px", height: "auto" }}
                />
              </li>
            </ul>
            <ul className="gap-y-3">
              <li className="mr-4">Features</li>
              <li className="mr-4">Analytics</li>
            </ul>
            <ul>
              <li className="mr-4">Resources</li>
              <li className="mr-4">Blog</li>
              <li className="mr-4">Developers</li>
              <li className="mr-4">Support</li>
            </ul>
            <ul>
              <li className="mr-4">Company</li>
              <li className="mr-4">About</li>
              <li className="mr-4">Our team</li>
              <li className="mr-4">Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
