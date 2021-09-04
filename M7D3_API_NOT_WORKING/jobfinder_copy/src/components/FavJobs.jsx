import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Component } from "react";
import { removeJobFromFavsAction } from "../redux/actions";
import { Trash2Fill } from "react-bootstrap-icons";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  removeFromList: (index) => {
    dispatch(removeJobFromFavsAction(index));
  },
});

class FavList extends Component {
  render() {
    return (
      <>
        <Row>
          <Col sm={12}>
            <ul style={{ listStyle: "none" }}>
              {this.props.data.map((job, i) => (
                <li key={i} className="my-4">
                  <Button
                    variant="danger"
                    onClick={() => removeJobFromFavsAction(i)}
                  >
                    <Trash2Fill />
                  </Button>

                  {this.props.data.title}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FavList));
