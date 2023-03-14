import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  width: 100%;
`;

export const ViewInput = styled.View`
  width: 100%;
  align-items: center;
  padding: 10px;
`;

export const ViewFlatList = styled.View`
  background-color: #ff5b2d;
  width: 100%;
  border-radius: 12px;
  margin-top: 10px;
  padding: 10px;
`;

//Flatlist

export const ViewItem = styled.View`
  background-color: #fff;
  border-radius: 12px;
  height: 240px;
  /* width: 100%;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px; */
  margin: 10px;
`;

export const ViewImage = styled.View`
  border-width: 1px;
  border-color: #ff5b2d;
  margin: 14px;
  border-radius: 10px;
`;
export const ImageItem = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  align-self: center;
  /* padding: 10px;
  margin: 10px; */
`;

export const ViewDescription = styled.View`
  margin-left: 10px;
  margin-width: 1px;
`;

export const TextTitle = styled.Text``;
export const TextDescription = styled.Text``;
export const TextPrice = styled.Text``;
export const ViewWebView = styled.View``;
