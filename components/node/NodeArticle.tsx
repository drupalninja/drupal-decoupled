import { Fragment } from "react";
import { FragmentOf, readFragment } from "gql.tada";
import { NodeArticleFragment } from "@/graphql/fragments/node";
import { resolve } from "@/components/helpers/ComponentResolver";

type NodeArticleComponentProps = {
  node: FragmentOf<typeof NodeArticleFragment>;
  environment: string;
}

export default function NodeArticleComponent({ node, environment }: NodeArticleComponentProps) {
  const nodeArticle = readFragment(NodeArticleFragment, node);

  return (
    <>
      <h1>{nodeArticle.title}</h1>
    </>
  );
}
