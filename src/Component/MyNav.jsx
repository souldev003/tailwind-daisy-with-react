import React, { useState } from "react";
import { Circle, CircleX, Key, Menu } from "lucide-react";

const MyNav = ({ itemList }) => {
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

        <ul
          className={`${openStatus ? "block" : "hidden"} transform duration-1000 ease-in-out absolute left-11 top-28.75`}
        >
          {itemList.map((item) => (
            <li key={item.id}>{item.item}</li>
          ))}

          {/* <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li> */}
        </ul>

        <a className="btn btn-ghost text-xl">My Nav</a>
      </div>
      <ul className={`hidden lg:flex lg:gap-3`}>
        {itemList.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
      <div>
        <button className="btn btn-ghost btn-active">Button</button>
      </div>
    </div>
  );
};

export default MyNav;
