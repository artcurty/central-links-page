# CENTRAL LINKS PAGE


A simple project open source, to be used as a free alternative to [Linktree](https://linktr.ee/).

## What is CentralLinksPage?

A simple project, made using [Next.js](https://nextjs.org/) and [styled-components](https://styled-components.com/). The goal is to bring together the useful links of a specific person/company in a single page, as well as the Linktree solution, but being a free and open source version.

## Requirements

- [Node.js](https://nodejs.org/en/) 24.0 or later
- [Yarn](https://yarnpkg.com/)

<br/>

## How to use

For the settings of the links, names, avatar, colors and other information, it is necessary to add the respective options in the **config.json** file.

This file is used as a basis for styling and collecting everything within the code, centralizing the project configuration in a single file.

### Configuration.json

<br/>

```js
{
  //Address of an image, to be used as an avatar
  "avatar": "",
  //Enable or disable avatar border
  "avatarBorder": false,
  //Address of an image, to be used as an avatar
  "background": "",
  //text displayed just below the avatar
  "title": "",
  //list of links with their names and addresses
  "links": [
    { "link": "", "name": "LINKEDIN" },
    { "link": "", "name": "INSTAGRAM" },
    { "link": "", "name": "GITHUB" }
  ],
  //Style options
  "options": {
    "colors": {
      "backgroundColor": "#0F0802",
      "title": "#FFFFF2",
      "button": "#FFFFF2",
      "buttonText": "#0F0802"
    },
    //Avatar style options
    "avatar": {
      "borderSize": "1px",
      "borderColor": "black"
    },
    "fontType": "Roboto",
    "borderRadius": "4px"
  }
}
```

<br/>

## Example configuration

<br/>

```json
{
  "avatar": "https://avatars.githubusercontent.com/u/26467331?s=460&u=cd4f787d5875e1df35e283585712beb73de63f77&v=4",
  "avatarBorder": false,
  "background": "",
  "title": "@artcurty",
  "links": [
    { "link": "https://www.linkedin.com/in/artcurty/", "name": "LINKEDIN" },
    { "link": "https://www.instagram.com/artcurty/", "name": "INSTAGRAM" },
    { "link": "https://github.com/artcurty", "name": "GITHUB" }
  ],
  "options": {
    "colors": {
      "backgroundColor": "#0F0802",
      "title": "#FFFFF2",
      "button": "#FFFFF2",
      "buttonText": "#0F0802"
    },
    "avatar": {
      "borderSize": "1px",
      "borderColor": "black"
    },
    "fontType": "Roboto",
    "borderRadius": "4px"
  }
}
```

## [See the result of this configuration](https://central-links-page.vercel.app/)

