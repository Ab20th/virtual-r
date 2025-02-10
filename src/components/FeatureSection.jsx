import { features } from "../constant";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span
          className="bg-neutral-900 text-orange-500 rounded-full h-6
            text-sm font-medium px-3 py-2 uppercaser "
        >
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-red-900 bg-clip-text text-transparent">
            {" "}
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20 ">
        {features.map((features, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3 ">
            <div className="flex">
              <div
                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900
                text-orange-700 justify-center items-center rounded-full"
              >
                {features.icon}
              </div>
              <div>
                <h5 className="mt-10 mb-6 text-xl">{features.text}</h5>
                <p className="text-md text-neutral-500 p-2 mb-20">{features.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
