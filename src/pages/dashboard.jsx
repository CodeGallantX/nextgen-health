
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import TrendingSearches from "../components/TrendingSearches";
import ExploreServices from "../components/ExploreServices";
import AppointmentsSection from "../components/AppointmentsSection";
import HealthcarePractitioners from "../components/HealthcarePractitioners";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 overflow-hidden">
      <div className="grid grid-cols-11 gap-6">
        <NavBar />
        
        <main className="col-span-7 bg-white rounded-lg">
          <Banner />
          <TrendingSearches />
          <ExploreServices />
        </main>

        <aside className="col-span-3 ">
          <AppointmentsSection />
          <HealthcarePractitioners />
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;