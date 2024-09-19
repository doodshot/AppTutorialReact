import { CardData } from "@/api/data.mock";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./cardComponentsStyle";

export const Card = (props: CardData) => {
    return (<View style={[styles.container,{backgroundColor: props.backgroundColor ? props.backgroundColor : 'light-gray' }]}>
        <View style={styles.containerView}>
            <Image
                source={{uri: props.url}}
                style={styles.containerImage}>
            </Image>
        </View>
        <View style={styles.containerSpaces}>
            <Text style={styles.contoinareTitle}>{props.nome}</Text>
            <View style={styles.containerDesc}>
                <Text>{props.desc}</Text>
                <Text style={styles.containerPrice}>{props.prezzo}€</Text>
            </View>

        </View>
    </View>);
}

