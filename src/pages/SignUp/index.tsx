import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser, setAuthenticated } from "../../store/auth";
import { setEmail, setPassword } from "../../store/auth";
import { setLoading } from "../../store/loading";
import { useSelector, useDispatch } from "react-redux";
import { auth, database } from "../../services/firebase";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import { Alert } from "react-native";

const SignUp = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);
  const db = getFirestore();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");

  const addUser = async () => {
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      Alert.alert("Parabéns! Sua conta foi criada com sucesso.");
      dispatch(setUser(userCredential.user.providerData));
      dispatch(setAuthenticated(true));
      dispatch(setEmail(""));
      dispatch(setPassword(""));
    } catch (error) {
      console.log(error);
      Alert.alert("Tente novamente.");
      dispatch(setEmail(""));
      dispatch(setPassword(""));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Logo>Logo</S.Logo>
      </S.ContainerLogo>

      <S.ContainerItems>
        <S.WelcomeText>Cadastre-se</S.WelcomeText>
        <Input
          placeholder="Nome Completo"
          secureTextEntry={false}
          value={name}
          setValue={(e: string) => setName(e)}
        />
        <Input
          placeholder="CPF"
          secureTextEntry={false}
          value={cpf}
          setValue={(e: string) => setCpf(e)}
        />
        <Input
          placeholder="E-mail"
          secureTextEntry={false}
          value={email}
          setValue={(e) => dispatch(setEmail(e))}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          setValue={(e) => dispatch(setPassword(e))}
        />

        <Button onPress={addUser} title="Cadastrar" />
      </S.ContainerItems>

      <S.Ball />
      <S.Ball2 />
    </S.Container>
  );
};

export default SignUp;
