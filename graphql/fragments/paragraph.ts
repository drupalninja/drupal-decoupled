import { graphql } from "@/graphql/gql.tada";
import { TextSummaryFragment, DateTimeFragment, LanguageFragment, LinkFragment } from "./misc";
import { MediaUnionFragment } from "./media";
// @todo fix use of NodeArticleTeaserFragment
// import { NodeArticleTeaserFragment  } from "./node";

export const ParagraphMediaFragment = graphql(`fragment ParagraphMediaFragment on ParagraphMedia {
  id
  created {
    ...DateTimeFragment
  }
  langcode {
    ...LanguageFragment
  }
  media {
    ...MediaUnionFragment
  }
  status
  title
}`,
  [
    DateTimeFragment,
    LanguageFragment,
    MediaUnionFragment,
  ]
)

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
    ...ParagraphMediaFragment
  }
`, [
  ParagraphTextFragment,
  ParagraphMediaFragment,  
])
