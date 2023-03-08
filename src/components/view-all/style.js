import { StyleSheet } from "react-native";
import { Common, Colors, Fonts } from "@/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Common.padding.container,
        backgroundColor: Colors.white,
        alignItems: 'center',
        width: '100%',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.gray,
        borderTopColor: Colors.gray,
    },
    leftItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textColumn: {
        flexDirection: 'column'
    },
    title: {
        fontSize: Fonts.size.regular,
        fontWeight: '600',
        color: Colors.darkGray,
        paddingVertical: 16
    },
    
})


export default styles
