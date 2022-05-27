import {ApolloClient, gql, HttpLink, InMemoryCache} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL } from '../constants/ApiConstant';
const link = new HttpLink({
    uri: `${baseURL}`,
});
const authLink = setContext(async (_, {headers}) => {
    let data = await AsyncStorage.getItem('token');
    let token = JSON.parse(data);
    return {
        headers: {
            ...headers,
            Authorization: token ? `${token}` : '',
        },
    };
});
const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
};
export const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache(),
    defaultOptions,
});
