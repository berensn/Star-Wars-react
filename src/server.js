import {createApolloFetch } from 'apollo-fetch';

class GraphServ extends Component {
    uri = '';
    fetch = createApolloFetch({uri});

}

export default GraphServ;