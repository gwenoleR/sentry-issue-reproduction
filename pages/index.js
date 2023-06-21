import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Throw"
        onPress={() => {
          throw new Error("Reproduction error");
        }}
      />
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
