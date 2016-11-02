import createMemoryStore from 'dojo-stores/createMemoryStore';

export default createMemoryStore<any>({
	data: [
		{
			id: 'navbar',
			classes: [ 'navbar' ]
		},
		{
			id: 'container',
			children: []
		},
		{
			id: 'cardDetails',
			children: [
				'cardDetailsNavbar',
				'cardDetailsJumbotron'
			]
		},
		{
			id: 'cardDetailsNavbar',
			children: []
		},
		{
			id: 'cardDetailsJumbotron',
			classes: [ 'jumbotron', 'cardDetailsJumbotron' ]
		},
		{
			id: 'cards',
			classes: [ 'cards' ],
			children: [
				'cardsJumbotron',
				'cardsList'
			]
		},
		{
			id: 'cardsList',
			classes: [ 'cardsList' ]
		},
		{
			id: 'cardsJumbotron',
			classes: [ 'jumbotron', 'cardsJumbotron' ]
		},
		{
			id: 'home',
			children: [ 'homeJumbotron' ]
		},
		{
			id: 'homeJumbotron',
			classes: [ 'jumbotron', 'homeJumbotron' ],
			children: [ 'homePageLogo' ]
		},
		{
			id: 'homePageLogo',
			src: './images/mm_logo.png'
		}
	]
});