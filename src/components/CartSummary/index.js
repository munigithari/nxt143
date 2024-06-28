// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
  {value => {
      const {cartList} = value 
      let total = 0
      cartList.forEach(rachCartItem => {
        total += rachCartItem.price * rachCartItem.quantity
      })
  

  return (
    <>
  <div className="container1">
    <div>
      <h1 className="heading">
        Order Total : <span className="span">Rs {total}/-</span>
      </h1>
      <p className="paragraph">{cartList.length} items in cart</p>
    </div>
    <button type="button" className="button1">
      Checkout
    </button>
  </div>
  </>
  )
  }}
  </CartContext.Consumer>
)

export default CartSummary
