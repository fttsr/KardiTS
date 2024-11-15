import { StyleSheet, Image} from 'react-native';

import { Text, View } from '@/components/Themed';


export default function Results() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Прошлые{'\n'}результаты:</Text>
      <Image source={require('../../assets/images/results.png')} style={styles.img}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1511',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
  },
  titleText: {
    position: 'absolute',
    textAlign: 'left',
    color: '#FAFAFA',
    fontSize: 36,
    fontFamily: 'Montserrat',
    top: '15%',
    left: 15,    
  },
  img: {
    top: '5%'
  }
});

// Made by Nikita Prosvirkin