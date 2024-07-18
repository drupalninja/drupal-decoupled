import { FragmentOf, readFragment } from 'gql.tada';
import { ParagraphMediaFragment } from '@/graphql/fragments/paragraph';
import { MediaImageFragment } from "@/graphql/fragments/media";

interface ParagraphMediaProps {
  paragraph: FragmentOf<typeof ParagraphMediaFragment>
}

export default function ParagraphMedia({ paragraph }: ParagraphMediaProps) {
  const { media } = readFragment(ParagraphMediaFragment, paragraph);
  if (!media?.image) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      <img
        src={media.image.url}
        alt={`Cover`}
      />
    </div>
  );
}
