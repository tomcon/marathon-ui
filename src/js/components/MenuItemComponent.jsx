import React from "react/addons";
import Util from "../helpers/Util";

var MenuItemComponent = React.createClass({
  "displayName": "MenuItemComponent",

  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    selected: React.PropTypes.bool,
    value: React.PropTypes.string.isRequired
  },

  render: function () {
    var {
      children,
      className,
      id = "menu-item-" + Util.getUniqueId(),
      name,
      value,
      selected
    } = this.props;

    return (
      <li role="menu-item" className={className}>
        <input id={id} type="radio" name={name} value={value}
          defaultChecked={selected} />
        <label htmlFor={id}>
          {children}
        </label>
      </li>
    );
  }
});

export default MenuItemComponent;
