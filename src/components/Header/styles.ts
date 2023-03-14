import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #ff5b2d;
`;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  align-self: center;
`;

export const HeaderView = styled.View`
  justify-content: space-between;
  padding: 10px;
  align-items: flex-end;
  flex-direction: row;
  width: 96%;
  height: 54px;
`;
export const ViewLogo = styled.View`
  flex-direction: row;
`;

export const Logo = styled.Image`
  align-self: flex-end;
  padding: 10px;
  margin-bottom: -6px;
  margin-right: 10px;
`;

export const Touchable = styled.TouchableOpacity`
  margin-bottom: 3px;
`;
