import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Card } from "react-bootstrap";
import { MdChevronRight } from "react-icons/md";
import "../../assets/css/components/layouts/cardsHome.css";

function VacancieBanner() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <Row>
        <Col lg={12}>
          <Card
            className="card-main"
            style={{ borderRadius: "20px" }}
            onClick={() => {}}
          >
            <Card.Img
              src="https://res.cloudinary.com/a3e-media/image/upload/v1687451942/del%20home/vancantes_u1llct.jpg"
              alt="Banner"
              style={{ borderRadius: "20px", objectFit: "cover" }}
              height={170}
              width="100%"
            />
            <Card.ImgOverlay>
              <div className="card-overlay">
                <Card.Title
                  className="text-white"
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginLeft: "20px",
                  }}
                >
                  Vacantes
                </Card.Title>
                <MdChevronRight
                  size={100}
                  style={{
                    color: "#fff",
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}
                />
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default VacancieBanner;