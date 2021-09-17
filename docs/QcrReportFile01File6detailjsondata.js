console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/crl.c.html" 
 , "texte" : "File apps/crl.c 137 rule violations " 
 , "fic2"  : "./qc/apps/crl.c.xml" 
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
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "36"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "44"
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
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "26"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000010"
 , "c3" : "A switch clause refers to a jump label"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/apps/crl.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/apps/crl.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/apps/crl.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/apps/crl.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/apps/crl.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/apps/crl.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/apps/crl.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/apps/crl.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/apps/crl.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02076"
 , "c1link" : "./qc/apps/crl.c.html#2076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02076] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02239"
 , "c1link" : "./qc/apps/crl.c.html#2239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02239] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02266"
 , "c1link" : "./qc/apps/crl.c.html#2266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02266] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02268"
 , "c1link" : "./qc/apps/crl.c.html#2268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02268] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/apps/crl.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/apps/crl.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02270] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/crl.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/crl.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/crl.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02292] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02316"
 , "c1link" : "./qc/apps/crl.c.html#2316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02316] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/apps/crl.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02318] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/apps/crl.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02322] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/apps/crl.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02322] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02347"
 , "c1link" : "./qc/apps/crl.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02349"
 , "c1link" : "./qc/apps/crl.c.html#2349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02349] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/apps/crl.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/apps/crl.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02351] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02718"
 , "c1link" : "./qc/apps/crl.c.html#2718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02718] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02719"
 , "c1link" : "./qc/apps/crl.c.html#2719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02719] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05909"
 , "c1link" : "./qc/apps/crl.c.html#5909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05909] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05911"
 , "c1link" : "./qc/apps/crl.c.html#5911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05911] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05914"
 , "c1link" : "./qc/apps/crl.c.html#5914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05914] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05914"
 , "c1link" : "./qc/apps/crl.c.html#5914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05914] Suspicious mix of Bitwise and Literal expressions in __nbytes&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "05939"
 , "c1link" : "./qc/apps/crl.c.html#5939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05939] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05941"
 , "c1link" : "./qc/apps/crl.c.html#5941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05941] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05944"
 , "c1link" : "./qc/apps/crl.c.html#5944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05944] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05944"
 , "c1link" : "./qc/apps/crl.c.html#5944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05944] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05973"
 , "c1link" : "./qc/apps/crl.c.html#5973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05973] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05975"
 , "c1link" : "./qc/apps/crl.c.html#5975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05975] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/apps/crl.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/apps/crl.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05978] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05999"
 , "c1link" : "./qc/apps/crl.c.html#5999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05999] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06001"
 , "c1link" : "./qc/apps/crl.c.html#6001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06001] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06004"
 , "c1link" : "./qc/apps/crl.c.html#6004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06004] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06004"
 , "c1link" : "./qc/apps/crl.c.html#6004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06004] Suspicious mix of Bitwise and Literal expressions in __size&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06020"
 , "c1link" : "./qc/apps/crl.c.html#6020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06020] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06039"
 , "c1link" : "./qc/apps/crl.c.html#6039"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06039] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06041"
 , "c1link" : "./qc/apps/crl.c.html#6041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06041] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06044"
 , "c1link" : "./qc/apps/crl.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06044] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06044"
 , "c1link" : "./qc/apps/crl.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06044] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__buf,2&gt;1)&lt;__len"
}} 
,
{ "ligne" : {
   "c1" : "06064"
 , "c1link" : "./qc/apps/crl.c.html#6064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06069"
 , "c1link" : "./qc/apps/crl.c.html#6069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06069"
 , "c1link" : "./qc/apps/crl.c.html#6069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06069] Suspicious mix of Bitwise and Literal expressions in __size *  sizeof (__gid_t)&gt;__builtin_object_size(__list,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06090"
 , "c1link" : "./qc/apps/crl.c.html#6090"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06090] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06092"
 , "c1link" : "./qc/apps/crl.c.html#6092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06092] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06095"
 , "c1link" : "./qc/apps/crl.c.html#6095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06095] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06095"
 , "c1link" : "./qc/apps/crl.c.html#6095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06095] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06116"
 , "c1link" : "./qc/apps/crl.c.html#6116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06116] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06118"
 , "c1link" : "./qc/apps/crl.c.html#6118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06118] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06121"
 , "c1link" : "./qc/apps/crl.c.html#6121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06121] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06121"
 , "c1link" : "./qc/apps/crl.c.html#6121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06121] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06143"
 , "c1link" : "./qc/apps/crl.c.html#6143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06143] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06145"
 , "c1link" : "./qc/apps/crl.c.html#6145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06145] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06148"
 , "c1link" : "./qc/apps/crl.c.html#6148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06148] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06148"
 , "c1link" : "./qc/apps/crl.c.html#6148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06148] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06172"
 , "c1link" : "./qc/apps/crl.c.html#6172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06172] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06174"
 , "c1link" : "./qc/apps/crl.c.html#6174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06174] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/apps/crl.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06177] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/apps/crl.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06177] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "07183"
 , "c1link" : "./qc/apps/crl.c.html#7183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07183] Suspicious mix of Bitwise and Literal expressions in ( unsigned  char  *)__cmsg+(((__cmsg-&gt;cmsg_len)+ sizeof (size_t)-1)&amp;(size_t ) ~ ( sizeof (size_t)-1))&gt;(( unsigned  char  *)__mhdr-&gt;msg_control+__mhdr-&gt;msg_controllen)"
}} 
,
{ "ligne" : {
   "c1" : "07482"
 , "c1link" : "./qc/apps/crl.c.html#7482"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07482] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07484"
 , "c1link" : "./qc/apps/crl.c.html#7484"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07484] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07487"
 , "c1link" : "./qc/apps/crl.c.html#7487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07487] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07487"
 , "c1link" : "./qc/apps/crl.c.html#7487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07487] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "07513"
 , "c1link" : "./qc/apps/crl.c.html#7513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07513] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07515"
 , "c1link" : "./qc/apps/crl.c.html#7515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07515] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/apps/crl.c.html#7518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07518] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/apps/crl.c.html#7518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07518] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "08918"
 , "c1link" : "./qc/apps/crl.c.html#8918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08918] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08951"
 , "c1link" : "./qc/apps/crl.c.html#8951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08951] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18950"
 , "c1link" : "./qc/apps/crl.c.html#18950"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[18950] The pointer pkey is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "18986"
 , "c1link" : "./qc/apps/crl.c.html#18986"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[18986] The pointer prog is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "18999"
 , "c1link" : "./qc/apps/crl.c.html#18999"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18999] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19003"
 , "c1link" : "./qc/apps/crl.c.html#19003"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[19003] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19005"
 , "c1link" : "./qc/apps/crl.c.html#19005"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19005] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19009"
 , "c1link" : "./qc/apps/crl.c.html#19009"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19009] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19011"
 , "c1link" : "./qc/apps/crl.c.html#19011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19011] The expression  ! opt_format(opt_arg(),(1L&lt;&lt;1), &amp; informat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19011"
 , "c1link" : "./qc/apps/crl.c.html#19011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19011] The expression (1L&lt;&lt;1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19012"
 , "c1link" : "./qc/apps/crl.c.html#19012"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19012] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19018"
 , "c1link" : "./qc/apps/crl.c.html#19018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19018] The expression  ! opt_format(opt_arg(),(1L&lt;&lt;1), &amp; outformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19018"
 , "c1link" : "./qc/apps/crl.c.html#19018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19018] The expression (1L&lt;&lt;1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19019"
 , "c1link" : "./qc/apps/crl.c.html#19019"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19019] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19025"
 , "c1link" : "./qc/apps/crl.c.html#19025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19025] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; keyformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19025"
 , "c1link" : "./qc/apps/crl.c.html#19025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19025] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19026"
 , "c1link" : "./qc/apps/crl.c.html#19026"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19026] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19064"
 , "c1link" : "./qc/apps/crl.c.html#19064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19064] The expression  ! set_dateopt( &amp; dateopt,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19065"
 , "c1link" : "./qc/apps/crl.c.html#19065"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19065] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19095"
 , "c1link" : "./qc/apps/crl.c.html#19095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19095] The expression  ! set_nameopt(opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19096"
 , "c1link" : "./qc/apps/crl.c.html#19096"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19096] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19102"
 , "c1link" : "./qc/apps/crl.c.html#19102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19102] The expression  ! opt_provider(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19103"
 , "c1link" : "./qc/apps/crl.c.html#19103"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19103] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19111"
 , "c1link" : "./qc/apps/crl.c.html#19111"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19111] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19118"
 , "c1link" : "./qc/apps/crl.c.html#19118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19118] The expression  ! opt_md(digestname, &amp; digest) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19119"
 , "c1link" : "./qc/apps/crl.c.html#19119"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19119] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19127"
 , "c1link" : "./qc/apps/crl.c.html#19127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19127] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19129"
 , "c1link" : "./qc/apps/crl.c.html#19129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19129] The expression do_ver applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19130"
 , "c1link" : "./qc/apps/crl.c.html#19130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19130] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19136"
 , "c1link" : "./qc/apps/crl.c.html#19136"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19136] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19143"
 , "c1link" : "./qc/apps/crl.c.html#19143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19143] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19159"
 , "c1link" : "./qc/apps/crl.c.html#19159"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19159] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19170"
 , "c1link" : "./qc/apps/crl.c.html#19170"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19170] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19180"
 , "c1link" : "./qc/apps/crl.c.html#19180"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19180] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19185"
 , "c1link" : "./qc/apps/crl.c.html#19185"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19185] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19197"
 , "c1link" : "./qc/apps/crl.c.html#19197"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19197] The pointer newcrl is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19197"
 , "c1link" : "./qc/apps/crl.c.html#19197"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19197] The pointer delta is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19198"
 , "c1link" : "./qc/apps/crl.c.html#19198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19198] The expression  ! keyfile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19200"
 , "c1link" : "./qc/apps/crl.c.html#19200"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19200] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19203"
 , "c1link" : "./qc/apps/crl.c.html#19203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19203] The expression  ! newcrl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19204"
 , "c1link" : "./qc/apps/crl.c.html#19204"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19204] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19220"
 , "c1link" : "./qc/apps/crl.c.html#19220"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19220] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19225"
 , "c1link" : "./qc/apps/crl.c.html#19225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19225] The expression delta applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19230"
 , "c1link" : "./qc/apps/crl.c.html#19230"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19230] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19234"
 , "c1link" : "./qc/apps/crl.c.html#19234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19234] The expression badsig applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19235"
 , "c1link" : "./qc/apps/crl.c.html#19235"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19235] The pointer sig is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19245"
 , "c1link" : "./qc/apps/crl.c.html#19245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19245] The expression num applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19251"
 , "c1link" : "./qc/apps/crl.c.html#19251"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19251] The pointer crlnum is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19263"
 , "c1link" : "./qc/apps/crl.c.html#19263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19263] The expression crlnum applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19280"
 , "c1link" : "./qc/apps/crl.c.html#19280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19280] The expression ok applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19284"
 , "c1link" : "./qc/apps/crl.c.html#19284"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19284] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19302"
 , "c1link" : "./qc/apps/crl.c.html#19302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19302] The expression X509_CRL_get0_nextUpdate(x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19313"
 , "c1link" : "./qc/apps/crl.c.html#19313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19313] The expression  ! X509_CRL_digest(x,digest,md, &amp; n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19315"
 , "c1link" : "./qc/apps/crl.c.html#19315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19315] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19332"
 , "c1link" : "./qc/apps/crl.c.html#19332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19332] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19334"
 , "c1link" : "./qc/apps/crl.c.html#19334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19334] The expression text applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19337"
 , "c1link" : "./qc/apps/crl.c.html#19337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19337] The expression noout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19339"
 , "c1link" : "./qc/apps/crl.c.html#19339"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19339] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19346"
 , "c1link" : "./qc/apps/crl.c.html#19346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19346] The expression  ! i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19348"
 , "c1link" : "./qc/apps/crl.c.html#19348"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19348] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
