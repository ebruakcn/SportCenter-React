import './Purchase.css'

function Purchase(){

    return(
        <>
<section className="purchases">
    <h2 className="section-title">PURCHASE FROM US</h2>
    <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
 
    <div className="purchases-grid">
        <div className="purchase">
            <img src="/img/purchase1.jpg" alt="Kettlebell 5kg"/>
            <h3>Kettlebell / 5kg</h3>
            <p><strike>89,995 </strike>/ 59,995</p>
            <div className="purchasebutton">
                <span className="material-symbols-outlined"> shopping_cart</span>
                <button>Add To Cart</button>
            </div>
        </div>
        <div className="purchase">
            <img src="/img/purchase2.jpg" alt="Treadmill"/>
            <h3>Treadmill</h3>
            <p><strike>899,995</strike> / 599,995</p>
            <div className="purchasebutton">
                <span className="material-symbols-outlined"> shopping_cart</span>
                <button>Add To Cart</button>
            </div>
        </div>
        <div className="purchase">
            <img src="/img/purchase3.jpg" alt="Adjustable Dumbbell"/>
            <h3>Adjustable Dumbbell</h3>
            <p><strike>89,995</strike> / 59,995</p>
            <div className="purchasebutton">
                <span className="material-symbols-outlined"> shopping_cart</span>
                <button>Add To Cart</button>
            </div>
        </div>
        <div className="purchase">
            <img src="/img/purchase4.jpg" alt="Kettlebell 3kg"/>
            <h3>Kettlebell / 3kg</h3>
            <p><strike>89,995 </strike>/ 59,995</p>
            <div className="purchasebutton">
                <span className="material-symbols-outlined"> shopping_cart</span>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
</section>
</>
)}
export default Purchase;