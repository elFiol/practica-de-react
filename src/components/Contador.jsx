import { useState } from "react"

const Contador = () => {
    const [numero,setNumero] = useState(10)
    return (
        <div className="text-center">
            <h3>Contador</h3>
            <p>{numero}</p>
            <button className="btn btn-primary" onClick={() => {setNumero(numero + 1)}}>+1</button>
        </div>
    );
};

export default Contador;