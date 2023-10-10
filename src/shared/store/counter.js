import { defineStore } from 'pinia';

const useCounterStore = defineStore({
	id: 'counter',
	state: () => ({
		counter: 1
	}),
	getters: {
		doubleCount: (state) => {
			return (param) => state.counter == param
		}
	},
	actions: {
		replaceNumber(newValue = 20){
			this.counter = newValue;
		}
	}
})

export default useCounterStore;