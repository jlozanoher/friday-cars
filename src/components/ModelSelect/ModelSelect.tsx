import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels, selectAllModels, setModelSelected } from "../../slices";
import { Autocomplete } from "../Commons/Autocomplete";
import { Result } from "../Commons/Result";
import { Spinner } from "../Commons/Spinner/Spinner";

interface Props {
  make?: string;
}

const ModelSelect = (props: Props) => {
  const { make } = props;

  const dispatch = useDispatch();
  const { models, status } = useSelector(selectAllModels);

  const handleSelect = (make: string) => {
    dispatch(setModelSelected(make));
  };

  useEffect(() => {
    dispatch(fetchModels(make));
  }, [make]);

  if (status === "failed") return <Result status="error" />;
  if (status === "loading") return <Spinner />;

  return (
    <Autocomplete
      label="Model"
      options={models.map((model) => model.name)}
      onSelect={handleSelect}
      disabled={!make}
    />
  );
};

export default ModelSelect;
