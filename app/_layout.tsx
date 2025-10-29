import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Root() {
	const [loader] = useFonts({
		FiraSansRegular: require('@/assets/fonts/FiraSans-Regular.ttf'),
		FiraSansSemiBold: require('@/assets/fonts/FiraSans-SemiBold.ttf')
	});

	useEffect(() => {
		if (loader) {
			SplashScreen.hideAsync();
		}
	});

	if (!loader) {
		return null;
	}

	return (
		<>
			<StatusBar />
			<SafeAreaProvider>
				<Stack screenOptions={{
					headerShown: false
				}}>
					<Stack.Screen name='index' />
					<Stack.Screen name='screens' />
					<Stack.Screen name='catalog' />
				</Stack>
			</SafeAreaProvider>
		</>
	);
}