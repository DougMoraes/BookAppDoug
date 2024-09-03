import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { BooksStore } from "../../stores/BooksStore";

export const getAsRegExp = (text: number | string) => {
  return new RegExp(text.toString(), 'i');
};

export const renderWithProviders = (ui: ReactNode) => {
  return render(
    <Provider store={BooksStore}>
      <NavigationContainer>
        {ui}
      </NavigationContainer>
    </Provider>
  );
};