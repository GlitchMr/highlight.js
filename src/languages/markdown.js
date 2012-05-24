/*
Language: Markdown
Requires: xml.js
Author: John Crepezzi <john.crepezzi@gmail.com>
Website: http://seejohncode.com/
*/

hljs.LANGUAGES.markdown = {
  case_insensitive: true,
  keywords: {
    '': "the be to of and a in that have i it for not on with he as you " +
    "do at this but his by from they we say her she or will my one " +
    "all would there their what so up out if about who get which go " +
    "me when make can like time no just him know take person into " +
    "year your good some could them see other than then now look " +
    "only come its over think also back after use two how our work " +
    "first well way even new want because any these give day most us"
  },
  defaultMode: {
    contains: [
      // highlight headers
      {
        className: 'header',
        begin: '^#{1,3}', end: '$'
      },
      {
        className: 'header',
        begin: '^.+?\\n[=-]{2,}$',
        relevance: 5
      },
      // inline html
      {
        begin: '<', end: '>',
        subLanguage: 'xml',
        relevance: 0
      },
      // lists (indicators only)
      {
        className: 'bullet',
        begin: '^([*+-]|(\\d+\\.))\\s+',
        relevance: 3
      },
      // strong segments
      {
        className: 'strong',
        begin: '[*_]{2}.+?[*_]{2}',
        relevance: 2
      },
      // emphasis segments
      {
        className: 'emphasis',
        begin: '\\*.+?\\*'
      },
      {
        className: 'emphasis',
        begin: '_.+?_',
        relevance: 0
      },
      // blockquotes
      {
        className: 'blockquote',
        begin: '^>\\s+', end: '$',
        relevance: 4
      },
      // code snippets
      {
        className: 'code',
        begin: '`.+?`'
      },
      {
        className: 'code',
        begin: '^    ', end: '$',
        relevance: 0
      },
      // horizontal rules
      {
        className: 'horizontal_rule',
        begin: '^-{3,}', end: '$',
        relevance: 3
      },
      // using links - title and link
      {
        begin: '\\[.+?\\]\\(.+?\\)',
        returnBegin: true,
        contains: [
          {
            className: 'link_label',
            begin: '!?\\[.+\\]'
          },
          {
            className: 'link_url',
            begin: '\\(', end: '\\)',
            excludeBegin: true, excludeEnd: true
          }
        ],
        relevance: 5
      }
    ]
  }
};
