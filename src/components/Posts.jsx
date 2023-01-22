import React,{useEffect,useState} from 'react';
import { View,ScrollView, Text,Image } from 'react-native';
import Axios from 'axios';
import { Card } from '@rneui/themed';


export default function Posts() {
    const [list, setList] = useState([]);
    useEffect(() => {
      Axios({
        url: "https://jsonplaceholder.typicode.com/albums/1/photos"
      })
        .then(response => {
          setList(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [setList]);
  
  return (
    <ScrollView>
      <View>
        {list.map(item => (
        
        <>
        
        <View style={{maxWidth:'100%'}}>
        <Card.Divider /><View style={{ }}>
      
      <View style={{display:'flex',justifyContent:'space-between',padding:5,flexDirection:'row',width:'43%',alignItems:'center',position:'relative'}}>
      <Image 
   source = {{ uri: item.thumbnailUrl }}
   style = {{ alignSelf: 'flex-start',height: 40, width: 40,borderRadius:30 }}
/>
<Card.Title style={{fontSize:15,marginTop:8,textAlign:'center'}}>@kullaniciAdi</Card.Title>
      </View>  
        <Image 
   source = {{ uri: item.url }}
   style = {{ height: 250, width: '100%' }}
/>
<Card.FeaturedTitle style={{textAlign:'center',padding:5,fontSize:15,fontWeight:'700'}}>
    {item.title}
</Card.FeaturedTitle>
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',padding:20,width:'40%'}}>
<Text>👍🏻</Text>
<Text>💬</Text>
<Text>†</Text>


</View>

                {/* <Text>Pranshu Chittora</Text> */}
            </View>
        </View>
        
        </>
         
        ))}
      </View>
     </ScrollView>
  );
}
