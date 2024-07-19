import { FragmentOf, readFragment } from 'gql.tada';
import { ParagraphMediaFragment } from '@/graphql/fragments/paragraph';
import { getImageUrl } from '../helpers/Utilities';

interface ParagraphMediaProps {
  paragraph: FragmentOf<typeof ParagraphMediaFragment>
}

export default function ParagraphMedia({ paragraph }: ParagraphMediaProps) {
  const { media } = readFragment(ParagraphMediaFragment, paragraph);
  const imageUrl = getImageUrl(media);

  return (
    <div className="flex items-center justify-center">
      {imageUrl && (
        <img
          src={imageUrl}
        />
      )}
    </div>
  );
}
