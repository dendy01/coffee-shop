import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Cart() {
	return (
		<View style={ styles.coffee }>
			<Text>Cart</Text>
			<Link href={ '/screens/Success' }>
				<Text>Заказать</Text>
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

