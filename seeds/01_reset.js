exports.seed = function(knex, Promise) {
	return knex('pirate').del();
};
