export default function BannerRight(props) {
  const { title, source } = props;

  return (
    <li className="pr-[10px] bg-[#101014] pl-[15px] py-5 max-[1920px]:py-[14px] max-2xl:py-[16.7px] rounded-lg flex items-center">
      <img
        src={source}
        className="w-[60px] h-[80px] max-2xl:w-[40px] max-2xl:h-[53.33px] rounded-[4px] mr-[15px]"
      />
      <span className="font-normal text-sm">{title}</span>
    </li>
  );
}
