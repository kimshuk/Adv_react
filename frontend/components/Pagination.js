import React from "react";
import gql from "graphql-tag";
import { QUERY, Query } from "react-apollo";
import PaginationStyles from "./styles/PaginationStyles";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <PaginationStyles>
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => (
        <p>Hi im the pagination {data.itemsConnection.aggregate.count}!</p>
      )}
    </Query>
  </PaginationStyles>
);

export default Pagination;
