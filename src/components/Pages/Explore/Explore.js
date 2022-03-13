import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useGetProducts from "../../../hooks/usegetProducts";
import Navbar from "../../Shared/Navbar/Navbar";
import Product from "../Home/Products/Product/Product";

const Explore = () => {
  const { products } = useGetProducts();
  return (
    <Box>
      <Navbar />
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", my: 1 }}
        >
          Explore Our Products
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Grid item xs={4} sm={4} md={4} key={product._id}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Explore;
