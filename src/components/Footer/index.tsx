import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container text-center">
        <Link href="/" className="mb-6 inline-block max-w-[160px]">
          <Image
            src="/images/logo/id8logo_white.png"
            alt="logo"
            width={140}
            height={30}
            className="max-w-full mx-auto"
          />
        </Link>
        <div className="py-8">
          <Link href="/privacy-policy" className="text-gray-300 hover:underline mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-300 hover:underline mx-2">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
