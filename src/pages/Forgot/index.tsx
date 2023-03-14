import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { auth } from "../../services/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import * as S from "./styles";
import { Alert } from "react-native";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Email de recuperação enviado com sucesso!");
      })
      .catch((error) => {
        Alert.alert("Erro ao enviar email de recuperação!");
      });
  };

  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Logo>Logo</S.Logo>
      </S.ContainerLogo>

      <S.ContainerItems>
        <S.WelcomeText>Esqueceu sua senha?</S.WelcomeText>
        <Input
          placeholder="Email"
          secureTextEntry={false}
          value={email}
          setValue={(e: string) => setEmail(e)}
        />

        <Button onPress={handlePasswordReset} title="Enviar" />
      </S.ContainerItems>

      <S.Ball />
      <S.Ball2 />
    </S.Container>
  );
};

export default Forgot;
