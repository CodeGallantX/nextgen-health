import Signup from '../components/SignupComp';
import SignupMobile from '../components/SignupMobile';

const App = () => {
  return (
    <>
    <div className="hidden md:block">
      <Signup />
    </div>
    <div className="block md:hidden">
      <SignupMobile />
    </div>
    </>
  );
};

export default App;