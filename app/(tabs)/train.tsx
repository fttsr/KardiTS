import { StyleSheet, Image} from 'react-native';

import { Text, View } from '@/components/Themed';


export default function Train() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>ТРЕНИРОВКА{'\n'}ЖИРОСЖИГАЮЩАЯ</Text>
      <Text style={styles.Text}>нагрузка в сравнении{'\n'}с нормой 
        <Text style={styles.highlight}> - 61%</Text>
      </Text>

      <Image source={require('../../assets/images/pd.png')} style={styles.img}/>

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
    textAlign: 'center',
    color: '#D4FF52',
    fontSize: 32,
    fontFamily: 'MontserratBold',
    top: '10%',
  },
  Text: {
    position: 'absolute',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'Montserrat',
    top: '20%',
  },
  highlight: {
    position: 'absolute',
    textAlign: 'center',
    color: '#D4FF52',
    fontSize: 26,
    fontFamily: 'MontserratBold',
    top: '20%',
  },
  img: {
    top: '15%',
    width: 404,
    height: 536,
  }
});

// Made by Nikita Prosvirkin