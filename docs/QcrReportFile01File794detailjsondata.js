console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/ssl_asn1.c.html" 
 , "texte" : "File ssl/ssl_asn1.c 105 rule violations " 
 , "fic2"  : "./qc/ssl/ssl_asn1.c.xml" 
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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000005"
 , "c3" : "Check pointer declaration to unsigned char"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "36"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "40"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02076"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02076] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02239"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02239] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02266"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02266] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02268"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02268] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02316"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02316] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02318] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02322] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02347"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02349"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02349] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05559"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05559] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05561"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5561"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05561] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05564"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05564] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05589"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5589"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05589] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05591"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5591"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05591] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05594"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5594"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05594] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05623"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05623] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05625"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05625] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05628"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5628"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05628] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05649"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5649"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05649] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05651"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05651] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05654"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5654"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05654] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05670"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05670] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05689"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05689] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05691"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5691"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05691] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05694"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5694"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05694] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05714"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5714"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05714] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05719"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05719] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05740"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5740"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05740] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05742"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5742"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05742] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05745"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5745"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05745] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05766"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5766"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05766] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05768"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5768"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05768] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05771"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05771] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05793"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05793] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05795"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5795"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05795] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05798"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05798] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05822"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5822"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05822] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05824"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5824"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05824] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05827"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#5827"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05827] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06223"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#6223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06223] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "17007"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17007"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17007] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17035"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17035] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17049"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17049] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17076"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17076"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17076] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17090"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17090"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17090] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17118"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17118] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17132"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17132] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17142"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17142] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17153"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17153] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17167"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17167] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17198"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17198] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17234"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17234] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17262"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17262] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17351"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17351"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17351] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17351"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17351] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17373"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17373"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17373] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17373"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17373] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17392"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17392] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17392"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17392] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17415"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17415"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17415] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17415"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17415] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17435"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17435"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17435] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17435"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17435] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19940"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#19940"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19940] The expression ssl_tsan_lock(ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20613"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20613"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20613] The expression in-&gt;compress_meth applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20636"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20636] The expression in-&gt;ext.tick applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20742"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20742"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20742] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20765"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20765"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20765] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20782"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20782"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20782] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20793"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20793] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20804"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20804"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20804] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20817"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20817"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20817] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20830"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20830"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20830] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20832"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20832"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20832] The expression  ! ssl_session_memcpy(ret-&gt;session_id, &amp; ret-&gt;session_id_length,as-&gt;session_id,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20833"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20833] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20834"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20834"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20834] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20836"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20836"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20836] The expression  ! ssl_session_memcpy(ret-&gt;master_key, &amp; tmpl,as-&gt;master_key,512) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20837"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20837"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20837] The expression 512 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20838"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20838"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20838] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20865"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20865"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20865] The expression  ! ssl_session_memcpy(ret-&gt;sid_ctx, &amp; ret-&gt;sid_ctx_length,as-&gt;session_id_context,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20866"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20866"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20866] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20867"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20867"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20867] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20872"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20872"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20872] The expression  ! ssl_session_strndup( &amp; ret-&gt;ext.hostname,as-&gt;tlsext_hostname) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20873"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20873"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20873] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20876"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20876"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20876] The expression  ! ssl_session_strndup( &amp; ret-&gt;psk_identity_hint,as-&gt;psk_identity_hint) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20877"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20877"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20877] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20878"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20878"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20878] The expression  ! ssl_session_strndup( &amp; ret-&gt;psk_identity,as-&gt;psk_identity) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20879"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20879"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20879] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20905"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20905"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20905] The expression as-&gt;comp_id applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20912"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20912"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20912] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20921"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20921] The expression  ! ssl_session_strndup( &amp; ret-&gt;srp_username,as-&gt;srp_username) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20922"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20922"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20922] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
