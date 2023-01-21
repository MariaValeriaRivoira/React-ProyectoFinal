import React from 'react';
import { Link } from 'react-router-dom';

const Displayed = ({actual}) => {
    return (
        <div className='displayed'
        style={{
            backgroundColor: '#222',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
            marginBottom: 20
        }}>
            <Link style={{marginRight: 5}} to={'/productos'}>Productos</Link> / {actual}
        </div>
    );
}

export default Displayed;