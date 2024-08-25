import './Review.css'
function Review(){
return(
<>
<section className="reviews" id="review">
    <h2 className="section-title">REVIEW CLIENT</h2>
    <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
   
    <div className="review-grid">
        <div className="review">
            <div className="review-header">
                <img src="/img/client1.jpg" alt="Diet Expert" className="review-image"/>
                <div className="review-info">
                    <h4>Diet Expert</h4>
                    <p>CFO</p>
                </div>
            </div>
            <div className="review-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore nulla ducimus unde
                    voluptatibus accusamus inventore quidem in, fugit consectetur nisi dolorem sint perferendis
                    iusto</p>
            </div>
        </div>

        <div className="review">
            <div className="review-header">
                <img src="/img/client2.jpg" alt="Diet Expert" className="review-image"/>
                <div className="review-info">
                    <h4>Cardio Trainer</h4>
                    <p>CEO</p>
                </div>
            </div>
            <div className="review-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cum deleniti eveniet, numquam omnis
                    commodi debitis quidem id. Natus quia odit, eos molestiae unde ea id tempore maxime
                </p>
            </div>
        </div>
    </div>
</section>
</>
)}
export default Review;