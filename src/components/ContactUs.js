import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
function ContactUs(){
    return(
        <div className="contact">
            <div className="cinnercon1">

            </div>
            <div className="cinnercon2">
                <h4 > TO KNOW MORE CONTACT:</h4>
                 <p style={{top:"5%"}}>P VISU<br></br>
                 HEAD OF THE DEPARTMENT  <br></br>DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE<br></br><br>
                 </br>email:abcd@gmail.com<br></br>Mobile number:7894561230</p>
                <div className="sociallinks">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon instagram" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="social-icon facebook" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="social-icon linkedin" />
                    </a>
                </div>
            </div>
        </div>

        
    )
}
export default ContactUs;