import Image from "next/image";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";

function MenuItem({ state }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count === 99) {
      setCount(99);
    } else {
      setCount(count + 1);
    }
  };
  const decrementCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const nullCount = () => {
    setCount(0);
  };

  return (
    <div
      onClick={state}
      className="flex relative p-3 rounded-lg cursor-pointer justify-between items-center hover:shadow-lg hover:shadow-gray-100 hover:z-40 border hover:border-[#ECECEC] border-white duration-150"
    >
      <div className="flex space-x-3 items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/img/food3.jpg"
            alt="Item"
            width={184}
            height={126}
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="px-4">
          <h1 className="font-medium text-xl mb-3">Item name</h1>
          <p className="text-sm max-w-[530px]">
            Item description goes here Item description goes here Item
            description goes here
          </p>
          <p className="font-medium mt-1">€5.70</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
