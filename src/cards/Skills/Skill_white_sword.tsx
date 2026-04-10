import SkillCardPar from '../SkillCardPar';


class Skill_white_sword extends SkillCardPar {
 
    constructor() {
    super();
    this.poker_cards_number = 2;
    this.effect_type = 1;
    this.damage_value = 5;
    //this.image = '/skills/white_shield.png';

}

skilleffect() {
    super.skilleffect();
    this.damage_value = 11;
  }

}

export default Skill_white_sword;