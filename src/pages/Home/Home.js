import React from "react";
import TabControl from "../../components/TabControl/TabControl";
import { HomeStyled } from "./HomeStyled";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";


const Home = () => {
  return (
    <>
    <MenuSidebar />
      <HomeStyled>
        <TabControl />
      </HomeStyled>
    </>
  );
};

export default Home;
