import { Input, Text } from "@rneui/base";
import { Link, useRouter } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import useNavigationExitOnBack from "../hooks/useNavigationExitOnBack";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Logo from "./components/Logo";

export default function _screen() {
  useNavigationExitOnBack();

  const router = useRouter();

  const handleLogin = () => {
    console.log("TODO: login user");
    router.push("/(auth)/(home)/home");
  };

  return (
    <View className="flex-1 bg-slate-300 items-center justify-center p-14">
      <Logo />
      <Text className="text-center text-5xl mb-10">Login</Text>
      <Input
        label="Email:"
        className="w-[70] h-[70] rounded-full text-black bg-gray-400 px-6"
      />
      <Input
        label="Password:"
        className="w-[70] h-[70] rounded-full bg-gray-400"
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleLogin}
        className="w-[70] h-[70] rounded-full bg-blue-500 items-center justify-center"
      >
        <FontAwesome6 name="play" size={24} color="black" />
      </TouchableOpacity>

      <Link href="/register">
        <Text className="font-semibold text-sky-500">Create Account</Text>
      </Link>
    </View>
  );
}
