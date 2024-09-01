import Left from "../../elements/Navbar/Left";
import Right from "../../elements/Navbar/Right";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#0D0D0D] px-6 py-5">
      <Left />
      <Right />
    </header>
  );
}
