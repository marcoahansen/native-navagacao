import 'react-native-gesture-handler'
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { TabRoutes } from './src/routes/TabRoutes';
import { DrawerRoutes } from './src/routes/DrawerRoutes';
import { StackRoutes } from './src/routes/StackRoutes';


export default function App() {
  return (
    <NavigationContainer>
      {/* <TabRoutes /> */}
      {/* <DrawerRoutes /> */}
      <StackRoutes />
    </NavigationContainer>
  );
}
