import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import AddDriver from "./components/driver/AddDriver";
import DriverList from "./components/driver/DriverList";
import ServiceList from "./components/services/ServiceList";
import AddService from "./components/services/AddService";


function App() {
  return (
    <>
      <SideBar />
      <Navbar />
      <div id="remoteModelData" className="modal fade" role="dialog"></div>
      <ServiceList />
      {/* <DriverList /> */}
      {/* <AddService /> */}
    </>
  );
}

export default App;
