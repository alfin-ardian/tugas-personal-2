import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import AppNavigator from "./AppNavigator";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
