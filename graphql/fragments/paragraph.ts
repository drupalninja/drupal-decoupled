import { graphql } from "@/graphql/gql.tada";
import { TextSummaryFragment } from "./misc";
// @todo fix use of NodeArticleTeaserFragment
// import { NodeArticleTeaserFragment  } from "./node";

 export const ParagraphTextFragment = graphql(`
  fragment ParagraphTextFragment on ParagraphText {
    __typename
    id
    title
    body {
      ...TextSummaryFragment
    }
  }
 `, [TextSummaryFragment])

export const ParagraphUnionFragment = graphql(`
  fragment ParagraphUnionFragment on ParagraphUnion {
    ... on ParagraphInterface {
      __typename
      id
    }
    ...ParagraphTextFragment
  }
`, [
  ParagraphTextFragment
])
