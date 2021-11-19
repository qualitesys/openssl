console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/ssl_asn1.c.html" 
 , "texte" : "File ssl/ssl_asn1.c 104 rule violations " 
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
 , "c4" : "35"
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
   "c1" : "16995"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#16995"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16995] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17023"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17023] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17037"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17037] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17064"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17064] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17078"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17078] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17106"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17106] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17120"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17120] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17130"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17130] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17141"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17141] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17155"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17155] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17186"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17186] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17222"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17222] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17250"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17250] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17339"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17339"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17339] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17339"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17339] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17361"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17361"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17361] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17361"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17361"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17361] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17380"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17380"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17380] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17380"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17380] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17403"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17403"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17403] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17403"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17403] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17423"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17423] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17423"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17423] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20550"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20550] The expression in-&gt;compress_meth applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20573"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20573"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20573] The expression in-&gt;ext.tick applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20679"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20679"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20679] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20702"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20702"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20702] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20719"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20719"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20719] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20730"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20730"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20730] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20741"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20741] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20754"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20754"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20754] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20767"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20767"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20767] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20769"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20769"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20769] The expression  ! ssl_session_memcpy(ret-&gt;session_id, &amp; ret-&gt;session_id_length,as-&gt;session_id,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20770"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20770] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20771"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20771"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20771] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20773"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20773"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20773] The expression  ! ssl_session_memcpy(ret-&gt;master_key, &amp; tmpl,as-&gt;master_key,512) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20774"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20774"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20774] The expression 512 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20775"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20775"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20775] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20802"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20802] The expression  ! ssl_session_memcpy(ret-&gt;sid_ctx, &amp; ret-&gt;sid_ctx_length,as-&gt;session_id_context,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20803"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20803"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20803] The expression 32 is invariable"
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
   "c1" : "20809"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20809"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20809] The expression  ! ssl_session_strndup( &amp; ret-&gt;ext.hostname,as-&gt;tlsext_hostname) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20810"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20810] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20813"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20813"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20813] The expression  ! ssl_session_strndup( &amp; ret-&gt;psk_identity_hint,as-&gt;psk_identity_hint) applies to a single value or variable, might be ambiguous."
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
   "c1" : "20815"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20815"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20815] The expression  ! ssl_session_strndup( &amp; ret-&gt;psk_identity,as-&gt;psk_identity) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20816"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20816"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20816] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20842"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20842"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20842] The expression as-&gt;comp_id applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20849"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20849"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20849] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20858"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20858"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20858] The expression  ! ssl_session_strndup( &amp; ret-&gt;srp_username,as-&gt;srp_username) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20859"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20859"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20859] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
