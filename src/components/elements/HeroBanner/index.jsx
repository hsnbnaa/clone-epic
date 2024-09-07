export default function HeroBanner(props) {
  return (
    <div className="w-[784px] h-auto shrink">
      <img src={props.source} alt="Banner-1" className="rounded-lg" />
    </div>
  );
}
