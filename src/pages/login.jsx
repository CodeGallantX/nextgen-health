import Login from '../components/LoginComp';
import LoginMobile from '../components/LoginMobile';

const App = () => {
  return (
    <>
    <div className="hidden md:block">
      <Login />
    </div>
    <div className="block md:hidden">
      <LoginMobile />
    </div>
    </>
  );
};

export default App;