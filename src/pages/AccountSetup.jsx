import AccountSetup from '../components/AccountSetup';
import AccountSetupMobile from '../components/AccountSetupMobile';

const App = () => {
  return (
    <>
    <div className="hidden md:block">
      <AccountSetup />
    </div>
    <div className="block md:hidden">
      <AccountSetupMobile />
    </div>
    </>
  );
};

export default App;