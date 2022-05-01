import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

function Featured({ title, description, src }) {
  const [index, setIndex] = useState(0);
  const images = ["/img/food3.jpg", "/img/food1.jpg", "/img/food2.jpg"];

  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    } else if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
    console.log(index);
  };

  return (
    <section className="relative w-full overflow-hidden flex items-center">
      <div className="overflox-x-scroll flex">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-screen relative h-[70vh] md:h-[50vh] flex duration-1000 ease-in-out"
            style={{
              transform: `translateX(${-100 * index}vw)`,
            }}
          >
            <Image
              src={img}
              alt="Placeholder"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute left-5 ">
        <button onClick={() => handleArrow("left")}>
          <ChevronLeftIcon className="h-16 text-slate-400" />
        </button>
      </div>
      <div className="absolute right-5 ">
        <button onClick={() => handleArrow("right")}>
          <ChevronRightIcon className="h-16 text-slate-400" />
        </button>
      </div>
    </section>
  );
}

export default Featured;
