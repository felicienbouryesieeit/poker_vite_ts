const Register = ({ get_language}: { get_language: () => void}) => {
    const get_language_int = () => {
    const result : any = get_language();
    return result
  }

  const createUser2 = () => {

  }

  const handlechange2 = () => {

  }

  return (
    <div>
      <form onSubmit={createUser2}>
      <input type="text" placeholder="name" name="name" onChange={handlechange2}/>
      <input type="email" placeholder="Email" />
      <button type='submit'>Ajouter</button>
    </form>
    </div>
  );
};

export default Register;


/*

      <form onSubmit={createUser}>
      <input type="text" placeholder="name" name="name" onChange={handlechange}/>
      <input type="email" placeholder="Email" />
      <button type='submit'>Ajouter</button>
    </form>

*/