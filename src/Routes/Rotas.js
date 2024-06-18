import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
import Busca from '../Pages/Busca';
import Login from '../Pages/Login';
import Perfil from '../Pages/Perfil';
import Cadastro from '../Pages/Cadastro';
import NovaObs from '../Pages/NovaObs';


const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado, cadastro, setCadastro } = useContext(AuthContext);

    if (!logado && !cadastro ) {
        return (<Login />)
    }

    if( !logado && cadastro ) {
        return ( <Cadastro />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#B03EE5',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                 name='Nova Observacao'
                 component={NovaObs}
                 options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-plus" color={color} size={size} />
                    ),
                }}
                />
            
            </Tab.Navigator>
        </NavigationContainer>
    )
}