const NavItem = ({ icon, label, url, colour = "text-gray-500" }) => (
  <a
    href={url}
    className="flex flex-col items-center space-y-2 p-2 rounded-lg cursor-pointer"
  >
    <div className={`text-xl ${colour}`}>{icon}</div>
    <span className={`text-xs font-medium ${colour}`}>{label}</span>
  </a>
);

export default NavItem;
