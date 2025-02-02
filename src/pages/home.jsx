import Onboarding2 from '../components/Onboarding2'
import OnboardingDesktop from '../components/OnboardingDesktop'

const Home = () => {
    return (
      <>
      <div className="block md:hidden">
        <Onboarding2 />
        
      </div>
      <div className="hidden md:block">
        <OnboardingDesktop />
        
      </div>
      </>
    );
  };
  
  export default Home;
  