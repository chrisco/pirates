exports.up = function(knex, Promise) {
	return knex.schema.createTable('pirate', function(table) {
		table.increments();
		table.string('name');
		table.string('poison');
		table.string('accessory');
		table.text('image_url');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('pirate');
};
