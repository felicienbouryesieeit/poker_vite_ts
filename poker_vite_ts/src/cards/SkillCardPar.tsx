import Cardpar from './Cardpar';
import PokerCard from "./PokerCard";
import SkillReturn  from './SkillReturn';

class SkillCardPar extends Cardpar {
  
  effect_type : number;
  effect_type_2 : number;

  poker_cards_number : number;
  poker_cards_number_type : number;
  mult : number;
  upgrade_mult:number;
  is_attack : boolean;

  constructor() {
    super();
    this.effect_type = 0;
    this.effect_type_2 = 0;

    this.poker_cards_number=1;
    this.poker_cards_number_type=0;
    this.mult = 10;
    this.upgrade_mult=5;
    this.is_attack = true;


    this.image = '/skills/white_sword.png';
    
  }

  get_mult() {
    return this.mult
  }

  
  get_description(language_int: number): string {
    super.get_description(language_int);
    let local_mult = this.get_mult();
    let local_desc = this.text_container.export_text(language_int,1,0);
    local_desc = local_desc + " "+this.text_container.export_text(language_int,1,1);
    local_desc = this.set_text_numbers(local_desc);
    local_desc = this.text_container.export_item(language_int,this.description_index,0)
    +"\n"+"\n"+local_desc+
    "\n"+"\n"+this.text_container.export_item(language_int,this.description_index,1)
    +' ('+local_mult.toString()+' '+'mult'+')';
    return local_desc;
  }


  set_text_numbers(base_string : string) {
    let local_string = base_string
    let local_string_2 = '';
    let string_array = local_string.split('')
    let local_number = this.poker_cards_number;

    string_array.forEach(character => {
      let string_to_add = character
      if (string_to_add == '$') {
        string_to_add = local_number.toString();
      }

      if (string_to_add=='*') {
        if (local_number>1) {
          string_to_add = 's'
        } else {
          string_to_add = ''
        }
      }

      local_string_2 = local_string_2 + string_to_add
    });
    return local_string_2;
  }

  onclick() {
    super.onclick();
    return [];
  }

  activateskill(selected_cards : PokerCard[]) {
    let SkillReturnvar : SkillReturn  = new SkillReturn();
    
    if (selected_cards.length>0) {
    SkillReturnvar.isvalid=this.set_isvalid(selected_cards);
  }
    return SkillReturnvar;
  }


  set_isvalid(selected_cards : PokerCard[]) {
    let numberisvalid = false;

    switch(this.poker_cards_number_type) {
      case 0 : 
      if (selected_cards.length==this.poker_cards_number) {
      numberisvalid = true;
      }
      break;

      case 1 : 
      if (selected_cards.length>=this.poker_cards_number) {
      numberisvalid = true;
      }
      break;

      case 2 : 
      if (selected_cards.length<=this.poker_cards_number) {
      numberisvalid = true;
      }
      break;
    }
    /* 
    0 : effet tlt valide
    */
    let effectisvalid = false
    switch(this.effect_type) {
      case 0  :
        effectisvalid=true
        break;
      
      case 1 :
        effectisvalid = this.isflush(selected_cards);
        break;

      
    }


    return (numberisvalid==true && effectisvalid==true);
  }


  isflush(selected_cards : PokerCard[]) {
    let basecolor = selected_cards[0].poker_color;
    let isflush=true;
    selected_cards.forEach(card => {
    if (card.poker_color!=basecolor) {
      isflush=false
    }
      
    });
    return isflush;
  }


}

export default SkillCardPar;