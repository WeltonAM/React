import React from "react";
import './Texto.css';

function Texto(props){
    
    function Maiuscula(text){
        return text.toUpperCase();
    }
    
    return (
        <section className="coment">
            <p className="title">{props.title}</p>
            <p className="text">Texto do comentário</p>
            <p className="author">{Maiuscula(props.author)}</p>
        </section>
    )
}

export default Texto