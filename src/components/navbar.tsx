import Image from "next/image";
import logo from "../../public/oculos.svg";

export default function NavBar() {
  return (
    <header className="mx-auto">
      <Image src={logo} alt="logo" className="max-w-xl mx-auto" />
      <div>
        <button>oi</button>
      </div>
      <div>
        <button>oi</button>
      </div>
    </header>
  );
}
