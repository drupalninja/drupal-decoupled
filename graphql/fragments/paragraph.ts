import { graphql } from "@/graphql/gql.tada";
import { TextSummaryFragment, TextFragment, DateTimeFragment, LanguageFragment, LinkFragment } from "./misc";
import { MediaUnionFragment } from "./media";
// @todo fix use of NodeArticleTeaserFragment
// import { NodeArticleTeaserFragment  } from "./node";

export const ParagraphHeroFragment = graphql(`fragment ParagraphHeroFragment on ParagraphHero {
  id
  created {
    ...DateTimeFragment
  }
  heading {
    ...TextFragment
  }
  heroLayout
  langcode {
    ...LanguageFragment
  }
  link {
    ...LinkFragment
  }
  requiredMedia: media {
    ...MediaUnionFragment
  }
  status
  summary {
    ...TextFragment
  }
}`,
  [
    DateTimeFragment,
    TextFragment,
    LanguageFragment,
    LinkFragment,
    MediaUnionFragment,
  ]
)

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

export const ParagraphQuoteFragment = graphql(`fragment ParagraphQuoteFragment on ParagraphQuote {
  id
  author
  created {
    ...DateTimeFragment
  }
  jobTitle
  langcode {
    ...LanguageFragment
  }
  logo {
    ...MediaUnionFragment
  }
  quote
  status
  thumb {
    ...MediaUnionFragment
  }
}`,
  [
    DateTimeFragment,
    LanguageFragment,
    MediaUnionFragment,
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
    ...ParagraphQuoteFragment
    ...ParagraphHeroFragment
  }
`, [
  ParagraphTextFragment,
  ParagraphMediaFragment,
  ParagraphQuoteFragment,
  ParagraphHeroFragment,
])
