import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Cart } from "../Cart";
import { Header } from "../Commons/Header";
import MakeSelect from "../MakeSelect/MakeSelect";
import ModelSelect from "../ModelSelect/ModelSelect";
import { VehicleSearch } from "../VehicleSearch";

const CustomHeader = () => {
  const selectedMake = useSelector((state: RootState) => state.makes.selected);

  return (
    <Header>
      <Cart />
      <MakeSelect />
      <ModelSelect make={selectedMake?.name} />
      <VehicleSearch />
    </Header>
  );
};

export default CustomHeader;
