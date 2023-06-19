import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import { getAllBanners } from "../../utils/bannersFunctions";
import SplashScreen from "../utils/SplashScreen";
import CustomButton from "../../components/shared/CustomButton";
import { MdCancel } from "react-icons/md";

function BannerMain() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [bannerList, setBannerList] = useState([
    {
      _id: "",
      title: "",
      description: "",
      image: "",
      link: "",
      status: "",
    },
  ]);

  useEffect(() => {
    setIsLoading(true);
    const getBanners = async () => {
      const data = await getAllBanners();
      setBannerList(data.banners);
      setIsLoading(false);
    };
    getBanners();
  }, []);

  if (isLoading) {
    return <SplashScreen isLoading={isLoading} />;
  }

  return (
    <div className="container-fluid">
      <Row className="mb-4">
        <Col xs={12} md={10}>
          <h1>Banners</h1>
        </Col>
        <Col xs={12} md={2} className="d-flex justify-content-end">
          <CustomButton
            text="Crear banner"
            color="primary"
            size="large"
            onClick={() => {
              navigate("/create-banner");
            }}
          />
        </Col>
      </Row>
      <Col>
        {bannerList.length !== 0 ? (
          <Row>
            {bannerList.map((banner) => (
              <Row key={banner._id}>
                <Col lg={9}>
                  <Card style={{ marginBottom: "20px" }}>
                    <div
                      className="align-items-center d-flex"
                      style={{ maxHeight: "200px", overflow: "hidden" }}
                    >
                      <Card.Img variant="top" src={banner.image} />
                    </div>
                    <Card.Body>
                      <Card.Title
                        className="text-center"
                        style={{ fontWeight: "bold", fontSize: "2rem" }}
                      >
                        {banner.title}
                      </Card.Title>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "1.2rem" }}
                      >
                        {banner.description}
                      </Card.Text>
                      <Card.Text
                        className="text-center"
                        style={{ fontSize: "1.2rem" }}
                      >
                        {banner.link}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  lg={3}
                  className="d-flex align-items-center justify-content-center mt-3"
                >
                  <Row
                    className="justify-content-between"
                    style={{ marginLeft: "10px" }}
                  >
                    <Col
                      className="text-center"
                      style={{ marginBottom: "10px" }}
                    >
                      <CustomButton
                        text="Editar"
                        color="primary"
                        size="large"
                        onClick={() => {}}
                      />
                    </Col>
                    <Col className="text-center">
                      <CustomButton
                        text="Eliminar"
                        color="danger"
                        size="large"
                        onClick={() => {}}
                      />
                    </Col>
                  </Row>
                  <Row className="justify-content-between">
                    <Col
                      className="text-center"
                      style={{ marginBottom: "10px" }}
                    >
                      <CustomButton
                        text="Desactivar"
                        color="secondary"
                        size="large"
                        onClick={() => {}}
                      />
                    </Col>
                    <Col className="text-center">
                      <CustomButton
                        text="Preview"
                        color="primary"
                        size="large"
                        onClick={() => {}}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Row>
        ) : (
          <Container>
            <Row>
              <Col xs={12} className="d-flex justify-content-center">
                <Col>
                  <Row>
                    <MdCancel
                      className="no-services-icon"
                      size={150}
                      opacity={0.5}
                    />
                  </Row>
                  <Row>
                    <h3 className="text-center" style={{ opacity: 0.5 }}>
                      No hay banners registrados
                    </h3>
                  </Row>
                </Col>
              </Col>
            </Row>
          </Container>
        )}
      </Col>
    </div>
  );
}

export default BannerMain;
