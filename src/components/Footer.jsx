import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10  px-5  ">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs  ">
            More ways to shop:
            {"  "}
            <span className="underline text-blue">
              Find an Apple store {"   "}
            </span>
            or
            <span className="underline text-blue">
              other retailer near you {"   "}
            </span>
          </p>
          <p className="font-semibold text-gray text-xs">
            or call 000-000-8844
          </p>

          <div className="bg-neutral-700 my-5 h-[1px] w-full" />

          <div className="flex flex-col md:flex-row    md:items-center justify-between">
            <div className="flex">
              {footerLinks.map((link, i) => (
                <p key={link} className="font-semibold text-gray text-xs">
                  {link} {"  "}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2"> | </span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
