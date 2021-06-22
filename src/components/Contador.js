import React, { useState, Fragment } from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0); 

    const aumentar = () => {
        setNumero(numero +1)
        if (numero >= 3) {
            alert("Solo tenemos 3 productos en stock")
        }
    }

    const reducir = () => {
        setNumero(numero -1)
    }

    return ( 
        <Fragment>
        <button onClick={aumentar}>+</button>
        <h4>{numero}</h4>
        <button onClick={reducir}>-</button>
        </Fragment>
     );
}
 
export default Contador;