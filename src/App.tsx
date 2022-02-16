import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { VStack } from "./components/Commons/Containers/Containers";
import { Header } from "./components/Commons/Header";
import { Main } from "./components/Commons/Main";
import MakeSelect from "./components/MakeSelect/MakeSelect";
import ModelSelect from "./components/ModelSelect/ModelSelect";
import VehicleList from "./components/VehicleList/VehicleList";
import { VehicleSearch } from "./components/VehicleSearch";

function App() {
  const selectedMake = useSelector((state: RootState) => state.makes.selected);
  const selectedModel = useSelector(
    (state: RootState) => state.models.selected
  );

  return (
    <VStack>
      <Header>
        <MakeSelect />
        <ModelSelect make={selectedMake?.name} />
        <VehicleSearch />
      </Header>
      <Main>
        <VehicleList make={selectedMake?.name} model={selectedModel?.name} />
      </Main>
    </VStack>
  );
}

export default App;
