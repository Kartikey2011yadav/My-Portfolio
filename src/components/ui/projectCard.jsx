import React from "react";
import { motion } from "framer-motion";
import { deviceModels } from "../3d/model/device-models";
import { Suspense } from "react";
import { Model } from "../3d/model";

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
    tags,
    modelType,
    img,
    source_code_link,
  } = project;

  const isImageLeft = id % 2 !== 0;

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-between bg-transparent backdrop-filter backdrop-blur-lg text-white rounded-lg p-8 mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Demo Image (Left) */}
      {isImageLeft && <ProjectDemo modelType={modelType} texture={img} />}

      {/* Text Content */}
      <motion.div
        className={`flex flex-col ${
          isImageLeft ? "lg:pl-8" : "lg:pr-8"
        } text-center lg:text-left flex-1`}
        initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProjectTitle id={id} title={title} description={description} tags={tags} />
        <Button text="View Source" link={source_code_link} />
      </motion.div>

      {/* Demo Image (Right) */}
      {!isImageLeft && <ProjectDemo modelType={modelType} texture={img} />}
    </motion.div>
  );
};

const ProjectTitle = ({ id, title, description, tags }) => (
  <div className="mb-6">
    <p className="text-cyan-400 font-semibold mb-2">0{id}</p>
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
      {tags && tags.map((tag, index) => (
        <span key={index} className="bg-n-6 text-n-1 px-2 py-1 rounded text-xs">
          {tag}
        </span>
      ))}
    </div>
    <p className="text-lg text-gray-300">{description}</p>
  </div>
);

const Button = ({ text, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center bg-cyan-400 text-black py-2 px-4 rounded-md mt-4 hover:bg-cyan-300 transition-all duration-300 w-fit mx-auto lg:mx-0"
  >
    {text} <span className="ml-2">→</span>
  </a>
);

const ProjectDemo = ({ modelType, texture }) => {
  const modelConfig = deviceModels[modelType] || deviceModels.phone;

  return (
    <motion.div
      className="lg:w-1/2 h-[400px] relative mt-6 lg:mt-0 w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-full">
            Loading 3D Model...
          </div>
        }
      >
        <div className="w-full h-full">
          <Model
            show={true}
            style={modelStyle}
            cameraPosition={{ x: 0, y: 0, z: modelType === 'laptop' ? 25 : 12 }}
            models={[
              {
                ...modelConfig,
                position: { x: 0, y: 0, z: 0 },
                texture: {
                  srcSet: texture,
                  placeholder: texture,
                },
              },
            ]}
          />
        </div>
      </Suspense>
    </motion.div>
  );
};

export default ProjectCard;
