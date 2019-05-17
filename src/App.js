import React from 'react';
import MainPage from './ui/pages/main'
import { Container, Row, Col } from "react-bootstrap"
import { Provider } from 'react-redux'
import createReduxStore from "./workflows/reducers"
import rootSaga from "./workflows/sagas"

const store = createReduxStore()
store.runSaga(rootSaga)

function App() {
  return (

    <Container>
      <Row>
        <Col>
          <Provider store={store}>
            <MainPage />
          </Provider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
