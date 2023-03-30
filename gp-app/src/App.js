
import './App.css';
import Header from "./Components/Header/Header";
import Nav_Bar from "./Components/Nav_Bar/Nav_Bar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Store from "./Redux/State";
import Dialogs_Container from "./Components/Dialogs/Dialogs_Container";


function App(props) {

    return (
        <BrowserRouter>
        <div className="App_Wrapper">
            <Header/>
            <Nav_Bar/>
            <div className="content_Wrapper">
                <Routes>
                    <Route path='/profile' element={<Profile store = {props.store} />}/>
                    <Route path='/dialogs/*' element={<Dialogs_Container store = {props.store} />}/>
                </Routes>
            </div>

        </div>
        </BrowserRouter>
    );
}

export default App;
