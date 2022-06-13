
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcomepage from './Screens/Welcomepage'
import Registrationpage from './Screens/Registrationpage'
import Loginpage from './Screens/Loginpage'
import Profilepage from './Screens/Profilepage'



const Stack =createNativeStackNavigator();

export default function App(){
  return(

<NavigationContainer>
<Stack.Navigator   screenOptions={{
         headerShown:false
       }}>

<Stack.Screen name="Welcomepage" component={Welcomepage} />
<Stack.Screen name="Registrationpage" component={Registrationpage} />
<Stack.Screen name="Loginpage" component={Loginpage} />
<Stack.Screen name="Profilepage" component={Profilepage} />
  
  
  
</Stack.Navigator>



</NavigationContainer>



  );
}

