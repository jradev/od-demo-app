import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "@/theme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./style";


const Item = (props) => {   
    const { title, subtitle, rightText, logo, rightIcon = false, onPress = () => {} } = props   
    
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.leftItem}>
                <Image 
                    style={styles.logo}
                    source={{uri: logo || 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930'}}
                />
                <View style={styles.textColumn}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>

            { rightIcon && <Ionicons name="chevron-forward" color={Colors.gray} size={24} /> }
            {
                rightText &&
                <View style={styles.rightTextContainer}>
                    <Text style={styles.rightText}>{rightText}</Text>
                </View>
            }
        </TouchableOpacity>
    )
}


const ListItem = React.memo(Item);

export default ListItem;


