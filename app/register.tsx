import { Input, Text } from "@rneui/base";
import { Link, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Logo from "./components/Logo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function _screen() {
  const router = useRouter();

  const handleRegister = () => {
    console.log("TODO: register user!");
    router.push("/(auth)/(home)/home");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Input
        label="Name"
        className="w-[70] h-[70] rounded-full bg-gray-400"
        placeholder="Fulano da Silva"
      />
      <Input
        label="Email"
        className="w-[70] h-[70] rounded-full bg-gray-400"
        placeholder="fulano@example.com"
      />
      <Input
        label="Password"
        className="w-[70] h-[70] rounded-full bg-gray-400"
        placeholder="password"
        secureTextEntry
      />
      <Input
        label="Password Confirmation"
        className="w-[70] h-[70] rounded-full bg-gray-400"
        placeholder="password"
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleRegister}
        className="w-[70] h-[70] rounded-full bg-blue-500 items-center justify-center"
      >
        <FontAwesome6 name="play" size={24} color="black" />
      </TouchableOpacity>
      <Link href="/">
        <Text className="font-semibold text-sky-500">Have Account? Login</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  register: {
    width: "100%",
    paddingHorizontal: 8,
  },
});
