import Navbar from '../src/components/Navbar'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <main>
      <h1>Conditional Rendering Workbook</h1>
      <h2>Task 1: Navbar </h2>
      <Navbar user={null} notifications={0} />
       <Navbar user={{ name: 'Maria', role: 'member' }} notifications={0} />
      <Navbar user={{ name: 'Jamal', role: 'member' }} notifications={3} />
      <Navbar user={{ name: 'Priya', role: 'admin' }} notifications={12} />
      {/* render Task 1 test cases here */}
      <h2>Task 2: Product card</h2>
      {/* … and so on */}

      <ProductCard name="Hoodie" price={45} stock={20} />
      <ProductCard name="Headphones" price={60} salePrice={30} stock={3} />
      <ProductCard name="Phone case" price={15} stock={0} />
      <ProductCard  name="Sneakers" price={120} salePrice={89.99} stock={5}/>

    </main>
  )
}
 
export default App
