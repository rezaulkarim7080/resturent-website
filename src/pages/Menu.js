import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Link,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { MenuList } from "../data/data";

const Menu = () => {

  const [items, setItems] = useState(MenuList);

  const filterItem = (categItem) => {
    const updatedItems = MenuList.filter((curElem) => {
      return curElem.catagory === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <Layout>

      <h1 align="center" >Menu list</h1>

      <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <Button variant="contained" onClick={() => setItems(MenuList)}>
          All items
        </Button>
        <Button variant="contained" onClick={() => filterItem("pizza")}>
          pizza
        </Button>
        <Button variant="contained" onClick={() => filterItem("barger")}>
          barger
        </Button>
        <Button variant="contained" onClick={() => filterItem("checkenleg")}>
          checkenleg
        </Button>
        <Button variant="contained" onClick={() => filterItem("drinks")}>
          drinks
        </Button>
        <Button variant="contained" onClick={() => filterItem("fries")}>
          fries
        </Button>
        <Button variant="contained" onClick={() => filterItem("rolls")}>
          rolls
        </Button>

      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>


        {items.map((elem) => {

          const { name, image, description, price } = elem;


          return (
            <div key={name}>
              <Card sx={{ maxWidth: "380px", m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ minHeight: "350px" }}
                    component={"img"}
                    src={elem.image}
                    alt={elem.name}
                  />
                  <CardContent>
                    <Typography variant="h4" gutterBottom component={'div'}>
                      {name}
                    </Typography>

                    <Typography variant="body2" >
                      {description}
                    </Typography>
                    <Typography variant="h6" >
                      price: BDT {price}
                    </Typography>
                    <Link href={"/cart"}>
                      <Button color="secondary" variant="contained" sx={{ marginTop: "10px" }}> Add To Cart</Button></Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          )
        })}
      </Box>
    </Layout>
  );
};

export default Menu;
