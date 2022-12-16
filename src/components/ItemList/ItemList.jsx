import Item from "../Item/Item"

const ItemList = ({ products }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      {products.map( product =>  <Item product={product}  />)}
    </div>  
  )
}

export default ItemList