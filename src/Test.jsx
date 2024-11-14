import { deviceModels } from "./components/model/device-models";
import { useWindowSize } from "./hooks";
import { Suspense, lazy, useState } from "react";
import gamestackTexture2Large from "./assets/gamestack-list-large.jpg";
import gamestackTexture2Placeholder from "./assets/gamestack-list-placeholder.jpg";
import gamestackTexture2 from "./assets/gamestack-list.jpg";
import gamestackTextureLarge from "./assets/gamestack-login-large.jpg";
import gamestackTexturePlaceholder from "./assets/gamestack-login-placeholder.jpg";
import gamestackTexture from "./assets/gamestack-login.jpg";
import { Model } from "./components/model";
// const Model = lazy(() =>
//   import("./components/model/index").then((module) => ({
//     default: module.Model,
//   }))
// );

const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400,
};

// const [modelLoaded, setModelLoaded] = useState(false);
// const { width } = useWindowSize();
// const isMobile = width <= media.tablet;
// const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
// const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

function handleModelLoad() {
  setModelLoaded(true);
}

const modelStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const Test = () => {
  return (
    <>
      <Suspense
        fallback={
          <div
            className="flex justify-center items-center flex-col"
          >
            Loading...
          </div>
        }
      >
        <div className=" p-0 w-screen h-screen flex justify-start items-start flex-row gap-8">
          <Model
            alt={"hello"}
            cameraPosition={{ x: 0, y: 0, z: 11.5 }}
            showDelay={300}
            onLoad={() => {}}
            show={true}
            style={modelStyle}
            models={[
              {
                ...deviceModels.phone,
                position: { x: -0.6, y: 1.1, z: 0.1 },
                texture: {
                  srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
                  placeholder: gamestackTexturePlaceholder,
                  // sizes: phoneSizes,
                },
              },
              {
                ...deviceModels.phone,
                position: { x: 0.6, y: -0.5, z: 0.3 },
                texture: {
                  srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
                  placeholder: gamestackTexture2Placeholder,
                  // sizes: phoneSizes,
                },
              },
            ]}
          />
        </div>
      </Suspense>
    </>
  );
};

export default Test;
