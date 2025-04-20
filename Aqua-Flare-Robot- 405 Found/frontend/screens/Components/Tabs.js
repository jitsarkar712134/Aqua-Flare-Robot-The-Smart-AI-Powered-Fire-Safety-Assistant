import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ExploreScreen from "./ExploreScreen";
import FeaturesScreen from "./FeaturesScreen";
import Contact from './Contact';
import Chatbot from "./Chatbot";

const Tab = createBottomTabNavigator();

const Tabs = () =>{
return(
     <Tab.Navigator > 
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Features" component={FeaturesScreen} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Chatbot" component={Chatbot} />
        </Tab.Navigator>
    );
}

export default Tabs;