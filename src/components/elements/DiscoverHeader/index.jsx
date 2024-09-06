export default function DiscoverHeader(props) {
  return (
    <div className="flex justify-between items-center mb-[18px]">
      <h5 className="flex gap-[5px] text-xl font-interTight font-bold items-center mb-[18px]">
        {props.title} <i data-feather="chevron-right"></i>
      </h5>
      <div className="flex gap-[10px]">
        <i
          data-feather="chevron-left"
          className="bg-[#2a2a2a6c] rounded-full p-2 w-9 h-9"
        ></i>
        <i
          data-feather="chevron-right"
          className="bg-[#2a2a2a6c] rounded-full p-2 w-9 h-9"
        ></i>
      </div>
    </div>
  );
}
