import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import ChatFaceData from '../Services/ChatFaceData';

type ChatFace = {
  id: number;
  name: string;
  image: string;
  primary: string;
  secondary: string;
};

export default function HomeScreen() {
  // Properly typing the states
  const [chatFaceData, setChatFaceData] = useState<ChatFace[] | undefined>();
  const [selectedChatFaceData, setSelectedChatFaceData] = useState<ChatFace | undefined>();

  useEffect(() => {
    setChatFaceData(ChatFaceData); // Assigning the full array to chatFaceData
    setSelectedChatFaceData(ChatFaceData[0]); // Selecting the first item as default
  }, []);

  const onChatFacePress=(id)=>{
    setSelectedChatFaceData(ChatFaceData[id-1])
  }

  return (
    <View style={{alignItems:'center',paddingTop:90}}>
      <Text style={[{color:selectedChatFaceData?.primary},{fontSize:30}]}>Hello</Text>
      
      <Text style={[{color:selectedChatFaceData?.primary},{fontSize:30,fontWeight:'bold'}]}>I am {selectedChatFaceData?.name}</Text>

      <Image source={{uri:selectedChatFaceData?.image}} style={{width:150,height:150,marginTop:20}}/>

      <Text style={{marginTop:30,fontSize:25}}>How Can I help you</Text>

      <View style={{marginTop:20,backgroundColor:'#F5F5F5',alignItems:'center',height:110,padding:10,borderRadius:10}}>
        <FlatList data={chatFaceData}horizontal={true} renderItem={({item})=>selectedChatFaceData?.id!=item.id&&(
            <TouchableOpacity style={{margin:15}} onPress={()=>onChatFacePress(item.id)}>
                <Image source={{uri:item.image}} style={{width:40,height:40}}/>
            </TouchableOpacity>
        )} />
        <Text style={{marginTop:5,fontSize:17,color:'#B0B0B0'}}>Choose Your Fav ChatBuddy</Text>
      </View>
      <TouchableOpacity style={[{backgroundColor:selectedChatFaceData?.primary}, {padding:17,width:Dimensions.get('screen').width*0.6,borderRadius:100,alignItems:'center',marginTop:30}]}>
        <Text style={{fontSize:16,color:'#fff'}}>Let's Chat</Text>
      </TouchableOpacity>
    </View>
  );
}
