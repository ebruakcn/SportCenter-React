import './Trainers.css'

function Trainers(){
return(
<>
<section className="trainers" id="trainers">
    <h2 className="section-title">OUR BEST TRAINERS</h2>
    <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>

  
   <div className="gallery">
        <div className="trainer-container">
              <img src="/Dökümanlar/Resimler/trainer1.jpg" alt="Exercise 1" className="trainer"/>
            
            <div className="left"></div>
            <div className="right"></div>
            <div className="overlay">
                <h1>Jane Doe</h1>
                <p>Cardio Trainer </p>
            </div>
        </div>
        <div className="trainer-container">              
            <img src="/Dökümanlar/Resimler/trainer2.jpg" alt="Exercise 2" className="trainer"/>               
            <div className="left"></div>
            <div className="right"></div>
            <div className="overlay">
                <h1>Jane Doe</h1>
                <p>Cardio Trainer </p>
            </div>
        </div>
        <div className="trainer-container">             
            <img src="/Dökümanlar/Resimler/trainer3.jpg" alt="Exercise 3" className="trainer"/>               
            <div className="left"></div>
            <div className="right"></div>
            <div className="overlay">
                <h1>Jane Doe</h1>
                <p>Cardio Trainer </p>
            </div> 
        </div>
    </div>
</section>
</>
)
}
export default Trainers;