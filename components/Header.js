import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
function Header() {
    const navigation = useNavigation();

    function handleGoBack() {
        if (navigation.canGoBack() === true) {
            navigation.goBack();
        }
    }

    function handleGoNext() {}
    return (
        <View style={styles.header}>
            <Pressable>
                <Text onPress={(e) => handleGoBack()}>Back</Text>
            </Pressable>
            <Text style={styles.headerText}>Header</Text>
            <Pressable onPress={(e) => handleGoNext()}>
                <Text>Next</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        maxHeight: 55,
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 2,
        borderTopWidth: 2,
    },
    headerText: {
        fontWeight: "bold",
    },
});

export default Header;
