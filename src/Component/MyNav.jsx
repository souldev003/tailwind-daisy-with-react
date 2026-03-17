import React, { useState } from "react";
import { Circle, CircleX, Menu } from "lucide-react";

const MyNav = () => {
  const [openStatus, setOpen] = useState(false);

  return (
    <div
      className="flex justify-between items-center p-2.5
    "
    >
      {console.log(openStatus)}
      <div className="flex items-center gap-3">
        <div className="ml-3 lg:hidden" onClick={() => setOpen(!openStatus)}>
          {openStatus ? <CircleX /> : <Menu />}
        </div>
        <a className="btn btn-ghost text-xl">My Nav</a>
      </div>
      <ul className="hidden lg:flex lg:gap-3">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <div>
        <button className="btn btn-ghost btn-active">Button</button>
      </div>
    </div>
  );
};

export default MyNav;
