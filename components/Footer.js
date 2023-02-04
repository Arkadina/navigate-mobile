import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { getRoute } from "../utils/getRoute";

function Footer() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={styles.footer}>
            <Pressable
                style={[
                    styles.boxContainer,
                    getRoute("First", route) === true ? styles.active : "",
                ]}
                onPress={() => navigation.navigate("First")}
            >
                <Text>1</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.boxContainer,
                    getRoute("Second", route) === true ? styles.active : "",
                ]}
                onPress={() => navigation.navigate("Second")}
            >
                <Text>2</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.boxContainer,
                    getRoute("Third", route) === true ? styles.active : "",
                ]}
                onPress={() => navigation.navigate("Third")}
            >
                <Text>3</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.boxContainer,
                    getRoute("Fourth", route) === true ? styles.active : "",
                ]}
                onPress={() => navigation.navigate("Fourth")}
            >
                <Text>4</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        maxHeight: 55,
    },
    footerText: {
        fontWeight: "bold",
    },
    boxContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderLeftWidth: 2,
        borderTopWidth: 2,
    },
    active: {
        backgroundColor: "#CCC",
    },
});

export default Footer;
