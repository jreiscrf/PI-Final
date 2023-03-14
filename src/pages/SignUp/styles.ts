import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  /* flex: 1; */
  background: #fff;
  align-items: center;
  justify-content: center;
`;
export const ContainerLogo = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 90px;
`;
export const Logo = styled.Text`
  font-size: 30px;
  color: #ff5b2d;
  top: 10px;
`;
export const ContainerItems = styled.View`
  width: 100%;
  height: 250px;
  align-items: center;
`;
export const WelcomeText = styled.Text`
  align-self: flex-start;
  margin-left: 30px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
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
