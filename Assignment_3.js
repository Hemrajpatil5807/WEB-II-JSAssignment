let quantity=prompt("Enter the quantity")
quantity = Number.parseInt(quantity)
let price=0
price=quantity * 100

if(price>1000)
{
  discount=price/100*10
  console.log("You get a 10% discount")
  price=price-discount
  console.log('Total price = %d',price)
}
else{
  console.log('You dont get discount')
  console.log('Total price= %d',price)
}