import "./styles.css";
import { products } from "./data";

function ProductList() {
    const productArr = products.map((product) => {
        return <p>{product.name}</p>
      })
          return (
              <div className="product-list-wrapper">
                
              </div>
          )
}

export default ProductList;