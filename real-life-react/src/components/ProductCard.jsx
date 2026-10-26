import styles from './card_module.css'
function ProductCard({ name, price, salePrice, stock }) {
  const finalPrice = salePrice ?? price   // use salePrice if it exists, otherwise price
    let color
  if (stock <=0){
    color='low'
}
else if (stock>0 && stock<=5){
    color='med'
}
else{
    color = 'high'
}

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <h3 className={`stock ${color}`}> Stock: {stock} </h3>
      {price-salePrice>0?<p> on sale</p>:price}
      {/* your conditional parts go here */}
    </div>
  )
}
 
export default ProductCard
