const fiszka = document.createElement('div');
document.body.appendChild(fiszka);
const firstA = document.createElement('div');
fiszka.appendChild(firstA);
firstA.classList.add('slowo');
const secondA = document.createElement('div');
fiszka.appendChild(secondA);
secondA.classList.add('zdanie');

// const start = document.createElement('h1');
// fiszka.appendChild(start);
// start.classList.add('start');
// start.innerHTML = 'Dotknij aby zadząć';

let flaga = true;

let licznik = 0;
// fiszka.innerHTML = "Kliknij aby rozpocząć";

// firstA.innerHTML = 'Słowo';
// secondA.innerHTML = 'Zdanie po polsku Zdanie po polsku Zdanie po polsku';

let tablica = [
	{
		word: { pl: 'szczypiorek', en: 'chives' },
		zdanie: {
			pl: 'Ten szczypiorek jest zbyt suchy.',
			en: 'These chives are too dry.'
		}
	},
	{
		word: { pl: 'ogromny', en: 'enormous' },
		zdanie: {
			pl: 'Ogromna suma pieniędzy',
			en: 'An anormous amount of money.'
		}
	},
	{
		word: { pl: 'chemia', en: 'chemistry' },
		zdanie: {
			pl: 'Lubię chemię.',
			en: 'I like chemistry.'
		}
	},
	{
		word: { pl: 'jabłko', en: 'an appel' },
		zdanie: {
			pl: 'Czy jadasz jabłka.',
			en: "No, i don't"
		}
	},
	{
		word: { pl: 'uczyć się', en: 'to learn' },
		zdanie: {
			pl: 'Lubie uczyć się angielskiego',
			en: 'I like learning English'
		}
	}
];

// console.log(Math.floor(Math.random() * tablica.length));

// const random = () => {
// 	return Math.floor(Math.random() * tablica.length);
// };

// firstA.innerHTML = tablica[1].word;
// secondA.innerHTML = tablica[1].zdanie;

// Zdarzenie na klikanie
const random = () => {
	return Math.floor(Math.random() * tablica.length);
};

let index = 0;
let lang = 'pl';

const pierwszaFiszka = () => {
	firstA.innerHTML = tablica[index].word[lang];
	secondA.innerHTML = tablica[index].zdanie[lang];

	// Pierwszy poprawny zapis
	// if (lang === 'pl') {
	// 	lang = 'en';
	// } else if (lang === 'en') {
	// 	lang = 'pl';
	// 	index = random();
	// }

	// Drugi, krótszy, także poprawny zapis
	index = lang === 'en' ? random() : index;
	lang = lang === 'pl' ? 'en' : 'pl';

	// Niepoprzwny

	// if (flaga) {
	// 	const index = random();
	// 	console.log(index);
	// 	firstA.innerHTML = tablica[index].word.pl;
	// 	secondA.innerHTML = tablica[index].zdanie.pl;
	// 	licznik = 1;
	// 	flaga = false;
	// } else {
	// 	const index = random();
	// 	console.log(index);
	// 	firstA.innerHTML = tablica[index].word.en;
	// 	secondA.innerHTML = tablica[index].zdanie.en;
	// 	licznik = 0;
	// 	flaga = true;
	// }
};

// pierwszaFiszka();

document.body.addEventListener('click', pierwszaFiszka);
