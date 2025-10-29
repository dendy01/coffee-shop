import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Input from '../../components/UI/Input';
import { GlobalColors, GlobalSizes } from '../../components/variables';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import StatusBarBackground from '@/app/components/StatusBarBackground';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CatalogCard } from '@/app/model/Card.model';
import Coffee from '@/app/components/Coffee';

export default function Catalog() {
	const insets = useSafeAreaInsets();
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
	const [selectedCoffee, setSelectedCoffee] = useState<string>('all');
	const [catalogCards, setCatalogCards] = useState<CatalogCard[]>();

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		switchCoffee();
	}, [selectedCoffee]);

	const loadData = async () => {
		const { data } = await axios.get('https://purpleschool.ru/coffee-api/');

		if (!data) {
			return;
		}

		setCatalogCards(data);

		console.log(data);
	};

	const switchCoffee = async () => {
		const { data } = await (selectedCoffee === 'all' ? axios.get('https://purpleschool.ru/coffee-api/') : axios.get(`https://purpleschool.ru/coffee-api/?type=${ selectedCoffee }`));

		if (!data) {
			return;
		}

		setCatalogCards(data);

		console.log(data);
	};

	return (
		<View style={ styles.coffee }>
			<StatusBarBackground insets={ insets.top } />
			<View style={ styles.coffeeHeader }>
				<Link href={ '/(tabs)/cart/Address' }>
					<Text style={ styles.coffeeLinkText }>Изменить адрес</Text>
				</Link>
				<Input />
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
				{ catalogCards?.length ? <Coffee cards={ catalogCards as CatalogCard[] }/> : null }
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
