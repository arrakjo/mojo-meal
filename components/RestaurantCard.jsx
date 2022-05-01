import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function RestaurantCard({ src, title, description, rating }) {
  return (
    <div className="flex cursor-pointer flex-col h-[240px] w-[240px] min-w-[240px] bg-white rounded-lg shadow-2xl shadow-gray-200 hover:shadow-gray-300 duration-200 ease-in-out">
      <div className="relative h-3/5 rounded-t-lg">
        <Image
          src={src}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-2">
        <h1 className="font-medium">{title}</h1>
        <p className="text-sm opacity-80 truncate">{description}</p>
        <div className="flex items-center justify-between mt-2 space-x-1">
          <div className="flex space-x-1">
            <ThumbUpIcon className="h-5 opacity-80" />
            <p className="text-sm font-medium opacity-80">{rating}</p>
          </div>
          <p className="text-sm font-medium opacity-80">
            €€<span className="opacity-40">€</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
