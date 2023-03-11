import React from "react";
import { SafeAreaView } from "react-native";
import { View,Text  } from "react-native";

export default function Home(){
    return(
        <SafeAreaView className="bg-white relative"  style={{flex: 1, paddingTop: Platform.OS === 'android' ? 35 : 0}}>
          {/*first section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="h-16 w-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className=" font-bold text-3xl text-[#2A2B4B]  ">Travel</Text>
            </View>
{/*second section */}
            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[42px] text-[#3C6072]" >Enjoy the trip with</Text>
                <Text className="text-[38px] text-[#00BCC9] font-bold">Good Moments</Text>
            </View>


        </SafeAreaView>
    );
}

