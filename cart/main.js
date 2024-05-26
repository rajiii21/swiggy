var btnCart=document.querySelector("#cart-icon");
var cart=document.querySelector(".cart");
var close=document.querySelector("#close");

btnCart.addEventListener('click',()=>{
	cart.classList.add("cart-active")
})

close.addEventListener('click',()=>{
	cart.classList.remove("cart-active")
})


document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
	loadContent()
}

function loadContent(){
	// remove food items in cart
	btnRemove=document.querySelectorAll("#remove");
	
	btnRemove.forEach((btn)=>{
		btn.addEventListener('click',cartRemove);
	})
	
	
	
	// quantity inpunt change
	qtyElement=document.querySelectorAll(".cart-quantity");
	
	qtyElement.forEach((input)=>{
		input.addEventListener('change',changeQty);
	})
	
	
	
	// add to cart
	addtoCart=document.querySelectorAll("#add-cart");
	
	addtoCart.forEach((btn)=>{
		btn.addEventListener('click',addCart);
	})
	
	
	
	
}

// remove cart
function cartRemove(){
	if(confirm("Are you sure to remove ")){
	this.parentElement.remove(".cart-box");
	}
}


// change quantity
function changeQty(){
	if(isNaN(this.value) || (this.value<1)){
		this.value=1;
	}
}



// add  cart
function addCart(){
	// console.log("click")
	
	var food=this.parentElement.parentElement;
    var title=food.querySelector(".name").innerHTML;
	var rs=food.querySelector(".food-rs").innerHTML;
	var imgSrc=food.querySelector("#addimg").src;
	
	// console.log(title,rs,imgSrc);
	
	
	 // cart clik add food items
	var newcontent=createCartProduct(title,rs,imgSrc);
	var Element=document.createElement("div");
	Element.innerHTML=newcontent;
	
	// console.log(Element);
	
	var cartcontent=document.querySelector(".cart-content");
	cartcontent.append(Element);
	// console.log(cartcontent)
	loadContent()
}


function createCartProduct(title,rs,imgSrc){
	return    	`<div class="cart-box">
        <img src="${imgSrc}" class="cart-img">
			<div class="detail-box">
				<div class="food-title">${title}</div>
										
				<div class="price-box">
					<div class="cart-price">${rs}</div>
					<div class="cart-amt">${rs}</div>
			    </div>
									
			    <input type="number" value="1" class="cart-quantity">
		    </div>
									
		    <i class="bi bi-trash-fill" id="remove"></i>
	</div>`;
}



