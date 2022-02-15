import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles, selectAllVehicles } from "../../slices/vehicle.slice";
import { HStack } from "../Commons/Containers/Containers";
import { Result } from "../Commons/Result";
import { Center } from "../Commons/Result/styles";
import { Spinner } from "../Commons/Spinner/Spinner";
import VehicleCard from "../VehicleCard/VehicleCard";

interface Props {
  make?: string;
  model?: string;
}

const VehicleList = (props: Props) => {
  const { make, model } = props;
  const dispatch = useDispatch();

  const { status, vehicles } = useSelector(selectAllVehicles);

  useEffect(() => {
    dispatch(fetchVehicles({ make, model }));
  }, [make, model]);

  if (status === "failed") return <Result status="error" />;
  if (status === "loading")
    return (
      <Center style={{ width: "100%" }}>
        <Spinner />
      </Center>
    );

  return (
    <HStack>
      {vehicles.map((v) => (
        <VehicleCard vehicle={v} />
      ))}
    </HStack>
  );
};

export default VehicleList;
