import { GlobalColors, GlobalSizes } from '@/app/components/variables';
import { PREFIX } from '@/app/model/API';
import { Card } from '@/app/model/Card.model';
import StarIcon from '@/assets/icons/StarIcon';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function DeskriptionCoffee() {
	const { id } = useLocalSearchParams();
	const [cardCoffeeInfo, setCardCoffeeInfo] = useState<Card | null>(null);
	const [checkSizeCoffee, setCheckSizeCoffee] = useState<string>('M');
	const sizesCoffee = ['S', 'M', 'L'];

	useEffect(() => {
		loadCoffee();
	}, []);

	const loadCoffee = async () => {
		const { data } = await axios.get(`${ PREFIX }/id/${ id }`);

		setCardCoffeeInfo(data);

		console.log(data);
	};

	return (
		<View style={ styles.coffee }>
			{
				cardCoffeeInfo &&
				<Image
					source={{ uri: cardCoffeeInfo.image }}
					style={ styles.coffeeImage }
				/>
			}
			<View style={ styles.coffeeTitle }>
				<View style={ styles.coffeeTitleDescription }>
					<Text style={ styles.title }>{ cardCoffeeInfo?.name }</Text>
					<Text style={ styles.titleDescriptionText }>{ cardCoffeeInfo?.subTitle }</Text>
				</View>
				<View style={ styles.coffeeTitleRating }>
					<StarIcon />
					<Text style={ styles.ratingText }>{ cardCoffeeInfo?.rating }</Text>
				</View>
			</View>
			<View style={ styles.coffeeDescription }>
				<Text style={ styles.title }>Описание</Text>
				<Text style={ styles.descriptionText }>{ cardCoffeeInfo?.description }</Text>
			</View>
			<View style={ styles.coffeeCheckboxButtons }>
				<Text style={ styles.title }>Размер</Text>
				<View style={ styles.buttons }>
					{
						sizesCoffee.map((size, index) => (
							<Pressable
								key={ index }
								onPress={ () => setCheckSizeCoffee(size) }
								style={[
									styles.checkbox,
									size === checkSizeCoffee && styles.checkboxCheck
								]}
							>
								<Text style={[
									styles.checkboxText,
									size === checkSizeCoffee && styles.checkboxCheckText
								]}>
									{ size }
								</Text>
							</Pressable>
						))
					}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	coffee: {
		flex: 1,
		gap: GlobalSizes.s20,
		padding: GlobalSizes.s30
	},

	coffeeImage: {
		width: '100%',
		height: 226,
		borderRadius: GlobalSizes.s16,
		resizeMode: 'cover'
	},


	coffeeTitle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	},

	coffeeTitleDescription: {
		gap: GlobalSizes.s8
	},

	titleDescriptionText: {
		fontFamily: 'FiraSansRegular',
		fontWeight: '400',
		fontSize: GlobalSizes.s12,

		color: GlobalColors.grayColor700
	},

	coffeeTitleRating: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4
	},

	ratingText: {
		fontFamily: 'FiraSansSemiBold',
		fontWeight: '600',
		fontSize: GlobalSizes.s16
	},


	coffeeDescription: {
		gap: GlobalSizes.s8
	},

	descriptionText: {
		fontFamily: 'FiraSansRegular',
		fontWeight: '400',
		fontSize: GlobalSizes.s14,

		color: GlobalColors.grayColor700
	},


	coffeeCheckboxButtons: {
		gap: GlobalSizes.s8
	},

	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		columnGap: GlobalSizes.s8
	},

	checkbox: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',

		paddingVertical: GlobalSizes.s10,
		paddingHorizontal: GlobalSizes.s16,
		borderRadius: GlobalSizes.s12,
	
		borderWidth: 1,
		borderColor: GlobalColors.grayColor500,

		backgroundColor: GlobalColors.whiteColor
	},

	checkboxCheck: {
		borderColor: GlobalColors.orangeColor700,
		backgroundColor: GlobalColors.orangeColor200
	},

	checkboxText: {
		fontFamily: 'FiraSansRegular',
		fontSize: GlobalSizes.s14,
		fontWeight: '400',

		color: GlobalColors.blackColor400
	},

	checkboxCheckText: {
		color: GlobalColors.orangeColor
	},

	title: {
		fontFamily: 'FiraSansSemiBold',
		fontWeight: '600',
		fontSize: GlobalSizes.s20
	}
});

