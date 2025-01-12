// pages/index.tsx
import HeroSection from "../app/components/hero";  // Import your hero section if needed
import ProductList from "../app/components/productList";  // List of products or featured products


const Home = () => {
  return (
    <div>
      <>
      
      <HeroSection />  {/* Optional hero section for welcome message */}
      <h2 className="text-center mt-10 text-2xl font-semibold">Featured Products</h2>
      <ProductList />   {/* Display featured products or categories */}
      </>
    </div>
  );
};

export default Home;
