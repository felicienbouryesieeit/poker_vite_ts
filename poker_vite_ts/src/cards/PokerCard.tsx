import Cardpar from './Cardpar';

class PokerCard extends Cardpar {
    poker_value: Number;
    poker_color: Number;
  is_selected: boolean;
    
    
  constructor() {
    super();
    this.is_selected = false;
    this.image = '/cards/4_of_clubs.png';
    this.poker_value = 1;
    this.poker_color = 0;
    this.have_description = false;
    
  }
  set_is_selected(new_is_selected: boolean) {
    this.is_selected = new_is_selected;
    
  }
  
  onclick() {
    super.onclick();
    this.set_is_selected(!this.is_selected);
    return [];
  }

  is_translate_Y() {
    super.is_translate_Y();
    return this.is_selected;
  }

  begin_pokercard(local_poker_value: Number, local_poker_color: Number) {
    this.poker_value = local_poker_value;
    this.poker_color = local_poker_color;
    let value_string : string = this.poker_value.toString();
    

    switch (this.poker_value) {
    case 1:
    value_string = 'ace';
    break;
    case 11:
    value_string = 'jack';
    break;
    case 12:
    value_string = 'queen';
    break;
    case 13:
    value_string = 'king';
    break;
    }
    let color_string : string = '';

    switch (this.poker_color) {

    case 0:
    color_string = 'clubs';
    break;

    case 1:
    color_string = 'diamonds';
    break;

    case 2:
    color_string = 'hearts';
    break;

    case 3:
    color_string = 'spades';
    break;
    }

    this.image = `/cards/${value_string}_of_${color_string}.png`;

    
   // console.log("value : ",this.poker_value, "color : ", this.poker_color);
  }

  



}


export default PokerCard;