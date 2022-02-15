import React from "react";
import Vehicle from "../../models/vehicle.model";
import { Card } from "../Commons/Card";
import { HStack, VStack } from "../Commons/Containers/Containers";
import CarIcon from "./car-icon.png";
import * as S from "./styles";

interface Props {
  vehicle: Vehicle;
}

const VehicleCard = (props: Props) => {
  const { vehicle: v } = props;

  return (
    <Card>
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
    </Card>
  );
};

export default VehicleCard;
