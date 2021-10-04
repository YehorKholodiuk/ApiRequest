import axios from 'axios';
import {useState} from 'react'

function CardCreate() {


    const [name, setName] = useState('')


    const createCard = () => {
        axios({
            method: 'POST',
            url: 'https://pasv-kanban.herokuapp.com/card/',
            data: {
                'name': name,
                'status': 'todo',
                'priority': 4
            }
        })
        //.then(res => getCards())
    };
    return (

        <div className="App">


            <input placeholder='Name' value={name}
                   onChange={e => setName(e.target.value)}/>
            <button onClick={createCard}>Create</button>

        </div>

    );
}


export default CardCreate;

