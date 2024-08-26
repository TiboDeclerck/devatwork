import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Form from "../components/Form";

export const routes = [
  {
    path: "categories",
    title: { singular: "Category", plural: "Categories" },
  },
  {
    path: "suppliers",
    title: { singular: "Supplier", plural: "Suppliers" },
  },
  {
    path: "products",
    title: { singular: "Product", plural: "Products" },
  },
];

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path }) => (
            <React.Fragment key={path}>
              <Route path={path} element={<Grid />} />
              <Route path={`${path}/new`} element={<Form />} />
              <Route path={`${path}/:id`} element={<Form />} />
              <Route path={`${path}/:id/edit`} element={<Form />} />
            </React.Fragment>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
