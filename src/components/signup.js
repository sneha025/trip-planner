import React,{useState} from 'react';
import { SafeAreaView,Image,Text, TextInput } from 'react-native';


const Signup =()=>{
    const [text,setText]=useState('Nothing');

    return(<SafeAreaView>

        <Text>Signup</Text>
        <Text>Let's get accquainted</Text>
        <TextInput value={text} onChange={setText}/>
        <TextInput/>
    </SafeAreaView>)
}

export default Signup