var mysql = require('mysql');
var inquirer = require('inquirer');
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
  if (rows.length > 0){
  	inquirer.prompt([
		{
			name:'question_1',
			message: 'Select the item that you wish to buy by typing its ID'
		}, 
		{
			name: 'question_2',
			message: 'How many units do you wish buy?'
		}
	]).then(function(answers){
		var item = answers.question_1;
		var quantity = answers.question_2;
		var mysql = require('mysql');
		var connection = mysql.createConnection({
	  		host     : 'localhost',
	  		user     : 'root',
	  		password : 'Khatibi1!2',
	  		database : 'bamazon'
		});
		connection.connect();
		connection.query('SELECT * FROM products WHERE id= ?',[item], function(err, rows, fields) {
	  		if (err) throw err;
	  		if(item > quantity){
	  			var updatedItem = item--
	  			console.log('yay we have this');
	  			var mysql = require('mysql');
				var connection = mysql.createConnection({
			  		host     : 'localhost',
			  		user     : 'root',
			  		password : 'Khatibi1!2',
			  		database : 'bamazon'
				});
				connection.query('UPDATE products SET stock_quantity= ? WHERE id=?',[updatedItem, item], function(err, rows, fields) {
		  		if (err) throw err;
		 
		  		console.log(updatedItem, item);
				});
					connection.end();

	  		} else {
	  			console.log('sorry out of stock');
	  			connection.end();
	  		}

		});
		


	})
  }
});
 





