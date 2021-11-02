import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errored: false };
    this.refresh = this.refresh.bind(this);
    this.goBackHome = this.goBackHome.bind(this);
  }

  static getDerivedStateFromError() {
    return { errored: true };
  }

  componentDidMount() {
    this.unregisterHistoryListener = this.props.history.listen(() => {
      this.setState({ errored: false });
    });
  }

  componentWillUnmount() {
    if (this.unregisterHistoryListener) {
      this.unregisterHistoryListener();
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  refresh() {
    window.location.reload();
  }

  goBackHome() {
    this.props.history.push('/');
  }

  render() {
    if (this.state.errored) {
      return (
        <Container>
          <Content>
            <h1>Well that is embarassing...</h1>
            <h2>
              Something went badly wrong, we logged the error to try and fix it
              ASAP.
            </h2>
          </Content>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);

const Container = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin: 0 auto;
`;

const Content = styled.div`
  margin-top: 200px;
`;

