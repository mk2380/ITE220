var shop = {

customerName: "Michael Kwok",
totalPrice: 0,
products: [
"Brooklyn T-Shirt White",
"Brooklyn T-Shirt Black",
"Apple Watch",
"Android Phone"
],

 prices: [10,10,199,159],

 
 displayCustomerName: function(){
    var customerElement = document.getElementById("customer-name");
    customerElement.textContent = this.customerName;
},


 displayProductList: function(){

     var productsText = "";
     var productsElement = document.getElementById("product-list");

for(var i = 0;i< this.products.length; i++){
	productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[i] +"</span>" +this.products[i]+"</li>";
}
    

    productsElement.innerHTML = productsText;
 },


  calculateTotalPrice: function(){

    return (this.prices[0] + this.prices[1] + this.prices[2]+this.prices[3])*0.75;
  },

  displayTotalPrice: function(){
  
   this.totalPrice = this.calculateTotalPrice();
   var totalPriceElement = document.getElementById("price");
   totalPriceElement.textContent = this.totalPrice;

  }

 };

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();

