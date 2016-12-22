var inquirer = require('inquirer');
var mysql = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : 'root',
			  password : 'Khatibi1!2',
			  database : 'bamazon'
			});
			connection.connect(function(err){
				if (err) throw err;
				mainSearch();
			});

var mainSearch = function(){
	inquirer.prompt([
			{
				name: 'mainSearch',
				message: 'Select List of Menu Options',
				type: 'list',
				choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
		
			}
		]).then(function(answers){
			switch (answers.mainSearch){
				case 'View Products for Sale':
			var mysql = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : 'root',
			  password : 'Khatibi1!2',
			  database : 'bamazon'
			});
			connection.connect();
			connection.query('SELECT * FROM products', function(err, rows, fields) {
			  if (err) throw err;
			 
			  console.log('The solution is: ', rows);
			});
			 
			connection.end(function(err){
				if(err) throw err
					mainSearch();
			});
					break;
				case 'View Low Inventory':
					lowInventory();
					break;
				case 'Add to Inventory':
					addInventory();
					break;
				case 'Add New Product':
					addNewInventory();
					break;
			}
		})
}

var lowInventory = function(){
	var mysql = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : 'root',
			  password : 'Khatibi1!2',
			  database : 'bamazon'
			});
			connection.connect();
			connection.query('SELECT * FROM products WHERE stock_quantity <= 10', function(err, rows, fields) {
			  if (err) throw err;
			 
			  console.log('The solution is: ', rows);
			});
			 
			connection.end(function(err){
				if (err) throw err
					mainSearch();
			});
		}
var addInventory = function(){
	var mysql = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : 'root',
			  password : 'Khatibi1!2',
			  database : 'bamazon'
			});
			connection.connect(function(err){
				if(err) throw err
					inquirer.prompt([
							{
								name: 'addInventory',
								message: 'What would you like to add to the inventory?',
								type: 'list',
								choices: ['snuggie','boombox', 'ipod']

							},
							{
								name: 'addInventory2',
								message: 'How many would you like to add?',
								type: 'list',
								choices: ['1','10', '100', '1000']
							}
						]).then(function(answers){
							var addInventory = answers.addInventory;
							var addInventory2 = answers.addInventory2;

							 
							  console.log('couldnt get this to update sorry');
							
						})

						connection.end(function(err){
							if (err) throw err
								mainSearch();
						})
			});
			
}

var addNewInventory = function(){
	var mysql = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : 'root',
			  password : 'Khatibi1!2',
			  database : 'bamazon'
			});

			connection.connect(function(err){
				if (err) throw err
					inquirer.prompt([
							{
								name: 'what_to_add',
								message: 'What is the name of the item youd like to add',

							},
							{
								name: 'what_to_add_quantity',
								message: 'Type in the number of quantity youd like to add'
							}
						]).then(function(answers){
							var what_to_add = answers.what_to_add;
							var what_to_add_quantity = answers.what_to_add_quantity;

							console.log('coudnt get this to work either')
						})
						connection.end(function(err){
								if (err) throw err
								mainSearch();
						})
			})
}










	