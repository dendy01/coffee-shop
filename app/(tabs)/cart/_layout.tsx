import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CartRoot() {
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{
				headerTitleAlign: 'center',
				headerShadowVisible: false,
				statusBarStyle: 'dark'
			}}>
				<Stack.Screen
					name='Cart'
					options={{
						title: 'Заказ',
						headerBackVisible: false
					}}
				/>
				<Stack.Screen
					name='Address'
					options={{
						title: 'Изменить адрес'
					}}
				/>
				<Stack.Screen
					name='Success'
					options={{
						title: 'Заказ оформлен!',
						headerBackVisible: false
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}