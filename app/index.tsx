import { StyleSheet, View } from 'react-native';
import Home from './pages/HomePage';

export default function HomeScreen() {
	return (
		<View style={ styles.app }>
			<Home></Home>
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1
	}
});
