import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
import { DatabaseUserStyled } from "./DatabaseUserStyled";
import { ReactSVG } from "react-svg";
import searchIcon from "../../assets/images/search_icon.svg";

const AppointmentTable = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the products based on the search term
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase()) || 
      product.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

   // Search Row count
   const rowCount = filteredProducts.length;

  return (
    <DatabaseUserStyled>
      <h3>Database User Details</h3>
      <div className="tableContent">
        <div className="tableFilter">
          <div className="tableFilterHeader">{rowCount} Current Users</div>
          <div className="tableFilterSearch">
            <Form.Control
              type="text"
              placeholder="Search Patient"
              className="filterSearchInput"
              value={searchTerm}
              onChange={handleSearch}
            />
            <ReactSVG
              src={searchIcon}
              alt="icon"
              title="icon"
              className="searchIcon"
            />
          </div>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.rating}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </DatabaseUserStyled>
  );
};

export default AppointmentTable;
