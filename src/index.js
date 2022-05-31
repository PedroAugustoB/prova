import React from 'react';
import ReactDOM from 'react-dom/client';
import Telahome from './view/telahome';
import './components/css/index.css'
import Contato from './components/Contato';
import Cadastro from './components/Cadastro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Telahome />
    <Contato />
    <Cadastro />
    
  </React.StrictMode>
);

