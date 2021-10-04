import axios from 'axios';
import {useState} from 'react'

function CardList() {

    const [cardList, setCardList] = useState([])

    const getCards = () => {
        axios({
            method: 'GET',
            url: 'https://pasv-kanban.herokuapp.com/card/'
        })
            .then(res => setCardList(res.data))
    };
    const deleteCard = (id) => {
        axios({
            method: 'DELETE',
            url: `https://pasv-kanban.herokuapp.com/card/${id}`
        })
            .then(res => getCards())
    };


    return (

        <div className="App">


            <button onClick={getCards}>Get Cards</button>
            {cardList.map(card => <li key={card.id}>{card.name}
                <button onClick={() => deleteCard(card.id)}>Delete</button>
            </li>)}

        </div>

    );
}


export default CardList;

