import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

import Header from "./components/Header"
import MainPage from "./pages/MainPages"
import AboutPage from "./pages/AboutPage"
import NewsPage from "./pages/NewsPage"
import EventsPage from "./pages/EventsPage"
import ExhibitionsPage from "./pages/events/ExhibitionsPage"
import GuidedToursPage from "./pages/events/GuidedToursPage"
import LessonsPage from "./pages/events/LessonsPage"
import QuestsPage from "./pages/events/QuestsPage"
import ContactPage from "./pages/ContactPage"

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/news" component={NewsPage}/>
                <Route path="/events" exact component={EventsPage}/>
                <Route path="/exhibitions" component={ExhibitionsPage}/>
                <Route path="/guided_tours" component={GuidedToursPage}/>
                <Route path="/lessons" component={LessonsPage}/>
                <Route path="/quests" component={QuestsPage}/>
                <Route path="/contacts" component={ContactPage}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default App
