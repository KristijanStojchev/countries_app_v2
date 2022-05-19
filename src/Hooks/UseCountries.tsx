import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query countries {
    countries {
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

export const useCountries = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  return {
    error,
    data,
    loading,
  };
};
