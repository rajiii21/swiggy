https://www.canva.com/design/DAGFsfcGCKc/MgA_ApHoBJoDfkGwtXjh1Q/edit?referrer=resumes-landing-page
$('.brand').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 4
		}
	}
})



// // document.write("rajii ZOHO IN veru zoon..")

var foods = [
	{
		id: 1,
		name: "Mutton Briyani",
		cuisine: "South Indian, Shake",
		imgUrl: "https://b.zmtcdn.com/data/pictures/4/19024794/71acbc1b1192f7aec3a670c7234e4b9a_o2_featured_v2.jpg?output-format=webp",
		ratings: "4.4",
		preparation: 45,
		amount: 250,
		unites: "for two",
		items: "Non-veg",
		delivery: "moretime",
	},
	{
		id: 2,
		name: "Poori",
		cuisine: "South Indian, Biryani",
		imgUrl: "https://b.zmtcdn.com/data/pictures/0/20291030/62ee86aa96e2e7a43eb120caa2c7eedf_o2_featured_v2.jpg",
		ratings: "3.0",
		preparation: 45,
		amount: 200,
		unites: "for one",
		items: "Pure-veg",
		delivery: "moretime",
	},
	{
		id: 3,
		name: "Chicken-thanthuri",
		cuisine: "South Indian, Fast Food, Chin",
		imgUrl: "https://b.zmtcdn.com/data/pictures/2/18974402/3c6e2f70b6aaeafe7092293151308dbd_o2_featured_v2.jpg",
		ratings: "4.0",
		preparation: 21,
		amount: 100,
		unites: "for one",
		items: "Non-veg",
		delivery: "moretime",

	},
	{
		id: 4,
		name: "Choclate ice",
		cuisine: "Ice Cream, Beverages, Desserts",
		imgUrl: "https://b.zmtcdn.com/data/pictures/0/19056370/7f5e092d8c5793ef724dc3239ff773e4_o2_featured_v2.jpg",
		ratings: "4.2",
		preparation: 28,
		amount: 100,
		unites: "for one",
		items: "Pure-veg",
		delivery: "moretime",

	},
	{
		id: 5,
		name: "Parotta",
		cuisine: "South Indian, North Indian, chin",
		imgUrl: "https://b.zmtcdn.com/data/pictures/8/18988798/e709835d7b5ed3e216f046d3466ff6a0_o2_featured_v2.jpg",
		ratings: "3.5",
		preparation: 15,
		amount: 150,
		unites: "for one",
		items: "Non-veg",
		delivery: "moretime",

	},
	{
		id: 6,
		name: "ice-cake",
		cuisine: "Bakery, Burger, Desserts",
		imgUrl: "https://b.zmtcdn.com/data/pictures/2/18979552/68447743b9a2b32bea9cd1a36cfe9fa7_o2_featured_v2.jpg",
		ratings: "4.4",
		preparation: 15,
		amount: 300,
		unites: "for two",
		items: "Pure-veg",
		delivery: "fast",

	},
	{
		id: 7,
		name: "Cafe MC2",
		cuisine: "Pizza, Fast Food, Street Food",
		imgUrl: "https://b.zmtcdn.com/data/pictures/1/20392071/921f356b34a6cd152e473b7085e25ab5_o2_featured_v2.jpg",
		ratings: "2.5",
		preparation: 35,
		amount: 300,
		unites: "for one",
		items: "Pure-veg",
		delivery: "fast",

	},
	{
		id: 8,
		name: "Cafe MC2",
		cuisine: "Pizza, Fast Food, Street Food",
		imgUrl: "https://b.zmtcdn.com/data/pictures/1/20392071/921f356b34a6cd152e473b7085e25ab5_o2_featured_v2.jpg",
		ratings: "2.5",
		preparation: 35,
		amount: 300,
		unites: "for one",
		items: "Pure-veg",
		delivery: "fast",

	},
	{
		id: 9,
		name: "Chicken Briyani",
		cuisine: "South Indian, North Indian",
		imgUrl: "https://b.zmtcdn.com/data/pictures/2/19378292/c8c304d7dba2a4940af39e9024837387_o2_featured_v2.jpg",
		ratings: "4.3",
		preparation: 45,
		amount: 200,
		unites: "for one",
		items: "Non-veg",
		delivery: "moretime",

	},
	{
		id: 10,
		name: "Blaack Forest",
		cuisine: "Sandwich, Pizza, Coffee",
		imgUrl: "https://b.zmtcdn.com/data/pictures/0/18974960/84615432eca82f61fe528e9824cc7c78_o2_featured_v2.jpg",
		ratings: "2.5",
		preparation: 25,
		amount: 150,
		unites: "for one",
		items: "Pure-veg",
		delivery: "fast",


	},
	{
		id: 11,
		name: "Vadapav",
		cuisine: "Street Food",
		imgUrl: "https://b.zmtcdn.com/data/pictures/8/20435928/794278353026eeaa8cc023851826c1be_o2_featured_v2.jpg",
		ratings: "3.3",
		preparation: 27,
		amount: 100,
		unites: "for one",
		items: "Pure-veg",
		delivery: "fast",

	},
	{
		id: 12,
		name: "Veg-Roll",
		cuisine: "Rolls, Wraps, Fast Food",
		imgUrl: "https://b.zmtcdn.com/data/pictures/8/20329838/0ee4fb1310c4a938836f11f84beafa76_o2_featured_v2.jpg",
		ratings: "3.8",
		preparation: 35,
		amount: 250,
		unites: "for two",
		delivery: "moretime",

	},
	{
		id: 13,
		name: "Arun icecream",
		cuisine: "Ice Cream, Desserts",
		imgUrl: "https://b.zmtcdn.com/data/pictures/chains/7/19794367/7d657ca42e991cf9d498a78370fa8e00_o2_featured_v2.jpg",
		ratings: "4.6",
		preparation: 35,
		amount: 300,
		unites: "for one",
		items: "Pure-veg",
		delivery: "fast",
	},
	{
		id: 14,
		name: "Chettinadu Briyani",
		cuisine: "Fast Food, Biryani",
		imgUrl: "https://b.zmtcdn.com/data/pictures/5/20194735/56ed24c2a43a10069e50784c6b4955ae_o2_featured_v2.jpg",
		ratings: "4.9",
		preparation: 35,
		amount: 400,
		unites: "for tne",
		items: "Non-veg",
		delivery: "moretime",

	},
	{
		id: 15,
		name: "Retvelwet",
		cuisine: "North Indian, chin",
		imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8f9BCT3N-aAZSo7dcsIXG59U1fD-Kdpuf2w&usqp=CAU",
		ratings: "4.7",
		preparation: 35,
		amount: 300,
		unites: "for one",
		items: "Pure-veg",
		delivery: "moretime",
	},
];

let open = document.querySelector("#opencart");
let closecart = document.querySelector(".close")

open.addEventListener("click", function () {
	document.querySelector("body").classList.toggle("active")
})
closecart.addEventListener("click", function () {
	document.querySelector("body").classList.remove("active")
})


var container = document.querySelector(".container");
var row = document.createElement("div");
row.classList.add("row");
container.append(row)


foodItems(foods)

function foodItems(obj) {
	obj.forEach(function (e) {
		console.log(e);

		// col	

		var col = document.createElement("div");
		col.classList.add("col");
		row.appendChild(col)

		// card

		var card = document.createElement("div");
		card.classList.add("col-card");
		col.appendChild(card)

		// image

		var img = document.createElement("img");
		img.src = e.imgUrl
		img.classList.add("cardimg")
		col - card.appendChild(img)



		var heading = document.createElement("h2");
		heading.innerHTML = e.name
		heading.classList.add("title")
		col - card.appendChild(heading)

		var para = document.createElement("p");
		para.innerHTML = e.cuisine
		para.classList.add("cuisine")
		col - card.appendChild(para)

		var innerrow = document.createElement("div");
		innerrow.classList.add("inner-row");
		col - card.appendChild(innerrow);


		var parahead = document.createElement("div");
		parahead.classList.add("para-head")
		innerrow.appendChild(parahead)


		var para2 = document.createElement("p");
		para2.innerHTML = e.preparation + "min"
		parahead.appendChild(para2)


		var para3 = document.createElement("p");
		para3.innerHTML = "Rs." + e.amount
		para3.classList.add("amount")
		parahead.appendChild(para3)

		var rating = document.createElement("div");
		rating.classList.add("ratings");
		innerrow.appendChild(rating)

		var ratingIcon = document.createElement("div");
		ratingIcon.classList.add("rating-icon");
		rating.appendChild(ratingIcon)

		var icon = document.createElement("i");
		icon.classList.add("bi");
		icon.classList.add("bi-star-fill");
		ratingIcon.appendChild(icon)

		var paraaa = document.createElement("p");
		paraaa.innerHTML = e.ratings
		ratingIcon.appendChild(paraaa)

		var add = document.createElement("div")
		add.classList.add("addtocart")
		rating.appendChild(add)

		var btn = document.createElement("button")
		btn.classList.add("bi")
		btn.classList.add("bi-cart-dash")
		btn.innerHTML = "Add"
		btn.addEventListener("click", addtocartproduct)
		add.appendChild(btn)



		// rating

		sortedRating()

		function sortedRating() {

			if (e.ratings >= 4.0) {
				ratingIcon.classList.add("green")

			}
			else if (e.ratings >= 3.0) {
				ratingIcon.classList.add("orange")
			}
			else if (e.ratings <= 3.0) {
				ratingIcon.classList.add("red")
			}
		}

	})



}

let arr = [];


// addtocart logic

function addtocartproduct() {
	let items = this.parentElement.parentElement.parentElement.parentElement;
	let img = items.querySelector(".cardimg").src;
	let title = items.querySelector(".title").innerHTML;
	let amount = items.querySelector(".amount").innerHTML;
	console.log(img, title, amount)

	let newvalues = {
		title, img, amount
	}
	console.log(newvalues)
	if (arr.find((e) => e.title == newvalues.title)) {
		alert("already added")
		return;
	}

	else {
		arr.push(newvalues)
	}


	newvaluesarr(img, title, amount)
	let cart = document.querySelector("#cart");
	let a = arr.length;
	cart.innerHTML = a
	console.log(arr);
	

}

// add new items

function newvaluesarr(img, title, amount) {

	console.log(arr);
		const row = document.querySelector(".addtocart-row");
		var div = document.createElement("div");
		row.appendChild(div)

		div.innerHTML = `
				<div class="add-col">
					<div class="add-card">
						<img src=${img}>
						<div class="title-detail">
							<h4 class="foodname">${title}</h4>
							<p class="amounts">${amount}</p>
							<div class="qty-detail">
								<p class="increase">+</p>
								<h5 class="value">0</h5>
								<p class="decrease">-</p>
							</div>
						</div>
						<p class="amount">${amount}</p>
					</div>
				</div>
			`;
		var card = div.querySelector(".add-card")
		let itag = document.createElement("i")
		itag.classList.add("bi")
		itag.classList.add("bi-trash3")
		itag.addEventListener("click",removefun)

		card.appendChild(itag)
console.log(div);
	
	    quentity(div)
		totalamountdetail(div)
}


    function quentity(div){
		console.log(div);
		let value=div.querySelector(".value");
		let increase=div.querySelector(".increase");
		let decrease=div.querySelector(".decrease");
		console.log(value,increase,decrease);
		let a=0;
		increase.addEventListener("click", function(){
			console.log("+");
			a++;
			value.innerHTML=a;
		})
	
		decrease.addEventListener("click", ()=>{
			console.log("-");
			if(a<1){
				a=0
			}
			else{
				a--
			}
			value.innerHTML=a;
		})
	}

// remove cart items

function removefun(){
	let parent=this.parentElement.parentElement.querySelector(".foodname").innerHTML;
	console.log(parent);
	arr=arr.filter((e)=>{
		return e.title!=parent
	})
	let cart = document.querySelector("#cart");
	let a = arr.length;
	cart.innerHTML = a
	this.parentElement.remove()
 
}


// change quentity

function input(){
	console.log("qty");
		if(isNaN(this.value) || this.value<0){
		this.value=1
	}
}


function totalamountdetail(div){
	console.log(div);
	quentity(div)
	let cart=div.querySelectorAll(".add-col");
	cart.forEach((e)=>{
    console.log(e);
    let amount=e.querySelector(".amounts").innerHTML;
	let price=Number(amount.replace("Rs.",""));
	console.log(price);
	let value=e.querySelector(".value").innerHTML;
	console.log(price,value);
	let total=0;
	total+=(price*value);
    let totalprice=document.querySelector(".amount");
	totalprice.innerHTML=total;
console.log(total);
	})
}



// default sec

function defaultSorter() {

	let colsRemove = document.querySelectorAll(".col");
	colsRemove.forEach(function (e) {
		e.remove()
	})

	foodItems(foods)
}

// veg filter

function veg() {

	var veg = foods.filter(function (e) {

		return e.items == "Pure-veg"

	})



	let colremove = document.querySelectorAll(".col");
	colremove.forEach(function (e) {

		e.remove()
	})
	foodItems(veg)
}


// fast delivery food filter

function delivery() {

	var fast = foods.filter(function (e) {

		return e.delivery === "fast"

	})



	let colremove = document.querySelectorAll(".col");
	colremove.forEach(function (e) {

		e.remove()
	})
	foodItems(fast)
}

// rating sorted

function ratingSorter() {
	var fil = foods.filter((e, i) => {
		return e.ratings >= 4.0
	})


	let colRemove = document.querySelectorAll(".col");
	colRemove.forEach(function (e) {
		e.remove()

	})
	foodItems(fil)


}


// amount filter high

function priceupto() {

	var rubes = foods.filter(function (e) {

		return e.amount >= 250

	})

	let colums = document.querySelectorAll(".col");
	colums.forEach(function (e) {

		e.remove()
	})
	foodItems(rubes)
}


// amount filter low


function pricelessthan() {

	var paisa = foods.filter(function (e) {

		return e.amount <= 200
	})

	let colum = document.querySelectorAll(".col");
	colum.forEach(function (e) {

		e.remove()
	})
	foodItems(paisa)
}