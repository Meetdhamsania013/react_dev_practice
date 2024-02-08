import React from "react";
import { APIUserStyled } from "./APIUserStyled";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import DatabaseUser from "../../components/DatabaseUser/DatabaseUser";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const APIUser = () => {
  return (
    <>
      <MenuSidebar />
      <APIUserStyled>
        <Row>
          <Col sm={12} xs={12} md={12} lg={12}>
            <DatabaseUser />
          </Col>
        </Row>
      </APIUserStyled>
    </>
  );
};

export default APIUser;
