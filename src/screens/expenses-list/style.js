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
        margin: Common.padding.container,
        alignItems: 'center'
    },
    scroll: {
        flexGrow: 1,
        width: '100%',
        flexGrow: 1
    },
    listItemContainer: {
    },
    legendContainer: {
        flexDirection: 'row', 
        marginBottom: 12
    },
    legendIndicator: {
        height: 18,
        width: 18,
        marginRight: 10,
        borderRadius: 4,
    },
    legendText: {
        color: Colors.blue, 
        fontSize: 16
    },
    pieBottomLabel: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    }
})


export default styles
