export default function Header() {
  return (
    <div className="flex items-center gap-7">
      <div className="bg-[#404444] w-56 flex items-center rounded-3xl">
        <i data-feather="search" className="w-3 h-3 text-white m-3"></i>
        <input
          type="text"
          id="search"
          placeholder="Search store"
          className="w-44 border-none outline-none bg-transparent text-white placeholder:text-white text-sm"
        />
      </div>
      <ul className="flex px-1 gap-6">
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Browse</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
      </ul>
    </div>
  );
}
