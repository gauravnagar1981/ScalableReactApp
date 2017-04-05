import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import styles from './style';
// Import actions here!!

class NavigationMenu extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.getMenu();
  }

  render() {
    console.log(this.props.navigationMenuItems);
    return (
      <div style={styles.root}>
        {this.props.navigationMenuItems && this.props.navigationMenuItems.length > 0 &&
        <ul style={styles.menuRoot}>
          {this.props.navigationMenuItems.map((item,index) => {
              return <li key={index} style={styles.menuItems}>{item}</li>
            }
          )}
        </ul>}
      </div>
    );
  }
}

NavigationMenu.propTypes = {
  //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    navigationMenuItems: state.navigationMenuItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);
