import { Tabs } from 'expo-router';

export default function ScreensRoot() {
	return (
		<>
			<Tabs
				screenOptions={{
					headerShown: false
				}}
			>
				<Tabs.Screen
					name='Catalog'
					options={{
						title: 'Главная'
					}}
				/>
				<Tabs.Screen
					name='Cart'
					options={{
						title: 'Заказ'
					}}
				/>

				<Tabs.Screen name='Address' options={{ href: null }} />
				<Tabs.Screen name='Coffee' options={{ href: null }} />

				<Tabs.Screen name='Home' options={{ href: null }} />
				<Tabs.Screen name='Success' options={{ href: null }} />
			</Tabs>
		</>
	);
}