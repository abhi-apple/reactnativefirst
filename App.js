import {
  View,
  ScrollView,
  Image,
  Button,
  Text,
  ImageBackground,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
import Greet from "./components/Greet";
const img = require("./assets/adaptive-icon.png");
export default function App() {
  const [modalVisible, setmodalVisible] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 60,
      }}
    >
      <Greet name={"Abhinay"} />
    </View>
  );
}

{
  /* <Button
        title="Alert"
        onPress={() => {
          Alert.alert(
            "invalid data",
            "this is the messagse that i want to let yout know",
            [
              {
                text: "notice",
                onPress: () => console.log("OK Pressed"),
              },
              {
                text: "cancel",
                onPress: () => console.log("cancel Pressed"),
              },
            ]
          );
        }}
      /> */
}
{
  /* <ActivityIndicator />
      <ActivityIndicator size={"small"} />
      <ActivityIndicator size={"large"} color="midnightblue" /> */
}
{
  /* <StatusBar barStyle="dark-content" hidden /> */
}
{
  /* <Button
        title="press"
        onPress={() => {
          setmodalVisible(true);
        }}
        color="lightgreen"
      />
      <Modal
        onRequestClose={() => {
          setmodalVisible(false);
        }}
        visible={modalVisible}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View
          style={{
            backgroundColor: "lightgreen",
            flex: 1,
            padding: 60,
          }}
        >
          <Text>Modal content</Text>
          <Button
            title="close"
            onPress={() => {
              setmodalVisible(false);
            }}
            color="midnightblue"
          />
        </View>
      </Modal> */
}
{
  /* <Pressable
  onPress={() => {
    console.log("image pressed");
  }}
>
  <Image source={img} style={{ width: 300, height: 300 }}></Image>
</Pressable>
<Pressable
  onPress={() => {
    console.log("text pressed");
  }}
>
  <Text style={{ color: "white" }}>
    lorem Ips incorrectly formatted incorrectly in the first place
    (http://www.w3.org/TR/ Unicode Standardlorem Ips incorrectly formatted
    incorrectly in the first place (http://www.w3.org/TR/ Unicode
    Standardlorem Ips incorrectly formatted incorrectly in the first place
    (http://www.w3.org/TR/ Unicode Standardlorem Ips incorrectly formatted
    incorrectly in the first place (http://www.w3.org/TR/ Unicode
    Standardlorem Ips incorrectly formatted incorrectly in the first place
    (http://www.w3.org/TR/ Unicode Standardlorem Ips incorrectly formatted
    first place (http://www.w3.org/TR/ Unicode Standard
  </Text>
</Pressable> */
}
