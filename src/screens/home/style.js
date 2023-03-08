import { StyleSheet } from "react-native";
import { Common, Colors } from "@/theme";

const styles = StyleSheet.create({
    chart: {
        shadowOffset: { width: 2, height: 5 },
        shadowColor: Colors.white,
        shadowOpacity: 1,
        elevation: 3,
        borderRadius: 8,
        backgroundColor : Colors.white,
        margin: Common.padding.container
    },
    scroll: {
        minHeight: '100%',
        width: '100%',
        flexGrow: 1
    },
    listItemContainer: {
        marginHorizontal: 12
    }
})


export default styles
