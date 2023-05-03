import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [url, setUrl] = useState<string>("");
  const [qrcode_url, setQrcodeURL] = useState<string>("");

  return (
    <View style={styles.container}>
      {qrcode_url && (
        <QRCode
          value={qrcode_url}
          size={150}
          color="black"
          backgroundColor="white"
        />
      )}
      <TextInput
        style={{
          height: 40,
          width: 200,
          padding: 5,
          marginTop: 10,
          borderWidth: 1,
          borderRadius: 20,
        }}
        value={url}
        onChangeText={setUrl}
        placeholder="Enter url here 😁"
      />
      <Button
        title="Generate Qrcode"
        onPress={(e) => {
          e.preventDefault();
          setQrcodeURL(url);
          setUrl("");
        }}
      />
      <StatusBar style="auto" />
    </View>
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
