import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Header,
  Container,
  Grid,
  Divider,
  Segment
} from "semantic-ui-react";

const LoginForm = () => (
  <div>
    <Container>
      <Grid centered columns={2}>
        <Grid.Column>
          <Divider hidden />
          <Header size="huge" textAlign="center">
            LoginForm
          </Header>
          <Divider hidden />
          <Segment>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default LoginForm;
