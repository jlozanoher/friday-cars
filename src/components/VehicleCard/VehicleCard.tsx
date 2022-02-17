import React from "react";
import Vehicle from "../../models/vehicle.model";
import { HStack, VStack } from "../Commons/Containers/Containers";
import CarIcon from "./car-icon.png";
import * as S from "./styles";
import cs from "classnames";

interface Props {
  vehicle: Vehicle;
  onClick?: (vehicle: Vehicle) => void;
  selected?: boolean;
}

const VehicleCard = (props: Props) => {
  const { vehicle: v, onClick = () => {}, selected } = props;

  const handleClick = () => onClick(v);

  return (
    <S.Card
      onClick={handleClick}
      className={cs({ selected: selected })}
      data-testid={`Vehicle${v.id}`}
    >
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
    </S.Card>
  );
};

export default VehicleCard;
