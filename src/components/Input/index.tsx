import * as S from "./styles";

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  setValue: (value: string) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  secureTextEntry,
  setValue,
  value,
}) => {
  return (
    <S.Container>
      <S.TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={setValue}
        value={value}
      />
    </S.Container>
  );
};
export default Input;
