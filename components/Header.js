import { StyleSheet, Text, View, Image, Pressable } from "react-native";
function Header() {
    return (
        <View style={styles.header}>
            <Pressable>
                <Text>Back</Text>
            </Pressable>
            <Text style={styles.headerText}>Header</Text>
            <Pressable>
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
        borderBottomColor: "#E5E4E2",
        borderBottomWidth: 2,
    },
    headerText: {
        fontWeight: "bold",
    },
});

export default Header;
