import React from "react";
import { ListOfCategories } from "./components/Category/ListOfCategories";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/PhotoCard/ListOfPhotoCards";
import { Logo } from "./components/Logo";

const App = () => {
  return(
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories/>
      <ListOfPhotoCards />
    </>
  );
};

export default App;