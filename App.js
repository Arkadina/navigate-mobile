import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import First from "./screens/First";
import Fourth from "./screens/Fourth";
import Third from "./screens/Third";
import Second from "./screens/Second";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="First" component={First} />
                <Stack.Screen name="Second" component={Second} />
                <Stack.Screen name="Third" component={Third} />
                <Stack.Screen name="Fourth" component={Fourth} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
