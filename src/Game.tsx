import  { useState } from 'react';
import './Game.css';
import PokerCard from './cards/PokerCard';
import SkillCardPar from './cards/SkillCardPar';
import Cardpar from './cards/Cardpar';
import GameManager from './GameManager';
import SkillReturn from './cards/SkillReturn';
import TextContainer from './TextContainer.tsx';

const Game = ({ get_language}: { get_language: () => void}) => {



  
const get_language_int = () => {
    const result : any = get_language();
    return result
  }
  

  //sert juste a l'affichage
  const[pokerHand, setpokerHand] = useState<PokerCard[]>([]);
  //la vraie main
  const[pokerHand2, setpokerHand2] = useState<PokerCard[]>([]);

  const[pokerDeck, setpokerDeck] = useState<PokerCard[]>([]);

  const[skillHand, setSkillHand] = useState<SkillCardPar[]>([]);
  const [isBegin, setIsBegin] = useState(true);


  const [description, setDescription] = useState('')
  
  const[description_card, setdescription_card] = useState<Cardpar | null>(null);
  
  let Gamemanager_var : GameManager = new GameManager();
  let textcontainer_var : TextContainer = new TextContainer();
  const[ActionButtons, setActionButtons] = useState<string[]>([
    textcontainer_var.export_text(get_language_int(),1,2),
    textcontainer_var.export_text(get_language_int(),1,3)
  ]);
  setActionButtons
  //let description_card : any;
  
  
  



const Spawn_poker_deck = () => {
  setpokerHand(prevBoutons => {
    
    let filtered : PokerCard[] = [];
    prevBoutons
    //let filtered : PokerCard[] = [...prevBoutons]; pour pas reset l'array
    let i = 0;
    //let filtered = prevBoutons.filter((_, i) => i !== index);
    Gamemanager_var.poker_hand.forEach((card) => {
      //card.index = i;
      //console.log('index : ', card.index);
      filtered = [...filtered, card];
      i++;
    });

    return filtered;
  });
}


  


  

  const Begin = () => {
    if (isBegin==true) {
    
    setIsBegin(false)
    Gamemanager_var.create_poker_hand();
    Gamemanager_var.create_skill_hand();
    
    setSkillHand(Gamemanager_var.skill_hand);
    setpokerDeck(Gamemanager_var.poker_deck);
    setpokerHand2(Gamemanager_var.poker_hand);
    Spawn_poker_deck();
    

    


    
  }
  }
  Begin();

/*
const intervalId = setInterval(() => {
    console.log("deck n : ",Gamemanager_var.poker_deck, "hand : ",Gamemanager_var.poker_hand);
}, 1000);*/

const reset_poker_deck= () => {
  
Gamemanager_var.set_poker_hand(pokerHand2);

Spawn_poker_deck();
setpokerHand2(Gamemanager_var.poker_hand);
}

const ClickEndTurn = () => {
 //alert(`end turn !`);
 //Gamemanager_var.create_poker_deck();
 //Gamemanager_var.create_poker_hand()

 Gamemanager_var.set_poker_deck(pokerDeck);
 Gamemanager_var.set_poker_hand(pokerHand2);
 Gamemanager_var.create_poker_hand();
 Spawn_poker_deck();
 setpokerDeck(Gamemanager_var.poker_deck);
 setpokerHand2(Gamemanager_var.poker_hand);

 
 
 
 
 //console.log("hand : ",Gamemanager_var.poker_hand); "deck n : ",Gamemanager_var.poker_deck, 
}



  
const ClickCard = (card: Cardpar) => {
  
  card.onclick();
  if (card.have_description) {
  if (card == description_card) {
    disable_description()
  } else {
  //console.log("description card : ",description_card)
  let local_langage = 0
  local_langage = get_language_int()
  setDescription(card.get_description(local_langage));
  setdescription_card(card);
  }
  
}

  if (card instanceof SkillCardPar) {
    /*
    Gamemanager_var.set_poker_deck(pokerDeck);
    Gamemanager_var.set_poker_hand(pokerHand2);
    Gamemanager_var.set_skill_hand(skillHand);
    //Gamemanager_var.unselect_all_skills();
    //card.set_is_selected(true);
    
    let didi = 0
    didi =get_language_int()
    
     //card.get_card_description()
    setSkillHand(Gamemanager_var.skill_hand)
    let skillreturn : SkillReturn = card.activateskill(Gamemanager_var.create_selected_cards_list());
    if (skillreturn.isvalid==true) {
      Gamemanager_var.discard_selected_cards();
    }*/

    
    /*
    pokerHand2.forEach(card  => {
      
    });*/

    
    setpokerHand2(Gamemanager_var.poker_hand);
    setpokerDeck(Gamemanager_var.poker_deck);
    //reset_poker_deck(); 
  }
  //Discard_poker_card(card.index);

  reset_poker_deck();

  let i = 0
  if (i==1) {
    golem()
    setpokerHand
    setSkillHand
  }
  
};
const CardList = ({ cards }: { cards: Cardpar[] }) => (
  <div className="button-container"> 
      {
      cards.map((card, index) => (
          <button 
            key={index}
            className="action-button"
            style={{
              backgroundImage: `url('${card.image}')`,
              transform: card.is_translate_Y() ? 'translateY(-30px)' : 'translateY(0)'
              //'${card.get_is_selected()}
            }}
            onClick={() => ClickCard(card)}
          >
            {''}
          </button>
        ))}
    </div>
)




const disable_description = () => {
  if (description_card!=null) {
    setDescription('');
    setdescription_card(null)
  }
}

const ClickActionButton = (index: number) => {
  index
  let card = description_card
  if (card instanceof SkillCardPar) {
    
    Gamemanager_var.set_poker_deck(pokerDeck);
    Gamemanager_var.set_poker_hand(pokerHand2);
    Gamemanager_var.set_skill_hand(skillHand);
    //Gamemanager_var.unselect_all_skills();
    //card.set_is_selected(true);
    
    
     //card.get_card_description()
    setSkillHand(Gamemanager_var.skill_hand)
    let skillreturn : SkillReturn = card.activateskill(Gamemanager_var.create_selected_cards_list());
    if (skillreturn.isvalid==true) {
      Gamemanager_var.discard_selected_cards();
      disable_description()
    }

    
    /*
    pokerHand2.forEach(card  => {
      
    });*/

    
    setpokerHand2(Gamemanager_var.poker_hand);
    setpokerDeck(Gamemanager_var.poker_deck);
    //reset_poker_deck(); 
  }
  //Discard_poker_card(card.index);

  reset_poker_deck();

  //console.log("liverson")
  /*
  if (index==0) {
  if (description_card!=null) {
    let card = description_card
  if (card instanceof SkillCardPar) {
    
    Gamemanager_var.set_poker_deck(pokerDeck);
    Gamemanager_var.set_poker_hand(pokerHand2);
    Gamemanager_var.set_skill_hand(skillHand);
    //Gamemanager_var.unselect_all_skills();
    //card.set_is_selected(true);
    
    let didi = 0
    
     //card.get_card_description()
    setSkillHand(Gamemanager_var.skill_hand)
    let skillreturn : SkillReturn = card.activateskill(Gamemanager_var.create_selected_cards_list());
    if (skillreturn.isvalid==true) {
      Gamemanager_var.discard_selected_cards();
      disable_description();
    }

    
    setpokerHand2(Gamemanager_var.poker_hand);
    setpokerDeck(Gamemanager_var.poker_deck);
    reset_poker_deck(); 
  }
  //Discard_poker_card(card.index);

  reset_poker_deck();}

  }*/
}






const ActionButtonList = () => (
  
  <div 
  //className="button-container"
  > 
      {
      ActionButtons.map((currentbutton, index) => (
          <button 
            key={index}
            //className="action-button"
            style={{
              //backgroundImage: `url('${card.image}')`,
              //transform: card.is_translate_Y() ? 'translateY(-30px)' : 'translateY(0)'
              //'${card.get_is_selected()}
            }}
            onClick={() => ClickActionButton(index)}
          >
            {currentbutton}
          </button>
        ))}
    </div>
)

 const golem = () => {
 };




  return (
    <div  className="app">
    <CardList cards={pokerHand}/>
    <CardList cards={skillHand}/>
    <div>
          <div>
            {description}
          </div>
          <div><ActionButtonList/></div>
          <div>
          <button 
            //key={0}
            //className="action-button"
            //style={{backgroundImage: `url('${card.image}')`}}
            onClick={() => ClickEndTurn()}
          >
            {textcontainer_var.export_text(get_language_int(),1,4)}
          </button>
          </div>
    </div>
    
    </div>
  );
}

export default Game;