import axios from 'axios';
import {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CardList from "./CardList";
import CardCreate from "./CardCreate";

function App() {


    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <div className="App">

                <Switch>
                    <Route exact path="/">
                        <CardList/>
                    </Route>
                    <Route path="/create">
                        <CardCreate/>

                    </Route>


                </Switch>


            </div>
        </Router>
    );
}


export default App;


