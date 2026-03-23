const Connexion = ({ get_language}: { get_language: () => void}) => {
    const get_language_int = () => {
    const result : any = get_language();
    return result
  }

  return (
    <div>
    </div>
  );
};

export default Connexion;


/*

      <form onSubmit={createUser}>
      <input type="text" placeholder="name" name="name" onChange={handlechange}/>
      <input type="email" placeholder="Email" />
      <button type='submit'>Ajouter</button>
      </form>

*/