export default function FreeContent() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col">
        <img
          src="https://cdn1.epicgames.com/offer/610a546d4e204215a0b9a1c8a382bacb/EGS_FootballManager2024_SportsInteractive_S2_1200x1600-d59e8b3545615cbc8a51d8acd316dd60?h=486&quality=medium&resize=1&w=365"
          className="rounded-t-lg"
        />

        <span className="p-[5px] bg-[#26BBFF] text-center text-black rounded-b-lg uppercase font-medium text-sm">
          Free Now
        </span>
      </div>
      <div className="flex flex-col gap-[5px]">
        <h6 className="font-interTight font-bold text-base">
          Football Manager 2024
        </h6>
        <p className="text-base font-normal text-[#FFFFFFA6]">
          <span>
            Free Now - <time dateTime="2024-09-12T15:00:00.000Z">Sep 12</time>{" "}
            at <time dateTime="2024-09-12T15:00:00.000Z">10:00 PM</time>
          </span>
        </p>
      </div>
    </div>
  );
}
