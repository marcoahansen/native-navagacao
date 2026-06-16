import MaterialIcons from "@react-native-vector-icons/material-icons"
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native"

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <MaterialIcons name='account-circle' color='blue' size={50} />
        <Text>Custom drawer</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
});