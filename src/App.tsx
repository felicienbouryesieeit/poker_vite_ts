import { useEffect, useState } from 'react' //React,
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Game from './Game.tsx';
import Vide2 from './Vide2.tsx';
import Vide3 from './Vide3.tsx';
import Connexionroute from './Connexionroute.tsx';
import { supabase } from './createClient.ts';
import TextContainer from './TextContainer.tsx';

interface User {
  name: string;
    id: number;
}
function App() {
  let textcontainer_var : TextContainer = new TextContainer();
  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<User>({
    
    name: '',
    id: 0
  })
  setUser
  const [LangageInt,setLangageInt] = useState(0);
  const [TextIndex,setTextIndex] = useState(0);
  setTextIndex
  const change_Langage = () => {
    setLangageInt(LangageInt+1);

    if (LangageInt==1) {
      setLangageInt(0)
    }
  }

  //console.log(user)


  useEffect(() => {
    fetchUsers()
  }, [])



  async function fetchUsers(): Promise<void> {
    const { data} = await supabase
      .from('users')
      .select('*');

    setUsers(data as User[] || []);
    
  }

  let g=0
  if (g==1) {
    createUser()
  }
  async function createUser(): Promise<void> {

    await supabase
      .from('users')
      .insert({ name: user.name })
      
  }

    const test = () => {
      //console.log("users doudou : ",users);
      return users
    }
  const get_language = () =>{
    return LangageInt;
  }



  const testclick = () => {
    test();
    return users
  }
  
  const testclick2 = () => {
    test();
    return users
  }
  
//<Vide3 onClickFunc={testclick}></Vide3>
  const get_language_string = () => {
    let language_emoji = ""
    switch (LangageInt) {
      case 0 : language_emoji = "🇬🇧"; break;
      case 1 : language_emoji = "🇫🇷"; break;
    }
    return language_emoji;
  }
  // className='language-button'
  return (
    <BrowserRouter>
      <header>
        
        <nav className ="navbar">
          <Link to="/" className ="navbar-button">
            {textcontainer_var.export_text(LangageInt,TextIndex,0)}
          </Link>
          <Link to="/Game" className ="navbar-button">
            {textcontainer_var.export_text(LangageInt,TextIndex,1)}
          </Link>
          <Link to="/Connexionroute/*" className ="navbar-button">
            {textcontainer_var.export_text(LangageInt,TextIndex,3)}
          </Link>
          
          <button onClick={change_Langage} className='language-button'>{get_language_string()}​</button>
        </nav>
        
        
        <Routes>
          <Route path="/" element={<Accueil get_language={get_language}/>} />
          <Route path="/Game" element={<Game 
          get_language={get_language}
          />} />
          <Route path="/Connexionroute/*" element={<Connexionroute
          get_language={get_language}
          />} />
          <Route path="/Vide3" element={<Vide3 
          onClickFunc={testclick}
          onClickFunc2={testclick2}/>} />
          
        </Routes>
      </header>
    </BrowserRouter>
    
  );
}

// Composant Accueil (page par défaut)
const Accueil = ({ get_language}: { get_language: () => void}) => {
  
  let textcontainer_var : TextContainer = new TextContainer();
  const get_language_int = () => {
    const result : any = get_language();
    return result
  }

  const navigate = useNavigate();
  return (
  <div>
  
  <div className='chip-crypt'></div>
  <div><button className='play-button' onClick={() => navigate('/Game')}>{textcontainer_var.export_text(get_language_int(),0,2)}</button></div>
  <div>
  </div>
    </div>
    
  )

}

export default App


/*

  code vide2 et vide3



  
          <Link to="/Vide2" className ="navbar-button">
            Vide 2
          </Link>
          <Link to="/Vide3" className ="navbar-button">
            Vide 3
          </Link>






  CODE DU GET ET DU POST 





    <form onSubmit={createUser}>
      <input type="text" placeholder="name" name="name" onChange={handlechange}/>
      <input type="email" placeholder="Email" />
      <button type='submit'>Ajouter</button>
    </form>
    <div>
      {users.map(user => (
        <div key={user.id}>
          <div>{user.name} {user.created_at} </div>
        </div>
      ))}
    </div>
    
    */