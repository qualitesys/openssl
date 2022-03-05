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
   "c1" : "17004"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17004] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17032"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17032] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17046"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17046] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17073"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17073"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17073] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17087"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17087] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17115"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17115] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17129"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17129] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17139"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17139] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17150"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17150] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17164"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17164] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17195"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17195"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17195] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17231"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17231] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17259"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17259] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17348"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17348"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17348] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17348"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17348"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17348] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17370"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17370] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17370"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17370"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17370] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17389"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17389"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17389] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17389"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17389] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17412"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17412] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17412"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17412] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17432"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17432"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17432] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17432"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17432"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17432] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19937"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#19937"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19937] The expression ssl_tsan_lock(ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20610"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20610"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20610] The expression in-&gt;compress_meth applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20633"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20633] The expression in-&gt;ext.tick applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20739"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20739"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20739] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20762"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20762"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20762] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20779"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20779"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20779] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20790"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20790"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20790] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20801"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20801"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20801] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20814"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20814"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20814] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20827"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20827"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20827] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20829"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20829] The expression  ! ssl_session_memcpy(ret-&gt;session_id, &amp; ret-&gt;session_id_length,as-&gt;session_id,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20830"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20830] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20831"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20831"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20831] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20833"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20833] The expression  ! ssl_session_memcpy(ret-&gt;master_key, &amp; tmpl,as-&gt;master_key,512) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20834"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20834"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20834] The expression 512 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20835"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20835"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20835] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20862"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20862"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20862] The expression  ! ssl_session_memcpy(ret-&gt;sid_ctx, &amp; ret-&gt;sid_ctx_length,as-&gt;session_id_context,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20863"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20863"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20863] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20864"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20864"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20864] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20869"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20869"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20869] The expression  ! ssl_session_strndup( &amp; ret-&gt;ext.hostname,as-&gt;tlsext_hostname) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20870"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20870"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20870] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20873"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20873"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20873] The expression  ! ssl_session_strndup( &amp; ret-&gt;psk_identity_hint,as-&gt;psk_identity_hint) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20874"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20874"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20874] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20875"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20875] The expression  ! ssl_session_strndup( &amp; ret-&gt;psk_identity,as-&gt;psk_identity) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20876"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20876"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20876] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20902"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20902"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20902] The expression as-&gt;comp_id applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20909"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20909"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20909] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20918"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20918] The expression  ! ssl_session_strndup( &amp; ret-&gt;srp_username,as-&gt;srp_username) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20919"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20919"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20919] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
