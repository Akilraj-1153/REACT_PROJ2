import { Route,Routes,Link } from "react-router-dom"
import Homepage from "./Homepage";
import AboutDept from "./AboutDept";
import StaffDetails from "./StaffName";
import Achivements from "./Achivements";
import ContactUs from "./ContactUs";
function NavBar(){
    return(
        <div >
          <div >
              <nav className="navbar">
                <Link to="/" className="homepage">HOME</Link>
                <Link to="/aboutdept" className="aboutdept">ABOUT DEPT</Link>
                <Link to="/staffdetails" className="staffdetails">STAFF DETAILS</Link>
                <Link to="/achivements" className="achivements">ACHIVEMENTS</Link>
                <Link to="/contactus" className="contactus">CONTACT</Link>
              </nav>
          </div>
        
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/aboutdept" element={<AboutDept></AboutDept>}></Route>
          <Route path="/staffdetails" element={<StaffDetails></StaffDetails>}></Route>
          <Route path="/achivements" element={<Achivements></Achivements>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route ></Route>
        </Routes>
      </div>
    )
}

export default NavBar;