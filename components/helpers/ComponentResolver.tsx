import { FragmentOf, readFragment } from "gql.tada";

import ParagraphText from "@/components/ParagraphText/ParagraphText";
import ParagraphMedia from "../paragraph/ParagraphMedia";

import {
  ParagraphTextFragment,
  ParagraphMediaFragment,
  ParagraphUnionFragment,
} from "@/graphql/fragments/paragraph"

import VisualEditorComponentContainer from "@/components/helpers/VisualEditorComponentContainer";

type ComponentType = Array<JSX.Element>
type ParagraphFragmentType =
  FragmentOf<typeof ParagraphTextFragment> |
  FragmentOf<typeof ParagraphMediaFragment>;

interface ResolveProps {
  data: FragmentOf<typeof ParagraphUnionFragment>[] | null;
  environment: string;
}

const calculateComponent = function (type: string, paragraph: ParagraphFragmentType): JSX.Element {
  if (type === 'ParagraphText') {
    return <ParagraphText paragraph={paragraph as FragmentOf<typeof ParagraphTextFragment>} />;
  }
  if (type === 'ParagraphMedia') {
    return <ParagraphMedia paragraph={paragraph as FragmentOf<typeof ParagraphMediaFragment>} />;
  }
  return <pre>{JSON.stringify(paragraph, null, 2)}</pre>;
}

export const resolve = ({data = [], environment = 'preview'}: ResolveProps): ComponentType => {
  if (!data) {
    return []
  }

  const paragraphUnionFragment = readFragment(ParagraphUnionFragment, data); 
  const components: Array<JSX.Element> = [];
  
  paragraphUnionFragment.forEach((paragraph) => {
    const type = paragraph.__typename;

    if (!type) {
      return <></>;
    }

    const ParagraphComponent = calculateComponent(type, paragraph);

    if (environment === 'preview') {
      components.push(
        <VisualEditorComponentContainer
          action='edit'
          storage='paragraph'
          uuid={paragraph.id}
        >
          {ParagraphComponent}
        </VisualEditorComponentContainer>
      );

      return;
    }

    components.push(ParagraphComponent)
  });

  return components;
};
