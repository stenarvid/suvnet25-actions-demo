import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const message: string = "Hej Github";

  if (Math.random() > 0.5) {
    console.log("Over 50%");
  };

  return (
    <View style={s.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Text style={s.title}>{message}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
