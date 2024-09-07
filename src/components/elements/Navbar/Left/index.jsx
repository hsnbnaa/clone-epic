export default function Left() {
  return (
    <div className="flex text-base gap-8 items-center">
      <div className="flex gap-[2px] items-center">
        <img
          src="public/images/epic-icon.png"
          alt="Epic Logo"
          className="w-[26px] h-[26px]"
        />
        <i data-feather="chevron-down" className="w-3 h-3"></i>
      </div>
      <img
        src="https://cms-assets.unrealengine.com/qAiDvosPSFGqJxTVuY7h"
        alt="STORE"
        className="w-[54px] h-8"
      />
      <a href="#">
        <span className="text-white text-sm font-normal">Support</span>
      </a>
      <div className="flex gap-1 items-center">
        <a href="#">
          <span className="text-white text-sm font-normal">Distribute</span>
        </a>
        <i data-feather="chevron-down" className="w-3 h-3"></i>
      </div>
    </div>
  );
}
