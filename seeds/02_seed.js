exports.seed = function(knex, Promise) {
	return knex('pirate').del() .then(function() {   
		return Promise.all([     // Inserts seed entries
			    knex('pirate').insert({     
				name: 'Anne Bonney',
				     poison: 'Rum',
				     accessory: 'hot temper',
				     image_url: 'https://s-media-cache-ak0.pinimg.com/564x/c7/43/a3/c743a3c32c691cd6ca6f3a84db786f58.jpg'    
			}),     knex('pirate').insert({     
				name: 'One Eyed Willie',
				     poison: 'Whiskey',
				     accessory: 'eye patch',
				     image_url: 'http://cultfilmclub.com/wp-content/uploads/2013/04/1-One-Eyed-Willie-Goonies.jpg'    
			}),     knex('pirate').insert({     
				name: 'Blackbeard',
				     poison: 'Rum',
				     accessory: 'peg leg',
				     image_url: 'http://www.nchistoricsites.org/bath/blackbeard1.jpg'    
			})   
		]);  
	});
};
