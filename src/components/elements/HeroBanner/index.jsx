export default function HeroBanner() {
  return (
    <div className="flex gap-8 max-w-[1600px] max-h-[441px]">
      <div className="w-[772px] h-auto shrink">
        <img
          src="https://cdn2.unrealengine.com/en-pegi-egs-mobile-qr-code-breaker-1-1920x1080-986d135968e7.jpg?h=480&quality=medium&resize=1&w=854"
          alt="Banner-1"
          className="rounded-lg"
        />
      </div>
      <div className="w-[772px] h-auto shrink">
        <img
          src="https://cdn2.unrealengine.com/en-egs-mobile-rewards-breaker-2-c8020bbb19a7.avif?h=480&quality=medium&resize=1&w=854"
          alt="Banner-2"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
