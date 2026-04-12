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
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);

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

        const newFlippedCards = [...flippedCards, card.id];
        setFlippedCards(newFlippedCards);

        if (flippedCards.length === 1) {
            const firstCard = cards[flippedCards[0]];

            if (firstCard.value === card.value) {
                alert('Matched');
            } else {
                setTimeout(() => {

                    const flippedBackCard = newCards.map((c) => {
                        if (newFlippedCards.includes(c.id) || c.value === card.value) {
                            return {...c, isFlipped: false}
                        } else {
                            return c;
                        }
                    });
                    setCards(flippedBackCard);
                    setFlippedCards([]);
                }, 1000)
            }
        }

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
