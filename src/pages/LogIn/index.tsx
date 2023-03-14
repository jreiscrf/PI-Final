import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity, ScrollView } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { setAuthenticated, setUser } from "../../store/auth";
import { setLocation } from "../../store/location";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { setEmail, setPassword } from "../../store/auth";

import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";

import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const Login = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { email, password } = useSelector((state: any) => state.auth);
  const loading = useSelector((state: any) => state.loading);
  const { latitude, longitude } = useSelector((state: any) => state.location);

  const [permission, setPermission] = useState(false);

  const getLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      setPermission(true);

      // Alert.alert("Permissão concedida com sucesso!");
    } else {
      setPermission(true);
      Alert.alert("Permissão negada, você não poderá usar o aplicativo!");
    }
  };

  const navigateToHomeScreen = React.useCallback(async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        dispatch(setUser(value.user.providerData));
        dispatch(setAuthenticated(true));
        navigate("Home" as never);
      })
      .catch((error) => {
        alert("Try Again");
      });
  }, [email, password, loading]);

  const handleSignUp = () => {
    navigate("SignUp" as never);
  };

  const visibleMarkets = () => {
    navigate("HomePublic" as never);
  };

  const handleRecoveryPassword = () => {
    navigate("Forgot" as never);
  };

  console.log(latitude, longitude, "latitude e longitude");

  useEffect(() => {
    const getLocationAndDispatch = async () => {
      await getLocationPermission();
      if (permission) {
        try {
          const location = await Location.getCurrentPositionAsync({});
          dispatch(setLocation(location.coords));
          console.log(location.coords);
        } catch (error) {
          console.log(error);
          Alert.alert("Não foi possível obter sua localização!");
        }
      }
    };
    console.log(permission, "permissão");

    getLocationAndDispatch();
  }, [permission, dispatch, latitude, longitude]);

  return (
    <S.Container>
      {/* <ScrollView> */}
      <S.ContainerLogo>
        <S.Logo source={require("../../../assets/compara-logo-grande.png")} />
      </S.ContainerLogo>

      <S.ContainerItems>
        <S.WelcomeText>Bem-vindo!</S.WelcomeText>
        <Input
          placeholder="E-mail"
          secureTextEntry={false}
          value={email}
          setValue={(e: string) => dispatch(setEmail(e))}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          setValue={(e) => dispatch(setPassword(e))}
        />
        <Button
          onPress={navigateToHomeScreen}
          title="Entrar"
          permission={permission}
        />
      </S.ContainerItems>

      <S.ContainerForgot>
        <TouchableOpacity onPress={handleRecoveryPassword}>
          <S.TextForgot>Esqueceu sua senha?</S.TextForgot>
        </TouchableOpacity>
      </S.ContainerForgot>

      <S.ContainerRegister>
        <S.TextSignUp>Veja nossos parceiros clicando</S.TextSignUp>
        <TouchableOpacity onPress={visibleMarkets}>
          <S.TextSignUpLink> aqui!</S.TextSignUpLink>
        </TouchableOpacity>
      </S.ContainerRegister>

      <S.ContainerRegister>
        <S.TextSignUp>Não possui uma conta?</S.TextSignUp>
        <TouchableOpacity onPress={handleSignUp}>
          <S.TextSignUpLink>Cadastre-se</S.TextSignUpLink>
        </TouchableOpacity>
      </S.ContainerRegister>

      <S.Ball />
      <S.Ball2 />
      {/* </ScrollView> */}
    </S.Container>
  );
};

export default Login;
