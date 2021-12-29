import React from "react";
import { Grid, Container, Spinner, Box, Link } from "@material-ui/core";
import Category from "../Categories/Category";
import { Categories } from "../data/products";

function GridViewCategories() {
  return (
    <div>
      <Grid container>
        {Categories.map((category, key) => {
          return (
            <Link to= {`/${category.id}`}>
              <Grid item key={key} xs={12} sm={6} md={4}>
                {console.log(category.title)}
                <Category title={category.title} img={category.img} />
              </Grid>
            </Link>
          );
        })}
      </Grid>
    </div>
  );
}

export default GridViewCategories;
