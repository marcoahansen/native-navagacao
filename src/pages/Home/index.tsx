import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "../../routes/TabRoutes";


export const Home = () => {
  const navigation = useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const navegaSobre = () => {
    navigation.navigate('Sobre', { nome: "Marco", email: "m@m.com" })
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Tela Home</Text>
      <Button title="Ir para sobre" onPress={navegaSobre} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
  }
});