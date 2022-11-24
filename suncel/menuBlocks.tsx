import { MenuBlockSchema } from "@suncel/nextjs";
import About from "./blocks/about/About";
import { BlogBlock } from "./blocks/blogBlock/Blog";
import { ContactBlock } from "./blocks/contact/ContactBlock";
import WorkSteps from "./blocks/cta/WorkSteps";
import BlogHero from "./blocks/hero/blogHero";
import Hero from "./blocks/hero/Hero";
import { TitleAndSub } from "./blocks/hero/titleAndSub";
import { ImageBlock } from "./blocks/imageBlock";

import { Price } from "./blocks/price/Price";
import { RichTextBlock } from "./blocks/richText";
import Service from "./blocks/services/Service";
import TestWord from "./blocks/test/TestWord";

export const menuBlocks: MenuBlockSchema[] = [
  {
    category: "Page blocks",
    blocks: [
      {
        name: "Hero",
        variants: [
          {
            image:
              "https://assets.suncel.io/61bf5e233c962a862faf209f/title_and_sub_comp.png",
            component: TitleAndSub,
            name: "Title And Sub Hero",
            description: "A simple title and one optional subtitle",
          },
          {
            name: "FlowBite Hero",
            component: Hero,
          },
          {
            component: BlogBlock,
            name: "blog Block",
          },
          {
            component: ContactBlock,
            name: "Contact",
          },
          {
            component: Price,
            name: "Price",
          },
          {
            component: TestWord,
            name: "test Page",
          },
          {
            component: About,
            name: "About Block",
          },
          {
            component: Service,
            name: "Services Block",
          },
          {
            component: BlogHero,
            name: BlogHero?.suncel?.displayName,
          },
        ],
      },
      {
        name: "Text",
        variants: [
          {
            component: RichTextBlock,
            name: RichTextBlock?.suncel?.displayName,
          },
        ],
      },
      {
        name: "Media",
        variants: [
          {
            component: ImageBlock,
            name: ImageBlock?.suncel?.displayName,
          },
        ],
      },
      {
        name: "Work Steps",
        variants: [
          {
            component: WorkSteps,
            name: WorkSteps?.suncel?.displayName,
          },
        ],
      },
    ],
  },
];
