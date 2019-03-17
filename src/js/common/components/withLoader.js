import React, { PureComponent } from "react";

const withLoader = WrappedComponent => {
  return class Loader extends PureComponent {
    render() {
      // eslint-disable-next-line react/prop-types
      return this.props.loading ? (
        <div>Loading...</div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default withLoader;
