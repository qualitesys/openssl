console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/s3_lib.c.html" 
 , "texte" : "File ssl/s3_lib.c 210 rule violations " 
 , "fic2"  : "./qc/ssl/s3_lib.c.xml" 
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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "67"
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
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000017"
 , "c3" : "Dead code"
 , "c4" : "1"
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
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000019"
 , "c3" : "Risk for an equal test to be always false"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "18"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/ssl/s3_lib.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/ssl/s3_lib.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/ssl/s3_lib.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/ssl/s3_lib.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/ssl/s3_lib.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/ssl/s3_lib.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/ssl/s3_lib.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/ssl/s3_lib.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/ssl/s3_lib.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02310"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2310"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02310] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02473"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2473"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02473] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02500"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02500] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02502"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2502"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02502] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02504"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02504] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02526"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2526"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02526] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02526"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2526"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02526] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02550"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02550] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02552"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02552] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02556"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02556] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02581"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2581"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02581] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02583"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2583"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02583] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02585"
 , "c1link" : "./qc/ssl/s3_lib.c.html#2585"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02585] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06796"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6796"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06796] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06798"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06798] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06801"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6801"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06801] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06826"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06826] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06828"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6828"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06828] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06831"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6831"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06831] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06860"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6860"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06860] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06862"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6862"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06862] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06865"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6865"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06865] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06886"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6886"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06886] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06888"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6888"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06888] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06891"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6891"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06891] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06907"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6907"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06907] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06926"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6926"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06926] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06928"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6928"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06928] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06931"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6931"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06931] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06951"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06951] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06956"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6956"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06956] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06977"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06977] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06979"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06979] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06982"
 , "c1link" : "./qc/ssl/s3_lib.c.html#6982"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06982] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07003"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07003] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07005"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07005] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07008"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07008] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07030"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7030"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07030] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07032"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07032] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07035"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07035] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07059"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7059"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07059] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07061"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7061"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07061] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07064"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07460"
 , "c1link" : "./qc/ssl/s3_lib.c.html#7460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07460] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "16999"
 , "c1link" : "./qc/ssl/s3_lib.c.html#16999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16999] The expression  ! PACKET_peek_sub_packet(pkt,subpkt,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17027"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17027"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17027] The expression  ! PACKET_peek_net_2(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17041"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17041] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17068"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17068"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17068] The expression  ! PACKET_peek_net_3(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17082"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17082"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17082] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17110"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17110] The expression  ! PACKET_peek_net_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17124"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17124] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17134"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17134] The expression  ! PACKET_remaining(pkt) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17145"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17145] The expression  ! PACKET_peek_1(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17159"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17159] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17190"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17190] The expression  ! PACKET_peek_4(pkt,data) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17226"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17226] The expression  ! PACKET_peek_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17254"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[17254] The expression  ! PACKET_peek_copy_bytes(pkt,data,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17343"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17343"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17343] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17343"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17343] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17365"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17365"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17365] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17365"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17365] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17384"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17384] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17384"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17384] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17407"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17407] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17407"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17407] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17427"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17427"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[17427] The pointer data is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "17427"
 , "c1link" : "./qc/ssl/s3_lib.c.html#17427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17427] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19932"
 , "c1link" : "./qc/ssl/s3_lib.c.html#19932"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19932] The expression ssl_tsan_lock(ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23092"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23092] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "23093"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23093"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23093] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "23107"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23107] The expression  ! ssl_srp_ctx_init_intern(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23111"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23111] The expression  ! s-&gt;method-&gt;ssl_clear(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23181"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23181] The expression  ! ssl_free_wbio_buffer(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23261"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23261] The expression  ! SSL_set0_tmp_dh_pkey(s,pkdh) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23329"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23329"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23329] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23399"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23399] The expression larg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23413"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23413] The expression larg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23436"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23436"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[23436] The pointer cipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "23437"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23437] The expression  ! s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23465"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23465"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[23465] The pointer clist is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "23468"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23468"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23468] The expression  ! s-&gt;session applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23472"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23472"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23472] The expression parg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23540"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23540] The expression pctype applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23546"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23546] The expression  ! s-&gt;server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23712"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23712] The expression  ! SSL_CTX_set0_tmp_dh_pkey(ctx,pkdh) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23841"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23841"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23841] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23863"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23863"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23863] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23931"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23931"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23931] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23944"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23944] The expression  ! OPENSSL_sk_push(ossl_check_X509_sk_type(ctx-&gt;extra_certs),ossl_check_X509_type((X509 *)parg)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23975"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23975] The expression larg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23989"
 , "c1link" : "./qc/ssl/s3_lib.c.html#23989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23989] The expression larg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24083"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24083"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[24083] The pointer cp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "24105"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[24105] The pointer tbl is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "24149"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24149] The expression  ! WPACKET_put_bytes__((pkt),(c-&gt;id&amp;0xffff),2) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24149"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24149] The expression 2 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24159"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24159"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[24159] The pointer c is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "24164"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24164"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[24164] The pointer prio is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "24164"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24164"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[24164] The pointer allow is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "24177"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24177] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "24177"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000017[24177] The condition is always false. Dead code"
}} 
,
{ "ligne" : {
   "c1" : "24190"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24190] The condition of do while loop is always false. The loop body is run once only do{} while (0);"
}} 
,
{ "ligne" : {
   "c1" : "24190"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24190] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "24216"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24216] The expression found applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24323"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24323] The expression  ! ok applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24329"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24329] The expression  ! ssl_security(s,(2|(1&lt;&lt;16)),c-&gt;strength_bits,0,( void  *)c) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24329"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24329] The expression (2|(1&lt;&lt;16)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24330"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24330] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "24335"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24335"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24335] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24340"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24340"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24340] The expression prefer_sha256 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24343"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24343] The expression EVP_MD_is_a(ssl_md(s-&gt;ctx,tmp-&gt;algorithm2),'SHA2-256') applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24344"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24344] The expression 'SHA2-256' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24371"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24371"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24371] The expression s-&gt;cert-&gt;ctype applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24380"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24380] The expression (22) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24380"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24380] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24381"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24381] The expression (67) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24381"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24381] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24382"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24382] The expression (68) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24382"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24382] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24383"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24383] The expression (238) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24383"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24383] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24384"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24384] The expression (239) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24384"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24384] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24388"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24388] The expression (67) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24388"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24388] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24389"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24389] The expression (68) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24389"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24389] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24394"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24394] The expression  ! WPACKET_put_bytes__((pkt),(5),1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24394"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24394] The expression (5) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24394"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24394] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24397"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24397] The expression (6) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24397"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24397] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24400"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24400] The expression (1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24400"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24400] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24402"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24402] The expression (2) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24402"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24402] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24411"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24411] The expression (64) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "24411"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24411] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "24465"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24465"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24465] The expression s-&gt;s3.alert_dispatch applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24467"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24467"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24467] The expression s-&gt;s3.alert_dispatch applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24511"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24511] The expression s-&gt;s3.renegotiate applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24528"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24528"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24528] The expression s-&gt;s3.renegotiate applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24588"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24588"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24588] The expression s-&gt;s3.renegotiate applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24644"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24644"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24644] The expression server applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24648"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24648] The expression send_time applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24656"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24656"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24656] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24656"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24656"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24656] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24656"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24656"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24656] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24656"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24656"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24656] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24683"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24683"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[24683] The variable s is post  and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "24685"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24685"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[24685] The pointer pskpms is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "24685"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24685"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[24685] The pointer t is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "24697"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[24697] The variable s is post  and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "24702"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24702"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24702] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24704"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24704] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24704"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24704] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24704"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24704] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24704"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24704] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24704"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24704] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24710"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24710"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24710] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24710"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24710"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24710] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24710"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24710"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24710] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24710"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24710"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24710] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24710"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24710"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24710] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24720"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24720] The expression  ! s-&gt;method-&gt;ssl3_enc-&gt;generate_master_secret(s,s-&gt;session-&gt;master_key,pskpms,pskpmslen, &amp; s-&gt;session-&gt;master_key_length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24725"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24725"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24725] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24733"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24733"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24733] The expression  ! s-&gt;method-&gt;ssl3_enc-&gt;generate_master_secret(s,s-&gt;session-&gt;master_key,pms,pmslen, &amp; s-&gt;session-&gt;master_key_length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24737"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24737"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24737] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24743"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24743"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24743] The expression pms applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24744"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24744"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24744] The expression free_pms applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24790"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24790"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24790] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24792"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24792"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24792] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24832"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24832"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24832] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24848"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24848"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24848] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24856"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24856"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24856] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24858"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24858"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24858] The expression  ! EVP_PKEY_CTX_set_group_name(pctx,ginf-&gt;realname) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24864"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24864"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24864] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24907"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24907"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24907] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24917"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24917"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24917] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24919"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24919"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24919] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24920"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24920] The expression  ! EVP_PKEY_CTX_set_group_name(pctx,ginf-&gt;realname) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24926"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24926"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24926] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24953"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24953] The expression  ! s-&gt;hit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24980"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24980"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24980] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24986"
 , "c1link" : "./qc/ssl/s3_lib.c.html#24986"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[24986] The pointer pctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "25019"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25019"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25019] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25022"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[25022] The expression 'DH' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "25036"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25036"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25036] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25045"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25045"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25045] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25048"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25048"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25048] The expression gensecret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25075"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25075] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "25081"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25081"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[25081] The pointer pctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "25113"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25113"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25113] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25127"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25127] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25136"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25136"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25136] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25139"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25139] The expression gensecret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25165"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25165] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "25175"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25175"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[25175] The pointer pctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "25212"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25212"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25212] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25231"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25231"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25231] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25240"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25240"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25240] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25243"
 , "c1link" : "./qc/ssl/s3_lib.c.html#25243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25243] The expression gensecret applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
