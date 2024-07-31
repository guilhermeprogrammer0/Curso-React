import React from 'react';
import '../comen.css'
const Comentario = props=> {
   return <div className="comentario">
    <h2>{props.nome}</h2>
    <p>{props.email}</p>
    <p>{props.children}</p>
    <button onClick={props.onRemove}>&times;</button>
    </div>
}
export default Comentario;