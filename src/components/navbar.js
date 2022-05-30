import React from "react";
import './css/navcss.css'

const Navbar = () => {
    return (<>
   <title>Navbar Geeksforgeeks</title>

        <nav>
            <ul>
                <li id="image">
                  <img src="https://www.uern.br/controledepaginas/museu-apresentacao/imagens/1971banner_museu_virtual_cinza.jpg" alt="" />
                </li>
                <li><a href="">Tutorials</a></li>
                <li><a href="">Students</a></li>
                <li><a href="">Courses</a></li>
                <li id="Space"><a href=""></a></li>
                <li><button type="button" href="">Login</button></li>
            </ul>
        </nav>

    
    </>);
}
 
export default Navbar;