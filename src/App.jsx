
// stuff
import {GameHeader} from "./components/GameHeader.jsx";
import {Card} from "./components/Card.jsx";
import {useEffect, useState} from "react";

const cardValues = [
    "🍎", "🍎",
    "🍌", "🍌",
    "🍉", "🍉",
    "🍇", "🍇",
    "🍓", "🍓",
    "🍍", "🍍",
    "🥝", "🥝",
    "🍒", "🍒"
];

function App() {
    const [cards, setCards] = useState([])

    const initializeGame = () => {

        const finalCards = cardValues.map((value, index) => (
            {
                id: index,
                value,
                isFlipped: false,
                isMatched: false
            }
        ))
        setCards(finalCards);
    }

    useEffect(() => {
        initializeGame();
    }, []);

    const handleCardClick = (card) => {
        if (card.isFlipped || card.isMatched) {
            return;
        }

        const newCards = cards.map((c) => {
            if (c.id === card.id) {
                return {...c, isFlipped: true}
            } else {
                return c;
            }
        })
        setCards(newCards);
    }
    

    return (
        <div className="app">
            <GameHeader score={8} moves={2}/>
            <div className="cards-grid">
                {cards.map((card) => (
                    <Card key={card.id} card={card} onClick={handleCardClick}/>
                ))}
            </div>
        </div>
    )
}

export default App
