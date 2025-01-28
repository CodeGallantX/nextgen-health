const Onboarding1 = () => {
    return (
      <div className="relative h-screen w-full bg-white overflow-hidden px-10 md:px-16 xl:px-28 flex flex-col items-center justify-center">
        <div className="absolute inset-0 ">
          <div className="absolute top-10 left-10">
            <img src="/image.png" alt="image-1" className="w-32 md:w-40 " />
            <span className="block py-1 px-2 text-xs rounded-lg bg-[#B8CCFF] mt-2 absolute -right-1/2 bottom-4">Find care close to you</span>
          </div>
          <div className="absolute bottom-32 left-10">
            <img src="/image-1.png" alt="image-2" className="w-32 md-40 " />
            <span className="block py-1 px-2 text-xs rounded-lg bg-[#5F52D8] absolute -top-5 -right-8">Use your HMO</span>
          </div>
          <div className="absolute top-28 right-10">
            <img src="/image-2.png" alt="image-3" className="w-36 md:44" />
            <span className="block py-1 px-2 text-xs rounded-lg bg-[#3D4478] text-white absolute -bottom-2 left-2">See all fees upfront</span>
          </div>
          <div className="absolute top-48 left-6">
            <img src="/image-3.png" alt="image-4" className="w-32 md:40" />
            <span className="block py-1 px-2 text-xs rounded-lg bg-[#52C2D8] text-white absolute -right-1/2 -bottom-2">Schedule appointments</span>
          </div>
          <div className="absolute bottom-28 right-6">
            <img src="/image-4.png" alt="image-5" className="w-32 md:40" />
            <span className="block py-1 px-2 text-xs rounded-lg bg-[#D5B9E8] absolute -top-2 -left-8">Give feedback</span>
          </div>
        </div>
  
        {/* Main text content */}
        <div className="flex flex-col items-center justify-center space-y-2 text-[#1E255C] relative z-10 top-10">
          <h1 className="text-3xl md:text-6xl font-bold">Transparent</h1>
          <h1 className="text-3xl md:text-6xl font-bold">Accessible.</h1>
          <h1 className="text-3xl md:text-6xl font-bold text-[#4d80ff]">Care for all</h1>
        </div>
        
        {/* Get Started Button */}
        <a href="/signup" className="-bottom-1/3 w-full py-3 px-6 text-white bg-[#4D80FF] text-center rounded-lg relative z-10">
          Get Started
        </a>
      </div>
    );
  };
  
  export default Onboarding1;
  