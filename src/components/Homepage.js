import AboutDept from "./AboutDept";
import Achivements from "./Achivements";
import ContactUs from "./ContactUs";
import StaffName from "./StaffName";


 
 function Homepage(){
    return(

        <div class="Home">
            <div className="homeimage">
            </div>
            <AboutDept></AboutDept>
            <StaffName></StaffName>
            <Achivements></Achivements>
            <ContactUs></ContactUs>
        </div>
       
    )

}
export default Homepage;