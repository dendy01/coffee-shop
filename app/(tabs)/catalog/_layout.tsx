import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CatalogLayout() {
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{
				headerTitleAlign: 'center',
				headerShadowVisible: false
			}}>
				<Stack.Screen
					name='Catalog'
					options={{
						headerShown: false,
						statusBarStyle: 'light'
					}}
				/>
				<Stack.Screen
					name='[id]'
					options={{
						title: 'Описание',
						headerShown: true,
						statusBarStyle: 'dark'
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}