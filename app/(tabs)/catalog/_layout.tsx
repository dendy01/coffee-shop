import { GlobalColors } from '@/app/components/variables';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CatalogLayout() {
	return (
		<>
			<SafeAreaView style={{
				flex: 1,
				backgroundColor: GlobalColors.whiteColor
			}}>
				<Stack screenOptions={{
					contentStyle: {
						backgroundColor: GlobalColors.whiteColor
					}
				}}>
					<Stack.Screen
						name='Catalog'
					/>
					<Stack.Screen
						name='[id]'
						options={{
							title: 'Описание',
							headerTitleAlign: 'center',
							statusBarStyle: 'dark'
						}}
					/>
				</Stack>
			</SafeAreaView>
		</>
	);
}