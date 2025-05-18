import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, Linking, Button } from "react-native";
import { initialFriends } from "../../../friendsdata/data";
import CustomSafeArea from "@/components/CustomSafeArea";

export default function FriendDetails() {
  const { id } = useLocalSearchParams();

  const data = initialFriends.find((friend) => friend.id == id);

  const handleStravaPress = () => {
    Linking.openURL("https://www.strava.com/"); // or a user-specific Strava link if available
  };

  return (
    <CustomSafeArea>
      <View>
        <Image
          source={{ uri: data.photo }}
          className="w-48 h-48 rounded-full mb-2 self-center"
        />
        <View className="gap-2">
          <Text className="text-xl text-center font-semibold">
            {" "}
            {data.name}
          </Text>
          <Text className="text-center text-gray-500">{data.dob}</Text>
          <Text className="text-center text-gray-500">{data.email}</Text>
          <Text
            className="text-orange-500 font-semibold text-center"
            onPress={handleStravaPress}
          >
            www.strava.com
          </Text>
        </View>
      </View>
    </CustomSafeArea>
  );
}
