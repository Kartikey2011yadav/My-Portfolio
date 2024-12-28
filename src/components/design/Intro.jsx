import { curve1, curve2 } from "../../assets";
import PlusSvg from "../../assets/svg/PlusSvg";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img
        src={curve2}
        width={162}
        height={76}
        alt="Curve 2"
        style={{ filter: "hue-rotate(290deg) brightness(300%)" }} // Apply blue color filter
      />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full pl-10 w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img
        src={curve1}
        width={522}
        height={182}
        alt="Curve 1"
        style={{ filter: "hue-rotate(130deg) brightness(300%)" }} // Apply blue color filter
      />
    </div>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[54.88rem] left-10 right-10 h-0.25 bg-color-5 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.6075rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.6075rem] right-[2.1875rem] -z-30 pointer-events-none xl:block" />
    </>
  );
};