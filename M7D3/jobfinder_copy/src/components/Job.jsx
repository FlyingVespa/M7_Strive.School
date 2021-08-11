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

class Job extends React.Component {
  render() {
    return (
      <>
        {console.log({ store: this.props })}
        {this.props.data && (
          <Card style={{ width: "18rem" }}>
            <Card.Header>
              <Row>
                <Col>
                  <Card.Text>{this.props.data.title}</Card.Text>
                </Col>
                <Col xs={2}>
                  {this.props.favorites.find(
                    (_data) => _data.id === this.props.data.id
                  ) ? (
                    <StarFill
                      id="starfill"
                      onClick={() =>
                        this.props.removeJobFromFavs(this.props.data)
                      }
                    />
                  ) : (
                    <Star
                      id="star"
                      onClick={() => this.props.addJobToFavs(this.props.data)}
                    />
                  )}
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Col xs={10}>
                <Link to={`/${this.props.data.company_name}`}>
                  {this.props.data.company_name}
                </Link>
              </Col>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Job);
