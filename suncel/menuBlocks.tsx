import { MenuBlockSchema } from "@suncel/nextjs";
import { BlogBlock } from "./blocks/blogBlock/Blog";
import { ContactBlock } from "./blocks/contact/ContactBlock";
import Hero from "./blocks/hero/Hero";
import { TitleAndSub } from "./blocks/hero/titleAndSub";

import { Price } from "./blocks/price/Price";
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
        ],
      },
    ],
  },
];
