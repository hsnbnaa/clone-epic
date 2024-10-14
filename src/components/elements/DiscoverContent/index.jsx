import { SwiperSlide } from "swiper/react";
import "swiper/css";

export default function DiscoverContent(props) {
  const { img_url, title, price } = props;
  return (
    <SwiperSlide className="w-[250px] flex flex-col gap-[10px]">
      <img
        src={img_url}
        alt=""
        className="w-auto h-[333px] max-[1920px]:h-[297.77px] max-2xl:h-[285.84px] rounded-lg"
      />
      <div className="flex flex-col">
        <span className="text-[#FFFFFFA6] text-xs font-normal">Base Game</span>
        <span className="text-base font-bold text-white my-[5px]">{title}</span>
        <span className="mt-[10px] text-sm font-normal text-white">
          {price}
        </span>
      </div>
    </SwiperSlide>
  );
}
