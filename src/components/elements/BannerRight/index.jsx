export default function BannerRight(props) {
  const { title, source } = props;

  return (
    <li className="pr-[10px] bg-[#101014] pl-[15px] py-5 rounded-lg flex items-center">
      <img src={source} className="w-[60px] h-[80px] rounded-[4px] mr-[15px]" />
      <span className="font-normal text-sm">{title}</span>
    </li>
  );
}
