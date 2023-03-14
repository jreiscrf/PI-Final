import { Routes } from "./src/routes/index";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Stores from "./src/store";

export default function App() {
  return (
    <>
      <Provider store={Stores}>
        <StatusBar style={{ color: "#FFDDD4" }} />
        <Routes />
      </Provider>
    </>
  );
}
