console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/record/ssl3_record.c.html" 
 , "texte" : "File ssl/record/ssl3_record.c 371 rule violations " 
 , "fic2"  : "./qc/ssl/record/ssl3_record.c.xml" 
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "170"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "70"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "47"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "35"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01431"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#1431"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01431] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01436"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#1436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01436] The expression __l&lt;__u applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01623"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#1623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01623] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01673"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#1673"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01673] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01704"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#1704"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01704] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02759"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2759"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02759] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02789"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2789"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02789] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02790"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2790"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02790] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02791"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2791"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02791] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02791"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2791"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02791] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02821"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02821] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02822"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2822"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02822] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02823"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2823"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02823] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02823"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2823"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02823] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02833"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02833] The expression __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02834"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2834"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02834] The expression __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02835"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2835"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02835] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02835"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2835"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02835] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02846"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#2846"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02846] The expression ( - 1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05565"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5565"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05565] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05595"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05595] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05629"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05629] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05655"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05655] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05695"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5695"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05695] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05720"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05720] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05723"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05723] The expression __gid_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05746"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5746"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05746] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05772"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5772"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05772] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05799"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5799"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05799] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05828"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#5828"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05828] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06194"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#6194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06194] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07887"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#7887"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07887] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07894"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#7894"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07894] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07901"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#7901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07901] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "16913"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#16913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[16913] The expression ((18446744073709551615UL)/2) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "16944"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#16944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16944] The expression PACKET_remaining(pkt)!=num applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16957"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#16957"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16957] The expression PACKET_remaining(pkt)&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16971"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#16971"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16971] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16999"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#16999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16999] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17013"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17013"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17013] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17040"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17040"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17040] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17054"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17054"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17054] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17082"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17082"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17082] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17096"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17096"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17096] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17106"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17106] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17117"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17117] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17131"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17131] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17162"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17162] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17180"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17180] The expression PACKET_remaining(pkt)&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17198"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17198] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17211"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17211] The expression PACKET_remaining(pkt)&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17226"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17226] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17238"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17238] The expression PACKET_remaining(pkt)&gt;dest_len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17268"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[17268] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "17303"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17303] The expression PACKET_remaining(pkt)&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17315"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17315] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17315"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17315] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17317"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17317] The expression  ! PACKET_get_1( & tmp, & length)|| ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17337"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17337"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17337] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17337"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17337] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17339"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17339] The expression  ! PACKET_get_1( & tmp, & length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17340"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17340"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17340] The expression  ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17356"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17356"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17356] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17356"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17356"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17356] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17359"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17359] The expression  ! PACKET_get_net_2( & tmp, & length)|| ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17379"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17379"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17379] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17379"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17379] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17382"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17382] The expression  ! PACKET_get_net_2( & tmp, & length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17383"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17383] The expression  ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17399"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17399"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17399] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17399"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17399] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17401"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#17401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17401] The expression  ! PACKET_get_net_3( & tmp, & length)|| ! PACKET_get_bytes( & tmp, & data,(size_t )length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20171"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20171"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20171] The pointer comp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20171"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20171] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20174"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20174] The expression i&lt;num_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20186"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20186] The expression i&lt;num_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20207"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20207"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20207] The pointer rbuf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20209"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20209"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20209] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20209"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20209"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20209] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20216"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20216] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20236"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20236] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20236"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20236] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20236"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20236] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20254"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20254] The expression  ! s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20257"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20257] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20271"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20271"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20271] The expression  ! s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20292"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20292] The expression s-&gt;early_data_count+length&gt;max_early_data applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20311"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20311] The pointer rr is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20311"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20311] The pointer thisrr is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20312"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20312"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20312] The pointer rbuf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20313"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20313] The pointer sess is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20314"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20314"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20314] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20314"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20314"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20314] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20341"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20341] The expression ( & s-&gt;rlayer)-&gt;rstate applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20342"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20342"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20342] The expression ( & s-&gt;rlayer)-&gt;packet_length applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20354"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20354"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20354] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20357"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20357] The expression  ! PACKET_buf_init( & pkt,(( & s-&gt;rlayer)-&gt;packet),(( & s-&gt;rlayer)-&gt;packet_length)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20367"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20367"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20367] The expression  ! PACKET_get_net_2_len( & sslv2pkt, & sslv2len)|| ! PACKET_get_1( & sslv2pkt, & type) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20379"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20379] The expression s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20379"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20379] The expression (( & s-&gt;rlayer)-&gt;is_first_record) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20388"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20388] The expression (rbuf)-&gt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20411"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20411] The expression  ! PACKET_get_1( & pkt, & type)|| ! PACKET_get_net_2( & pkt, & version)|| ! PACKET_get_net_2_len( & pkt, & thisrr-&gt;length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20414"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20414] The expression s-&gt;msg_callback applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20427"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20427] The expression s-&gt;msg_callback applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20431"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20431] The expression  ! s-&gt;first_packet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20432"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20432"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20432] The expression s-&gt;hello_retry_request!=SSL_HRR_PENDING applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20433"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20433] The expression version!=( unsigned  int  )s-&gt;version applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20435"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20435] The expression  ! s-&gt;enc_write_ctx applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20435"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20435] The expression  ! s-&gt;write_hash applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20461"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20461] The expression (( & s-&gt;rlayer)-&gt;is_first_record) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20506"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20506] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20513"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20513] The expression s-&gt;statem.enc_read_state!=ENC_READ_STATE_ALLOW_PLAIN_ALERTS applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20535"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20535] The expression (rbuf)-&gt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20550"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20550] The expression (16384+256) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20569"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20569] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20575"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20575"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20575] The expression thisrr-&gt;length&gt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20575"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20575"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20575] The expression  ! (0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20607"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20607"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20607] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20631"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20631"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20631] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20632"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20632"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20632] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20633"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20633] The expression num_recs&lt;max_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20643"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20643"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20643] The expression ssl3_record_app_data_waiting(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20638"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20638] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20647"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20647"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20647] The expression s-&gt;hello_retry_request!=SSL_HRR_NONE applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20667"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20667"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20667] The expression ( & s-&gt;rlayer)-&gt;empty_record_count applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20678"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20678"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20678] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20687"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20687"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20687] The expression  ! is_ktls_left applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20687"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20687"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20687] The expression (0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20688"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20688"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20688] goto statement jump to skip_decryption"
}} 
,
{ "ligne" : {
   "c1" : "20692"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20692"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20692] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20699"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20699"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20699] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20719"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20719] The expression s-&gt;read_hash applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20720"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20720"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20720] The pointer mac is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20722"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20722] The expression j&lt;num_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20725"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20725"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20725] The expression thisrr-&gt;length&lt;mac_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20757"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20757"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20757] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20778"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20778"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20778] The expression ossl_statem_in_error(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20780"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20780"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20780] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20782"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20782"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20782] The expression ossl_statem_skip_early_data(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20793"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20793] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20798"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20798"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20798] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20801"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20801"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20801] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20809"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20809"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20809] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20815"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20815"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20815] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20811"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20811"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[20811] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "20818"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20818"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20818] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "20823"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20823"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20823] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20828"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20828"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20828] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20833"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20833] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20838"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20838"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20838] The expression j&lt;num_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20845"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20845"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20845] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20849"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20849"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20849] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20854"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20854"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20854] The expression (16384+1024) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20860"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20860"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20860] The expression ossl_statem_in_error(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20862"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20862"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20862] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20877"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20877"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20877] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20882"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20882"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20882] The expression j&lt;num_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20888"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20888"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20888] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20891"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20891"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20891] The expression (16384+1024) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20898"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20898"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20898] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20900"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20900"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20900] The expression  ! ssl3_do_uncompress(s,thisrr) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20907"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20907"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20907] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20914"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20914] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20927"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20927"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20927] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20945"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20945"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20945] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20947"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20947"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20947] The expression s-&gt;msg_callback applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20965"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20965"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20965] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20969"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20969"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20969] The expression  ! (0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20975"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20975"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20975] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20983"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20983"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20983] The expression s-&gt;session-&gt;ext.max_fragment_len_mode applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20983"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20983"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20983] The expression s-&gt;session-&gt;ext.max_fragment_len_mode applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20981"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20981"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20981] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20985"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20985"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20985] The expression  ! (0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20991"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20991"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20991] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20998"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#20998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20998] The expression ( & s-&gt;rlayer)-&gt;empty_record_count applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21005"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21005"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21005] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21008"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21008"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21008] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21012"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21012"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21012] The expression s-&gt;early_data_state==SSL_EARLY_DATA_READING applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21017"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21017"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21017] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21021"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21021"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21021] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21026"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21026"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21026] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21029"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21029] The expression j&lt;num_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21030"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21030"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21030] The expression macbufs[j].alloced applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21045"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21045"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21045] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21053"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21053"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21053] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21090"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21090"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21090] The pointer rec is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21091"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21091"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21091] The pointer ds is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21094"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21094"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21094] The pointer enc is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21102"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21102] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21106"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21106] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21120"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21120] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21134"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21134] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21138"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21138] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21142"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21142] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21159"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21159] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21159"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21159] The expression  ! provided applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21177"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21177] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21187"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21187] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21192"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21192] The expression  ! EVP_CipherUpdate(ds,rec-&gt;data, & outlen,rec-&gt;input,( unsigned  int  )l) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21197"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21197] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21199"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21199] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21213"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21213"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21213] The expression  ! EVP_CIPHER_CTX_get_params(ds,params) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21234"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21234] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21267"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21267"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21267] The pointer ds is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21273"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21273"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21273] The pointer enc is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21286"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21286"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21286] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21287"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21287] The expression EVP_MD_CTX_get0_md(s-&gt;write_hash) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21301"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21301] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21320"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21320] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21321"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21321] The expression recs[ctr].data!=recs[ctr].input applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21345"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21345"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21345] The expression EVP_MD_CTX_get0_md(s-&gt;read_hash) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21359"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21359] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21373"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21373] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21377"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21377] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21381"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21381] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21384"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21384] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21412"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21412] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21417"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21417"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21417] The pointer seq is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21426"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21426"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21426] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21426"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21426"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21426] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21426"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21426"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21426] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21426"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21426"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21426] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21426"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21426"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21426] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21455"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21455] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21460"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21460] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21460"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21460] The expression  ! provided applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21479"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21479"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21479] The expression loop&lt;reclen[ctr]+padnum applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21485"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21485"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21485] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21496"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21496] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21509"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21509] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21525"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21525] The expression tlstree_enc applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21526"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21526"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21526] The pointer seq is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21534"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21534] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21549"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21549"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21549] The expression provided applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21572"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21572] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21588"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21588"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21588] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21601"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21601"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21601] The expression  ! EVP_CIPHER_CTX_get_params(ds,params) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21626"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21626"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21626] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21629"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21629] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21635"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21635"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21635] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21642"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21642"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21642] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21644"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21644"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21644] The expression recs[ctr].length&lt;bs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21685"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21685"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21685] The expression pad applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21686"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21686"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21686] The expression ctr&lt;n_recs applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21717"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21717"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21717] The pointer mac_sec is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21717"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21717"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21717] The pointer seq is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21717"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21717] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21718"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21718"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21718] The pointer hash is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21719"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21719"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21719] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21719"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21719] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21724"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21724"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21724] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21740"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21740"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21740] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21742"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21742"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21742] The expression ssl3_cbc_record_digest_supported(hash) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21771"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21771] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21778"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21778] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21778"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21778] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21778"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21778] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21778"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21778] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21778"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21778] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21809"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21809"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21809] The pointer seq is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21809"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21809"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21809] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21810"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21810] The pointer hash is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21817"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21817"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21817] The pointer mac_ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21825"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21825"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21825] The expression sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21839"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21839"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21839] The expression stream_mac applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21847"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21847"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21847] The expression  ! EVP_MD_CTX_copy(hmac,hash) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21845"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21845"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21845] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21854"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21854"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21854] The expression tlstree_mac applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21862"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21862"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21862] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21862"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21862"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21862] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21862"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21862"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21862] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21862"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21862"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21862] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21862"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21862"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21862] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21876"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21876"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21876] The expression  ! sending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21878"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21878"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21878] The expression ssl3_cbc_record_digest_supported(mac_ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21885"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21885] The expression  ! EVP_PKEY_CTX_set_params(EVP_MD_CTX_get_pkey_ctx(mac_ctx),tls_hmac_params) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21903"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21903"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21903] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21899"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21899"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21899] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21908"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21908] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21921"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21921] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21917"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21917] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "21924"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21924"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21924] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "21932"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21932"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21932] The pointer sess is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21933"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21933"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21933] The pointer rr is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21954"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21954"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21954] The expression ((256+64)+(16384+1024)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21969"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21969"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21969] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21976"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21976"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21976] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "21992"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21992"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21992] The expression s-&gt;read_hash applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21993"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21993"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[21993] The pointer mac is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "21995"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#21995"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21995] The expression rr-&gt;orig_len&lt;mac_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22038"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22038] The expression ossl_statem_in_error(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22040"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22040"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22040] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22044"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22044"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22044] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22045"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22045"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22045] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22052"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22052"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22052] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "22048"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22048"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[22048] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "22055"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22055"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22055] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "22060"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22060"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22060] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22066"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22066] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22071"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22071"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22071] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22079"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22079] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22084"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22084"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22084] The expression (16384+1024) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22091"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22091"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22091] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22092"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22092"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22092] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22098"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22098"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22098] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22101"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22101] The expression (16384+1024) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22108"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22108] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22110"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22110] The expression  ! ssl3_do_uncompress(s,rr) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22116"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22116"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22116] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22125"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22125] The expression s-&gt;session-&gt;ext.max_fragment_len_mode applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22125"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22125] The expression s-&gt;session-&gt;ext.max_fragment_len_mode applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22123"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22123] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22129"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22129] The expression rr-&gt;length&gt;max_plain_length applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22135"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22135"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22135] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22140"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22140] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22147"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22147] The expression macbuf.alloced applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22157"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22157"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[22157] The pointer rr is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "22158"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[22158] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "22164"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22164"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[22164] The pointer bitmap is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "22174"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22174] The expression  ! dtls1_process_buffered_records(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22180"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22180] The expression dtls1_retrieve_buffered_record((s), & ((( & s-&gt;rlayer)-&gt;d-&gt;processed_rcds))) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22186"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22186] The expression ( & s-&gt;rlayer)-&gt;rstate applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22187"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22187] The expression ( & s-&gt;rlayer)-&gt;packet_length applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22197"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22197] The expression ( & s-&gt;rlayer)-&gt;packet_length applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22199"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22199"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22199] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22200"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22200"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22200] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22203"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22203"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22203] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22207"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22207] The expression s-&gt;msg_callback applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22218"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22218"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22218] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22218"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22218"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22218] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22218"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22218"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22218] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22223"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22223"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22223] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22223"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22223"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22223] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22223"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22223"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22223] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22230"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22230] The expression  ! s-&gt;first_packet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22231"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22231] The expression version!=s-&gt;version applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22235"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22235"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22235] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22236"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22236] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22244"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22244"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22244] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22245"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22245"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22245] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22248"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22248] The expression ((256+64)+(16384+1024)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22252"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22252] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22253"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22253"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22253] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22261"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22261] The expression s-&gt;session-&gt;ext.max_fragment_len_mode applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22261"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22261] The expression s-&gt;session-&gt;ext.max_fragment_len_mode applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22259"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22259] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22262"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22262] The expression (256+64) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22266"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22266"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22266] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22267"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22267"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22267] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22276"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22276] The expression ( & s-&gt;rlayer)-&gt;packet_length applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22281"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22281] The expression n!=more applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22282"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22282] The expression ossl_statem_in_error(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22288"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22288"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22288] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22289"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22289"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22289] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22298"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22298"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22298] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22304"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22304] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "22308"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22308"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22308] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22309"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22309"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22309] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22316"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22316] The expression  ! dtls1_record_replay_check(s,bitmap) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22319"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22319"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22319] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22320"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22320"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22320] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22329"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22329"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22329] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22337"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22337] The expression is_next_epoch applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22338"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22338"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22338] The expression (SSL_in_init(s)||ossl_statem_get_in_handshake(s)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22348"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22348"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22348] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22349"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22349"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22349] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22352"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22352"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22352] The expression  ! dtls1_process_record(s,bitmap) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22353"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22353] The expression ossl_statem_in_error(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22359"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22359"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22359] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22360"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22360"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22360] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "22369"
 , "c1link" : "./qc/ssl/record/ssl3_record.c.html#22369"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[22369] The pointer rr is declared but not initialized"
}} 
]
};
console.log('leListeStr 99 main end');
