import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DeskriptionCoffee() {
	const { id } = useLocalSearchParams();

	return (
		<View style={ styles.coffee }>
			<Text>DeskriptionCoffee</Text>
			<Text>Id coffee: { id }</Text>
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

