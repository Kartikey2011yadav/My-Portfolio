import { techLogos } from "../constants";

const TechLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 -mt-15 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex -mt-1">
        {techLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[5.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechLogos;
