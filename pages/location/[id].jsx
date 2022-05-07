import Image from "next/image";
import {
  ThumbUpIcon,
  CurrencyEuroIcon,
  ClipboardCheckIcon,
  XIcon,
} from "@heroicons/react/outline";
import MenuItem from "../../components/MenuItem";
import {
  Checkbox,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

function Location() {
  const [modal, setModal] = useState(false);
  const [scroll, setScroll] = useState("body");

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const handleModal = () => {
    setModal(!modal);
  };

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
          <div className="relative w-full h-[300px] rounded-t-xl shadow">
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
            <MenuItem state={handleModal} />
            <MenuItem state={handleModal} />
            <MenuItem state={handleModal} />
            <MenuItem state={handleModal} />
            <MenuItem state={handleModal} />
            <MenuItem state={handleModal} />
            <MenuItem state={handleModal} />
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
      {modal && (
        <Dialog
          open={openModal}
          onClose={closeModal}
          scroll={scroll}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="relative w-full bg-white outline-none">
            <div
              onClick={closeModal}
              className="absolute z-50 grid place-items-center top-4 right-4 w-10 h-10 rounded-full bg-white hover:opacity-90 duration-100 cursor-pointer"
            >
              <XIcon className="h-8" />
            </div>
            <div className="relative w-full h-96">
              <Image
                src={restaurant.img}
                alt={restaurant.name}
                layout="fill"
                objectFit="cover"
                className="pointer-events-none"
              />
            </div>
            <div className="px-4 py-6">
              <h1 className="text-2xl font-semibold pb-2">Pizza Pepperoni</h1>
              <p className="font-medium pb-4">€13.90</p>
              <p>
                I am the description of the item I am the description of the
                item I am the description of the item I am the description of
                the item
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div className="px-4 py-6 mb-5">
              <FormControl>
                <FormLabel id="radio-buttons-group-label">
                  Choose size
                </FormLabel>
                <RadioGroup
                  aria-labelledby="radio-buttons-group-label"
                  defaultValue="large"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="small"
                    control={<Radio />}
                    label="Small"
                  />
                  <FormControlLabel
                    value="large"
                    control={<Radio />}
                    label="Large"
                  />
                </RadioGroup>
              </FormControl>

              <div className="py-3"></div>
              <FormControl>
                <FormLabel id="radio-buttons-group-label">
                  Choose extras
                </FormLabel>
                <RadioGroup
                  aria-labelledby="radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="extra-cheese"
                    control={<Checkbox />}
                    label="Extra Cheese"
                  />
                  <FormControlLabel
                    value="chicken"
                    control={<Checkbox />}
                    label="Chicken"
                  />
                  <FormControlLabel
                    value="salami"
                    control={<Checkbox />}
                    label="Salami"
                  />
                  <FormControlLabel
                    value="bacon"
                    control={<Checkbox />}
                    label="Bacon"
                  />
                  <FormControlLabel
                    value="onion"
                    control={<Checkbox />}
                    label="Onion"
                  />
                </RadioGroup>
              </FormControl>
              <div className="py-3"></div>
              <FormControl>
                <FormLabel id="radio-buttons-group-label">
                  Do you want a drink?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="coke"
                    control={<Checkbox />}
                    label="Coca-Cola 0.33L"
                  />
                  <FormControlLabel
                    value="coke-zero"
                    control={<Checkbox />}
                    label="Coca-Cola Zero 0.33L"
                  />
                  <FormControlLabel
                    value="sprite"
                    control={<Checkbox />}
                    label="Sprite 0.33L"
                  />
                  <FormControlLabel
                    value="vichy-still"
                    control={<Checkbox />}
                    label="Vichy Still 0.33L"
                  />
                  <FormControlLabel
                    value="vichy-sparkling"
                    control={<Checkbox />}
                    label="Vichy Sparkling 0.33L"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default Location;
