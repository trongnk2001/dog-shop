import "./dogs.css";
import { useContext, useState } from 'react';
import { CartContext } from "../../Contexts/CartContext";

const DogsCart = (props) => {
    const {id,name,breed,description,price,imageUrl} = props;
    const {addToCart,setTotal} = useContext(CartContext);
    const [isAdded,setAdded] = useState(false);
    const handleclick = () => {
        setAdded(true);
        const newItems = {
            name : name,
            price : price,
            imageUrl : imageUrl,
        };
        addToCart((item) => [...item,newItems]);
        setTotal((total) =>(total += Number(price)));
    }
    return ( 
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p> {name} </p>
                    <p> {breed} </p>
                </div>
                <div className="dogs-img-container">
                    <img className="dog-img" src={imageUrl} alt={`Picture of ${name}`} />
                </div>
                <div className="dogs-desc">{description}</div>
                <div className="dogs-price">{price}$</div>
                {isAdded ? (
                    <button disabled className="dogs-btn-disabled">ADDED</button>
                ) : (
                    <button className="dogs-btn" onClick={handleclick}>ADD TO CART</button>
                )} 
            </section>
        </>
     );
}
 
export default DogsCart;