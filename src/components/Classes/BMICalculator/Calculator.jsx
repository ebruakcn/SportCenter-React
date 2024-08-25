import './Calculator.css';


/* BMI CALCULATOR SECTİON*/
/* Degerlendirme Kriteri - 8 */
function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const arrow = document.getElementById("bmi-arrow");


  // The preventDotInput function prevents the entry of "." or "," when these keys are pressed.
  function preventDotInput(event) {
      if (event.key === "." || event.key === ",") {
          event.preventDefault();
      }
  }
 // Check if the input already has 3 or more characters and the pressed key is not "Backspace" or "Delete"
  function restrictToThreeDigits(event) {
      const inputField = event.target;
      if (inputField.value.length >= 3 && event.key !== "Backspace" && event.key !== "Delete") {
          event.preventDefault();
      }
  }

  document.getElementById("height").addEventListener("keypress", preventDotInput);
  document.getElementById("height").addEventListener("keypress", restrictToThreeDigits);
  
  document.getElementById("weight").addEventListener("keypress", preventDotInput);
  document.getElementById("weight").addEventListener("keypress", restrictToThreeDigits);

  // Validate inputs and calculate BMI
  if (height && weight && !isNaN(height) && !isNaN(weight) && height > 2  && weight > 20) {
      const heightInMeters = height / 100; // Convert cm to meters
      const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1); // Calculate BMI
      document.getElementById("bmi-value").innerText = ` ${bmiValue}`;
      
      let position;
      
      if (bmiValue < 18.5) {
          position = "19%";
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
          position = "34%";
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
          position = "48%";
      } else if (bmiValue >= 30 && bmiValue <= 34.9) {
          position = "62%";
      } else if (bmiValue >= 35) {
          position = "76%";
      }

      arrow.style.left = position;
      arrow.style.display = "block";
  } 

}


document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

function Calculator() {
  return (
    <>
      <section className="bmi-calculator">
        <div className="bmi-description">
          <h2>BMI Calculator</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old.
          </p>

          <div className="bmi-inputs">
            <div className="input-group">
              <input type="number" id="height" placeholder="Your Height (cm)" />
              <label htmlFor="height">cm</label>
            </div>
            <div className="input-group">
              <input type="number" id="weight" placeholder="Your Weight (kg)" />
              <label htmlFor="weight">kg</label>
            </div>
          </div>
        </div>

        <div className="bmi-result">
          <h3>Your BMI</h3>
          <div id="bmi-value"></div>
          <img src="./img/bmi-index.jpg" alt="BMI Chart" />
          <div className="bmi-chart">
            <div id="bmi-arrow" className="bmi-arrow"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calculator;
