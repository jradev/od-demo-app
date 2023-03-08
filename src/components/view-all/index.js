import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/theme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./style";


const Item = (props) => {   
    const { title, onPress = () => {} } = props   
    
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.leftItem}>
                <View style={styles.textColumn}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>

            <Ionicons name="chevron-forward" color={Colors.gray} size={24} />
        </TouchableOpacity>
    )
}


const ViewAllItem = React.memo(Item);

export default ViewAllItem;


