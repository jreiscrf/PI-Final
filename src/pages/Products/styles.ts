import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const ViewTopImages = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ViewImages = styled.View`
  width: ${Dimensions.get("screen").width * 0.8}px;
  height: ${Dimensions.get("screen").height * 0.3}px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  align-items: center;
  background-color: #ff5b2d;
`;

export const TouchableMarket = styled.TouchableOpacity``;

export const TextDescription = styled.Text`
  font-size: 12px;
  margin-top: 8px;
`;

export const TextMarket = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 150px;
`;

export const ImageHortiFruti = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 142px;
`;

export const ViewCaroussel = styled.View`
  height: 50%;
`;
