import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Vehicle from "../../models/vehicle.model";
import {
  fetchVehicles,
  selectAllVehicles,
  setDetailsOpen,
} from "../../slices/vehicle.slice";
import { Modal } from "../Commons/Modal";
import { Result } from "../Commons/Result";
import { Center } from "../Commons/Result/styles";
import { Spinner } from "../Commons/Spinner/Spinner";
import VehicleCard from "../VehicleCard/VehicleCard";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import * as S from "./styles";

interface Props {
  make?: string;
  model?: string;
}

const VehicleList = (props: Props) => {
  const { make, model } = props;

  const [currentVehicle, setCurrentVehicle] = useState<Vehicle | undefined>(
    undefined
  );

  const dispatch = useDispatch();

  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);

  const {
    status,
    vehicles,
    search,
    selected: selectedVehicle,
    detailsOpen,
  } = useSelector(selectAllVehicles);

  useEffect(() => {
    dispatch(fetchVehicles({ make, model }));
  }, [make, model]);

  useEffect(() => {
    setFilteredVehicles(
      vehicles.filter((v) =>
        Object.values(v).some(
          (i: string) =>
            !search ||
            (i &&
              search &&
              `${i}`.toLowerCase().includes(search?.toLocaleLowerCase()))
        )
      )
    );
  }, [vehicles, search]);

  const handleSelect = (vehicle: Vehicle) => {
    dispatch(setDetailsOpen(true));
    setCurrentVehicle(vehicle);
  };

  if (status === "failed") return <Result status="error" />;
  if (status === "loading")
    return (
      <Center style={{ width: "100%" }}>
        <Spinner />
      </Center>
    );

  return (
    <>
      <S.Container>
        {filteredVehicles.map((v, i) => (
          <VehicleCard
            key={i}
            vehicle={v}
            onClick={handleSelect}
            selected={selectedVehicle?.id === v.id}
          />
        ))}
      </S.Container>
      <Modal
        handleClose={() => dispatch(setDetailsOpen(false))}
        isOpen={detailsOpen}
      >
        {currentVehicle && (
          <VehicleDetails
            vehicle={currentVehicle}
            selected={currentVehicle.id === selectedVehicle?.id}
          />
        )}
      </Modal>
    </>
  );
};

export default VehicleList;
