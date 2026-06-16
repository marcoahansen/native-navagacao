import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Contato } from "../pages/Contato";

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  )
}