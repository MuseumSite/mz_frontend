import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import {MainPage} from "./pages/MainPages"
import {AboutPage} from "./pages/AboutPage"
import {ExhibitionsPage} from "./pages/events/ExhibitionsPage"
import {QuestsPage} from "./pages/events/QuestsPage"
import {LessonsPage} from "./pages/events/LessonsPage"
import {GuidedToursPage} from "./pages/events/GuidedToursPage"
import {NewsPage} from "./pages/NewsPage"
import {ContactPage} from "./pages/ContactPage"
import {EventsPage} from "./pages/EventsPage"

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/home" exact>
                <MainPage/>
            </Route>
            <Route path="/about" exact>
                <AboutPage/>
            </Route>
            <Route path="/news" exact>
                <NewsPage/>
            </Route>
            <Route path="/events" exact>
                <EventsPage/>
            </Route>
            <Route path="/events/exhibitions" exact>
                <ExhibitionsPage/>
            </Route>
            <Route path="/events/guided_tours" exact>
                <GuidedToursPage/>
            </Route>
            <Route path="/events/lessons" exact>
                <LessonsPage/>
            </Route>
            <Route path="/events/quests" exact>
                <QuestsPage/>
            </Route>
            <Route path="/contacts" exact>
                <ContactPage/>
            </Route>
            <Redirect to="/home" exact/>
        </Switch>
    )
}
