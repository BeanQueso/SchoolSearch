import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import {Icon, Header} from 'react-native-elements'
export default class WelcomeScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            studentName:'',
            sex:'',
            age:'',
            ageGroup:'',
            geography:''
        }
    }

    useInfoAndNavigate = ()=>{
        this.props.navigation.navigate('InfoResults')
    }

    render(){
        return(
            <View style = {{backgroundColor:'#87ceeb', alignItems:'center'}}>
                <View style = {{backgroundColor:'navy', width:1366, alignItems:'center'}}>
                <Text style = {{fontSize:35, color:'aqua'}}>
                    School Search
                </Text>
                </View>
                <View style = {{alignItems:'center', justifyContent:'center'}}>
                <Text style = {{fontSize:27, marginTop:40}}>
                   Welcome 
                </Text>
                <Text style = {{
                    marginTop:7
                }}>
                    Please Enter these Specifications
                </Text>
                </View>
                <View style = {{
                    borderWidth:'2',
                    borderColor:'navy',
                    alignItems:'center'
                }}>
                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Student's Full Name 
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = ""
                    maxLength = {30}
                    keyboardType = {"default"}
                    onChangeText = {(text)=>{
                        this.setState({
                            studentName:text
                        })
                    }}
                    />

                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Student's Sex/Gender
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = "  Male/Female/Prefer not to say"
                    maxLength = {30}
                    keyboardType = "default"
                    onChangeText = {(text)=>{
                        this.setState({
                            sex:text
                        })
                    }}
                    />

                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Student's Age
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = ""
                    maxLength = {30}
                    keyboardType = "numeric"
                    onChangeText = {(text)=>{
                        this.setState({
                            age:text
                        })
                    }}
                    />

                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Student's Age Group
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = "   KG/Primary/Middle/High"
                    maxLength = {30}
                    keyboardType = "default"
                    onChangeText = {(text)=>{
                        this.setState({
                            ageGroup:text
                        })
                    }}
                    />

                    <Text style = {{
                        fontSize:18,
                        color:'navy',
                        marginTop:20
                    }}>
                       Geography
                    </Text>
                    <TextInput
                    style = {{margin:10, width:220, height:25, borderWidth:1, borderRadius:10, borderColor:'navy'}}
                    placeholder = "   country, state [optional], city"
                    maxLength = {30}
                    keyboardType = "default"
                    onChangeText = {(text)=>{
                        this.setState({
                            geography:text
                        })
                    }}
                    />
                </View>
                <View style = {{
                    alignItems:'center',
                }}>
                    <TouchableOpacity style = {{
                        width:150,
                        height:50,
                        borderWidth:1.8,
                        borderColor:'navy',
                        borderRadius:15,
                        marginTop:40,
                        backgroundColor:'#87ceeb',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    
                    onPress = {()=>{
                        if(this.state.studentName!==''&&this.state.sex!==''&&this.state.age!==''&&this.state.ageGroup!==''){
                            this.useInfoAndNavigate();
                        }else{
                            alert("Please fill out all of the information.")
                        }
                    }}
                    >
                        <Text style = {{
                            fontSize:15,
                            color:'blue',
                            fontWeight:500
                        }}>
                            Submit Information
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}