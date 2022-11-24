import { RichTextType, SuncelBlock } from "@suncel/nextjs";
import React from "react";
import { CustomRichText } from "../wrappers/richtext";
import { Section } from "../wrappers/section";

type RichProps = {
  richtext: RichTextType;
};

export const RichTextBlock: SuncelBlock<RichProps> = ({ richtext }) => {
  return (
    <Section variant="blog">
      <div>
        <CustomRichText value={richtext} slug="richtext" />
      </div>
    </Section>
  );
};

RichTextBlock.suncel = {
  slug: "Richtext Blog",
  displayName: "Rich Text Blog",
  defaultProps: {
    richtext: `<blockquote>
    <p>Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers</p></blockquote>`,
  },
  editor: {
    settings: [],
  },
};
