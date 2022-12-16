import { useCartContext } from "../../context/CartContext"
const CartContainer = () => {
  const { cartList, vaciarCarrito } = useCartContext()
  console.log(cartList)
  return (
    <div>
      { cartList.map(product => <li key={product.id}>
            <img src={product.foto} alt="" className="w-25"/>
            {product.name} - Cantidad: {product.cantidad} - Precio: {product.price}
            <button className="btn" onClick={()=>console.log('Eliminando item')}> X </button>
          </li>) 
      }
      <button 
        className="btn btn-outline-danger"
        onClick={vaciarCarrito}
      >
        Vaciar Carrito
      </button>
    </div>
  )
}

export default CartContainer