console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/packet.c.html" 
 , "texte" : "File crypto/packet.c 98 rule violations " 
 , "fic2"  : "./qc/crypto/packet.c.xml" 
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
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "21"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "16"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01187"
 , "c1link" : "./qc/crypto/packet.c.html#1187"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01187] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01350"
 , "c1link" : "./qc/crypto/packet.c.html#1350"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01350] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/packet.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01379"
 , "c1link" : "./qc/crypto/packet.c.html#1379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01379] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/crypto/packet.c.html#1381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01381] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/crypto/packet.c.html#1381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01381] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01403"
 , "c1link" : "./qc/crypto/packet.c.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01403] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01403"
 , "c1link" : "./qc/crypto/packet.c.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01403] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01403"
 , "c1link" : "./qc/crypto/packet.c.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01403] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01427"
 , "c1link" : "./qc/crypto/packet.c.html#1427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01427] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/crypto/packet.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01429] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01433"
 , "c1link" : "./qc/crypto/packet.c.html#1433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01433] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01433"
 , "c1link" : "./qc/crypto/packet.c.html#1433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01433] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "01458"
 , "c1link" : "./qc/crypto/packet.c.html#1458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01458] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/crypto/packet.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01460] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01462"
 , "c1link" : "./qc/crypto/packet.c.html#1462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01462] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01462"
 , "c1link" : "./qc/crypto/packet.c.html#1462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01462] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01829"
 , "c1link" : "./qc/crypto/packet.c.html#1829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01829] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01830"
 , "c1link" : "./qc/crypto/packet.c.html#1830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01830] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03069"
 , "c1link" : "./qc/crypto/packet.c.html#3069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03074"
 , "c1link" : "./qc/crypto/packet.c.html#3074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03074] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03074"
 , "c1link" : "./qc/crypto/packet.c.html#3074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03074] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03099"
 , "c1link" : "./qc/crypto/packet.c.html#3099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03099] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03106"
 , "c1link" : "./qc/crypto/packet.c.html#3106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03106] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03106"
 , "c1link" : "./qc/crypto/packet.c.html#3106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03106] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03131"
 , "c1link" : "./qc/crypto/packet.c.html#3131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03131] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03139"
 , "c1link" : "./qc/crypto/packet.c.html#3139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03139] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03139"
 , "c1link" : "./qc/crypto/packet.c.html#3139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03139] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "06205"
 , "c1link" : "./qc/crypto/packet.c.html#6205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06205] Suspicious mix of Bitwise and Literal expressions in len&gt;(size_t )((18446744073709551615UL)/2)"
}} 
,
{ "ligne" : {
   "c1" : "06249"
 , "c1link" : "./qc/crypto/packet.c.html#6249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06249] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;len"
}} 
,
{ "ligne" : {
   "c1" : "06263"
 , "c1link" : "./qc/crypto/packet.c.html#6263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06263] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06278"
 , "c1link" : "./qc/crypto/packet.c.html#6278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06278] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;2"
}} 
,
{ "ligne" : {
   "c1" : "06291"
 , "c1link" : "./qc/crypto/packet.c.html#6291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06291] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06305"
 , "c1link" : "./qc/crypto/packet.c.html#6305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06305] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06318"
 , "c1link" : "./qc/crypto/packet.c.html#6318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06318] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;3"
}} 
,
{ "ligne" : {
   "c1" : "06332"
 , "c1link" : "./qc/crypto/packet.c.html#6332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06332] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06346"
 , "c1link" : "./qc/crypto/packet.c.html#6346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06346] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06359"
 , "c1link" : "./qc/crypto/packet.c.html#6359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06359] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;4"
}} 
,
{ "ligne" : {
   "c1" : "06374"
 , "c1link" : "./qc/crypto/packet.c.html#6374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06374] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06388"
 , "c1link" : "./qc/crypto/packet.c.html#6388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06388] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06398"
 , "c1link" : "./qc/crypto/packet.c.html#6398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06398] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06409"
 , "c1link" : "./qc/crypto/packet.c.html#6409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06409] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06423"
 , "c1link" : "./qc/crypto/packet.c.html#6423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06423] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06436"
 , "c1link" : "./qc/crypto/packet.c.html#6436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06436] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;4"
}} 
,
{ "ligne" : {
   "c1" : "06454"
 , "c1link" : "./qc/crypto/packet.c.html#6454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06454] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06472"
 , "c1link" : "./qc/crypto/packet.c.html#6472"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06472] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;len"
}} 
,
{ "ligne" : {
   "c1" : "06490"
 , "c1link" : "./qc/crypto/packet.c.html#6490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06490] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06503"
 , "c1link" : "./qc/crypto/packet.c.html#6503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06503] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;len"
}} 
,
{ "ligne" : {
   "c1" : "06518"
 , "c1link" : "./qc/crypto/packet.c.html#6518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06518] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06530"
 , "c1link" : "./qc/crypto/packet.c.html#6530"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06530] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&gt;dest_len"
}} 
,
{ "ligne" : {
   "c1" : "06595"
 , "c1link" : "./qc/crypto/packet.c.html#6595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06595] Suspicious mix of Bitwise and Literal expressions in PACKET_remaining(pkt)&lt;len"
}} 
,
{ "ligne" : {
   "c1" : "06607"
 , "c1link" : "./qc/crypto/packet.c.html#6607"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06607] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06607"
 , "c1link" : "./qc/crypto/packet.c.html#6607"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06607] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06629"
 , "c1link" : "./qc/crypto/packet.c.html#6629"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06629] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06629"
 , "c1link" : "./qc/crypto/packet.c.html#6629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06629] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06648"
 , "c1link" : "./qc/crypto/packet.c.html#6648"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06648] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06648"
 , "c1link" : "./qc/crypto/packet.c.html#6648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06648] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06671"
 , "c1link" : "./qc/crypto/packet.c.html#6671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06671] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06671"
 , "c1link" : "./qc/crypto/packet.c.html#6671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06671] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06691"
 , "c1link" : "./qc/crypto/packet.c.html#6691"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[06691] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "06691"
 , "c1link" : "./qc/crypto/packet.c.html#6691"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06691] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06885"
 , "c1link" : "./qc/crypto/packet.c.html#6885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06885] The expression  ! WPACKET_reserve_bytes(pkt,len,allocbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06933"
 , "c1link" : "./qc/crypto/packet.c.html#6933"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06933] Suspicious mix of Bitwise and Literal expressions in reflen&gt;(18446744073709551615UL)/2"
}} 
,
{ "ligne" : {
   "c1" : "06974"
 , "c1link" : "./qc/crypto/packet.c.html#6974"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06974] The expression  ! WPACKET_reserve_bytes(pkt,lenbytes+len,allocbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06989"
 , "c1link" : "./qc/crypto/packet.c.html#6989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06989] Suspicious mix of Bitwise and Literal expressions in lenbytes&gt;= sizeof (size_t)"
}} 
,
{ "ligne" : {
   "c1" : "07001"
 , "c1link" : "./qc/crypto/packet.c.html#7001"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07001] The pointer lenchars is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07001"
 , "c1link" : "./qc/crypto/packet.c.html#7001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07001] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07006"
 , "c1link" : "./qc/crypto/packet.c.html#7006"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07006] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07025"
 , "c1link" : "./qc/crypto/packet.c.html#7025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07025] The expression  ! WPACKET_allocate_bytes(pkt,lenbytes, &amp; lenchars) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07202"
 , "c1link" : "./qc/crypto/packet.c.html#7202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07202] The expression  ! doclose applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07251"
 , "c1link" : "./qc/crypto/packet.c.html#7251"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07251] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07253"
 , "c1link" : "./qc/crypto/packet.c.html#7253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07253] The expression  ! WPACKET_put_bytes__(pkt,packlen,numlenbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07257"
 , "c1link" : "./qc/crypto/packet.c.html#7257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07257] The expression  ! WPACKET_put_bytes__((pkt),(numlenbytes),1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07257"
 , "c1link" : "./qc/crypto/packet.c.html#7257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07257] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "07262"
 , "c1link" : "./qc/crypto/packet.c.html#7262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07262] The expression doclose applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07272"
 , "c1link" : "./qc/crypto/packet.c.html#7272"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07272] The pointer sub is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07286"
 , "c1link" : "./qc/crypto/packet.c.html#7286"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07286] The expression  ! wpacket_intern_close(pkt,sub,0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07286"
 , "c1link" : "./qc/crypto/packet.c.html#7286"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07286] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07333"
 , "c1link" : "./qc/crypto/packet.c.html#7333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07333] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07347"
 , "c1link" : "./qc/crypto/packet.c.html#7347"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07347] The pointer sub is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07348"
 , "c1link" : "./qc/crypto/packet.c.html#7348"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07348] The pointer lenchars is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07348"
 , "c1link" : "./qc/crypto/packet.c.html#7348"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07348] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07362"
 , "c1link" : "./qc/crypto/packet.c.html#7362"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07362] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "07387"
 , "c1link" : "./qc/crypto/packet.c.html#7387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07387] The expression  ! WPACKET_allocate_bytes(pkt,lenbytes, &amp; lenchars) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07400"
 , "c1link" : "./qc/crypto/packet.c.html#7400"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07400] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07400"
 , "c1link" : "./qc/crypto/packet.c.html#7400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07400] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07413"
 , "c1link" : "./qc/crypto/packet.c.html#7413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07413] The pointer sub is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07436"
 , "c1link" : "./qc/crypto/packet.c.html#7436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07436] Suspicious mix of Bitwise and Literal expressions in maxmaxsize(lenbytes)&lt;maxsize"
}} 
,
{ "ligne" : {
   "c1" : "07446"
 , "c1link" : "./qc/crypto/packet.c.html#7446"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07446] The pointer dest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07446"
 , "c1link" : "./qc/crypto/packet.c.html#7446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07446] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07451"
 , "c1link" : "./qc/crypto/packet.c.html#7451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07451] The expression  ! WPACKET_allocate_bytes(pkt,len, &amp; dest) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07466"
 , "c1link" : "./qc/crypto/packet.c.html#7466"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07466] The pointer dest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07466"
 , "c1link" : "./qc/crypto/packet.c.html#7466"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07466] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07471"
 , "c1link" : "./qc/crypto/packet.c.html#7471"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07471] The expression  ! WPACKET_allocate_bytes(pkt,len, &amp; dest) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07531"
 , "c1link" : "./qc/crypto/packet.c.html#7531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07531] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07556"
 , "c1link" : "./qc/crypto/packet.c.html#7556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07556] The expression pkt-&gt;endfirst applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07577"
 , "c1link" : "./qc/crypto/packet.c.html#7577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07577] The pointer sub is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07577"
 , "c1link" : "./qc/crypto/packet.c.html#7577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07577] The pointer parent is declared but not initialized"
}} 
]
};
console.log('leListeStr 99 main end');
