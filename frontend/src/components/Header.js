import React, { Component } from "react";
import { Container, Button, Dropdown, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login With Google</a>;
      default:
        return [
          <Payments key="1" />,
          <Button key="2" basic color="orange" style={{ margin: "0 10px " }}>
            Credits: {this.props.auth.credits}
          </Button>,
          <Button key="3" basic color="blue">
            <a href="/api/logout">Logout</a>
          </Button>
        ];
    }
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu size="large">
        <Container>
          <Menu.Item header>
            <Link to={this.props.auth ? "/surveys" : "/"}>DesignGround</Link>
          </Menu.Item>
          <Menu.Item
            name="aboutUs"
            active={activeItem === "aboutUs"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="jobs"
            active={activeItem === "jobs"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="locations"
            active={activeItem === "locations"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>{this.renderContent()}</Menu.Item>
            <Menu.Item>
              <Link to={"/login"}>Login</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={"/signup"}>Signup</Link>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
