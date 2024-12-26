
import React from "react";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export default function navbar() {
  return (
    <nav>
      <div className="hidden mx-auto md:block">
        <NavbarDesktop/>
      </div>
      <div className="md:hidden">
        <NavbarMobile/>
      </div>
    </nav>
  );
}