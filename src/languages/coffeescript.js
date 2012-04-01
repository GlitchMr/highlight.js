/*
Language: CoffeeScript
Author: Dmytrii Nagirniak <dnagir@gmail.com>
Contributors: Oleg Efimov <efimovov@gmail.com>
Description: CoffeeScript is a programming language that transcompiles to JavaScript. For info about language see http://coffeescript.org/
*/

hljs.LANGUAGES.coffeescript = function() {
  var keywords = {
    'keyword': {
      // JS keywords
      'in': 1, 'if': 1, 'for': 1, 'while': 1, 'finally': 1,
      'new': 1, 'do': 1, 'return': 1, 'else': 1,
      'break': 1, 'catch': 1, 'instanceof': 1, 'throw': 1,
      'try': 1, 'this': 1, 'switch': 1, 'continue': 1, 'typeof': 1,
      'delete': 1, 'debugger': 1,
      'class': 1, 'extends': 1, 'super': 1,
      // Coffee keywords
      'then': 1, 'unless': 1, 'until': 1, 'loop': 2, 'of': 2, 'by': 1, 'when': 2,
      'and': 1, 'or': 1, 'is': 1, 'isnt': 2, 'not': 1
    },
    'literal': {
      // JS literals
      'true': 1, 'false': 1, 'null': 1, 'undefined': 1,
      // Coffee literals
      'yes': 1, 'no': 1, 'on': 1, 'off': 1
    },
    'reserved': {
      'case': 0, 'default': 0, 'function': 0, 'var': 0, 'void': 0, 'with': 0,
      'const': 0, 'let': 0, 'enum': 0, 'export': 0, 'import': 0, 'native': 0,
      '__hasProp': 0 , '__extends': 0 , '__slice': 0 , '__bind': 0 , '__indexOf': 0
    }
  };

  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';

  var COFFEE_QUOTE_STRING_SUBST_MODE = {
    className: 'subst',
    begin: '#\\{', end: '}',
    keywords: keywords,
    contains: [hljs.C_NUMBER_MODE, hljs.BINARY_NUMBER_MODE]
  };

  var COFFEE_QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    relevance: 0,
    contains: [hljs.BACKSLASH_ESCAPE, COFFEE_QUOTE_STRING_SUBST_MODE]
  };

  var COFFEE_HEREDOC_MODE = {
    className: 'string',
    begin: '"""', end: '"""',
    relevance: 4,
    contains: [hljs.BACKSLASH_ESCAPE, COFFEE_QUOTE_STRING_SUBST_MODE]
  };

  var COFFEE_HERECOMMENT_MODE = {
    className: 'comment',
    begin: '###', end: '###',
    relevance: 4
  };

  var COFFEE_HEREGEX_MODE = {
    className: 'regexp',
    begin: '///', end: '///',
    contains: [hljs.HASH_COMMENT_MODE]
  };

  var COFFEE_FUNCTION_DECLARATION_MODE = {
    className: 'function',
    begin: JS_IDENT_RE + '\\s*=\\s*(?:\\(.+\\))?\\s*[-=]>',
    returnBegin: true,
    relevance: 4,
    contains: [
      {
        className: 'title',
        begin: JS_IDENT_RE
      },
      {
        className: 'params',
        begin: '\\(', end: '\\)'
      }
    ]
  };

  var COFFEE_EMBEDDED_JAVASCRIPT = {
    className: 'javascript',
    begin: '`', end: '`',
    excludeBegin: true, excludeEnd: true,
    subLanguage: 'javascript'
  };

  return {
    defaultMode: {
      keywords: keywords,
      contains: [
        // Numbers 
        hljs.C_NUMBER_MODE,
        hljs.BINARY_NUMBER_MODE,
        // Strings
        hljs.APOS_STRING_MODE,
        COFFEE_HEREDOC_MODE, // Should be before COFFEE_QUOTE_STRING_MODE for greater priority
        COFFEE_QUOTE_STRING_MODE,
        // Comments
        COFFEE_HERECOMMENT_MODE, // Should be before hljs.HASH_COMMENT_MODE for greater priority
        hljs.HASH_COMMENT_MODE,
        // CoffeeScript specific modes
        COFFEE_HEREGEX_MODE,
        COFFEE_EMBEDDED_JAVASCRIPT,
        COFFEE_FUNCTION_DECLARATION_MODE
      ]
    }
  };
}();
