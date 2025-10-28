import { Tabs } from 'expo-router';

export default function TabsRoot() {
	return (
		<Tabs screenOptions={{
			headerShown: false
		}}>
			<Tabs.Screen
				name='catalog' 
				options={{
					title: 'Главная'
				}}
			/>
			<Tabs.Screen
				name='cart'
				options={{
					title: 'Заказ'
				}}
			/>
		</Tabs>
	);
}