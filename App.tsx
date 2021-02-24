import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./src/containers/pages/Dashboard/Dashboard";
import LandingPage from "./src/containers/pages/LandingPage/LandingPage";
import AllTasks from "./src/containers/pages/AllTasks/AllTasks";
import CompletedTasks from "./src/containers/pages/CompletedTasks/CompletedTasks";
import PendingTasks from "./src/containers/pages/PendingTasks/PendingTasks";

const Stack = createStackNavigator();

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="All Tasks" component={AllTasks} />
          <Stack.Screen name="Completed Tasks" component={CompletedTasks} />
          <Stack.Screen name="Pending Tasks" component={PendingTasks} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  async function loadResourcesAsync() {
    await Promise.all([
      Font.loadAsync({
        //Roboto: require('native-base/Fonts/Roboto.ttf'),
        //Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      }),
    ]);
  }

  function handleLoadingError(error: any) {
    console.warn(error);
  }

  function handleFinishLoading(setLoadingComplete: any) {
    setLoadingComplete(true);
  }
}
