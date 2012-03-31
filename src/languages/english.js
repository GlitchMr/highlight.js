/*
Language: English
Description: Plain text for pieces of code which aren't.
Author: GlitchMr <glitchmr@myopera.com>
Website: https://github.com/GlitchMr/
*/

hljs.LANGUAGES.english = {
  case_insensitive: true,
  defaultMode: {
    keywords: {
      '': {
        the: 1, be: 1, to: 1, of: 1, and: 1, a: 1, 'in': 1, that: 1, have: 1,
        i: 1, it: 1, 'for': 1, not: 1, on: 1, 'with': 1, he: 1, as: 1, you: 1,
        'do': 1, at: 1, 'this': 1, but: 1, his: 1, by: 1, from: 1, they: 1,
        we: 1, say: 1, her: 1, she: 1, or: 1, and: 1, will: 1, my: 1, one: 1,
        all: 1, would: 1, there: 1, their: 1, what: 1, so: 1, up: 1, out: 1,
        'if': 1, about: 1, who: 1, get: 1, which: 1, go: 1, me: 1, when: 1,
        make: 1, can: 1, like: 1, time: 1, no: 1, just: 1, him: 1, know: 1,
        take: 1, person: 1, into: 1, year: 1, your: 1, good: 1, some: 1,
        could: 1, them: 1, see: 1, other: 1, than: 1, then: 1, now: 1,
        look: 1, only: 1, come: 1, its: 1, over: 1, think: 1, also: 1,
        back: 1, after: 1, use: 1, two: 1, how: 1, our: 1, work: 1, first: 1,
        well: 1, way: 1, even: 1, 'new': 1, want: 1, because: 1, any: 1,
        these: 1, give: 1, day: 1, most: 1, us: 1
      }
    },
    contains: [
      {
        begin: '//|#',
        end: '$',
        relevance: 0
      },
      {
        begin: '"',
        illegal: '\\n',
        end: '"',
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  }
};
