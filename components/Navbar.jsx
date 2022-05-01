import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import ReactTooltip from "react-tooltip";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between py-4 bg-[#6050AB] px-6 ">
      <Link href="/" passHref>
        <Image
          src="/img/logo.png"
          alt="Mojo Meal"
          width={176}
          height={42}
          className="cursor-pointer"
        />
      </Link>
      <div className="space-x-8 flex items-center">
        <a className="text-[#F7F7F7] visited:text-[#F7F7F7] " href="/trending">
          Trending
        </a>
        <a className="text-[#F7F7F7] visited:text-[#F7F7F7] " href="/offers">
          Offers
        </a>
        <a className="text-[#F7F7F7] visited:text-[#F7F7F7] " href="/all">
          All Locations
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => (window.location = "/help")}
          className="outline-none"
        >
          <ReactTooltip
            place="left"
            effect="solid"
            type="light"
            delayShow={100}
            delayHide={100}
          />
          <QuestionMarkCircleIcon
            data-tip="Help & Support"
            className="h-5 text-[#ECECEC] "
          />
        </button>
        <button className="relative">
          <ShoppingBagIcon className="h-7 w-7 text-[#F7F7F7]  " />
          <div className="absolute flex items-center justify-center bottom-[-5px] right-[-3px] w-4 h-4 bg-white rounded-full">
            <span className="text-[10px] font-semibold text-[#333333]">4</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
