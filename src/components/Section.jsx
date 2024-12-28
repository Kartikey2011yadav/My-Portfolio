

import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  IntroPadding,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-1 xl:py-20  ${crosses ? "lg:py-32 xl:py-40" : ""} ${IntroPadding ? "lg:py-32 xl:pb-40 xl:pt-20" : ""} 
        
    `
      }
      ${className || ""}
     `}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-color-5 pointer-events- md:block lg:left-7.5 xl:left-10 -z-20" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-color-5 pointer-events- md:block lg:right-7.5 xl:right-10 -z-20" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-color-5 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};
export default Section;
