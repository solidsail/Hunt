import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import LargeHeader from "../components/Header/LargeHeader";

const Home = () => {
  return (
    <IonPage>
      <SmallHeader title="Hunt" />
      <IonContent fullscreen>
        <LargeHeader title="Hunt" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
