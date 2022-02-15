import React from "react";
import ServerError from "./server-error.jpg";
import * as S from "./styles";

interface Props {
  status: "error" | "warning";
}

const Result = (props: Props) => {
  const { status } = props;

  if (status === "error")
    return (
      <S.Center>
        <img alt={"Server Error"} src={ServerError} width={400} />
        <h2>Something went wrong</h2>
        <small>Refresh the page, contact us if the problem persists</small>
      </S.Center>
    );

  return <></>;
};

export default Result;
