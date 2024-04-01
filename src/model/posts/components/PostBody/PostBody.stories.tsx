// Stories in CSF 2.0 format

import { Meta, StoryObj } from "@storybook/react";

import PostBody from "./PostBody";

export default {
  title: "model/posts/components/PostBody",
  component: PostBody,
} as Meta<typeof PostBody>;

type Story = StoryObj<typeof PostBody>;

export const Default: Story = {
  args: {
    content: `# Hello there

## Custom features

<animated-tweet text="Polkupyöräilijöiden ohjaaminen autoliikenteen sekaan kuulostaa ideologisesti houkuttelevalta vaihtoehdolta,| mutta onneksi turvallisuus ja järjestys asetettiin tässä tapauksessa etusijalle." imgSrc=""></animated-tweet>

<question options="Aamulehti|Poliittinen Twitter" answerIndex="0" answerDesc="Tämäkin on Aamulehden pääkirjoituksesta." title="Aamulehden pääkirjoituksesta vai poliittiseta twitteristä?"></question>

<youtube videoid="JF6WVW5-CvY" caption="Hääpari ja kuljettaja / Video Lauri Nevanperä"></youtube>

<infocard label="Pihakansi">Pihakansi on taloyhtiön betonipiha, jonka alle on kaivettu autoluola. Parkkiruudun rakennuskustannus pihakannen alle on 50 000 €</infocard>

<bar value="12" label="Henkilöautoilun osuus Hämeenkadun kulkijoista kun autoilu oli sallittu"></bar>

<getnotified></getnotified>

<tweet id="1610671736806309889"></tweet>

 
## Basic features    
This is a test post body. It should render markdown content correctly.

## This is a subheading

### This is a subsubheading

This is a paragraph with some **bold** and *italic* text.

- This is a list
- With some items
- With links [#1](https://www.laurinevanpera.fi/posts/keskustojen-naivettyminen) [#2](https://www.laurinevanpera.fi/posts/yrittajat-ja-data) [#3](https://www.laurinevanpera.fi/posts/elinvoimaa-tampereen-keskustaan)

1. This is a numbered list
2. With some items

> This is a blockquote

[This is a link](https://example.com)

![This is an image](https://via.placeholder.com/600x300)

`,
  },
};
