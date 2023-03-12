import React, {useLayoutEffect} from "react";
import { View,Text,Image ,SafeAreaView, TouchableOpacity } from "react-native";
import { Heroimage } from "../assets";
import * as Animatable from 'react-native-animatable';


export default function Home(){
    return(
        <SafeAreaView className="bg-white relative"  style={{flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0}}>
          {/*first section */}
            <View className="flex-row px-6 mt-7 items-center space-x-2">
                <View className="h-16 w-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className=" font-bold text-3xl text-[#2A2B4B]  ">Travel</Text>
            </View>
{/*second section */}
            <View className="px-6 mt-7 space-y-2">
                <Text className="text-[42px] text-[#3C6072]" >Enjoy the trip with</Text>
                <Text className="text-[38px] text-[#00BCC9] font-bold">Good Moments</Text>
                <Text className="text-base text-[#3C6072]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
{/*circle section */}

            <View className="h-[300px] w-[300px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>         
            <View className="h-[300px] w-[300px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>         
{/*image */}
<View className="flex-1 relative items-center justify-content ">
           <Animatable.Image 
           animation="fadeIn"
           easing="ease-in-out"
           source={Heroimage} className="object-cover w-full h-full mt-20"/>

{/*button */}     

           <View className="absolute bottom-20 h-24 w-24 border-r-2 border-l-2 border-t-4 border-[#00BCC9] rounded-full justify-center items-center ">
               <TouchableOpacity>
                    <View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                        <Text className="font-semibold text-[36px] text-green-50 ">Go</Text>
                    </View>
                </TouchableOpacity>

            </View>
</View>
        </SafeAreaView>
    );
}

