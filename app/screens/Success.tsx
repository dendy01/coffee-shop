import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Success() {
	return (
		<View style={ styles.coffee }>
			<Text>Success</Text>
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

