import { graphql } from "@/graphql/gql.tada";

import { MediaImageFragment } from "@/graphql/fragments/media";
import { UserFragment } from "@/graphql/fragments/user";
import { MetatagFragment } from "./metatag";
import {
  ParagraphUnionFragment,
} from "./paragraph";

export const NodePageFragment = graphql(`
  fragment NodePageFragment on NodePage  {
    __typename
    id
    title
    summary
  }
`)

export const NodeArticleFragment = graphql(`
  fragment NodeArticleFragment on NodeArticle {
    __typename
    id
    title
    summary
    path
    metatag {
      ...MetatagFragment
    }
  }
`, [MetatagFragment])

export const NodeArticleTeaserFragment = graphql(`
  fragment NodeArticleTeaserFragment on NodeArticle {
    __typename
    id
    title
    summary
    path
  }
`)
