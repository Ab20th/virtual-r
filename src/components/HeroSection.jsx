import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
   <div className="flex flex-col items-center m-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">{" "}for devlopers</span> 

    </h1>

    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Empower your creativity and bring your VR app ideas to life with our intuitive devlopment tools.
           Get started today and turn your imagination into immersive reality.
    </p>
    <div className="flex justify-center my-10">
        <a href="#" 
        className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-red-800">
          Start for free
        </a>

        <a href="#"
        className="px-3 py-2 border rounded-md mx-3">
          Documentaion
        </a>
    </div>

    <div className="flex mt-10 justify-center">
    
        <video
         autoPlay loop muted 
         className="rounded-lg w-1/2 border m-2 " 
         src={video1}>Your browser does not support video tag
         </video>

         <video
         autoPlay loop muted 
         className="rounded-lg w-1/2 border m-2" 
         src={video2}>Your browser does not support video tag
         </video>
    </div>
   </div>
  )
}

export default HeroSection
