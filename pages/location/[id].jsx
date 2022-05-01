import Image from "next/image";
import {
  ThumbUpIcon,
  CurrencyEuroIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import MenuItem from "../../components/MenuItem";

function Location() {
  const restaurant = {
    id: 1,
    img: "/img/food2.jpg",
    name: "McBurger's",
    description: "Bada-ba-babaa we make burgers",
    rating: "4.9",
  };

  return (
    <div className="px-5 md:px-10 py-8 flex flex-col items-center">
      <div className="w-full max-w-7xl shadow-lg border rounded-xl pb-5">
        {/* Restaurant Information */}
        <div className="flex flex-col">
          <div className="relative w-full h-[300px] rounded-t-xl shadow-lg">
            <Image
              src={restaurant.img}
              alt={restaurant.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl pointer-events-none"
            />
          </div>
          <div className="py-5 px-5 space-y-2">
            <h1 className="text-3xl font-medium">{restaurant.name}</h1>
            <p className="text-sm opacity-80">{restaurant.description}</p>
            <div className="flex space-x-1 opacity-80">
              <ThumbUpIcon className="h-5" />
              <p>{restaurant.rating}</p>
            </div>
            <div className="flex space-x-1">
              <CurrencyEuroIcon className="h-5" />
              <p className="text-sm">Orders from € 9.00</p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full flex items-center justify-center pt-3 pb-2">
          <div className="w-[90%] h-[1px] bg-gray-100"></div>
        </div>
        {/* Menu Section */}
        <section className="flex px-5 space-x-5 py-8">
          {/* Menu Column */}
          <div className="w-2/3 px-5 py-3 border rounded-lg">
            <MenuItem />
          </div>
          {/* Sidebar */}
          <div className="w-1/3 px-5 py-3 border rounded-lg">
            <div className="flex space-x-2 items-center pb-2">
              <ClipboardCheckIcon className="h-5" />
              <h3 className="text-lg font-medium">Your order</h3>
            </div>
            <p className="text-sm">Choose the items you would like to order</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Location;
