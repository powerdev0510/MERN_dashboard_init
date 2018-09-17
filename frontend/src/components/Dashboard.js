import React, { Component } from "react";
import { Button, Grid, Divider, Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import _ from "lodash";

// Solve how to mangae propley if 2 or more grids be generated
const surveyLists = _.times(1, i => (
  <Grid.Column key={i}>
    <SurveyList />
  </Grid.Column>
));
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Divider hidden />
              <Card fluid>
                <Card.Content>
                  <Card.Header textAlign="center">Welcome Back!</Card.Header>
                  <Divider hidden />
                  <Card.Description>
                    Click the button below and write a survey to receive an
                    interactive user responses.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="/surveys/new">
                    <Button.Group fluid>
                      <Button
                        fluid
                        basic
                        color="violet"
                        animated
                      >
                        <Button.Content visible>
                          <Icon name="plus square" /> Create a Survey
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name="right arrow" />
                        </Button.Content>
                      </Button>
                      {/* <Button fluid basic color="violet" icon="plus" /> */}
                    </Button.Group>
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{surveyLists}</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
