import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StarFill, Star } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { addJobToFavsAction, removeJobFromFavsAction } from "../actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  addJobToFavs: (job) => dispatch(addJobToFavsAction(job)),
  removeJobFromFavs: (job) => dispatch(removeJobFromFavsAction(job)),
});

function Job({ data }) {
  return (
    <>
      {this.props.data && (
        <Card style={{ width: "18rem" }}>
          <Card.Header></Card.Header>
          <Card.Body>
            <Row
              className="mx-0 mt-3 p-3"
              style={{ border: "1px solid #00000033", borderRadius: 4 }}
            >
              <Col xs={3}>
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
              </Col>
              <Col xs={6}>
                <Link to={{ pathname: data.url }} target="_blank">
                  {data.title}
                </Link>
              </Col>
              <Col xs={3}>
                {this.props.favorites.find((_data) => _data.id === data.id) ? (
                  <StarFill
                    onClick={() => this.props.removeJobFromFavs(data)}
                  />
                ) : (
                  <Star onClick={() => this.props.addJobToFavs(data)} />
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Job);
