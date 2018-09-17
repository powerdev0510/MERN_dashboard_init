import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Button,
  Divider,
  Segment,
  Form,
  Grid,
  Header
} from "semantic-ui-react";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, field => {
    return (
      <div key={field.name}>
        <Header size="medium">{field.label}</Header>
        <Segment size="tiny" fluid="true">
          {formValues[field.name]}
        </Segment>
        <br />
      </div>
    );
  });

  return (
    <div>
      <Grid centered>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Divider hidden />
          <Segment padded="very" color="teal">
            <h5>Please confirm your entries</h5>
            <Form>
              {reviewFields}
              <Divider />
              <Button
                negative
                floated="left"
                onClick={onCancel}
                icon="arrow left"
                content="Go Back"
                type="button"
              />
              <Button
                primary
                floated="right"
                content="Submit"
                icon="check"
                onClick={() => submitSurvey(formValues, history)}
              />
              <Divider hidden />
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
