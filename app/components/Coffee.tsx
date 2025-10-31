import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Card } from '../model/Card.model';
import { GlobalColors, GlobalSizes } from './variables';
import Button from './UI/Button';
import { router } from 'expo-router';
import StarIcon from '@/assets/icons/StarIcon';

export default function Coffee({ cards }: { cards: Card[] }) {
	const goToDeskriptionCard = (id: number) => {
		router.push(`/(tabs)/catalog/${ id }`);
	};

	return (
		<View style={ styles.coffee }>
			{
				cards.map((card) => (
					<View
						key={ card.id }
						style={ styles.coffeeCard }
					>
						<View style={ styles.coffeeCardHeader }>
							<Pressable onPress={ () => goToDeskriptionCard(card.id) }>
								<Image
									source={{ uri: card.image }}
									style={ styles.coffeeCardImage }
								/>
								<View style={ styles.coffeeCardRating }>
									<StarIcon />
									<Text style={ styles.ratingText }>{ card.rating }</Text>
								</View>
							</Pressable>
						</View>
						<View style={ styles.coffeeCardContent }>
							<View>
								<Text style={ styles.contentTitle }>{ card.name }</Text>
								<Text style={ styles.contentSubTitle }>{ card.subTitle }</Text>
							</View>
							<View style={ styles.coffeeCardFooter }>
								<Text style={ styles.price }>{ card.price }₽</Text>
								<Button isIcon>
									<Text style={ styles.buttonText }>+</Text>
								</Button>
							</View>
						</View>
					</View>
				))
			}
		</View>
	);
}

const styles = StyleSheet.create({
	coffee: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		rowGap: GlobalSizes.s12,
		justifyContent: 'space-between'
	},

	coffeeCard: {
		width: 150,
		borderRadius: GlobalSizes.s16,

		backgroundColor: GlobalColors.whiteColor
	},

	coffeeCardHeader: {
		padding: 4,
		paddingBottom: 0,
		position: 'relative',

		borderRadius: GlobalSizes.s16
	},

	coffeeCardImage: {
		width: '100%',
		height: 132
	},


	coffeeCardContent: {
		padding: GlobalSizes.s12,
		rowGap: GlobalSizes.s12
	},

	contentTitle: {
		fontFamily: 'FiraSansSemiBold',
		fontSize: GlobalSizes.s16,
		fontWeight: '600'
	},

	contentSubTitle: {
		fontFamily: 'FiraSansRegular',
		fontSize: GlobalSizes.s12,
		fontWeight: '400',

		color: GlobalColors.grayColor700
	},


	coffeeCardFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	price: {
		fontFamily: 'FiraSansSemiBold',
		fontSize: GlobalSizes.s18,
		fontWeight: '600',

		color: GlobalColors.greenColor700
	},



	coffeeCardRating: {
		padding: GlobalSizes.s8,
		borderTopLeftRadius: GlobalSizes.s16,
		borderBottomRightRadius: GlobalSizes.s16,

		position: 'absolute',
		top: 0,
		left: 0,

		flexDirection: 'row',
		alignItems: 'center',
		gap: 2,

		backgroundColor: GlobalColors.blackColor200
	},

	ratingText: {
		fontFamily: 'FiraSansSemiBold',
		fontWeight: '600',

		justifyContent: 'center',
		alignItems: 'center',
		gap: 4,

		color: GlobalColors.whiteColor
	},

	buttonText: {
		fontSize: GlobalSizes.s20,
		color: GlobalColors.whiteColor
	}
});