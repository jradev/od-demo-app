
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Home, Expenses, ExpensesList } from '@/screens';
import { Colors } from '@/theme';


const commonHeaderProps = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTitleStyle : {
    color: 'white'
  },
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExpenseStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen 
            options={{
              title: 'Expenses',
              ...commonHeaderProps,
            }}
            name="ExpenseMain" component={Expenses}/>
            <Stack.Screen name="ExpensesList" 
            options={{
              title: '',
            }}
            component={ExpensesList} />
        </Stack.Navigator>
    )
}


const AppNavigator = () => (
    <Tab.Navigator
    >
        <Tab.Screen 
        name="Home" 
        options={{
          tabBarLabel: 'Home',
          ...commonHeaderProps,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        component={Home} />
        <Tab.Screen 
        name="Expenses" 
        options={{
          tabBarLabel: 'Expenses',
          headerShown: false,
          ...commonHeaderProps,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart-outline" color={color} size={size} />
          ),
        }}
        component={ExpenseStack} />
        
        <Tab.Screen 
        name="Portfolio" 
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" color={color} size={size} />
          ),
        }}
        component={Home} />

        <Tab.Screen 
        name="Bank Accounts" 
        options={{
          tabBarLabel: 'Bank Accounts',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
        component={Home} />

        <Tab.Screen 
        name="More" 
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" color={color} size={size} />
          ),
        }}
        component={Home} />
      </Tab.Navigator>
 

)


export default AppNavigator