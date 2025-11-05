import axios from 'axios';
import { create } from 'zustand';
import { PREFIX } from '../model/API';
import { Card } from '../model/Card.model';

interface CoffeeState {
    cardsCoffee: Card[];
    isLoading: boolean;
    getAllCardsCoffee: () => Promise<void>;
    filterCardsCoffee: (text: string, type: string) => Promise<void>;
}

const useCoffee = create<CoffeeState>((set) => ({
	cardsCoffee: [],
	isLoading: false,

	getAllCardsCoffee: async () => {
		try {
			set({
				cardsCoffee: [],
				isLoading: true
			});

			await new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});

			const { data } = await axios.get<Card[]>(`${ PREFIX }/`);

			if (!data) {
				set({
					cardsCoffee: [],
					isLoading: false
				});

				return;
			}

			set({
				cardsCoffee: data,
				isLoading: false
			});
		} catch (error) {
			console.log(error);
		}
	},
	filterCardsCoffee: async (text: string, type: string) => {
		try {
			set({
				cardsCoffee: [],
				isLoading: true
			});

			await new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, 2000);
			});

			const { data } = type === 'all' ? await axios.get<Card[]>(`${ PREFIX }/?text=${ text }`) : await axios.get<Card[]>(`${ PREFIX }/?type=${ type }&text=${ text }`);

			if (!data) {
				set({
					cardsCoffee: [],
					isLoading: false
				});

				return;
			}

			set({
				cardsCoffee: data,
				isLoading: false
			});
		} catch (error) {
			console.log(error);
		}
	}
}));

export default useCoffee;