import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {
    const { agregarCarrito, cartList } = useCartContext()
    const onAdd= (cantidad) => {
        alert(`Cantidad de productos seleccionados: ${cantidad}`)
        agregarCarrito( { ...product, cantidad })
    }
    return (
        <div className="row">
            <div className="col m-5">
                <h2>Nombre: {product.name}</h2>
                <img src={product.foto} className='w-50' alt="imágen del producto" />
                <h4>Categoría: {product.categoria}</h4>
                <h4>Precio: {product.price}</h4>
            </div>
            <div>
            <ItemCount 
                stock={10}
                initial={1}
                onAdd={onAdd}
            />
            </div>
        </div>
    )
}

export default ItemDetail