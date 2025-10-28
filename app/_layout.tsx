import { SplashScreen, Stack, usePathname } from 'expo-router';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Root() {
	const pathname = usePathname();
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

	console.log(pathname);

	return (
		<>
			<StatusBar barStyle={ 'light-content' }/>
			<SafeAreaProvider style={ styles.root }>
				<Stack screenOptions={{
					headerShown: false
				}}>
					<Stack.Screen name='index'/>
				</Stack>
			</SafeAreaProvider>
		</>
	);
}

const styles = StyleSheet.create({
	root: {
		position: 'relative'
	}
});