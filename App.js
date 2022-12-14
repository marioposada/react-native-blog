import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";

import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider >
      <App />
    </BlogProvider>
  );
};
