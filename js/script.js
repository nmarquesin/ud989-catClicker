// this is the MODEL
const model = [{
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
	name: 'Mary',
	pic: 'img/cat5.jpeg',
	counter: 0
	}];

// this is the octopus
const octopus = {
 	// this function loads the initial screen
 	init: function () {
 		view.init();
 		for (let cat = 0; cat < model.length; cat++) {
			view.menu(model[cat].name);
			document.getElementById(model[cat].name).addEventListener('click', function() {
				octopus.clickOnCatName(model[cat]);
			});
		}
		document.getElementById('picture').addEventListener('click', function() {
			octopus.clickOnCatImg();
		});
 	},
 	
 	// this function handlesclicks on names
	clickOnCatName: function(catObj) {
		octopus.addCount(catObj);
		view.render(catObj.pic, catObj.counter, catObj.name);
	},
	
	// this function handles clicks on cat pics
	clickOnCatImg: function() {
		//do something
		let text = document.getElementById('picture').innerHTML;
		let split1 = text.split("alt=");
		let split2 = split1[1].split('"');
		let catName = split2[1];
		for (let cat = 0; cat < model.length; cat++){
			if (catName === model[cat].name) {
				octopus.clickOnCatName(model[cat]);} 
		};
	},
 	
 	// this function increments the counter
 	addCount: function (cat) {
 		cat.counter += 1;
 	},
};

// this is the view
const view = {
	//this loads the page parts to screen
	init: function() {
		let menu = document.createElement('ul');
		menu.id = 'catMenu';
		let pic = document.createElement('div');
		pic.id = 'catPic';
		let counter = document.createElement('div');
		counter.id = 'counter';
		let photo = document.createElement('figure');
		photo.id = 'picture';
		document.body.appendChild(menu);
		document.body.appendChild(pic);
		document.getElementById('catPic').appendChild(counter);
		document.getElementById('catPic').appendChild(photo);
	},
	
	// this function takes a string and puts it in the menu
	menu: function(name) {
		let item = document.createElement('li');
		item.innerHTML = name;
		item.id = name.toString();
		document.getElementById('catMenu').appendChild(item);
	},
	
	// this function renders the image area
	render: function(picPath, clicks, name) {
		document.getElementById('picture').innerHTML = '<img src="'+ picPath +'" alt="' + name + '" />';
		document.getElementById('counter').innerText = name + ' has been clicked ' + clicks + (clicks > 1 ? ' times.' : ' time.');
	}
};


octopus.init();
