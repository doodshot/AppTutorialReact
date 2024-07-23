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
      {/* CONTENITORE  */}
      <View style={{
        width: '100%', 
        height: 400, 
        borderRadius: 10,
         flexDirection: 'row',
         justifyContent: 'center', 
         alignItems: 'center', 
         backgroundColor: 'gray'}}>

           {/* IMMAGINE */}
          <View style={{flex: 1}}>
          <Image source={{uri: 'https://img.freepik.com/free-psd/three-dimensional-real-estate-icon-mock-up_23-2149729115.jpg'}}
          style={{width: 150, height: 150,resizeMode: 'cover', borderRadius: 150/2}}>
          </Image>
          </View>
          
      <View style={{flex: 1}}>
        <Text style={{fontSize: 24, fontWeight: 800}}>Card Title</Text>
        <Text>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Pariatur, delectus.</Text>
      </View>
      </View>
    </View>
  );
}