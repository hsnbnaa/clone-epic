import FreeContent from "../../elements/FreeContent";

export default function Free() {
  return (
    <section className="flex flex-col bg-[#202024] rounded-xl py-[30px] px-10 w-full mb-16">
      <div className="flex justify-between mb-[25px]">
        <h5 className="flex gap-[14px] items-center text-xl font-bold">
          <span>
            <img
              src="public/images/free-icon.svg"
              alt="Free-Icon"
              className="w-[35px] h-[35px]"
            />
          </span>
          Free Games
        </h5>
        <a
          href="#"
          className="px-[15px] py-[7px] text-sm font-medium border border-[#FFFFFF59] rounded-lg border-solid "
        >
          <span>View More</span>
        </a>
      </div>
      <div className="flex gap-5">
        <FreeContent />
        <FreeContent />
        <FreeContent />
        <FreeContent />
      </div>
    </section>
  );
}
