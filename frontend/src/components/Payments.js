import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="DesignGround"
        description="$5 for 5 credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button basic color="green">
          Add Credits
        </Button>
      </StripeCheckout>
    );
  }
}
export default connect(null, actions)(Payments);

if (process.env.REACT_APP_STRIPE_KEY === undefined){
  console.log('You need to set env variable for stripe key. Create .env.development and production files.');
} else {
  console.log('Your stripe key is:',  process.env.REACT_APP_STRIPE_KEY);
}
