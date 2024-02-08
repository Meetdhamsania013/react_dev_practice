import React from "react";
import Card from "react-bootstrap/Card";
import { CardContainerStyled } from "./CardCotainerStyled";

const CardCotainer = (props) => {
  const { className, headerLeft, headerRight, content } = props;
  return (
    <CardContainerStyled className={className}>
      <Card>
        <div className="cardHeader">
          {headerLeft && <Card.Title>{headerLeft}</Card.Title>}
          {headerRight && <div className="headerRight">{headerRight}</div>}
        </div>
        {content && <Card.Body>{content}</Card.Body>}
      </Card>
    </CardContainerStyled>
  );
};

export default CardCotainer;
