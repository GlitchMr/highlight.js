/*
Language: 65816 ASM
Author: GlitchMr <glitchmr@myopera.com>
*/
hljs.LANGUAGES['65816asm'] = {
    case_insensitive: true,
    defaultMode: {
        keywords: "adc and asl bcc bcs beq bit bmi bne bpl bra brk brl " +
                  "bvc bvs clc cld cli clv cmp cop cpx cpy dea dec dex " +
                  "dey eor ina inc inx iny jml jmp jsl jsr lda ldx ldy " +
                  "lsr mvn mvp nop ora pea pei per pha phb phd phk php " +
                  "phx phy pla plb pld plp plx ply rep rol ror rti rtl " +
                  "rts sbc sec sed sei sep sta stp stx sty stz swa tad " +
                  "tas tax tay tcd tcs tda tdc trb tsa tsb tsc tsx txa " +
                  "txs txy tya tyx wai wdm xba xce arch assert autoclean " +
                  "autoclear base bytes cleartable db dd dl dw else endif " +
                  "fastrom fill fillbyte freecode freedata function " +
                  "header hirom if lorom namespace org pad padbyte pc " +
                  "print prot pullpc pushpc reset skip warnpc",
        illegal: '/[/*]|0[box]|</|\\$[G-Zg-z]',
        contains: [
            {
                className: 'keyword',
                begin: '.[A-Z]\b'
            },
            {
                className: 'number',
                begin: '(?:#?(%[01]+|\\$[0-9a-fA-F]+)|#[$%]?|[$%])(?!\\w)'
            },
            {
                className: 'preprocessor',
                begin: 'macro\\s*\\w+\\s*\\(.*?\\)|endmacro'
            },
            {
                className: 'number',
                begin: '\\d+',
                relevance: 0
            },
            {
                className: 'comment',
                begin: ';', end: '$'
            },
            {
                className: 'label',
                begin: '\\.\\w+|\\w+:',
            },
            {
                className: 'variable',
                begin: '!\\w+'
            },
            {
                className: 'variable',
                begin: '<',
                end: '>'
            },

            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
        ]
    }
};
