import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerShow: true,
                drawerType: 'front',
                drawerHideStatusBarOnOpen: false,

            }}
        >
            <Drawer.Screen
                name='index'
                options={{ title: 'Página principal' }}
            />
            <Drawer.Screen 
                name='pagina2'
                options={{ title: 'Página 2' }}
            />
            <Drawer.Screen
                name='pagina3'
                options={{ title: 'Página 3' }}
            />
        </Drawer>
    );
}