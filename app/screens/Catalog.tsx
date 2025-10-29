import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Catalog() {
	return (
		<View style={ styles.coffee }>
			<Text>Catalog</Text>
			<Link href={ '/screens/Address' }>
				<Text>Изменить адрес</Text>
			</Link>
			<Link href={ '/catalog/1234' }>
				<Text>Перейти в описание товара</Text>
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

