export default function BannerLeft() {
  return (
    <div className="relative max-[1312px] max-h-[738px] shrink">
      <img
        src="https://cdn2.unrealengine.com/egs-black-myth-wukong-carousel-desktop-1920x1080-11f4d19845b5.jpg?h=720&quality=medium&resize=1&w=1280"
        alt=""
        className="rounded-2xl w-[1312px] h-auto"
      />
      <div className="absolute left-[56px] bottom-[56px] max-w-[40%] max-[1124px]:max-w-[60%] max-[1124px]:left-8 max-[1124px]:bottom-8">
        <img
          src="https://cdn2.unrealengine.com/egs-black-myth-wukong-carousel-logo-light-350x100-b47bbe672045.png"
          alt=""
          className="w-3/4 h-auto mb-10 max-[1124px]:w-1/3 max-[1124px]:mb-4"
        />
        <div className="flex flex-col gap-[10px] mb-[30px] shrink">
          <h6 className="text-xs font-bold">AVAILABLE NOW</h6>
          <p className="text-base">
            Set out as the Destined One in this action RPG rooted in Chinese
            mythology.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="mb-[10px] text-sm font-normal">IDR 699,999</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="px-5 py-3 bg-white text-black w-44 rounded-[10px] flex justify-center text-sm font-medium shrink"
            >
              Buy Now
            </a>
            <button className="flex gap-3 py-3 px-4 items-center">
              <i data-feather="plus-circle"></i>
              <span className="text-sm font-medium">Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
