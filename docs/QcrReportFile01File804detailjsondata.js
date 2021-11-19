console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/ssl_stat.c.html" 
 , "texte" : "File ssl/ssl_stat.c 79 rule violations " 
 , "fic2"  : "./qc/ssl/ssl_stat.c.xml" 
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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "38"
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
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02324"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2324"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02324] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02487"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02487] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02490"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02490] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02514"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02514] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02516"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02516] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02518"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02518] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02540"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02540] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02540"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02540] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02564"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02564] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02566"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02566] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02570"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2570"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02570] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02595"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02595] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02597"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02597] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02599"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#2599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02599] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05558"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05558] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05560"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05560] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05563"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05563] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05588"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5588"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05588] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05590"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5590"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05590] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05593"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5593"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05593] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05622"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5622"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05622] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05624"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5624"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05624] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05627"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05627] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05648"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05648] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05650"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5650"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05650] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05653"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5653"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05653] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05669"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5669"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05669] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05688"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5688"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05688] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05690"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05690] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05693"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5693"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05693] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05713"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5713"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05713] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05718"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05718] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05739"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5739"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05739] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05741"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5741"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05741] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05744"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5744"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05744] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05765"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5765"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05765] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05767"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5767"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05767] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05770"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05770] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05792"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05792] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05794"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5794"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05794] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05797"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5797"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05797] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05821"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05821] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05823"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5823"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05823] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05826"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#5826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05826] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06222"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#6222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06222] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "16994"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#16994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16994] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17022"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17022] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17036"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17036"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17036] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17063"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17063"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17063] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17077"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17077] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17105"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17105] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17119"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17119] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17129"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17129] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17140"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17140] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17154"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17154] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17185"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17185] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17221"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17221] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17249"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17249] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17338"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17338"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17338] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17338"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17338"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17338] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17360"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17360"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17360] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17360"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17360"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17360] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17379"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17379"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17379] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17379"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17379] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17402"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17402"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17402] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17402"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17402] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17422"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17422"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17422] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17422"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#17422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17422] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19901"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#19901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19901] The expression ossl_statem_in_error(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20008"
 , "c1link" : "./qc/ssl/ssl_stat.c.html#20008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20008] The expression ossl_statem_in_error(s) applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
