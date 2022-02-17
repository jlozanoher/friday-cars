import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMakes,
  selectAllMakes,
  setMakeSelected,
  setModelSelected,
} from "../../slices";
import { Autocomplete } from "../Commons/Autocomplete";
import { Result } from "../Commons/Result";
import { Spinner } from "../Commons/Spinner/Spinner";

const MakeSelect = () => {
  const dispatch = useDispatch();
  const { makes, status } = useSelector(selectAllMakes);

  useEffect(() => {
    dispatch(fetchMakes());
  }, []);

  const handleSelect = (make: string) => {
    dispatch(setMakeSelected(make));
    dispatch(setModelSelected(undefined));
  };

  if (status === "failed") return <Result status="error" />;
  if (status === "loading") return <Spinner />;

  return (
    <Autocomplete
      label="Make"
      options={makes.map((make) => make.name)}
      onSelect={handleSelect}
    />
  );
};

export default MakeSelect;
