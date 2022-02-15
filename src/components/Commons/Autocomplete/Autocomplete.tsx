import React, { useEffect, useState } from "react";
import useComponentVisible from "../../../hooks/useComponentVisible";
import { Input } from "../Input";
import * as S from "./styles";

interface Props {
  label?: string;
  options?: string[];
  onSelect?: (s: string) => void;
}

const Autocomplete = (props: Props) => {
  const { options = [], label, onSelect = () => {} } = props;

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const [suggestions, setSuggestions] = useState(options);
  const [value, setValue] = useState("");

  useEffect(() => {
    setSuggestions(options);
  }, [options]);

  const handleFilter = (e: any) => {
    const sub: string = e.target.value;
    setValue(sub);
    setSuggestions(
      options.filter(
        (s) => s.toLowerCase().search(sub.toLocaleLowerCase()) !== -1
      )
    );
    setIsComponentVisible(true);
  };

  const handleSelect = (s: string) => {
    setValue(s);
    setIsComponentVisible(false);
    onSelect(s);
  };

  return (
    <S.Container ref={ref}>
      <Input
        onChange={handleFilter}
        value={value}
        onClick={() => setIsComponentVisible(true)}
        placeholder={label || ""}
      />
      {isComponentVisible && (
        <S.SuggestionContainer>
          {suggestions.map((s, index) => (
            <S.Suggestion key={index} onClick={() => handleSelect(s)}>
              {s}
            </S.Suggestion>
          ))}
        </S.SuggestionContainer>
      )}
    </S.Container>
  );
};

export default Autocomplete;
