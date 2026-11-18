import Image from "next/image";
import logo from "../../public/brand/cosmos-logo.png";

export default function Logo({ large = false }: { large?: boolean }) {
  return (
    <Image
      src={logo}
      alt="Cosmos"
      priority={!large}
      sizes={large ? "260px" : "160px"}
      className={large ? "h-16 w-auto" : "h-9 w-auto md:h-10"}
    />
  );
}
