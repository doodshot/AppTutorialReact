import {FlatList, Image, ListRenderItem, Text, View} from 'react-native';

interface CardData {
    url: string;
    nome: string;
    desc: string,
    prezzo: number
}

const DATA: Array<CardData> = [{
    url: "https://cdn.mos.cms.futurecdn.net/Vi8wM6XHzNeBvXH7bmf6w5-1920-80.jpg.webp",
    nome: "GeForce RTX 3050",
    desc: "La GeForceRTX™ 3050 si basa sulle prestazioni grafiche dell'architettura NVIDIA Ampere. Include RT Cores di seconda generazione ed Tensor Core di terza generazione dedicati, multiprocessori di streaming e memoria G6 ad alta velocità per i giochi più recenti. Passa a GeForce RTX.",
    prezzo: 250
}, {
    url: "https://cdn.mos.cms.futurecdn.net/puYWZBQjmYyf7YS7rVNikC-320-80.jpg",
    nome: "GeForce RTX 3060",
    desc: "La GeForce RTX™ 3060 Ti e la RTX 3060 permettono di sfruttare i giochi più recenti con la potenza di Ampere, l'architettura NVIDIA RTX di seconda generazione. Ottieni prestazioni incredibili con RT Core di seconda generazione e Tensor Core di terza generazione, nuovi multiprocessori di streaming e memoria G6 ad alta velocità.",
    prezzo: 300
}, {
    url: "https://www.digitaltrends.com/wp-content/uploads/2020/09/rtx-3080-07.jpg?resize=625,417&p=1",
    nome: "GeForce RTX 3080",
    desc: "Le schede grafiche GeForce RTX™ 3080 Ti e RTX 3080 offrono le prestazioni che i giocatori bramano grazie ad Ampere, l'architettura RTX di seconda generazione di NVIDIA. Sono costruite con RT Core di seconda generazione e Tensor Core di terza generazione dedicate, multiprocessori di streaming e una straordinaria memoria G6X, il tutto per offrirti una straordinaria esperienza di gioco.",
    prezzo: 650
}, {
    url: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/Screenshot-56-e1598982763406-1024x682.png",
    nome: "GeForce RTX 3090",
    desc: "La GeForce RTX™ 3090 e la 3039 Ti si basano su Ampere, l'architettura RTX di NVIDIA di seconda generazione. Sono dotate di RT Core di seconda generazione e Tensor Core di terza generazione dedicati, multiprocessori di streaming e una straordinaria memoria G6X fino a 24 GB, per fornire prestazioni di alta qualità per gamer e creativi.",
    prezzo: 900
}, {
    url: "https://c1.neweggimages.com/productimage/nb300/BDCAS22103108TBI17A.jpg",
    nome: "GeForce RTX 4090",
    desc: "La GeForce RTX™ 4090 è la GPU GeForce definitiva. Si tratta di un enorme passo avanti in termini di prestazioni, efficienza e grafica basata su IA. Scopri il gaming ad altissime prestazioni, mondi virtuali incredibilmente dettagliati, produttività senza precedenti e nuovi modi di creare. Basata sull'architettura NVIDIA Ada Lovelace e include 24 GB di memoria G6X per offrire l'esperienza definitiva per giocatori e creativi..",
    prezzo: 1800
}, {
    url: "https://cdn.mos.cms.futurecdn.net/Vi8wM6XHzNeBvXH7bmf6w5-1920-80.jpg.webp",
    nome: "GeForce RTX 3050",
    desc: "La GeForceRTX™ 3050 si basa sulle prestazioni grafiche dell'architettura NVIDIA Ampere. Include RT Cores di seconda generazione ed Tensor Core di terza generazione dedicati, multiprocessori di streaming e memoria G6 ad alta velocità per i giochi più recenti. Passa a GeForce RTX.",
    prezzo: 250
}, {
    url: "https://cdn.mos.cms.futurecdn.net/puYWZBQjmYyf7YS7rVNikC-320-80.jpg",
    nome: "GeForce RTX 3060",
    desc: "La GeForce RTX™ 3060 Ti e la RTX 3060 permettono di sfruttare i giochi più recenti con la potenza di Ampere, l'architettura NVIDIA RTX di seconda generazione. Ottieni prestazioni incredibili con RT Core di seconda generazione e Tensor Core di terza generazione, nuovi multiprocessori di streaming e memoria G6 ad alta velocità.",
    prezzo: 300
}, {
    url: "https://www.digitaltrends.com/wp-content/uploads/2020/09/rtx-3080-07.jpg?resize=625,417&p=1",
    nome: "GeForce RTX 3080",
    desc: "Le schede grafiche GeForce RTX™ 3080 Ti e RTX 3080 offrono le prestazioni che i giocatori bramano grazie ad Ampere, l'architettura RTX di seconda generazione di NVIDIA. Sono costruite con RT Core di seconda generazione e Tensor Core di terza generazione dedicate, multiprocessori di streaming e una straordinaria memoria G6X, il tutto per offrirti una straordinaria esperienza di gioco.",
    prezzo: 650
}, {
    url: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/Screenshot-56-e1598982763406-1024x682.png",
    nome: "GeForce RTX 3090",
    desc: "La GeForce RTX™ 3090 e la 3039 Ti si basano su Ampere, l'architettura RTX di NVIDIA di seconda generazione. Sono dotate di RT Core di seconda generazione e Tensor Core di terza generazione dedicati, multiprocessori di streaming e una straordinaria memoria G6X fino a 24 GB, per fornire prestazioni di alta qualità per gamer e creativi.",
    prezzo: 900
}, {
    url: "https://c1.neweggimages.com/productimage/nb300/BDCAS22103108TBI17A.jpg",
    nome: "GeForce RTX 4090",
    desc: "La GeForce RTX™ 4090 è la GPU GeForce definitiva. Si tratta di un enorme passo avanti in termini di prestazioni, efficienza e grafica basata su IA. Scopri il gaming ad altissime prestazioni, mondi virtuali incredibilmente dettagliati, produttività senza precedenti e nuovi modi di creare. Basata sull'architettura NVIDIA Ada Lovelace e include 24 GB di memoria G6X per offrire l'esperienza definitiva per giocatori e creativi..",
    prezzo: 1800
}, {
    url: "https://cdn.mos.cms.futurecdn.net/Vi8wM6XHzNeBvXH7bmf6w5-1920-80.jpg.webp",
    nome: "GeForce RTX 3050",
    desc: "La GeForceRTX™ 3050 si basa sulle prestazioni grafiche dell'architettura NVIDIA Ampere. Include RT Cores di seconda generazione ed Tensor Core di terza generazione dedicati, multiprocessori di streaming e memoria G6 ad alta velocità per i giochi più recenti. Passa a GeForce RTX.",
    prezzo: 250
}, {
    url: "https://cdn.mos.cms.futurecdn.net/puYWZBQjmYyf7YS7rVNikC-320-80.jpg",
    nome: "GeForce RTX 3060",
    desc: "La GeForce RTX™ 3060 Ti e la RTX 3060 permettono di sfruttare i giochi più recenti con la potenza di Ampere, l'architettura NVIDIA RTX di seconda generazione. Ottieni prestazioni incredibili con RT Core di seconda generazione e Tensor Core di terza generazione, nuovi multiprocessori di streaming e memoria G6 ad alta velocità.",
    prezzo: 300
}, {
    url: "https://www.digitaltrends.com/wp-content/uploads/2020/09/rtx-3080-07.jpg?resize=625,417&p=1",
    nome: "GeForce RTX 3080",
    desc: "Le schede grafiche GeForce RTX™ 3080 Ti e RTX 3080 offrono le prestazioni che i giocatori bramano grazie ad Ampere, l'architettura RTX di seconda generazione di NVIDIA. Sono costruite con RT Core di seconda generazione e Tensor Core di terza generazione dedicate, multiprocessori di streaming e una straordinaria memoria G6X, il tutto per offrirti una straordinaria esperienza di gioco.",
    prezzo: 650
}, {
    url: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/Screenshot-56-e1598982763406-1024x682.png",
    nome: "GeForce RTX 3090",
    desc: "La GeForce RTX™ 3090 e la 3039 Ti si basano su Ampere, l'architettura RTX di NVIDIA di seconda generazione. Sono dotate di RT Core di seconda generazione e Tensor Core di terza generazione dedicati, multiprocessori di streaming e una straordinaria memoria G6X fino a 24 GB, per fornire prestazioni di alta qualità per gamer e creativi.",
    prezzo: 900
}, {
    url: "https://c1.neweggimages.com/productimage/nb300/BDCAS22103108TBI17A.jpg",
    nome: "GeForce RTX 4090",
    desc: "La GeForce RTX™ 4090 è la GPU GeForce definitiva. Si tratta di un enorme passo avanti in termini di prestazioni, efficienza e grafica basata su IA. Scopri il gaming ad altissime prestazioni, mondi virtuali incredibilmente dettagliati, produttività senza precedenti e nuovi modi di creare. Basata sull'architettura NVIDIA Ada Lovelace e include 24 GB di memoria G6X per offrire l'esperienza definitiva per giocatori e creativi..",
    prezzo: 1800
}, {
    url: "https://cdn.mos.cms.futurecdn.net/Vi8wM6XHzNeBvXH7bmf6w5-1920-80.jpg.webp",
    nome: "GeForce RTX 3050",
    desc: "La GeForceRTX™ 3050 si basa sulle prestazioni grafiche dell'architettura NVIDIA Ampere. Include RT Cores di seconda generazione ed Tensor Core di terza generazione dedicati, multiprocessori di streaming e memoria G6 ad alta velocità per i giochi più recenti. Passa a GeForce RTX.",
    prezzo: 250
}, {
    url: "https://cdn.mos.cms.futurecdn.net/puYWZBQjmYyf7YS7rVNikC-320-80.jpg",
    nome: "GeForce RTX 3060",
    desc: "La GeForce RTX™ 3060 Ti e la RTX 3060 permettono di sfruttare i giochi più recenti con la potenza di Ampere, l'architettura NVIDIA RTX di seconda generazione. Ottieni prestazioni incredibili con RT Core di seconda generazione e Tensor Core di terza generazione, nuovi multiprocessori di streaming e memoria G6 ad alta velocità.",
    prezzo: 300
}, {
    url: "https://www.digitaltrends.com/wp-content/uploads/2020/09/rtx-3080-07.jpg?resize=625,417&p=1",
    nome: "GeForce RTX 3080",
    desc: "Le schede grafiche GeForce RTX™ 3080 Ti e RTX 3080 offrono le prestazioni che i giocatori bramano grazie ad Ampere, l'architettura RTX di seconda generazione di NVIDIA. Sono costruite con RT Core di seconda generazione e Tensor Core di terza generazione dedicate, multiprocessori di streaming e una straordinaria memoria G6X, il tutto per offrirti una straordinaria esperienza di gioco.",
    prezzo: 650
}, {
    url: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/Screenshot-56-e1598982763406-1024x682.png",
    nome: "GeForce RTX 3090",
    desc: "La GeForce RTX™ 3090 e la 3039 Ti si basano su Ampere, l'architettura RTX di NVIDIA di seconda generazione. Sono dotate di RT Core di seconda generazione e Tensor Core di terza generazione dedicati, multiprocessori di streaming e una straordinaria memoria G6X fino a 24 GB, per fornire prestazioni di alta qualità per gamer e creativi.",
    prezzo: 900
}, {
    url: "https://c1.neweggimages.com/productimage/nb300/BDCAS22103108TBI17A.jpg",
    nome: "GeForce RTX 4090",
    desc: "La GeForce RTX™ 4090 è la GPU GeForce definitiva. Si tratta di un enorme passo avanti in termini di prestazioni, efficienza e grafica basata su IA. Scopri il gaming ad altissime prestazioni, mondi virtuali incredibilmente dettagliati, produttività senza precedenti e nuovi modi di creare. Basata sull'architettura NVIDIA Ada Lovelace e include 24 GB di  memoria G6X per offrire l'esperienza definitiva per giocatori e creativi..",
    prezzo: 1800
}]

const Card = (props: CardData) => {
    return (<View style={{
        width: '100%', height: 500, borderColor: 'black', borderWidth: 2, borderRadius: 30, flexDirection: 'column'
    }}>
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Image
                source={{uri: props.url}}
                style={{width: '100%', height: 150, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            </Image>
        </View>
        <View style={{flex: 1, paddingVertical: 16, padding: 12}}>
            <Text style={{fontSize: 24, fontWeight: 800}}>{props.nome}</Text>
            <View style={{flex: 1, justifyContent: 'center', paddingBottom: 16}}>
                <Text>{props.desc}</Text>
                <Text style={{
                    paddingTop: 16, fontSize: 22, fontWeight: 600, alignItems: 'center', width: '100%'
                }}>{props.prezzo}€</Text>
            </View>

        </View>
    </View>);
}
const renderItem: ListRenderItem<CardData> = ({item}) => {
    return (<Card
       
        nome={item.nome}
        desc={item.desc}
        prezzo={item.prezzo}
        url={item.url}
    />)
}
const ItemSeparatorComponent = () => (<View style={{height: 16}}/>)
const ListHeaderComponent = () => (
    <Text style={{fontSize: 32, paddingVertical: 16, textAlign: 'center'}}>Bit per Byte</Text>)

export default function Index() {
    return (<FlatList data={DATA}
                      renderItem={renderItem}
                      ItemSeparatorComponent={ItemSeparatorComponent}
                      ListHeaderComponent={ListHeaderComponent}
                      style={{paddingHorizontal: 16}}
        />);
}