import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "./CardList";
import { Col, Row } from "react-bootstrap";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const ProductsArr = await axios.get("https://fakestoreapi.com/products");
      setProducts(ProductsArr.data);
    };
    getProducts();
  }, []);

  return (
    <Row md={2} xs={1} lg={3}>
      {products.map((item) => (
        <Col>
          <CardList key={item.id} {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Cart;
