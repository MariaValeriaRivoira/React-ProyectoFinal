import { Link } from "react-router-dom"

const Item = ( {product} ) => {
    return (
        <div            
            style={{ marginLeft: 100}}
            className='col-md-3'
            key={product.id}
        >   
            <Link to={`/detail/${product.id}`} >
                
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${product.name} - ${product.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={product.foto} alt='' className='w-50' />
                        {product.price}                                                            
                    </div>
                                
                </div>

            </Link>
                            
            
        </div>  
    ) 
  
}

export default Item