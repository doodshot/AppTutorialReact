import {View, Text, Image, ScrollView, TextInput, TextInputBase} from 'react-native';

const DATA = [
  {
    title: 'Titolo 1',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula nunc.',
    backgroundColor: 'red',
    immagine: require('../assets/images/logo.avif')
  },
  {
    title: 'Titolo 2',
    subTitle: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
    backgroundColor: 'green',
    immagine: require('../assets/images/casa2.jpeg')
  },
  {
    title: 'Titolo 3',
    subTitle: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    backgroundColor: 'yellow',
    immagine: require('../assets/images/casa3.jpeg')
  },
  {
    title: 'Titolo 4',
    subTitle: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    backgroundColor: 'blue',
    immagine: require('../assets/images/casa3.jpeg')
  },
  {
    title: 'Titolo 5',
    subTitle: 'Donec sollicitudin molestie malesuada.',
    backgroundColor: 'purple',
    immagine: require('../assets/images/casa3.jpeg')
  }
];

const Card = (props) => {
  console.log(props)
return (
<View style={{
 width: '100%', 
 height: 400, 
 borderRadius: 10,
  flexDirection: 'row',
  marginBottom: 16,
  backgroundColor: props.backgroundColor}}>

    {/* IMMAGINE */}
   <View style={{flex: 1,justifyContent: 'center', 
  alignItems: 'center',}}>
   <Image 
   source={props.immagine}
   style={{width: 150, height: 150, resizeMode: 'cover', borderRadius: 150/2}}>
   </Image>
   </View>
   
  <View style={{flex: 1,paddingVertical: 16, }}>
 <Text style={{fontSize: 24, fontWeight: 800}}>{props.Title}</Text>
 <View style={{flex: 1, justifyContent: 'center'}}>
 <Text>{props.subTitle}</Text>
 </View>

</View>
</View>

);

}

export default function Index() {
  return (

    
     //contenitore
    <ScrollView style={
      {flex:1, 
        backgroundColor: 'white', 
        paddingHorizontal: 16}
    }>
      <View style={{flex: 1}}>
      {DATA.map((card, Index)=> {
        return (
          <Card 
          key={Index}
          Title={card.title}
          subTitle={card.subTitle}
          backgroundColor={card.backgroundColor}
          immagine={card.immagine}
          />
        );
      })}
      </View>
      
    </ScrollView>
  );
}