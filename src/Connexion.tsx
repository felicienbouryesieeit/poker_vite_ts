


import React, { useState,useRef } from 'react';
import TextContainer from './TextContainer.tsx';
import emailjs from '@emailjs/browser';


const Connexion = ({ get_language, createUser, handlechange}: { get_language: () => void,createUser: () => void, handlechange : (event: React.ChangeEvent<HTMLInputElement>) => void}) => {
    
  
  
  
  const [isstarting,setIsstarting] = useState(true);
  const [code,setCode] = useState(0);
  
  
  /*event: React.FormEvent<HTMLFormElement> */
  
  
  
  
  
  
  
  
  const begin = () => {
    if (isstarting) {
      setIsstarting(false);
      let random_code : number = Math.floor(Math.random() * 999999)+1000000;
      setCode(random_code);
    }
  }
  begin()
  
  
  
  






  const formemail : any = useRef('');
  const formCheckCode : any = useRef('');
  
  
  const sendEmail = (e:any) => {
    
    setConnexionType(3);
    e.preventDefault();
    






    // Récupérer les données du formemailulaire
    const formemailData = new FormData(formemail.current);
    const userEmail = formemailData.get('email'); // Seul l'email vient du formemailulaire
    
    // Préparer les paramètres du template avec des valeurs définies par script
    const templateParams = {
      title: 'Contact depuis le site web', // Titre défini par script
      email: userEmail,
      message: 'code : '+code.toString(), 
      
      // Vous pouvez ajouter plus d'informemailations si nécessaire
      //submission_date: new Date().toLocaleString(),
      //user_agent: navigator.userAgent
    };
    //createUser()



    emailjs
      .send('service_fnvdvmy', 'template_wz0anjj', templateParams, {
        publicKey: 'Fqx8TAT0xBmkXQkNl',
      })
      .then(
        () => {
          console.log('SUCCESS!');

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };












const restartbutton = () => {
  location.reload();
  
}


  
  const checkCode = (e:any) => {
    e.preventDefault();
    const formCheckCodedata = new FormData(formCheckCode.current);
    const local_code = formCheckCodedata.get('validation_code');
    
    if (local_code==code.toString()) {
      setConnexionType(4);
      createUser();
    } else {
      setConnexionType(5);
    }
    

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const [ConnexionType, setConnexionType] = useState(0);

  
    let textcontainer_var : TextContainer = new TextContainer();


    const test = () => {

    }
    const get_language_int = () => {
    const result : any = get_language();
    return result
  }


  const handle_change = () => {
    //handlechange
  }


  const create_user = () => {
    //createUser()
  }


  

  
  return (
    <div>
      
      {ConnexionType==5 && (
        <div>
          <div>Code incorrect, veuillez recommencer l'inscription.</div>
          <div><button onClick={restartbutton} >recommencer​</button></div>
          
          
        </div>
      )}

      {ConnexionType==4 && (
        <div>
          Inscription comfirmée
          
        </div>
      )}
      {ConnexionType==0 && (
        <div>
      <button onClick={() => setConnexionType(1)}>
        {textcontainer_var.export_text(get_language_int(),2,1)}
      </button>
      <button onClick={() => setConnexionType(2)}>
        {textcontainer_var.export_text(get_language_int(),2,0)}
      </button>
      </div>
      )}

        {ConnexionType==3 && (
          <div>

          <form ref={formCheckCode} onSubmit={checkCode}>
          <label>code de validation : </label>

          <input type="text" name="validation_code" />
          <input type="submit" value="Send" />
          </form>


          </div>
      )}


        {ConnexionType==2 && (
          <div>

          <form ref={formemail} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="title" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Mot de passe</label>
          <input type="text" name="mot de passe" />
          <input type="submit" value="Send" />
          </form>


          </div>
      )}


      {ConnexionType==1 && (
          <div>

            <form onSubmit={test}>
        <input type="email" placeholder="Email" />
        <input type="mot de passe" placeholder="mot de passe" />
        <button type='submit'>{textcontainer_var.export_text(get_language_int(),2,1)}</button>
        </form>

          </div>
      )}
        
        </div>
  );
};

export default Connexion;
//




/*
          <label>Message</label>
          <textarea name="message" />y


   <form onSubmit={createUser}>
        <input type="text" placeholder="name" name="name" onChange={handlechange}/>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="mot de passe" />
        <button type='submit'>{textcontainer_var.export_text(get_language_int(),2,0)}</button>
        </form>








*/