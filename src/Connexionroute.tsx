
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Connexion from './Connexion';
import Register from './Register.tsx';
import TextContainer from './TextContainer.tsx';



const Connexionroute = ({ get_language}: { get_language: () => void}) => {


  

    let textcontainer_var : TextContainer = new TextContainer();
    const navigate = useNavigate();




    const get_language_int = () => {
    const result : any = get_language();
    return result
  }

  
  return (
    <div>

      
        
        <nav className ="navbar">
        </nav>
        
        
        <Routes>
          <Route path="/" element={<Connexion get_language={get_language}/>} />
          <Route path="/" element={<Register get_language={get_language}/>} />
          
        </Routes>
        
      <div><button onClick={() => navigate('/Connexion/*')}>{textcontainer_var.export_text(get_language_int(),2,1)}</button></div>
      <div><button onClick={() => navigate('/Register/*')}>{textcontainer_var.export_text(get_language_int(),2,0)}</button></div>
    </div>
  );
};

export default Connexionroute;
//

/*

      <form onSubmit={createUser}>
      <input type="text" placeholder="name" name="name" onChange={handlechange}/>
      <input type="email" placeholder="Email" />
      <button type='submit'>Ajouter</button>
    </form>

*/