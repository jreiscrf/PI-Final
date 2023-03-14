import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList as RNFlatList,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../components/Input";
import JSON from "../../../mercados.json";
import * as S from "./styles";

type ItemProps = {
  title: string;
  estabelecimento: string;
  tipo: string;
  preco: number;
  img: string;
  url: string;
};

const images: { [key: string]: any } = {
  "danone.jpg": require("../../../assets/danone.jpg"),
  "trakinas.jpg": require("../../../assets/trakinas.jpg"),
  "feijao.jpg": require("../../../assets/feijao.jpg"),
  "arroz.jpg": require("../../../assets/arroz.jpg"),
};

const Search = () => {
  const [totalProdutos, setTotalProdutos] = useState<
    Array<{
      nomeLoja: string;
      nomeProduto: string;
      preco: number;
      id: number;
      img: string;
      url?: string;
    }>
  >([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [showWebView, setShowWebView] = useState<boolean>(false);

  const urls = useCallback(() => {
    const Guanabara = "https://www.supermercadosguanabara.com.br/";
    const Carrefour = "https://www.mercado.carrefour.com.br/";
    const Prezunic = "https://www.prezunic.com.br/";

    if (filteredProdutos.map((produto) => produto.nomeLoja === "Guanabara")) {
      return setUrl(Guanabara);
    }

    if (filteredProdutos.map((produto) => produto.nomeLoja === "Prezunic")) {
      return setUrl(Prezunic);
    }

    if (filteredProdutos.map((produto) => produto.nomeLoja === "Carrefour")) {
      return setUrl(Carrefour);
    }
  }, []);

  const Item = ({ title, estabelecimento, preco, img }: ItemProps) => (
    <TouchableOpacity
      onPress={() => {
        setShowWebView(true);
      }}
    >
      <S.ViewItem>
        <S.ViewImage>
          <S.ImageItem source={images[img]} />
        </S.ViewImage>

        <S.ViewDescription>
          <S.TextTitle>Nome: {title}</S.TextTitle>
          <S.TextDescription>
            Estabelecimento: {estabelecimento}
          </S.TextDescription>
          <S.TextPrice>Preço: R$ {preco}</S.TextPrice>
        </S.ViewDescription>
      </S.ViewItem>
      <S.ViewWebView>
        <Modal visible={showWebView} animationType="slide">
          <TouchableOpacity
            onPress={() => {
              setShowWebView(false);
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Voltar
            </Text>
          </TouchableOpacity>
          <WebView source={{ uri: url }} style={{ marginTop: 20 }} />
        </Modal>
      </S.ViewWebView>
    </TouchableOpacity>
  );

  const filteredProdutos = totalProdutos.filter((produto) =>
    produto.nomeProduto.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log(filteredProdutos);
  useEffect(() => {
    const produtos = Object.values(JSON).flatMap((loja) =>
      loja.items.map((item) => ({
        nomeLoja: loja.nome,
        nomeProduto: item.nome,
        preco: item.preco,
        id: item.idProduto, // adicionando o ID do produto
        img: item.img,
        url: item.url,
      }))
    );
    setTotalProdutos(produtos);
  }, []);

  useEffect(() => {
    urls();
  }, [urls]);

  return (
    <S.Container>
      <S.ViewInput>
        <Input
          placeholder="Digite o que procura"
          value={inputValue}
          setValue={setInputValue}
        />
      </S.ViewInput>
      {!!inputValue && (
        <ScrollView>
          <S.ViewFlatList>
            <RNFlatList
              data={filteredProdutos}
              renderItem={({ item }) => (
                <Item
                  title={item.nomeProduto}
                  estabelecimento={item.nomeLoja}
                  preco={item.preco}
                  img={item.img}
                  url={item.url}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </S.ViewFlatList>
        </ScrollView>
      )}
      <Text
        style={{
          alignSelf: "center",
          fontSize: 12,
          fontWeight: "bold",
          color: "#000",
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        Pesquise seu produto
      </Text>
    </S.Container>
  );
};

export default Search;
