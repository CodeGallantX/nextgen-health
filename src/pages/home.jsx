import Onboarding from '../components/Onboarding2'
import OnboardingDesktop from '../components/OnboardingDesktop'

const Home = () => {
    return (
      <>
      <div className="block md:hidden">
        <Onboarding />
        
      </div>
      <div className="hidden md:block">
        <OnboardingDesktop />
        
      </div>
      </>
    );
  };
  
  export default Home;
  