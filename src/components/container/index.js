import { useEffect } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Colors } from "@/theme";
import styles from "./style";


const Container = (props) => {   
    const { children, backgroundColor } = props   
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor || Colors.white}}>
             <StatusBar translucent backgroundColor={Colors.white} />
            <View style={[styles.container, {backgroundColor: backgroundColor || Colors.white}]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default Container


