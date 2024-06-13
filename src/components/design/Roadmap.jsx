import { gradient } from "../../assets";

export const Gradient = () => {
  return (
    <>
      <div className="absolute top-[18.25rem] left-[38.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
          <img
            className="w-full"
            src={gradient}
            width={942}
            height={942}
            alt="Gradient"
          />
        </div>
      </div>
      <div className="absolute top-80 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={2417}
        alt="Gradient"
      />
    </div>
      <div className="absolute top-[60rem] left-[30rem] w-[56.625rem] h-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
    </>
  );
};
