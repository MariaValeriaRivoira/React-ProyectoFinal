import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    return (
        // <Container>
        //     <Row className='text-center'>
                
        //         <h2>{ greeting }</h2>
               
        //     </Row>
        // </Container>
        <div class="abs-center">
            <h2>{ greeting }</h2>
        </div>
    )
}

export default ItemListContainer