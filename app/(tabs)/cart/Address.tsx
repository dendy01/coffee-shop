import { Link, Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Address() {
	return (
		<View style={ styles.coffee }>
			<Stack.Screen options={{
				title: 'Изменить адрес'
			}} />
			<Text>Address</Text>
			<Link href={ '/(tabs)/cart/Success' }>
				<Text>Сохранить</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	coffee: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

