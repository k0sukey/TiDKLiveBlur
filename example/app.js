var TiDKLiveBlur = require('be.k0suke.tidkliveblur');
Ti.API.info("module is => " + TiDKLiveBlur);

var win = Ti.UI.createWindow();

var rows = [];
for (var i = 0; i < 100; i++) {
	rows.push(Ti.UI.createTableViewRow({
		height: 44,
		backgroundColor: 'transparent',
		color: '#fff',
		title: 'row' + i
	}));
}

var tableView = Ti.UI.createTableView({
	backgroundBlurImage: 'modules/be.k0suke.tidkliveblur/bg1.jpg',
	glassColor: '#fff', // optional, default #fff
	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
	data: rows
});
win.add(tableView);

/*
var listView = Ti.UI.createListView({
	backgroundBlurImage: 'modules/be.k0suke.tidkliveblur/bg1.jpg',
	glassColor: '#000' // optional, default #fff
});
var sections = [];

var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits'});
var fruitDataSet = [
    {properties: { title: 'Apple'}},
    {properties: { title: 'Banana'}},
    {properties: { title: 'Cherry'}},
    {properties: { title: 'Grape'}},
    {properties: { title: 'Kiwi'}},
    {properties: { title: 'Lime'}},
    {properties: { title: 'Mango'}},
    {properties: { title: 'Melon'}},
    {properties: { title: 'Orange'}},
    {properties: { title: 'Peach'}},
    {properties: { title: 'Pear'}},
    {properties: { title: 'Pineapple'}},
    {properties: { title: 'Strawberry'}},
];
fruitSection.setItems(fruitDataSet);
sections.push(fruitSection);

var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables'});
var vegDataSet = [
    {properties: { title: 'Carrots'}},
    {properties: { title: 'Potatoes'}},
];
vegSection.setItems(vegDataSet);
sections.push(vegSection);

listView.sections = sections;
win.add(listView);

var fishSection = Ti.UI.createListSection({ headerTitle: 'Fish'});
var fishDataSet = [
    {properties: { title: 'Cod'}},
    {properties: { title: 'Haddock'}},
];
fishSection.setItems(fishDataSet);
listView.appendSection(fishSection);
*/

win.open();