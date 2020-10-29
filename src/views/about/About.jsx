import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

import './about.scss';

import aboutImage from '../../images/about-image.jpg';
import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import avatar from '../../images/avatars.svg';

export default function About() {
  return (
    <>
      <Container fluid="lg" className="about-image-container">
        <Row>
          <div
            className="bg-image mb-50 pt-46 pb-50"
            style={{ backgroundImage: `url(${aboutImage})` }}
          >
            <h1 className="pb-30">
              About-us
              <span>Who we are</span>
            </h1>
          </div>
        </Row>
      </Container>

      <Container className="about-detail-container">
        <Row>
          <Col md={6}>
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium itaque nobis nam eligendi modi esse quibusdam nesciunt
              provident ipsam consequuntur!. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab atque perferendis magnam aut
              deserunt ducimus autem commodi eaque ex nobis.
            </p>
          </Col>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              libero necessitatibus voluptatem eligendi quo! Nemo, eius
              exercitationem. Doloribus, provident beatae!. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dicta, minima atque!
              Aspernatur illum nihil expedita error in impedit odio velit.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="bg-light  pt-60 pb-50">
        <Container>
          <Row>
            <Col lg={5}>
              <h2 className="mb-14">Who we are</h2>

              <p className="lead text-primary mb-30">
                Pellentesque odio nisi, euismod pharetra a ultricies <br />
                in diam. Sed arcu. Cras consequat{' '}
              </p>

              <p className="mb-20">
                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Suspendisse
                potenti. Sed egestas, ante et vulputate volutpat, uctus metus
                libero eu augue.{' '}
              </p>

              <button type="button" className="news-btn py-8 px-15">
                <span>View our news</span>
                <i className="fas fa-arrow-right ml-10" />
              </button>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <div className="about-images pt-40">
                <img className="about-img-front" src={img1} alt="" />
                <img className="about-img-back" src={img2} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-white">
        <Container className="pt-60 pb-60">
          <Row>
            <div className="about__carousel__h1 mb-30">
              <h1>What customer say about us</h1>
            </div>

            <Carousel
              nextIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon about__carousel__icon"
                />
              }
              prevIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon about__carousel__icon"
                />
              }
            >
              <Carousel.Item>
                <div className="about__carousel__content">
                  <div className="about__carousel__img mt-10 mb-21">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <p className="about__carousel__p">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolore pariatur facere animi nihil quidem sit, sed, alias ea
                    minima voluptatem incidunt velit cum. Rerum rem eos
                    consequuntur neque ea porro.
                  </p>
                  <div className="about__carousel__text">
                    Jason Bourne
                    <span className="about__carousel__text__span">
                      Customer
                    </span>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="about__carousel__content">
                  <div className="about__carousel__img mt-10 mb-21">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <p className="about__carousel__p">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolore pariatur facere animi nihil quidem sit, sed, alias ea
                    minima voluptatem incidunt velit cum. Rerum rem eos
                    consequuntur neque ea porro.
                  </p>
                  <div className="about__carousel__text">
                    Jason Bourne
                    <span className="about__carousel__text__span">
                      Customer
                    </span>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    </>
  );
}
