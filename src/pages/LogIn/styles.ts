import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  margin-top: ${Dimensions.get("screen").height * 0.04}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${Dimensions.get("screen").height * 0.1}px;
  align-self: center;
  padding: 10px;
  margin-bottom: -6px;
  margin-right: 10px;
`;

export const ContainerItems = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
`;

export const WelcomeText = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
  margin-left: 24px;
`;

export const ContainerForgot = styled.View``;

export const TextForgot = styled.Text`
  color: #ff5b2d;
  font-size: 15px;
  font-weight: bold;
`;

export const ContainerRegister = styled.View`
  width: 73%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextSignUp = styled.Text`
  color: #c2c3c8;
  font-size: 15px;
`;

export const TextSignUpLink = styled.Text`
  color: #ff5b2d;
  font-size: 15px;
  font-weight: bold;
`;

export const Ball = styled.View`
  position: absolute;
  width: ${Dimensions.get("screen").height * 0.4}px;
  height: ${Dimensions.get("screen").height * 0.5}px;
  background-color: #ffddd4;
  border-radius: ${Dimensions.get("screen").height * 0.25}px;
  left: 200px;
  top: 650px;
`;

export const Ball2 = styled.View`
  position: absolute;
  width: ${Dimensions.get("screen").height * 0.2}px;
  height: ${Dimensions.get("screen").height * 0.5}px;
  background-color: #ffbdab;
  border-radius: ${Dimensions.get("screen").height * 0.25}px;
  right: 320px;
  top: 700px;
`;
