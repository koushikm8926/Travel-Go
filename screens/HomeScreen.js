import React from "react";
import { SafeAreaView } from "react-native";
import { View,Text,Image  } from "react-native";
import { Heroimage } from "../assets";

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
           <Image source={Heroimage} className="object-cover w-full h-full mt-20"></Image>
            </View>
        </SafeAreaView>
    );
}

