import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { executeWithDebounce } from "../../helpers/debounce";
import { selectAllMakes } from "../../slices/make.slice";
import { selectAllModels } from "../../slices/model.slice";
import { setVehicleSearch } from "../../slices/vehicle.slice";
import { Input } from "../Commons/Input";

const VehicleSearch = () => {
  const dispatch = useDispatch();

  const { selected: make } = useSelector(selectAllMakes);
  const { selected: model } = useSelector(selectAllModels);

  const handleChange = (e: any) =>
    executeWithDebounce(() => {
      dispatch(setVehicleSearch(e.target.value));
    });

  return (
    <Input
      placeholder="Search"
      disabled={!make || !model}
      onChange={handleChange}
    />
  );
};

export default VehicleSearch;
