import { useReducer, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function reducer(state, action) {
    switch (action.type) {
        case "first_name":
            return { ...state, first_name: action.value };
        case "last_name":
            return { ...state, last_name: action.value };
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, {
        first_name: "",
        last_name: "",
    });
    const [show, setShow] = useState(false);
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");

    function handleOnPress() {
        if ((firstInput != "") & (secondInput != "")) {
            console.log(firstInput, secondInput);
            dispatch({ type: "last_name", value: secondInput });
            dispatch({ type: "first_name", value: firstInput });
            setShow(true);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First name"
                onChangeText={(e) => setFirstInput(e)}
            />
            <TextInput
                style={styles.input}
                placeholder="Last name"
                onChangeText={(e) => setSecondInput(e)}
            />
            <Pressable style={styles.button} onPress={(e) => handleOnPress()}>
                <Text style={styles.text}>Show name</Text>
            </Pressable>
            {show === true ? (
                <Text
                    style={{
                        ...styles.input,
                        marginTop: 10,
                        fontStyle: "italic",
                    }}
                >
                    Hello, {state.first_name} {state.last_name}
                </Text>
            ) : (
                ""
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#FFF",
    },
    input: {
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
    },
});
