import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full flex items-center justify-between py-4 bg-[#6050AB] px-6 ">
      <p className="text-[#F7F7F7]">&copy; Mojo Meal 2022</p>
      <div className="space-x-5">
        <a href="/privacy" className="text-sm text-[#F7F7F7]">
          Privacy Policy
        </a>
        <a href="/terms" className="text-sm text-[#F7F7F7]">
          Terms of Use
        </a>
      </div>
    </footer>
  );
}

export default Footer;
