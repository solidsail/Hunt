import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  listCircleOutline,
  searchOutline,
  personCircleOutline,
  createOutline,
  trendingUpOutline,
} from "ionicons/icons";
import Products from "./pages/Products";
import Trending from "./pages/Trending";
import Submit from "./pages/Submit";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/"
              render={() => <Redirect to="/news" />}
              exact={true}
            />
            <Route path="/products" component={Products} />
            <Route path="/trending" component={Trending} />
            <Route path="/submit" component={Submit} />
            <Route path="/search" component={Search} />
            <Route path="/profile" component={Profile} />
            <Route component={() => <Redirect to="/products" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="news" href="/products">
              <IonIcon icon={listCircleOutline} />
              <IonLabel>Hunt</IonLabel>
            </IonTabButton>
            <IonTabButton tab="trending" href="/trending">
              <IonIcon icon={trendingUpOutline} />
              <IonLabel>Trending</IonLabel>
            </IonTabButton>
            <IonTabButton tab="submit" href="/submit">
              <IonIcon icon={createOutline} />
              <IonLabel>Submit</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={searchOutline} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
