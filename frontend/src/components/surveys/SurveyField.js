import React from "react";
import { Input, Header } from "semantic-ui-react";

export default ({ input, label, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div>
      <Header size="medium">{label}</Header>
      <Input fluid {...input} />
      {/* {touched && error} */}
      {/* {meta.error} */}
      <br />
    </div>
  );
};
