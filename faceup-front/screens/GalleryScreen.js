import { StyleSheet, Text, Image, ScrollView } from "react-native";
import { Card, Badge } from "@rneui/themed";

export default function GalleryScreen() {
  return (
    <ScrollView style={{marginTop: 25}}>
      <Text h4 style={{textAlign: "center" }}>
        John's Gallery
      </Text>
      <Card>
        <Image
          style={{ width: "100%", height: 170, marginBottom: 10 }}
          source={require("../assets/picture-1.jpg")}
        />
        <Badge status="success" value="homme" />
        <Badge status="success" value="70 ans" />
        <Badge status="success" value="barbe" />
        <Badge status="success" value="joyeux !" />
        <Badge status="success" value="cheveux gris" />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
