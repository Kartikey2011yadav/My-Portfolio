import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { work } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/workingOn";
import { stars } from "../assets";
import { InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { instagram } from "../assets";

const WorkingOn = () => (
  <Section className="overflow-hidden" id="workingOn">
    {/* <DisplacementSphere className=" scale-x-[-1] "/> */}
    <div className="container relative z-2   ">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex  ">

          <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-spin-slow ">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={200}
            />
            <img
              src={stars}
              alt="stars"
              className="w-full ml-60 mt-28"
              width={950}
              height={200}
            />
          </div>
          <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-spin-slow-alt mt-28">
            <img
              src={stars}
              alt="stars"
              className="w-full ml-100"
              width={850}
              height={200}
            />
            <img
              src={stars}
              alt="stars"
              className="w-full ml-50 mt-30"
              width={850}
              height={200}
            />
          </div>
        </div>
    <div className="container md:pb-10">
      <Heading tag="Know more about my work" title="What I am working on" />




      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {work.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className={`mr-2.5 ${
                          item.status !== "done" && "animate-spin"
                        } pointer-events-none select-none`}
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                    <img src={instagram} alt="github" />
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}


        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">View All Projects</Button>
      </div>
    </div>
    </div>
    
  </Section>
);

export default WorkingOn;
