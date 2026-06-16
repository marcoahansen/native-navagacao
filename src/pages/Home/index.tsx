import { useNavigation } from "@react-navigation/native";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "../../routes/TabRoutes";
import { DrawerNavigationProp } from "@react-navigation/drawer";


export const Home = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  const navegaSobre = () => {
    navigation.navigate('Sobre', { nome: "Marco", email: "m@m.com" })
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Tela Home</Text>
      <Button title="Ir para sobre" onPress={navegaSobre} />
      <Button title="Abrir drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Ir para contato" onPress={() => navigation.jumpTo("Contato")} />
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