import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import Input from '../../components/UI/Input';
import { GlobalColors, GlobalSizes } from '../../components/variables';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import StatusBarBackground from '@/app/components/StatusBarBackground';
import { useEffect, useState } from 'react';
import Coffee from '@/app/components/Coffee';
import useCoffee from '@/app/stores/useCoffeeStore';

export default function Catalog() {
	const insets = useSafeAreaInsets();

	const { cardsCoffee, isLoading, getAllCardsCoffee, filterCardsCoffee } = useCoffee();

	const typeCoffee = [
		{
			name: 'Все',
			type: 'all'
		},
		{
			name: 'Капучино',
			type: 'cappuccino'
		},
		{
			name: 'Латте',
			type: 'latte'
		},
		{
			name: 'Макиатто',
			type: 'macchiato'
		},
		{
			name: 'Американо',
			type: 'americano'
		}
	];
	const [searchCoffee, setSearchCoffee] = useState<string>('');
	const [selectedCoffee, setSelectedCoffee] = useState<string>('all');

	useEffect(() => {
		getAllCardsCoffee();
	}, []);

	useEffect(() => {
		let timer: number;

		if (selectedCoffee === 'all' && !searchCoffee) {
			getAllCardsCoffee();
		} else {
			timer = setTimeout(() => {
				filterCardsCoffee(searchCoffee, selectedCoffee);
			}, 500);
		}

		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [searchCoffee, selectedCoffee]);

	return (
		<View style={ styles.coffee }>
			<StatusBarBackground insets={ insets.top } />
			<View style={ styles.coffeeHeader }>
				<Link href={ '/(tabs)/cart/Address' }>
					<Text style={ styles.coffeeLinkText }>Изменить адрес</Text>
				</Link>
				<Input
					placeholder={ 'Найти кофе' }
					onChangeText={ setSearchCoffee }
				/>
			</View>
			<View style={ styles.coffeeBody }>
				<View style={ styles.buttons }>
					{
						typeCoffee.map((type, index) => (
							<Pressable
								key={ index }
								onPress={ () => setSelectedCoffee(type.type) }
								style={[
									styles.checkbox,
									type.type === selectedCoffee && styles.checkboxCheck
								]}
							>
								<Text style={[
									styles.checkboxText,
									type.type === selectedCoffee && styles.checkboxCheckText
								]}>
									{ type.name }
								</Text>
							</Pressable>
						))
					}
				</View>
				{ isLoading && <ActivityIndicator size={ 'large' } /> }
				{ (cardsCoffee.length === 0 && !isLoading) && <Text>Ничего не найдено</Text> }
				{ cardsCoffee?.length > 0 && <Coffee cards={ cardsCoffee }/> }
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	coffee: {
		flex: 1
	},

	coffeeHeader: {
		padding: GlobalSizes.s30,
		gap: GlobalSizes.s30,

		backgroundColor: GlobalColors.blackColor
	},

	coffeeBody: {
		padding: GlobalSizes.s30,
		rowGap: GlobalSizes.s30
	},

	coffeeLinkText: {
		color: GlobalColors.whiteColor
	},

	buttons: {
		flexDirection: 'row',
		columnGap: GlobalSizes.s8
	},

	checkbox: {
		paddingVertical: GlobalSizes.s10,
		paddingHorizontal: GlobalSizes.s16,
		borderRadius: GlobalSizes.s12,

		backgroundColor: GlobalColors.whiteColor
	},

	checkboxCheck: {
		backgroundColor: GlobalColors.orangeColor700
	},

	checkboxText: {
		fontFamily: 'FiraSansRegular',
		fontSize: GlobalSizes.s14,
		fontWeight: '400',

		color: GlobalColors.greenColor700
	},

	checkboxCheckText: {
		fontFamily: 'FiraSansSemiBold',
		fontSize: GlobalSizes.s14,
		fontWeight: '600',

		color: GlobalColors.whiteColor
	}
});
