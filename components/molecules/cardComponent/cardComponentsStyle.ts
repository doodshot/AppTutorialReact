import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container : {
       width: '100%',
        height: 500,
         borderColor: 'black',
          borderWidth: 2, 
          borderRadius: 30, 
          flexDirection: 'column'
    },
    containerView : {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    containerImage : {
        width: '100%', height: 150, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30
    },
    containerSpaces: {
        flex: 1, paddingVertical: 16, padding: 12
    },
    contoinareTitle: {fontSize: 24, fontWeight: 800},
    containerDesc: {flex: 1, justifyContent: 'center', paddingBottom: 16},
    containerPrice: {
        paddingTop: 16, fontSize: 22, fontWeight: 600, alignItems: 'center', width: '100%'
    }
})
