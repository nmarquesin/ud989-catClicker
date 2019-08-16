let elem = document.getElementById('cat');
let menu = document.getElementById('menu');
let prevCat;
const counterText1 = 'You have clicked ';
const counterText2 = ' time';


//this is the MODEL
const cats = [{
	name: 'Bob',
	pic: 'img/cat.png',
	counter: 0
	},
	{
	name: 'Charlie',
	pic: 'img/cat2.jpeg',
	counter: 0
	},
	{
	name: 'George',
	pic: 'img/cat3.jpeg',
	counter: 0
	},
	{
	name: 'Bill',
	pic: 'img/cat4.jpeg',
	counter: 0
	}, {
	name: 'Mary & John',
	pic: 'img/cat5.jpeg',
	counter: 0
	}];

// const octopus = {};

// const view = {};

function putCatsOnScreen() {
	// this function adds cats to page and hides them.

	let catList = document.createElement('ul');
	catList.className = 'catMenu';
	menu.appendChild(catList);
	for (let cat = 0; cat < cats.length; cat++) {
		let oneCat = document.createElement('div');
		oneCat.innerHTML = '<p>'+cats[cat].name+'</p>'+'<img src="'+cats[cat].pic+'" alt="A cat" />';
		oneCat.id = cats[cat].name;
		elem.appendChild(oneCat);
		let catCounter = document.createElement('p');

		oneCat.appendChild(catCounter);
		oneCat.classList.toggle('hidden');
		let catItem = document.createElement('li');
		catItem.innerHTML = '<li>'+cats[cat].name+'</li>';
		catItem.addEventListener('click', function() {clickOnCatImg(cats[cat], oneCat, catCounter);});
		catList.appendChild(catItem);
	}


}

function clickOnCatImg(catObj, catNode, counterNode) {
	// this function handles what should happen when a cat is clicked.
	if (prevCat) {prevCat.classList.toggle('hidden');}
	catObj.counter += 1;
	let catCounter = document.createElement('p');

	//let counterElem = document.getElementById('counter');
	let plural;
	if (catObj.counter === 1) {plural = counterText2;}
	else {plural = counterText2 + 's';}
	counterNode.innerHTML = '';
	counterNode.innerHTML = '<p>'+counterText1+catObj.name+' '+catObj.counter+plural+'</p>';
	catNode.classList.toggle('hidden');
	prevCat = catNode;
}


window.addEventListener('load', function () {
	putCatsOnScreen();
	model.init();
}, false);
