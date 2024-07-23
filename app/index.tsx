import {View, Text, Image, ScrollView, TextInput, TextInputBase} from 'react-native';


export default function Index() {
  return (

    //contenitore
    <View style={
      {flex:1, 
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 16}
    }>
      <View style={{
        width: '100%', 
        height: 400, 
        borderRadius: 10,
       
         flexDirection: 'row',
         justifyContent: 'center', 
         alignItems: 'center', 
         
         backgroundColor: 'gray'}}>

          <Image source={{uri: 'https://img.freepik.com/free-psd/three-dimensional-real-estate-icon-mock-up_23-2149729115.jpg'}}
          style={{width: 150, height: 150,resizeMode: 'cover', borderRadius: 150/2}}>
          </Image>
      <View style={{backgroundColor: 'green', height: 100, width: 100}}>
      </View>
      </View>
    </View>
  );
}