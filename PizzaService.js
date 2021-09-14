module.exports = function(pizzaList) {

	const pizzas = pizzaList || [];
	var pizzaListOnCart=[];
	var oderslist=[];

	const pizaListAvailable = [
		{
			class: "pizza medium",
			img: "pizza.png",
			sizeType: "Medium Pizza",
			price: 65.00,
			Description: "Medium margeritha pizza with 3 toppings max. 2 or less meat topping. 3 or less other toppings."

		}, {
			class: "pizza small",
			img: "pizza.png",
			sizeType: "Small Pizza",
			price: 35.00,
			Description: "small pizza with 3 toppings 1 meat topping 3 or less other toppings."

		}, {
			class: "pizza large",
			img: "pizza.png",
			sizeType: "Large Pizza",
			price: 85.00,
			Description: "large margeritha pizza with 3 toppings max. 2 or less meat topping. 3 or less other toppings."

		}
	]

	function listAll() {
		
	}

	function getPizaListAvailable(){
		return pizaListAvailable;
	}

	function OderList() {
		var amount = TotalAmount()
		if(amount != 0.00){
			oderslist.push({
				orderId : oderslist.length + 1,
				status : "Payment due",
				amount : amount,
				buttton: "Pay"
			})
			pizzaListOnCart = []
		}
		return oderslist
	}

	

	function OrderPizzaSizeType(PizzaSizeType){
		var PizzaSelected = pizaListAvailable.filter((pizza) => pizza.sizeType ==PizzaSizeType)
		var ShoppingList = pizzaListOnCart.filter(pizza => pizza.sizeType ==PizzaSizeType)
		if(ShoppingList.length == 0){
			pizzaListOnCart.push({
				sizeType: PizzaSelected[0].sizeType,
				quantiy: 1,
				amount: PizzaSelected[0].price
			})
		} else {
			ShoppingList[0].quantiy++
			ShoppingList[0].amount += PizzaSelected[0].price
		}
	}

	function GetOrderPizzaSizeType() {
		return pizzaListOnCart
	}

	function TotalAmount() {
		var total = 0
		pizzaListOnCart.filter(pizza => total += pizza.amount)
		return total.toFixed(2)
	}
	function deletePizza(pizzaId){
		

	}

	return {
		TotalAmount,
		OderList,
		deletePizza,
		listAll,
		getPizaListAvailable,
		OrderPizzaSizeType,
		GetOrderPizzaSizeType
	}

}