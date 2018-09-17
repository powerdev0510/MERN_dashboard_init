import React from "react";
import { Message, Icon } from "semantic-ui-react";

export default ({ meta: { error, touched } }) => {
  // console.log(meta);
  if (!touched) {
    return null;
  } else if (!error) {
    return null;
  }
  return (
    <Message color='red' compact>
      <Message.Content>
        <Icon name="warning circle" size='small'/>
        {touched && error}
      </Message.Content>
    </Message>
  );
};
