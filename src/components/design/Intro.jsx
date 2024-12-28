import { curve1, curve2 } from "../../assets";
import PlusSvg from "../../assets/svg/PlusSvg";


export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[50.45rem] left-10 right-10 h-0.25 bg-color-5 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[50.1375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[50.1375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};