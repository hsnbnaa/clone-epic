export default function Right() {
  return (
    <nav className="flex gap-4 items-center text-base">
      <i data-feather="globe" className="w[19px] h-[19px]"></i>
      <a
        href="#"
        className="px-3 py-1 bg-[#FFFFFF26] rounded-md hover:bg-[#FFFFFF40] transition-colors duration-300 ease-in-out"
      >
        Sign in
      </a>
      <a
        href="#"
        className="px-3 py-1 bg-[#26BBFF] rounded-md text-black hover:bg-[#61cdff] transition-colors duration-300 ease-in-out"
      >
        Download
      </a>
    </nav>
  );
}
