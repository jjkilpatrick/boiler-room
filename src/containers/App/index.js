import React, { Component } from 'react';

// Apollo
import { 
  ApolloClient, 
  ApolloProvider, 
  createNetworkInterface 
} from 'react-apollo';

// Components
import Container from '../../components/Container';
import H1 from '../../components/H1';
import Header from '../../components/Header';
import Lead from '../../components/Lead';
import RecordingsList from '../../components/RecordingsList';

import EasterEgg from 'react-easter-egg';
import stroke from '../../images/speaker-stroke.gif';

// Using bootstrap for quick styling (shame)
import 'bootstrap/dist/css/bootstrap.css';

const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  networkInterface: networkInterface,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <Header>
            <Container>
              <H1 dark>Welcome to Boiler Room</H1>
              <Lead dark>A quick code test. This code test includes: React, styled-components, Apollo, GraphQL</Lead>
            </Container>
          </Header>
          <RecordingsList />
          <EasterEgg>
            <img src={stroke} alt="Boiler Room" />
          </EasterEgg>          
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
