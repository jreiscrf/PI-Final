import { Text, View } from "react-native";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#000",
        }}
      >
        Aguarde novas atualizações ...
      </Text>
    </View>
  );
};
export default Profile;
