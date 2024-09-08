export default function PlayCard() {
  return (
    <div className="w-[517px] h-[291px] ">
      <img
        src="https://cdn2.unrealengine.com/fneco-31-20-c5s4-meowtooth-br-social-1920x1080-1920x1080-18f79e92e84c.jpg?h=480&quality=medium&resize=1&w=854"
        className="rounded-lg"
      />
      <div className="mt-[30px] pr-6">
        <div className="mb-[15px]">
          <a href="#">
            <h5 className="font-interTight font-bold text-xl">Fortnite</h5>
          </a>
        </div>
        <div>
          <span className="text-sm font-normal h-[46px]">
            These claws will be the last thing you see. Meowtooth is now
            available in the Shop.
          </span>
        </div>
        <div className="mt-5">
          <a
            href="#"
            type="button"
            className="text-sm font-medium py-3 px-4 rounded-lg bg-[#FFFFFF26]"
          >
            <span>Play For Free</span>
          </a>
        </div>
      </div>
    </div>
  );
}
