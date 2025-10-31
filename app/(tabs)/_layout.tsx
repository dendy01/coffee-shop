import { Tabs } from 'expo-router';

export default function TabsRoot() {
	return (
		<Tabs screenOptions={{
			headerShown: false,
			headerTitleAlign: 'center'
		}}>
			<Tabs.Screen
				name='catalog' 
				options={{
					title: 'Главная',
					href: '/(tabs)/catalog/Catalog'
				}}
			/>
			<Tabs.Screen
				name='cart'
				options={{
					title: 'Заказ',
					href: '/(tabs)/cart/Cart'
				}}
			/>
		</Tabs>
	);
}