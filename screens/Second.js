import { StyleSheet, Text, View } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Footer from "../components/Footer";
import Header from "../components/Header";
function Second() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Header />
                <View>
                    <Text>Second</Text>
                </View>
                <Footer />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default Second;
