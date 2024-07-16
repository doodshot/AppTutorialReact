import {View, Text, Image, ScrollView, TextInput, TextInputBase} from 'react-native';


export default function Index() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      padding: 16
    }}>
    <View style={{
      flex: 1,
      backgroundColor: "black",
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{color: 'white',
        fontSize: 32

      }}> 
        Hello world!
      </Text>

      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      <View  style={{
        padding: 16,
        backgroundColor: 'white',
        width: '100%'
      }}>
      <TextInput  style={{
          height: 32,
          backgroundColor: 'white',
          borderWidth: 5,
          width: '100%'
        }}>
        </TextInput>
      </View>
   </View>
  </View>

  );
}
