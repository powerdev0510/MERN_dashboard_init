import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import { Button, Card } from "semantic-ui-react";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <Card fluid key={survey._id}>
          <Card.Content>
            <Card.Header>{survey.title}</Card.Header>
            <Card.Meta>
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </Card.Meta>
            <Card.Description>{survey.body}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Yes: {survey.yes}
              </Button>
              <Button basic color="red">
                No: {survey.no}
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
