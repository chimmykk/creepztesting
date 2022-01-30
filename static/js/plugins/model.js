import axios from 'axios';
import faunadb, {
    query as q
} from 'faunadb';
import {
    toChecksumAddress
} from "./web3";
import * as Sentry from "@sentry/react";
import {
    Config
} from '../config';
import {
    gql
} from "@apollo/client";


let client = new faunadb.Client({
    secret: process.env.REACT_APP_FAUNA_KEY,
    domain: 'db.us.fauna.com',
    port: 443,
    scheme: 'https',
})

export const getSignature = async (address) => {
    try {
        address = toChecksumAddress(address);
        const result = await client.query(
            q.Call("get_whitelist_signature", address)
        );
        let signature = result ? .signature;
        console.log(`signature: ${signature}`);
        return signature;
    } catch (err) {
        try {
            Sentry.captureException(err);
        } catch (err) {
            console.error(err);
        }
        console.error(err);
    }
}


export const generateStakingSignature = async (tokenIds) => {
    try {
        const response = await axios({
            url: `${Config.apiLink}/signature`,
            method: 'post',
            data: {
                creepzIDs: tokenIds
            }
        });
        return response.data;
    } catch (err) {
        try {
            Sentry.captureException(err);
        } catch (err) {
            console.error(err);
        }
        console.error(err);
    }
}

export const getTokensYields = async (tokenIds) => {
    try {
        const response = await axios({
            url: `${Config.apiLink}/yield`,
            method: 'post',
            data: {
                creepzIDs: tokenIds
            }
        })
        console.log(response)

        return response.data;
    } catch (err) {
        try {
            Sentry.captureException(err);
        } catch (err) {
            console.error(err);
        }
        console.error(err);
    }
}

export const refreshArmsMeta = () => {
    axios({
        url: `${Config.apiLink}/refresh`,
        method: 'post',
    })
}

export const TOKENS_QUERY = gql `
query Tokens($ownerId: String!) {
  owners(where: {id: $ownerId}) {
    id
    creeps {
      id
    }
    shapeshifters {
      id
    }
    armouries {
      id
    }
  }
}
`;