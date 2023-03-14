import React from "react";
import * as S from "./styles";

type Props = {
  onPress: () => void;
  title: string;
  permission?: boolean;
};

const Button: React.FC<Props> = ({ onPress, title }) => {
  return (
    <S.Button onPress={onPress}>
      <S.TextButton>{title}</S.TextButton>
    </S.Button>
  );
};

export default Button;
