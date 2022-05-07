import RestaurantCard from "./RestaurantCard";
import { LocationMarkerIcon, TrendingUpIcon } from "@heroicons/react/outline";

function RestaurantList() {
  return (
    <div className="w-full flex flex-col space-y-5 pt-4">
      <div className="pl-8 py-4">
        <div className="flex items-center space-x-2">
          <LocationMarkerIcon className="h-6" />
          <h1 className="uppercase text-lg font-semibold">
            Locations near you
          </h1>
        </div>
        <p className="text-sm opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
          arcu in pretium molestie.
        </p>
        <div className="flex items-center space-x-5 py-5 overflow-x-scroll h-80">
          <RestaurantCard
            src="/img/food2.jpg"
            title="McBurger's"
            description="Bada-ba-babaa we make burgers"
            rating="4.9"
            link="location/123"
          />
          <RestaurantCard
            src="/img/food1.jpg"
            title="Fresh Veggies"
            description="Get your fresh veggies and produce delivered"
            rating="4.7"
          />
          <RestaurantCard
            src="/img/food3.jpg"
            title="Pizza Brothers"
            description="Authentic Italian cuisine"
            rating="4.8"
          />
          <RestaurantCard
            src="/img/food2.jpg"
            title="McBurger's"
            description="Bada-ba-babaa we make burgers"
            rating="4.9"
          />
          <RestaurantCard
            src="/img/food1.jpg"
            title="Fresh Veggies"
            description="Get your fresh veggies and produce delivered"
            rating="4.7"
          />
          <RestaurantCard
            src="/img/food3.jpg"
            title="Pizza Brothers"
            description="Authentic Italian cuisine"
            rating="4.8"
          />
        </div>
      </div>
      <div className="pl-8 py-8">
        <div className="flex items-center space-x-2">
          <TrendingUpIcon className="h-6" />
          <h1 className="uppercase text-lg font-semibold">Trending now</h1>
        </div>
        <p className="text-sm opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
          arcu in pretium molestie.
        </p>
        <div className="flex items-center space-x-5 py-5 overflow-x-scroll h-80">
          <RestaurantCard
            src="/img/food3.jpg"
            title="Pizza Brothers"
            description="Authentic Italian cuisine"
            rating="4.8"
          />
          <RestaurantCard
            src="/img/food2.jpg"
            title="McBurger's"
            description="Bada-ba-babaa we make burgers"
            rating="4.9"
          />
          <RestaurantCard
            src="/img/food1.jpg"
            title="Fresh Veggies"
            description="Get your fresh veggies and produce delivered"
            rating="4.7"
          />
          <RestaurantCard
            src="/img/food3.jpg"
            title="Pizza Brothers"
            description="Authentic Italian cuisine"
            rating="4.8"
          />
          <RestaurantCard
            src="/img/food1.jpg"
            title="Fresh Veggies"
            description="Get your fresh veggies and produce delivered"
            rating="4.7"
          />
          <RestaurantCard
            src="/img/food2.jpg"
            title="McBurger's"
            description="Bada-ba-babaa we make burgers"
            rating="4.9"
          />
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;
