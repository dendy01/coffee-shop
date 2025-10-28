import { GlobalColors } from '@/app/components/variables';
import { Stack } from 'expo-router';

export default function CartRoot() {
	return (
		<Stack screenOptions={{
			headerTitleAlign: 'center',
			contentStyle: {
				backgroundColor: GlobalColors.whiteColor
			}
		}}>
			<Stack.Screen
				name='Cart'
				options={{
					title: 'Заказ'
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
					title: 'Заказ оформлен!'
				}}
			/>
		</Stack>
	);
}