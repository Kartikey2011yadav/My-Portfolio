import React from "react";
import { motion } from "framer-motion";
import { deviceModels } from "./components/model/device-models";
import { Suspense, lazy, useState } from "react";
import gamestackTexture2Large from "./assets/gamestack-list-large.jpg";
import gamestackTexture2Placeholder from "./assets/gamestack-list-placeholder.jpg";
import gamestackTexture2 from "./assets/gamestack-list.jpg";
import gamestackTextureLarge from "./assets/gamestack-login-large.jpg";
import gamestackTexturePlaceholder from "./assets/gamestack-login-placeholder.jpg";
import gamestackTexture from "./assets/gamestack-login.jpg";
import { Model } from "./components/model";
import ProjDivider from "./projDivider";

const modelStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    description,
    buttonText,
    buttonLink,
    demoImage,
    isImageLeft,
  } = project;

  return (
    <>
        <ProjDivider />
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between bg-black text-white rounded-lg p-8 shadow-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: id * 0.3 }}
      >
        {/* Demo Image */}
        {isImageLeft && <ProjectDemo demoImage={demoImage} />}

        {/* Text Content */}
        <motion.div
          className={`flex flex-col ${
            isImageLeft ? "lg:pl-8" : "lg:pr-8"
          } text-center lg:text-left`}
          initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: id * 0.3 + 0.2 }}
        >
          <ProjectTitle id={id} title={title} description={description} />
          <Button text={buttonText} link={buttonLink} />
        </motion.div>

        {/* Demo Image on Right */}
        {!isImageLeft && <ProjectDemo demoImage={demoImage} />}
      </motion.div>
    </>
  );
};

const ProjectTitle = ({ id, title, description }) => (
  <div className="mb-6">
    <p className="text-cyan-400 font-semibold mb-2">0{id}</p>
    
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p className="text-lg text-gray-400">{description}</p>
  </div>
);

const Button = ({ text, link }) => (
  <a
    href={link}
    className="inline-flex items-center bg-cyan-400 text-black py-2 px-4 rounded-md mt-4 hover:bg-cyan-300 transition-all duration-300"
  >
    {text} <span className="ml-2">→</span>
  </a>
);

const ProjectDemo = ({ demoImage }) => (
  <motion.div
    className="lg:w-1/2 mt-6 lg:mt-0"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <Suspense
      fallback={
        <div className="flex justify-center items-center flex-col">
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
  </motion.div>
);

export default ProjectCard;
