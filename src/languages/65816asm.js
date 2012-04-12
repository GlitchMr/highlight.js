/*
Language: 65816 ASM
Author: GlitchMr <glitchmr@myopera.com>
*/
hljs.LANGUAGES['65816asm'] = {
    case_insensitive: true,
    defaultMode: {
        keywords: {
            adc: 1, and: 1, asl: 1, bcc: 1, bcs: 1, beq: 1, bit: 1, bmi: 1,
            bne: 1, bpl: 1, bra: 1, brk: 1, brl: 1, bvc: 1, bvs: 1, clc: 1,
            cld: 1, cli: 1, clv: 1, cmp: 1, cop: 1, cpx: 1, cpy: 1, dea: 1,
            dec: 1, dex: 1, dey: 1, eor: 1, ina: 1, inc: 1, inx: 1, iny: 1,
            jml: 1, jmp: 1, jsl: 1, jsr: 1, lda: 1, ldx: 1, ldy: 1, lsr: 1,
            mvn: 1, mvp: 1, nop: 1, ora: 1, pea: 1, pei: 1, per: 1, pha: 1,
            phb: 1, phd: 1, phk: 1, php: 1, phx: 1, phy: 1, pla: 1, plb: 1,
            pld: 1, plp: 1, plx: 1, ply: 1, rep: 1, rol: 1, ror: 1, rti: 1,
            rtl: 1, rts: 1, sbc: 1, sec: 1, sed: 1, sei: 1, sep: 1, sta: 1,
            stp: 1, stx: 1, sty: 1, stz: 1, swa: 1, tad: 1, tas: 1, tax: 1,
            tay: 1, tcd: 1, tcs: 1, tda: 1, tdc: 1, trb: 1, tsa: 1, tsb: 1,
            tsc: 1, tsx: 1, txa: 1, txs: 1, txy: 1, tya: 1, tyx: 1, wai: 1,
            wdm: 1, xba: 1, xce: 1,
            
            arch: 1, assert: 1, autoclean: 1, autoclear: 1, base: 1, bytes: 1,
            cleartable: 1, db: 1, dd: 1, dl: 1, dw: 1, 'else': 1, endif: 1,
            fastrom: 1, fill: 1, fillbyte: 1, freecode: 1, freedata: 1,
            'function': 1, header: 1, hirom: 1, 'if': 1, lorom: 1, namespace: 1,
            org: 1, pad: 1, padbyte: 1, pc: 1, print: 1, prot: 1, pullpc: 1,
            pushpc: 1, reset: 1, skip: 1, warnpc: 1
        },
        contains: [
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
                begin: ';', end: '$',
                relevance: 0
            },
            {
                className: 'label',
                begin: '[.!]\\w+|\\w+:'
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
