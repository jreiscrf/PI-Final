import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

const MapContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 32px;
  right: 32px;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: #333;
  font-size: 16px;
`;
