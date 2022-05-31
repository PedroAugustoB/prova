import React from "react";
import './css/navcss.css'

const Navbar = () => {
    return (<>

        <div className="navbarboa">
            <nav>
                <ul>
                    <li id="image">
                    <img src="https://www.uern.br/controledepaginas/museu-apresentacao/imagens/1971banner_museu_virtual_cinza.jpg" alt="" />
                    </li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Artes</a></li>
                    <li><a href="">Museus</a></li>
                    <li id="Space"><a href=""></a></li>
                    <li><a type="button" href="">Login</a></li>
                </ul>
            </nav>
        </div>
    
    </>);
}
 
export default Navbar;