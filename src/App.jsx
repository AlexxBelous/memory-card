// stuff
import {GameHeader} from "./components/GameHeader.jsx";
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

    const initializeGame = () => {


    }

    useEffect(() => {
        initializeGame();
    }, []);

    return (
        <div className="app">
            <GameHeader/>
        </div>
    )
}

export default App
