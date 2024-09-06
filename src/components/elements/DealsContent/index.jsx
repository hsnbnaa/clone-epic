export default function DealsContent() {
  return (
    <div>
      <img
        src="https://cdn2.unrealengine.com/en-egs-dotw-just-cause-4-complete-edition-breaker-1920x1080-0baa93eec0e4.jpg?h=480&quality=medium&resize=1&w=854"
        className="w-[517px] rounded-lg"
      />
      <div className="text-xl font-bold mt-[30px] mb-[15px]">
        Just Cause 4 Complete Edition
      </div>
      <div className="mt-5 flex gap-[10px]">
        <span className="px-2 text-xs font-medium bg-[#26BBFF] rounded-full text-black">
          -85%
        </span>
        <div className="flex gap-[10px]">
          <span className="text-sm font-normal line-through">IDR 814,180</span>
          <span className="text-sm font-normal">IDR 122,127</span>
        </div>
      </div>
    </div>
  );
}
