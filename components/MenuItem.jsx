import Image from "next/image";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";

function MenuItem() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
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
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/img/food3.jpg"
            alt="Item"
            width={64}
            height={64}
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="font-medium">Item name</h1>
          <p className="text-sm">Item description goes here</p>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex items-center space-x-3 border rounded-lg p-2">
          <button onClick={incrementCount}>
            <PlusIcon className="h-6" />
          </button>
          <p>{count}</p>
          <button onClick={decrementCount}>
            <MinusIcon className="h-6" />
          </button>
        </div>
        <div className="flex items-center">
          <p className="font-medium">€ 5.70</p>
          {count >= 1 ? (
            <button onClick={nullCount}>
              <TrashIcon className="h-6 pl-2 text-red-300" />
            </button>
          ) : (
            <div className="px-4"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
