
import Sidebar from "../../components/Sidebar";
import DashboardNavbar from '../../components/header/DashboardNavbar'
export default function Layout({ children }) {
  return (
    <div className="flex">

      <div className="flex-grow p-4 w-56">
      <DashboardNavbar/>
        {children}
      </div>
      <Sidebar />
    </div>
  );
}
