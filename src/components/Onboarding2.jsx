const Onboarding2 = () => {
    return (
      <div className="relative">
        <img
          src="/nextgen-health.jpg"
          alt="bg-image"
          className="min-h-screen w-full object-cover"
        />
  
        <div className="absolute inset-0 py-20 px-8 flex flex-col items-start justify-between">
          <div className="w-full max-w-xs">
            <h1 className="text-4xl text-white font-bold text-left">Skip the Guesswork</h1>
            <p className="italic mt-4 text-white space-y-4 leading-loose">
              <span className="py-1 px-2 rounded bg-[#4D80FF] mr-2">Find Care,</span>
              <span className="py-1 px-2 rounded bg-[#52C2D8] mr-2">Compare Costs,</span>
              <span className="py-1 px-2 rounded bg-purple-400 mr-2">Schedule,</span> and &nbsp;
              <span className="py-1 px-2 rounded bg-violet-400 mr-2">Stay on Top</span> of your Health
            </p>
          </div>
  
          <div className="absolute bottom-10 w-full flex flex-col left-1/2 -translate-x-1/2 px-8">
            <a
              href="/auth/login"
              className="bg-gradient-to-r from-[rgba(77,128,255,0.7)] via-[rgba(82,194,216,0.7)] to-[rgba(77,128,255,0.7)] text-white px-6 py-2 w-full rounded-lg text-center text-lg font-medium">
              Login
            </a>
            <a href="/auth/signup" className="mt-4 text-white text-center text-sm">
              Create an account
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Onboarding2;
  