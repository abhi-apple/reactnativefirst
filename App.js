import {
  View,
  ScrollView,
  Image,
  Button,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
const img = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        padding: 60,
      }}
    >
      <Button
        title="press"
        onPress={() => {
          console.log("Button pressed");
        }}
        color="lightgreen"
      />
      <Pressable
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
      </Pressable>
    </View>
  );
}
