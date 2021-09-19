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
   "c1" : "06189"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#6189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06189] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "16967"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#16967"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16967] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16995"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#16995"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16995] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17009"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17009] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17036"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17036"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17036] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17050"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17050"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17050] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17078"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17078] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17092"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17092] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17102"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17102] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17113"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17113] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17127"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17127] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17158"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17158] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17194"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17194] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17222"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17222] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17311"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17311] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17311"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17311"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17311] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17333"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17333"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17333] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17333"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17333] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17352"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17352"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17352] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17352"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17352"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17352] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17375"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17375"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17375] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17375"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17375] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17395"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17395"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17395] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17395"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#17395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17395] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20522"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20522"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20522] The expression in-&gt;compress_meth applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20545"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20545"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20545] The expression in-&gt;ext.tick applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20651"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20651] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20674"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20674"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20674] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20691"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20691"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20691] goto statement jump to err"
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
   "c1" : "20713"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20713"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20713] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20726"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20726"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20726] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20739"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20739] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20741"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20741"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20741] The expression  ! ssl_session_memcpy(ret-&gt;session_id, &amp; ret-&gt;session_id_length,as-&gt;session_id,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20742"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20742"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20742] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20743"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20743"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20743] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20745"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20745"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20745] The expression  ! ssl_session_memcpy(ret-&gt;master_key, &amp; tmpl,as-&gt;master_key,512) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20746"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20746"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20746] The expression 512 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20747"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20747"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20747] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20774"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20774"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20774] The expression  ! ssl_session_memcpy(ret-&gt;sid_ctx, &amp; ret-&gt;sid_ctx_length,as-&gt;session_id_context,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20775"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20775] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20776"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20776"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20776] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20781"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20781"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20781] The expression  ! ssl_session_strndup( &amp; ret-&gt;ext.hostname,as-&gt;tlsext_hostname) applies to a single value or variable, might be ambiguous."
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
   "c1" : "20785"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20785] The expression  ! ssl_session_strndup( &amp; ret-&gt;psk_identity_hint,as-&gt;psk_identity_hint) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20786"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20786"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20786] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20787"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20787"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20787] The expression  ! ssl_session_strndup( &amp; ret-&gt;psk_identity,as-&gt;psk_identity) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20788"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20788"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20788] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20814"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20814"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20814] The expression as-&gt;comp_id applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20821"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20821"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20821] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20830"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20830] The expression  ! ssl_session_strndup( &amp; ret-&gt;srp_username,as-&gt;srp_username) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20831"
 , "c1link" : "./qc/ssl/ssl_asn1.c.html#20831"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20831] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
