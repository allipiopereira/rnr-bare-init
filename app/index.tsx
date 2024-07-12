import {  View } from "react-native";
import { Button } from "~/components/ui/button";
import {Text} from "~/components/ui/text"

export default function Index() {
  return (
    <>
    <View
      className="w-full h-10 bg-blue-500"
    >
      <Text className="text-white font-bold">Nativewind</Text>
    </View>

    <Button onPress={() => console.log("press!")}>
      <Text>Hello RNR</Text>
    </Button>
    </>
  );
}
