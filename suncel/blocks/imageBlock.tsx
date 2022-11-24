import { ImageType, SuncelBlock } from "@suncel/nextjs";
import { Image } from "@suncel/nextjs/components";
import { Section } from "../wrappers/section";

type ImageProps = {
  image: ImageType;
};

export const ImageBlock: SuncelBlock<ImageProps> = ({ image }) => {
  return (
    <Section variant="blog">
      <div>
        <Image
          slug="image"
          width={640}
          height={360}
          className="rounded-lg"
          src={image?.src}
          alt={image?.alt || "fallback"}
        />
      </div>
    </Section>
  );
};

ImageBlock.suncel = {
  slug: "Image ",
  displayName: "Image Block",
  defaultProps: {},
  editor: {
    settings: [],
  },
};
