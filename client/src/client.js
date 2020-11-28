import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
// const link = new HttpLink({
// 	uri: 'http://localhost:4000/',
// });

const link = new HttpLink({
	uri: 'https://rickandmortyapi.com/graphql',
});

const client = new ApolloClient({
	cache,
	link,
});

const query = gql`
	# short hand of a query
	{
		characters {
			results {
				id
				name
			}
		}
	}
`;

client.query({ query }).then((result) => console.log(result));

export default client;
