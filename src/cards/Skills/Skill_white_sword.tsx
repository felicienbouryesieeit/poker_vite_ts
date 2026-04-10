import SkillCardPar from '../SkillCardPar';
import PokerCard from "../PokerCard";

class Skill_white_sword extends SkillCardPar {
 
    constructor() {
    super();
    this.poker_cards_number = 2;
    this.effect_type = 1;
    this.damage_value = 5;
    //this.image = '/skills/white_shield.png';

}

skilleffect(selected_cards : PokerCard[]) {
    super.skilleffect(selected_cards);
    console.log("selected cards :");
    console.log(selected_cards);
    let local_damage : number = 0 ;
    selected_cards.forEach(card => {
        local_damage = local_damage + card.get_card_value()
    })
    this.damage_value = local_damage;
  }

}

export default Skill_white_sword;