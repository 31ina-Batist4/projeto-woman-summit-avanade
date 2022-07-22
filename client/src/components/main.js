import React from "react";
import { Row, Col, Button } from "reactstrap";

export default props => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center assento-cta">
          <p className="looking-for-assento">
            voe alto com dio_. 
            <i className="fas fa-assento assento-slice"></i>
          </p>
          <Col>
          <Button
            className="book-table-btn"
            onClick={_ => {
              props.setPage(1);
            }}
           >
           faça sua reserva
          </Button>
          </Col>
          <Row>
          <Col noGutters className="text-center big-img-container">
         <img
            src={require("../images/aviao.png")}
            alt="cafe"
            className="big-img"
          />
        </Col>
        </Row>
      </Row>
    </div>
  );
};
