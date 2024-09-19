import { CardData, DATA } from '@/api/data.mock';
import { Card } from '@/components/molecules/cardComponent/cardComponent';
import {FlatList, ListRenderItem, Text, View} from 'react-native';

const renderItem: ListRenderItem<CardData> = ({item}) => {
    return (<Card
        
        nome={item.nome}
        desc={item.desc}
        prezzo={item.prezzo}
        url={item.url}
    />)
}
const ItemSeparatorComponent = () => (<View style={{height: 16}}/>)
const ListHeaderComponent = () => (<Text style={{fontSize: 32, paddingVertical: 16, textAlign: 'center'}}>Bit per Byte</Text>)
 const ListEmptyComponent = () => {
  return (
    <Text> ELEMENT NOT FOUND </Text>
  )
 }
export default function Index() {
    return (<FlatList data={DATA}
                      renderItem={renderItem}
                      ItemSeparatorComponent={ItemSeparatorComponent}
                      ListHeaderComponent={ListHeaderComponent}
                      ListEmptyComponent={ListEmptyComponent}
                      style={{paddingHorizontal: 16}}
        />);
}