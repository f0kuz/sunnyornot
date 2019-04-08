import React, { PureComponent } from "react";
import styled from "styled-components";
import { Circular } from "styled-loaders-react";

import { style_variables } from "../constants/style_variables";

const LoaderHolder = styled.div`
  height: 283px;
  grid-column: 1/5;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${style_variables.rwd.mobile._768}) {
    grid-column: 1/-1;
  }
`;

const withLoader = WrappedComponent => {
  return class Loader extends PureComponent {
    render() {
      // eslint-disable-next-line react/prop-types
      return this.props.loading ? (
        <LoaderHolder data-testid="CompLoader">
          <Circular color="#E4E1F4" />
        </LoaderHolder>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default withLoader;
