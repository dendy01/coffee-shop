import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Address() {
	return (
		<View style={ styles.coffee }>
			<Text>Address</Text>
			<Link href={ '/screens/Catalog' }>
				<Text>Назад</Text>
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

