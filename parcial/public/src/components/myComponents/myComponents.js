import { productsData } from './public/src/data/data.js';

class tienda extends HTMLElement {
	cloths = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		productsData.forEach((element) => {
			
			const cloth = this.ownerDocument.createElement('productsData');
						
			cloth.setAttribute('title', element.title);
			cloth.setAttribute('description', element.description);
			cloth.setAttribute('value', element.value);
			cloth.setAttribute('inStock', element.inStock);
			
			onButtonClicked()

			this.cloth.push(cloth);
		});
	}
	connectedCallback() {
		this.render();
	}
		render() {
			return cloths
		}
}
export default tienda