
import './Footer.css'

function Footer(){
    return(
        <>
<footer>
     <div className="footer-content">
         <img src="/img/logo.png" alt="Logo"/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam numquam ab suscipit dolorum necessitatibus exercitationem.</p>
     </div>
     <div className="footer-links">
         <div className="link-group">
             <h3>Information</h3>
             <ul>
                 <li><a href="#">About Us</a> </li>
                 <li><a href="#">Classes</a></li>
                 <li><a href="#">Blog</a></li>
                 <li><a href="#">Contact</a></li>
             </ul>
         </div>
         <div className="link-group">
             <h3>Helpful Links</h3>
             <ul>
                 <li><a href="#">Services</a></li>
                 <li><a href="#">Supports</a></li>
                 <li><a href="#">Terms & Condition</a></li>
                 <li><a href="#">Privacy Policy</a></li>
             </ul>
         </div>
     </div>
</footer>
</>)}
export default Footer;
