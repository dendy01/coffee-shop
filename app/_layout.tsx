import { Slot, SplashScreen, usePathname } from 'expo-router';
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

	return (<Slot />);
}