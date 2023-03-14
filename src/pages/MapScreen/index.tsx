import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MarketData from "../../../mercados.json";
import { setLocation } from "../../store/location";
import { Dimensions, StyleSheet, View, Text, Image } from "react-native";
import ComparaMarker from "../../../assets/logo-compare-tela-inicial.png";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const location = useSelector((state: any) => state.location);

  console.log(MarketData);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          scrollEnabled={true}
          showsUserLocation={true}
          loadingEnabled={true}
        >
          {MarketData.map((mercado) => (
            <Marker
              pinColor="#000"
              key={mercado.id}
              coordinate={{
                latitude: mercado.latitude || 0,
                longitude: mercado.longitude || 0,
              }}
              title={mercado.nome}
            >
              <Text style={styles.text}>{mercado.nome}</Text>

              <View style={styles.marker}>
                <Image
                  source={ComparaMarker}
                  style={{ width: 32, height: 32 }}
                />
              </View>
            </Marker>
          ))}
        </MapView>
      ) : (
        <Text>Carregando mapa...</Text>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  map: {
    width: Dimensions.get("window").width - 48,
    height: Dimensions.get("window").height - 48,
  },
  marker: {
    width: 30,
    height: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#000",
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
