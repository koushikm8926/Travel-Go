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



        </SafeAreaView>
    );
}

