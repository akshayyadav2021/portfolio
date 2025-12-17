import  { useEffect, useState } from "react";
import Header from "./Header";

// ---------- Functional Component ----------
const PracticeComponent = () => {
  // let / const
  let discount = 100;
  type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
  };

  // state
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Promise + async/await
  const fetchProducts = async () => {
    const promise = new Promise<Product[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Laptop", price: 50000, inStock: true },
          { id: 2, name: "Mobile", price: 20000, inStock: false },
          { id: 3, name: "Tablet", price: 30000, inStock: true }
        ]);
      }, 1000);
    });

    const data = await promise;
    setProducts(data);
    setLoading(false);
  };

  // lifecycle
  useEffect(() => {
    fetchProducts();
  }, []);

  // filter()
  const availableProducts = products.filter(
    (product) => product.inStock
  );

  // reduce()
  const totalPrice = availableProducts.reduce(
    (sum, { price }) => sum + price,
    0
  );

  // conditional statement
  const finalPrice =
    totalPrice > 40000 ? totalPrice - discount : totalPrice;

  // spread operator
  const updatedProducts = [...availableProducts];

  // rest operator
  const showNames = (...items: Product[]) =>
    items.map((item) => item.name).join(", ");

  // scope example
  const message = (() => {
    const localMsg = "Products Loaded"; // block scope
    return localMsg;
  })();

  return (
    <div>
      <Header title="React Practice Component" />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{message}</p>

          <ul>
            {updatedProducts.map(({ id, name, price }) => (
              <li key={id}>
                {`${name} costs ₹${price}`} {/* template literal */}
              </li>
            ))}
          </ul>

          <p>Total Price: ₹{totalPrice}</p>
          <p>Final Price: ₹{finalPrice}</p>

          <p>
            Available Products:{" "}
            {showNames(...updatedProducts)}
          </p>
        </>
      )}
    </div>
  );
};

export default PracticeComponent;
