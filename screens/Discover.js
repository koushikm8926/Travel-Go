import react from "react";
import { View,Text,TouchableOpacity,Image ,SafeAreaView} from "react-native";
import { Avtar } from "../assets";

const Discover =()=>{
    return(
        <SafeAreaView  className="bg-white relative"  style={{flex: 1, paddingTop: Platform.OS === 'android' ? 35 : 0}}>
            <View className="flex-row items-center px-8 justify-between">

                <View>
                    <Text className="font-bold text-[40px] text-[#0B646B]">Discover</Text>
                    <Text className="text-[36px] text-[grey]">the beauty today</Text>
                </View>

                <View className="bg-slate-400 h-12 w-12 rounded-md items-center justify-center">
                    <Image source={Avtar}  className="w-full h-full object-cover rounded-md shadow-lg" ></Image>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Discover;