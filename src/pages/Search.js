import React from "react";
import { IonContent, IonPage, IonSearchbar } from "@ionic/react";
import firebase from "../firebase";
import ProductItem from "../components/Product/ProductItem";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";

const Search = () => {
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [filter, setFilter] = React.useState("");

  React.useEffect(() => {
    getInitialProducts();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [filter]);

  function getInitialProducts() {
    firebase.db
      .collection("products")
      .get()
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      });
  }

  function handleChange(evt) {
    if (evt.key === "Enter") {
      setFilter(evt.target.value);
    }
  }

  function handleSearch() {
    const query = filter.toLowerCase();
    const matchedProducts = products.filter((product) => {
      return (
        product.description.toLowerCase().includes(query) ||
        product.url.toLowerCase().includes(query) ||
        product.postedBy.name.toLowerCase().includes(query)
      );
    });
    setFilteredProducts(matchedProducts);
  }

  return (
    <IonPage>
      <SmallHeader title="Search" />
      <IonContent>
        <LargeHeader title="Search" />
        <IonSearchbar
          placeholder="Search"
          spellcheck="false"
          type="url"
          value={filter}
          onKeyPress={handleChange}
          animated
        />
        {filteredProducts.map((filteredProduct, index) => (
          <ProductItem
            key={filteredProduct.id}
            showCount={false}
            product={filteredProduct}
            index={index}
            url={`/product/${filteredProduct.id}`}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Search;
