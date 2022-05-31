import React from "react";
import '../components/css/staly.css';



const Cadastro = () => {
    return ( 
        
            <div class="container" >
    <a class="links" id="paracadastro"></a>
    <a class="links" id="paralogin"></a>
    
    <div class="content">      
   
      <div id="login">
        <form method="post" action=""> 
          <h1>Login</h1> 
          <p> 
            <input id="email_login" name="email_login" required="required" type="text" placeholder="e-mail"/>
          </p>
          
          <p> 
            <input id="senha_login" name="senha_login" required="required" type="password" placeholder="Sua senha" /> 
          </p>
          
          <p> 
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
            <label for="manterlogado">Manter-me logado</label>
          </p>
          
          <p> 
            <input type="submit" value="Logar" /> 
          </p>
          
          <p class="link">
            Ainda não tem conta?
            <a href="#paracadastro">Cadastre-se</a>
          </p>

          <p class="link">
            Recuperar senha
            <a href="#recuperar">Recuperar</a>
          </p>
          

          
        </form>
      </div>

    
      <div id="cadastro">
        <form method="post" action=""> 
          <h1>Cadastro</h1> 
          
          <p> 
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Seu nome" />
          </p>
          
          <p> 
            <input id="email_cad" name="email_cad" required="required" type="email" placeholder="Seu e-mail"/> 
          </p>
          
          <p> 
            <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="Sua senha"/>
          </p>
          <p> 
            <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="Repetir senha"/>
          </p>
          
          <p> 
            <input type="submit" value="Cadastrar"/> 
          </p>
          
          <p class="link">  
            Já tem conta?
            <a href="#paralogin"> Ir para Login </a>
          </p>
          
          
        </form>
      </div>


      <div  id="recuperar">
        <form method="post" action=""> 
          <h1>Recuperar senha</h1> 
          <p> 
            <label>Para redefinir sua senha, informe o usúario ou e-mail cadastrado na sua conta e lhe enviaremos um link </label><br></br>
            <label>Insira o e-mail cadastrado </label>
            <input id="email_login" name="email_login" required="required" type="text" placeholder="e-mail"/>
          </p>
          <br></br>
          <p> 
            <input type="submit" value="Recuperar"/> 
          </p>
          <p> 
            <input type="submit" value="Cancelar"/> 
          </p>
          <p class="link">  
            Já tem conta?
            <a href="#paralogin"> Ir para Login </a>
          </p>

         
          
          
        </form>
      </div>
    </div>
  </div> 

     );
}
 
export default Cadastro;