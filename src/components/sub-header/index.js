import { Text, View } from "react-native"
import styles from "./style"


const SubHeader = ({title}) => {
    return (<View style={styles.container}><Text style={styles.title}>{title}</Text></View>)
}

export default SubHeader