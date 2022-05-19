import { useQuery, gql } from "@apollo/client";

export const GET_COUNTRY = gql`
  query countries($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      currency
      phone
      native
      emoji
      emojiU
      continent {
        name
      }
      languages {
        name
      }
      states {
        name
      }
    }
  }
`;

export const useCountry = (modalContent: any) => {
  const { error, loading, data } = useQuery(GET_COUNTRY, {
    variables: { code: modalContent },
    skip: !modalContent,
  });

  return {
    error,
    data,
    loading,
  };
};
