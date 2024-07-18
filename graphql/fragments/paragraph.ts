import { graphql } from "@/graphql/gql.tada";
import { TextFragment } from "./misc";
// @todo fix use of NodeArticleTeaserFragment
// import { NodeArticleTeaserFragment  } from "./node";

 export const ParagraphTextFragment = graphql(`
  fragment ParagraphTextFragment on ParagraphText {
    __typename
    id
    title
    textRich {
      ...TextFragment
    }
  }
 `, [TextFragment])

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
