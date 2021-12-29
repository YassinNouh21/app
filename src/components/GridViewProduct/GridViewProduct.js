import React from "react";
import { Grid, Container, Spinner } from "@material-ui/core";
import ProductCard from "../ProductCard";
import {products} from '../data/products';
import {Demo} from '../data/products';

const GridViewProduct = () => {
  // if (!products.length) return <Spinner />;
  return (
    <div>
      <Container id="products">
        <Grid container spacing={4}>
          {Demo.map((product,key) => {
            return (
              <Grid key={key} item xs={12} sm={6} md={4}>
                <ProductCard
                  title={product.title}
                  price={product.price}
                  img={product.img}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default GridViewProduct;
