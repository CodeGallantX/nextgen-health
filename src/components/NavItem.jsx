const NavItem = ({ icon, label }) => (
    <div
      className="flex flex-col items-center space-y-6 p-1 rounded-lg cursor-pointer transition"
    >
      <div className="text-gray-500 text-xl">{icon}</div>
      <span className="text-gray-700 text-xs">{label}</span>
    </div>
  );

  export default NavItem