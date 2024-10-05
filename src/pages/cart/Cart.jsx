import { useNavigate } from 'react-router-dom';
import { food_list } from '../../assets/assets';
import { useStoreContext } from '../../context/StoreContext';
import './cart.css';
// import { Link } from 'react-router-dom';
export default function Cart() {
  const { cartItems, removeFromCart, getTotalCartAmount } = useStoreContext();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((food) => {
          if (cartItems[food._id] > 0) {
            return (
              <>
                <div className="cart-item cart-items-item" key={food.id}>
                  <img src={food.image} alt={food.name} />
                  <p>{food.name}</p>
                  <p>${food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>${food.price * cartItems[food._id]}</p>
                  <button className='cross' onClick={() => removeFromCart(food._id)}>X</button>
                </div>
                <hr />
              </>
            )
          }
        })}

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button onClick = {() => navigate('/placeOrder')} >PROCEED TO CHECKOUT</button>
        </div>
        <div className = "cart-promo-code">
          <div>
            <p>if you have a promo code, enter it here</p>
            <div   className = 'cart-promo-code-input'>
            <input type      = "text" placeholder = 'Promo Code' />
            <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
