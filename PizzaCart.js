module.exports = function() {

	var pizzas = []

	function add(pizzaId) {
		pizzas.push(pizzaId)

	}

	function remove(pizzaId) {

	}

	function list() {
		return pizzas
	}

	return {
		add,
		remove,
		list
	}

}