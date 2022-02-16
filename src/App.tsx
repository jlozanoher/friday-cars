import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { VStack } from "./components/Commons/Containers/Containers";
import { Main } from "./components/Commons/Main";
import { CustomHeader } from "./components/CustomHeader";
import VehicleList from "./components/VehicleList/VehicleList";

function App() {
  const selectedMake = useSelector((state: RootState) => state.makes.selected);
  const selectedModel = useSelector(
    (state: RootState) => state.models.selected
  );

  return (
    <VStack>
      <CustomHeader />
      <Main>
        <VehicleList make={selectedMake?.name} model={selectedModel?.name} />
      </Main>
    </VStack>
  );
}

export default App;
