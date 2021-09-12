console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/statem/statem.c.html" 
 , "texte" : "File ssl/statem/statem.c 175 rule violations " 
 , "fic2"  : "./qc/ssl/statem/statem.c.xml" 
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
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000008"
 , "c3" : "Suspicious bitwise operation"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "111"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "26"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-CPPCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "11"
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
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01187"
 , "c1link" : "./qc/ssl/statem/statem.c.html#1187"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01187] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01192"
 , "c1link" : "./qc/ssl/statem/statem.c.html#1192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01192] The expression __l&lt;__u applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01379"
 , "c1link" : "./qc/ssl/statem/statem.c.html#1379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01379] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01429"
 , "c1link" : "./qc/ssl/statem/statem.c.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01429] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/ssl/statem/statem.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01460] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01830"
 , "c1link" : "./qc/ssl/statem/statem.c.html#1830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01830] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03071"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3071"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03071] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03101"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03101] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03102"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03102] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03103"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03103] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03103"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03103] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03133"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03133] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03134"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03134] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03135"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03135] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03135"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03135] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03145"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03145] The expression __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03146"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03146] The expression __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03147"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03147] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03147"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03147] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03158"
 , "c1link" : "./qc/ssl/statem/statem.c.html#3158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03158] The expression ( - 1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05868"
 , "c1link" : "./qc/ssl/statem/statem.c.html#5868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05868] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05875"
 , "c1link" : "./qc/ssl/statem/statem.c.html#5875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05875] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05882"
 , "c1link" : "./qc/ssl/statem/statem.c.html#5882"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05882] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09875"
 , "c1link" : "./qc/ssl/statem/statem.c.html#9875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09875] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09905"
 , "c1link" : "./qc/ssl/statem/statem.c.html#9905"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09905] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09939"
 , "c1link" : "./qc/ssl/statem/statem.c.html#9939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09939] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09965"
 , "c1link" : "./qc/ssl/statem/statem.c.html#9965"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09965] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10005"
 , "c1link" : "./qc/ssl/statem/statem.c.html#10005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10005] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10030"
 , "c1link" : "./qc/ssl/statem/statem.c.html#10030"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10030] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10033"
 , "c1link" : "./qc/ssl/statem/statem.c.html#10033"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10033] The expression __gid_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10056"
 , "c1link" : "./qc/ssl/statem/statem.c.html#10056"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10056] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10082"
 , "c1link" : "./qc/ssl/statem/statem.c.html#10082"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10082] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10109"
 , "c1link" : "./qc/ssl/statem/statem.c.html#10109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10109] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10138"
 , "c1link" : "./qc/ssl/statem/statem.c.html#10138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10138] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17111"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[17111] The expression ((18446744073709551615UL)/2) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "17142"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17142] The expression PACKET_remaining(pkt)!=num applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17155"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17155] The expression PACKET_remaining(pkt)&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17169"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17169] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17197"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17197] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17211"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17211] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17238"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17238] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17252"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17252] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17280"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17280] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17294"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17294] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17304"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17304] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17315"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17315] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17329"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17329] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17360"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17360"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17360] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17378"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17378] The expression PACKET_remaining(pkt)&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17396"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17396] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17409"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17409] The expression PACKET_remaining(pkt)&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17424"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17424] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17436"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17436] The expression PACKET_remaining(pkt)&gt;dest_len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17466"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17466"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[17466] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "17501"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17501] The expression PACKET_remaining(pkt)&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17513"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17513"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17513] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17513"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17513] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17515"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17515] The expression  ! PACKET_get_1( & tmp, & length)|| ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17535"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17535"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17535] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17535"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17535] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17537"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17537] The expression  ! PACKET_get_1( & tmp, & length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17538"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17538"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17538] The expression  ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17554"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17554"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17554] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17554"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17554] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17557"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17557] The expression  ! PACKET_get_net_2( & tmp, & length)|| ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17577"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17577] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17577"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17577"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17577] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17580"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17580] The expression  ! PACKET_get_net_2( & tmp, & length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17581"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17581"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17581] The expression  ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17597"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17597"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17597] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17597"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17597] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17599"
 , "c1link" : "./qc/ssl/statem/statem.c.html#17599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17599] The expression  ! PACKET_get_net_3( & tmp, & length)|| ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20531"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20531] The expression s-&gt;statem.in_init&&s-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20536"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20536"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20536] The expression s-&gt;statem.enc_write_state!=ENC_WRITE_STATE_INVALID applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20579"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20579"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20579] The expression s-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20597"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20597] The expression inhand applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20609"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20609"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20609] The expression  ! s-&gt;server||s-&gt;statem.hand_state!=TLS_ST_EARLY_DATA||s-&gt;hello_retry_request==SSL_HRR_COMPLETE applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20620"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20620"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20620] The expression s-&gt;statem.hand_state==TLS_ST_PENDING_EARLY_DATA_END||s-&gt;statem.hand_state==TLS_ST_EARLY_DATA applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20623"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20623] The expression s-&gt;early_data_state==SSL_EARLY_DATA_WRITE_RETRY applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20631"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20631"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20631] The expression  ! s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20632"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20632"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20632] The expression (sending&&(s-&gt;statem.hand_state==TLS_ST_PENDING_EARLY_DATA_END||s-&gt;statem.hand_state==TLS_ST_EARLY_DATA)&&s-&gt;early_data_state!=SSL_EARLY_DATA_WRITING)||( ! sending&&s-&gt;statem.hand_state==TLS_ST_EARLY_DATA) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20641"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20641] The expression sending&&s-&gt;early_data_state==SSL_EARLY_DATA_WRITE_RETRY applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20645"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20645] The expression s-&gt;early_data_state==SSL_EARLY_DATA_FINISHED_READING&&s-&gt;statem.hand_state==TLS_ST_EARLY_DATA applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20681"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20681"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20681] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20687"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20687"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20687] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20715"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20715"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20715] The expression st-&gt;state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20730"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20730"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20730] The expression  ! SSL_in_init(s)||SSL_in_before(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20735"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20735"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20735] The expression  ! SSL_clear(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20739"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20739"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20739] The expression st-&gt;state==MSG_FLOW_UNINITED||st-&gt;state==MSG_FLOW_FINISHED applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20741"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20741"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20741] The expression st-&gt;state==MSG_FLOW_UNINITED applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20749"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20749"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20749] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20764"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20764"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20764] The expression server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20763"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20763"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20763] The expression (0xFEFF&0xff00) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20764"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20764"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20764] The expression (0x0100&0xff00) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20770"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20770"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20770] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20779"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20779"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20779] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20783"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[20783] Suspicious bitwise operation with value 0, result is a|0 = a"
}} 
,
{ "ligne" : {
   "c1" : "20793"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20793] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20798"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20798] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20801"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20801"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20801] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20803"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20803"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20803] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20811"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20811"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20811] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20819"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20819"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20819] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20829"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20829] The expression  ! ssl3_setup_buffers(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20835"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20835"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20835] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20844"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20844"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20844] The expression  ! ssl_init_wbio_buffer(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20850"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20850"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20850] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20853"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20853"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20853] The expression (SSL_in_before(s))||s-&gt;renegotiate applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20855"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20855"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20855] The expression  ! tls_setup_handshake(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20857"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20857"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20857] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20868"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20868] The expression st-&gt;state!=MSG_FLOW_FINISHED applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20869"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20869"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20869] The expression st-&gt;state==MSG_FLOW_READING applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20871"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20871"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20871] The expression ssret==SUB_STATE_FINISHED applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20876"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20876"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20876] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20878"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20878"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20878] The expression st-&gt;state==MSG_FLOW_WRITING applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20880"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20880"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20880] The expression ssret==SUB_STATE_FINISHED applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20883"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20883"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20883] The expression ssret==SUB_STATE_END_HANDSHAKE applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20887"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20887"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20887] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20891"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20891"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20891] The expression (s)-&gt;statem.in_init&&(s)-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20891"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20891"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20891] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "20895"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20895] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20901"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20901"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20901] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20913"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20913] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20916"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20916] The expression server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20938"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20938] The expression  ! BUF_MEM_grow_clean(s-&gt;init_buf,( int  )size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20941"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20941] The expression size&lt;msg_offset applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20967"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20967"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20967] The expression s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20979"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20979] The expression st-&gt;read_state_first_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20984"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20984"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20984] The condition of do while loop is always true, infinite loop risk while (1) do{} 1"
}} 
,
{ "ligne" : {
   "c1" : "20984"
 , "c1link" : "./qc/ssl/statem/statem.c.html#20984"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20984] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "21004"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21004] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21008"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21008] The expression s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21017"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21017"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21017] The expression  ! transition(s,mt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21020"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21020] The expression s-&gt;s3.tmp.message_size&gt;max_message_size(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21062"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21062] The expression  ! PACKET_buf_init( & pkt,s-&gt;init_msg,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21077"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21077] The expression (s)-&gt;statem.in_init&&(s)-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21077"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21077] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21081"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21081"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21081] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21105"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21105] The expression (s)-&gt;statem.in_init&&(s)-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21105"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21105] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21109"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21109] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21104"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[21104] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "21147"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21147] The expression st-&gt;hand_state==TLS_ST_CW_CHANGE||st-&gt;hand_state==TLS_ST_SW_CHANGE applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21189"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21189] The expression s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21201"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21201] The condition of do while loop is always true, infinite loop risk while (1) do{} 1"
}} 
,
{ "ligne" : {
   "c1" : "21201"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21201] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "21206"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21206] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21210"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21210"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21210] The expression s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21226"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21226] The expression (s)-&gt;statem.in_init&&(s)-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21226"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21226] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21230"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21230] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21236"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21236] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21238"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21238] The expression (s)-&gt;statem.in_init&&(s)-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21238"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21238] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21242"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21242"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21242] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21237"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21237"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[21237] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "21256"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21256] The expression  ! get_construct_message_f(s, & pkt, & confunc, & mt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21266"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21266] The expression  ! WPACKET_init( & pkt,s-&gt;init_buf)|| ! s-&gt;method-&gt;ssl3_enc-&gt;set_handshake_header((s),( & pkt),(mt)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21280"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21280] The expression  ! confunc(s, & pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21278"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21278] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21282"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21282] The expression (s)-&gt;statem.in_init&&(s)-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21282"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21282] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21286"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21286"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21286] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21289"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21289] The expression  ! s-&gt;method-&gt;ssl3_enc-&gt;close_construct_packet((s),( & pkt),(mt))|| ! WPACKET_finish( & pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21303"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21303] The expression st-&gt;use_timer applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21315"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21315] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21317"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21317] The expression (s)-&gt;statem.in_init&&(s)-&gt;statem.state==MSG_FLOW_ERROR applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21317"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21317] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21321"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21321] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21316"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21316"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[21316] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "21370"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21370"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21370] The expression st-&gt;state==MSG_FLOW_UNINITED applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21373"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21373] The expression  ! s-&gt;s3.in_read_app_data applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21376"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21376"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21376] The expression s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21381"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21381] The expression st-&gt;hand_state==TLS_ST_BEFORE||st-&gt;hand_state==TLS_ST_SR_CLNT_HELLO applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21389"
 , "c1link" : "./qc/ssl/statem/statem.c.html#21389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21389] The expression st-&gt;hand_state==TLS_ST_CW_CLNT_HELLO applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
