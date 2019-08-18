// this is the MODEL
let model = [{
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
 		octopus.catMenu();
		document.getElementById('picture').addEventListener('click', function() {
			octopus.clickOnCatImg();
		});
 	},
 	
 	// this function loads the cat menu
 	catMenu: function() {
 		document.getElementById('catMenu').innerHTML = "";
 		for (let cat = 0; cat < model.length; cat++) {
			view.menu(model[cat].name);
			document.getElementById(model[cat].name).addEventListener('click', function() {
				octopus.clickOnCatName(model[cat]);
			});
		}
 	},
 	
 	// this function handlesclicks on names
	clickOnCatName: function(catObj) {
		octopus.addCount(catObj);
		view.render(catObj.pic, catObj.counter, catObj.name);
	},
	
	// this function gets the cat object index of the current cat being displayed.
	getCurrentCat: function() {
		let text = document.getElementById('picture').innerHTML;
		let split1 = text.split("alt=");
		let split2 = split1[1].split('"');
		let catName = split2[1];
		for (let cat = 0; cat < model.length; cat++){
			if (catName === model[cat].name) {
				return cat;
			} 
		};
	},
	
	// this function handles clicks on cat pics
	clickOnCatImg: function() {
		let cat = octopus.getCurrentCat();
		octopus.clickOnCatName(model[cat]); 
	},
 	
 	// this function increments the counter
 	addCount: function (cat) {
 		cat.counter += 1;
 	},
 	
 		// this function updates the cat element via Admin panel
	submitBtnAction: function() {
		let newName = document.getElementById('name').value;
		let newPic = document.getElementById('url').value;
		let newCounter = document.getElementById('clicks').value;
		let cat = octopus.getCurrentCat();
		if (newName !== "") {
			model[cat].name = newName;
			};
		if (newPic !== "") {
			model[cat].pic = newPic;
			};
		if (newCounter !== "") {
			model[cat].counter = parseInt(newCounter);
			};
		octopus.catMenu();
		view.render(model[cat].pic, model[cat].counter, model[cat].name]);
	},
	
	clearAdminFields: function() {
		document.getElementById('name').value = "";
		document.getElementById('url').value = "";
		document.getElementById('clicks').value = "";
	}
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
		const admin = document.createElement('button');
		admin.id = 'adminBtn';
		admin.innerText = 'Admin';
		document.body.appendChild(admin);
		document.getElementById('adminBtn').addEventListener('click', function() {
			if (document.getElementById('adminPanel').classList.contains('hidden')) {
			view.openAdminPanel();};
		});
		this.renderAdmin();

/*	*/	
	},
	
	renderAdmin: function() {
		let adminPanel = document.createElement('div');
		adminPanel.id = 'adminPanel';
		document.body.appendChild(adminPanel);
		let form = document.createElement('form');
		form.id = 'adminForm';
		document.getElementById('adminPanel').appendChild(form);
		let catName = document.createElement('div');
		catName.id = 'formCatName';
		catName.innerHTML = '<label for="name">Name:</label><input type="text" id="name" name="cat_name">';
		document.getElementById('adminForm').appendChild(catName);
		let catURL = document.createElement('div');
		catURL.id = 'formCatURL';
		catURL.innerHTML = '<label for="name">URL:</label><input type="text" id="url" name="cat_url">';
		document.getElementById('adminForm').appendChild(catURL);
		let catClicks = document.createElement('div');
		catClicks.id = 'formCatClicks';
		catClicks.innerHTML = '<label for="name">Clicks:</label><input type="text" id="clicks" name="cat_clicks">';
		document.getElementById('adminForm').appendChild(catClicks);
		// add update button
		let submitBtn = document.createElement('div');
		submitBtn.id = 'submitBtn';
		submitBtn.innerHTML = '<button type="button">Update</button>' 
		submitBtn.classList.add('button');
		document.getElementById('adminForm').appendChild(submitBtn);
		document.getElementById('submitBtn').addEventListener('click', function() {
			octopus.submitBtnAction();
			}
		);
		//add cancel button
		let cancelBtn = document.createElement('div');
		cancelBtn.id = 'cancelBtn';
		cancelBtn.innerHTML = '<button type="button">Cancel</button>' 
		cancelBtn.classList.add('button');
		document.getElementById('adminForm').appendChild(cancelBtn);
		document.getElementById('cancelBtn').addEventListener('click', function() {
			view.openAdminPanel();
			octopus.clearAdminFields();
			}
		);
		adminPanel.classList.toggle('hidden');
	},
	
	// this function opens or closes the Admin panel
	openAdminPanel: function() {
		document.getElementById('adminPanel').classList.toggle('hidden');
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
