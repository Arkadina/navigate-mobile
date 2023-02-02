import { StyleSheet, Text, View, Image, Pressable } from "react-native";
function Footer() {
    return (
        <View style={styles.footer}>
            <Pressable style={styles.boxContainer}>
                <Text>1</Text>
            </Pressable>
            <Pressable style={styles.boxContainer}>
                <Text>2</Text>
            </Pressable>
            <Pressable style={styles.boxContainer}>
                <Text>3</Text>
            </Pressable>
            <Pressable style={styles.boxContainer}>
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
        borderBottomColor: "#E5E4E2",
    },
    footerText: {
        fontWeight: "bold",
    },
    boxContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#E5E4E2",
        borderLeftWidth: 2,
        borderTopWidth: 2,
    },
});

export default Footer;
