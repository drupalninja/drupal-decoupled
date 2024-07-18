import { graphql } from "@/graphql/gql.tada";
import { TextSummaryFragment, DateTimeFragment, LanguageFragment, LinkFragment } from "./misc";
// @todo fix use of NodeArticleTeaserFragment
// import { NodeArticleTeaserFragment  } from "./node";

export const ParagraphTextFragment = graphql(`fragment ParagraphTextFragment on ParagraphText {
  id
  body {
    ...TextSummaryFragment
  }
  created {
    ...DateTimeFragment
  }
  langcode {
    ...LanguageFragment
  }
  link {
    ...LinkFragment
  }
  status
  title
}`,
  [
    TextSummaryFragment,
    DateTimeFragment,
    LanguageFragment,
    LinkFragment,
  ]
)

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
