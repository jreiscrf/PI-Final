import React from "react";
import { Text } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import * as S from "./styles";

type HeaderProps = {
  type?: string;
  onPress?: () => void;
};

const Header: React.FC<HeaderProps> = ({ type, onPress }) => {
  const iconGoBack = React.useMemo(() => {
    if (type == "hocketPage") {
      return <AntDesign name="left" size={23} color="#fff" />;
    }
    return <MaterialIcons name="logout" size={22} color="#fff" />;
  }, []);

  return (
    <>
      <SafeAreaView />
      <S.Container>
        <S.HeaderView>
          <S.ViewLogo>
            <S.Logo
              source={require("../../../assets/logo-compare-tela-inicial.png")}
            />
            {/* <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
            >
              Logo
            </Text> */}
            {/* <S.Text>RocketSide</S.Text> */}
          </S.ViewLogo>
          <S.Touchable onPress={onPress}>{iconGoBack}</S.Touchable>
        </S.HeaderView>
      </S.Container>
    </>
  );
};

export default Header;
