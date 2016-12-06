var products = [

"Brooklyn T-Shirt White",
"Brooklyn T-Shirt Black",
"Apple Watch",
"Android Phone"
]

var prices = [10,10,199,159];

var productsText = "";
var productsElement = document.getElementById("product-list");



//--------------------------------------------------------------------
var customerName = "Michael Kwok";

var totalPrice;



var customerElement = document.getElementById("customer-name");

customerElement.textContent = customerName;



totalPrice = prices[0] + prices[1] +prices [2] +prices[3];
var discount = 0.25 * totalPrice;

var afterDiscount = totalPrice - discount;

var afterDiscountElement = document.getElementById("price");
afterDiscountElement.textContent = afterDiscount;

//var totalPriceElement = document.getElementById("price");




productsText += "<li class= 'list-group-item'><span class='badge'>$" + prices[0]  +"</span>" + products[0]+"</li>";

productsText += "<li class= 'list-group-item'><span class='badge'>$" + prices[1]  +"</span>" + products[1]+"</li>";

productsText += "<li class= 'list-group-item'><span class='badge'>$" + prices[2]  +"</span>" + products[2]+"</li>";

productsText += "<li class= 'list-group-item'><span class='badge'>$" + prices[3]  +"</span>" + products[3]+"</li>";



productsElement.innerHTML = productsText;



//totalPriceElement.textContent = totalPrice;

var h = new Date().getHours();
var time = "";
timeElement = document.getElementById("time");
if (h < 12) {
	time = "Good Morning,";
}
else if (h<18) {
	time = "Good Afternoon,";
}
else{
	time = "Good Evening,";
}

timeElement.textContent = time;


