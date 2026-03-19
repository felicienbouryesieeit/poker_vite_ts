
import TextContainer from "../TextContainer";

class Cardpar {
  image: string;
  //description : string;
  text_container : TextContainer
  have_description : boolean
  description_index : number
  //index : number;
  constructor() {
    this.image= '/cards/2_of_clubs.png';
    
    this.have_description = true;
    
    //this.description = 'oui';
    this.text_container= new TextContainer();
    this.description_index = 0;

    //this.index = 0;
  }

  get_description(language_int:number) {
    language_int
    let local_description:string="";

    return local_description;
  }

  

  is_translate_Y() {
    return false
  }


  onclick() {
    //console.log('carte')
    //alert(`carte !`);
    return [];
  }
}

export default Cardpar;