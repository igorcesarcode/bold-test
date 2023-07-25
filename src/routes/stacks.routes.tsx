import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../@types/navigation";
import { Post } from "../screens/Post";
import { Posts } from "../screens/Posts";
import { stackNavigationHeaderDefault } from "../theme/navigation";

const { Navigator, Screen, Group } = createStackNavigator<RootStackParamList>();

export const Stacks = () => {
  return (
    <Navigator
      screenOptions={{
        ...stackNavigationHeaderDefault,
      }}
    >
      <Group screenOptions={{ headerBackTitleVisible: false }}>
        <Screen
          name="Posts"
          component={Posts}
          options={{ headerShown: false }}
        />
        <Screen
          name="Post"
          component={Post}
          options={{
            title: "",
            headerBackTitleVisible: false,
          }}
        />
      </Group>
    </Navigator>
  );
};
