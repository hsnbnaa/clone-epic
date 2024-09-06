import Left from "../../elements/Navbar/Left";
import Right from "../../elements/Navbar/Right";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#101014b5] bg-repeat px-6 py-5 backdrop-blur-[50px]">
      <Left />
      <Right />
    </header>
  );
}
