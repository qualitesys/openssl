console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/bio_b64.c.html" 
 , "texte" : "File crypto/evp/bio_b64.c 62 rule violations " 
 , "fic2"  : "./qc/crypto/evp/bio_b64.c.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000005"
 , "c3" : "Check pointer declaration to unsigned char"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "39"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPP000002"
 , "c3" : "Avoid multiple switch labels with default case in switch case"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPP000010"
 , "c3" : "A switch clause refers to a jump label"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00959"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00964"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00989"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00993"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00996"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01021"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01025"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01029"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01037"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02113"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2113"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02113] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02276"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02276] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02303"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02303] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02307"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02307] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02329"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02329] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02329"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02329] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02353"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02353] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02359"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02359] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02384"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02384] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02388"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02388] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02755"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#2755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02755] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "05954"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#5954"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05954] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "05959"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#5959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05959] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "05984"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#5984"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05984] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "05989"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#5989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05989] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06018"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06018] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06023"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06023] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06044"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06044] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06049"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06049] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06065"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6065"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06065] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06084"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6084"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06084] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06089"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06089] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06109"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06109] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06114"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06114] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06135"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06135] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06140"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06140] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06161"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06161] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06166"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6166"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06166] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06188"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06188] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06193"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06193] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06217"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06217] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06222"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#6222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06222] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10385"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10385"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10385] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10387"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10387] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10414"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10414"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10414] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10446"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10446"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10446] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10447"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10447"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10447] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10447"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10447"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10447] The pointer q is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10447"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10447"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10447] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10448"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10448] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10515"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10515] The expression 0x08 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10537"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10537] The expression ctx-&gt;start applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10538"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10538"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10538] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10549"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10549"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10549] The expression ctx-&gt;tmp_nl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10671"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10671] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10672"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10672"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10672] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10797"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10797"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10797] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10800"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10800"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10800] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10845"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10845"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[10845] The switch case refers to the jump label again"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10855"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10855"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10855] The expression  ~ (0x0) is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10861"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10861"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10861] goto statement jump to again"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10868"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10868"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10868] goto statement jump to again"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "10882"
 , "c1link" : "./qc/crypto/evp/bio_b64.c.html#10882"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000002[10882] Avoid multiple switch labels with default case in switch case"
}} 
]
,
"data15" : {
   "fichierplantumlsvg" : "./qc/crypto/evp/bio_b64.c.fct.svg" 

}
};
console.log('leListeStr 99 main end');
