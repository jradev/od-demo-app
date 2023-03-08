import { StyleSheet } from "react-native";
import { Common, Colors, Fonts } from "@/theme";

const styles = StyleSheet.create({
    container: {
        paddingVertical: Common.padding.container,
        backgroundColor: Colors.white,
        borderTopEndRadius: 6,
        borderTopLeftRadius: 6
    },
    title: {
        fontSize: Fonts.size.large,
        paddingTop: 8,
        paddingLeft: 10,
        color: Colors.black
    }
})


export default styles
