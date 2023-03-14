import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as S from "./styles";
import Carousel from "../../components/Caroussel";
import { useNavigation } from "@react-navigation/native";

const Products = () => {
  const { navigate } = useNavigation();

  const typeSelected = () => {
    navigate("Search" as never);
  };

  return (
    <S.Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <S.ViewTopImages>
          <S.TouchableMarket onPress={typeSelected}>
            <S.ViewImages>
              <S.TextMarket>Mercados</S.TextMarket>
              <S.Image
                source={require("../../../assets/como-gastar-menos-no-mercado.jpeg")}
              />
              <S.TextDescription>
                Temos um total de 8 mercados na sua região.
              </S.TextDescription>
            </S.ViewImages>
          </S.TouchableMarket>

          <S.TouchableMarket onPress={typeSelected}>
            <S.ViewImages>
              <S.TextMarket>Horti-Fruti</S.TextMarket>
              <S.ImageHortiFruti
                source={require("../../../assets/hort-frut.jpg")}
              />
              <S.TextDescription>
                Temos um total de 3 horti-frutis na sua região.
              </S.TextDescription>
            </S.ViewImages>
          </S.TouchableMarket>

          <S.TouchableMarket onPress={typeSelected}>
            <S.ViewImages>
              <S.TextMarket>Padarias</S.TextMarket>
              <S.ImageHortiFruti
                source={require("../../../assets/padoca.jpg")}
              />
              <S.TextDescription>
                Temos um total de 4 padarias na sua região.
              </S.TextDescription>
            </S.ViewImages>
          </S.TouchableMarket>

          <S.TouchableMarket onPress={typeSelected}>
            <S.ViewImages>
              <S.TextMarket>Açougues</S.TextMarket>
              <S.ImageHortiFruti
                source={require("../../../assets/image.jpg")}
              />
              <S.TextDescription>
                Temos um total de 1 açoougue na sua região.
              </S.TextDescription>
            </S.ViewImages>
          </S.TouchableMarket>
        </S.ViewTopImages>
      </ScrollView>

      <S.ViewCaroussel>
        <Carousel />
      </S.ViewCaroussel>
    </S.Container>
  );
};

export default Products;
