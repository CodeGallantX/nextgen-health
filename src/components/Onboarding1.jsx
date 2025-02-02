const Onboarding1 = () => {
  return (
    <div className="relative h-screen w-full bg-white overflow-hidden px-6 flex flex-col items-center justify-between max-w-md mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-6 left-4">
          <img src="/image.png" alt="image-1" className="w-24" />
          <span className="block py-1 px-2 text-xs rounded-lg bg-[#B8CCFF] mt-2 absolute -right-16 bottom-4">
            Find care close to you
          </span>
        </div>
        <div className="absolute bottom-28 left-4">
          <img src="/image-1.png" alt="image-2" className="w-24" />
          <span className="block py-1 px-2 text-xs rounded-lg bg-[#5F52D8] text-white absolute -top-5 -right-8">
            Use your HMO
          </span>
        </div>
        <div className="absolute top-24 right-6">
          <img src="/image-2.png" alt="image-3" className="w-28" />
          <span className="block py-1 px-2 text-xs rounded-lg bg-[#3D4478] text-white absolute -bottom-2 left-2">
            See all fees upfront
          </span>
        </div>
        <div className="absolute top-40 left-8">
          <img src="/image-3.png" alt="image-4" className="w-24" />
          <span className="block py-1 px-2 text-xs rounded-lg bg-[#52C2D8] text-white absolute -right-12 -bottom-2">
            Schedule appointments
          </span>
        </div>
        <div className="absolute bottom-20 right-6">
          <img src="/image-4.png" alt="image-5" className="w-24" />
          <span className="block py-1 px-2 text-xs rounded-lg bg-[#D5B9E8] absolute -top-2 -left-8">
            Give feedback
          </span>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="flex flex-col items-center text-[#1E255C] space-y-1 text-center mt-20">
        <h1 className="text-3xl font-bold leading-tight">Transparent</h1>
        <h1 className="text-3xl font-bold leading-tight">Accessible.</h1>
        <h1 className="text-3xl font-bold text-[#4d80ff] leading-tight">Care for all</h1>
      </div>

      {/* Get Started Button */}
      <a
        href="/auth/signup"
        className="w-full max-w-xs py-3 text-white bg-[#4D80FF] text-center rounded-lg mb-10 shadow-md"
      >
        Get Started
      </a>
    </div>
  );
};

export default Onboarding1;
