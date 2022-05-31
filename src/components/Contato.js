import React from 'react';
import './css/style.css';

const Contato = () => {
    return ( 
        <>
            <div className='main'>
                    <form className='meu_form'>
                        <p class="sexo" >Entre em contato</p>
                        <input type="text" placeholder="Seu nome" />
                        <input type="tel" placeholder="Número de celular" />
                        <input type="email" placeholder="Digite seu e-mail" />
                        <textarea placeholder="Deixe sua opnião"></textarea>
                        <input type="submit" class="enviar" value="Enviar"  />
                    </form>
             
            </div>
        </>
     );
}
export default Contato;

