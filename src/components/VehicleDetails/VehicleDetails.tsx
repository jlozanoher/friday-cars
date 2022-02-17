import cs from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import Vehicle from "../../models/vehicle.model";
import { setVehicleSelected } from "../../slices";
import { HStack, VStack } from "../Commons/Containers/Containers";
import { Center } from "../Commons/Result/styles";
import CarIcon from "./car-icon.png";
import * as S from "./styles";

interface Props {
  vehicle: Vehicle;
  selected?: boolean;
}

const VehicleDetails = (props: Props) => {
  const { vehicle: v, selected } = props;

  const dispatch = useDispatch();

  const handleSelect = () => {
    const r = !selected ? v : undefined;
    dispatch(setVehicleSelected(r));
  };

  return (
    <div data-testid={`VehicleDetails${v.id}`}>
      <S.Img src={CarIcon} alt={"car-icon"} />
      <HStack>
        <S.Title>{v.make}</S.Title>
        <S.SubTitle>{v.model}</S.SubTitle>
      </HStack>
      <VStack>
        <div>
          <small>Body type: {v.bodyType}</small>
        </div>
        <div>
          <small>Engine capacity: {v.engineCapacity} cc</small>
        </div>
        <div>
          <small>Power (Horsepower): {v.enginePowerPS}</small>
        </div>
        <div>
          <small>Power (KiloWatts): {v.enginePowerPW || "-"}</small>
        </div>
        <div>
          <small>Fuel type: {v.fuelType}</small>
        </div>
      </VStack>
      <div style={{ height: "20px" }} />
      <Center>
        <S.SelectBtn className={cs({ red: selected })} onClick={handleSelect}>
          {selected ? "Unselect" : "Select"}
        </S.SelectBtn>
      </Center>
    </div>
  );
};

export default VehicleDetails;
