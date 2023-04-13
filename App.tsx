import { StyleSheet, Text, View,StatusBar, TouchableOpacity } from 'react-native'
import React , {useState} from 'react';


function App(): JSX.Element {

const [randomBgcolor , setRandomBgColor ] = useState('#FFFFFF');

const generatorColor = () => {
  const hexRange = '0123456789ABCDEF'
let color = "#" 

for (let i = 0; i < 8; i++) {
color += hexRange[Math.floor (Math.random() * 16)]
  
}
setRandomBgColor(color)

}

  return (
    <>
    <StatusBar backgroundColor={randomBgcolor}/>
    <View style={[styles.container, {backgroundColor:randomBgcolor}]}>
      <TouchableOpacity onPress={generatorColor}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press ME</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#6A1B4D",
    paddingHorizontal:10,
    paddingVertical:10
  },
  actionBtnTxt:{
    fontSize:24,
    color:'#FFF',
    textTransform:'capitalize'
  }
})
export default App;