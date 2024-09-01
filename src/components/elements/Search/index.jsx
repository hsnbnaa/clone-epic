export default function Search() {
  return (
    <div className="bg-[#202024] w-56 flex items-center rounded-3xl">
      <i data-feather="search" className="w-3 h-3 text-white m-3"></i>
      <input
        type="text"
        id="search"
        placeholder="Search store"
        className="w-44 border-none outline-none bg-transparent text-white placeholder:text-white text-sm"
      />
    </div>
  );
}
