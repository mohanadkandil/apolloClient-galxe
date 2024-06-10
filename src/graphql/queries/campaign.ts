import { graphql } from "@/graphql";
import { gql } from "urql";

// export const GET_CAMPAIGN_QUERY = gql`
//   query {
//   campaign(id: "GCqBzUtW7w") {
//     numberID
//     name
//     description
//     thumbnail
//     numNFTMinted
//     startTime
//     endTime
//     formula
//     claimedTimes(address: "0xBb3A7bc36b5baFa7691Ccb708EbF299B6d521b05")
//   }
// }
// `;

export const CampaignQuery = graphql(`
  query Campaign ($id: ID!) {
    campaign(id: $id) {
      numberID
       name
       description
       thumbnail
       numNFTMinted
       startTime
       endTime
       formula
    }
  }
`, []);