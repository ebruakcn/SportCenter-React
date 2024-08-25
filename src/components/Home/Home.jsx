import "./Home.css";
// Remove this import if not needed
// import "./Script.js";
import { useEffect } from "react";

function Home() {
    // Scroll function handling the navbar class toggling
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
                navbar.classList.remove('transparent');
            } else {
                navbar.classList.add('transparent');
                navbar.classList.remove('scrolled');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    // Menu toggle function
    const toggleMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    };

    return (
        <>
            <nav className="navbar transparent">
                <div className="logo">
                    <img src="/img/logo.png" alt="Logo" />
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#classes">Classes</a>
                    <a href="#trainers">Trainer</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                    <a className="join-us" href="#">JOIN US</a>
                </div>
            </nav>

            <section className="home" id="home">
                <img src="/img/hero-man.jpg" alt="Sport Center" />
                <div className="home-content">
                    <div className="powerfull-box">POWERFULL</div>
                    <h1>Group Practice With Trainer</h1>
                    <div className="home-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit aut iste. Velit porro rerum, unde modi ipsam exercitationem laudantium illum. Id, laborum? Totam, dicta nisi. Voluptates, vero id. Perferendis.</p>
                    </div>

                    <div className="home-buttons">
                        <button className="sign-up">Sign Up</button>
                        <button className="details">Details</button>
                    </div>
                </div>
            </section>

            <section className="info-boxes">
                <div className="info-box">
                    <h3>325</h3>
                    <p>Course</p>
                </div>
                <div className="info-box">
                    <h3>405</h3>
                    <p>Work Out</p>
                </div>
                <div className="info-box">
                    <h3>305</h3>
                    <p>Working Hour</p>
                </div>
                <div className="info-box">
                    <h3>705</h3>
                    <p>Happy Client</p>
                </div>
            </section>
        </>
    );
}

export default Home;
