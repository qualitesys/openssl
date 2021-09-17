console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/pkcs8.c.html" 
 , "texte" : "File apps/pkcs8.c 144 rule violations " 
 , "fic2"  : "./qc/apps/pkcs8.c.xml" 
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
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "51"
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
 , "c4" : "34"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/apps/pkcs8.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/apps/pkcs8.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/apps/pkcs8.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/apps/pkcs8.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/apps/pkcs8.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/apps/pkcs8.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/apps/pkcs8.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/apps/pkcs8.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/apps/pkcs8.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02076"
 , "c1link" : "./qc/apps/pkcs8.c.html#2076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02076] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02239"
 , "c1link" : "./qc/apps/pkcs8.c.html#2239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02239] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02266"
 , "c1link" : "./qc/apps/pkcs8.c.html#2266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02266] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02268"
 , "c1link" : "./qc/apps/pkcs8.c.html#2268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02268] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/apps/pkcs8.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/apps/pkcs8.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02270] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/pkcs8.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/pkcs8.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/pkcs8.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02292] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02316"
 , "c1link" : "./qc/apps/pkcs8.c.html#2316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02316] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/apps/pkcs8.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02318] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/apps/pkcs8.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02322] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/apps/pkcs8.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02322] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02347"
 , "c1link" : "./qc/apps/pkcs8.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02349"
 , "c1link" : "./qc/apps/pkcs8.c.html#2349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02349] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/apps/pkcs8.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/apps/pkcs8.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02351] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02718"
 , "c1link" : "./qc/apps/pkcs8.c.html#2718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02718] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02719"
 , "c1link" : "./qc/apps/pkcs8.c.html#2719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02719] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05909"
 , "c1link" : "./qc/apps/pkcs8.c.html#5909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05909] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05911"
 , "c1link" : "./qc/apps/pkcs8.c.html#5911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05911] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05914"
 , "c1link" : "./qc/apps/pkcs8.c.html#5914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05914] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05914"
 , "c1link" : "./qc/apps/pkcs8.c.html#5914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05914] Suspicious mix of Bitwise and Literal expressions in __nbytes&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "05939"
 , "c1link" : "./qc/apps/pkcs8.c.html#5939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05939] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05941"
 , "c1link" : "./qc/apps/pkcs8.c.html#5941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05941] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05944"
 , "c1link" : "./qc/apps/pkcs8.c.html#5944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05944] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05944"
 , "c1link" : "./qc/apps/pkcs8.c.html#5944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05944] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05973"
 , "c1link" : "./qc/apps/pkcs8.c.html#5973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05973] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05975"
 , "c1link" : "./qc/apps/pkcs8.c.html#5975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05975] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/apps/pkcs8.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/apps/pkcs8.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05978] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05999"
 , "c1link" : "./qc/apps/pkcs8.c.html#5999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05999] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06001"
 , "c1link" : "./qc/apps/pkcs8.c.html#6001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06001] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06004"
 , "c1link" : "./qc/apps/pkcs8.c.html#6004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06004] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06004"
 , "c1link" : "./qc/apps/pkcs8.c.html#6004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06004] Suspicious mix of Bitwise and Literal expressions in __size&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06020"
 , "c1link" : "./qc/apps/pkcs8.c.html#6020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06020] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06039"
 , "c1link" : "./qc/apps/pkcs8.c.html#6039"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06039] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06041"
 , "c1link" : "./qc/apps/pkcs8.c.html#6041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06041] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06044"
 , "c1link" : "./qc/apps/pkcs8.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06044] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06044"
 , "c1link" : "./qc/apps/pkcs8.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06044] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__buf,2&gt;1)&lt;__len"
}} 
,
{ "ligne" : {
   "c1" : "06064"
 , "c1link" : "./qc/apps/pkcs8.c.html#6064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06069"
 , "c1link" : "./qc/apps/pkcs8.c.html#6069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06069"
 , "c1link" : "./qc/apps/pkcs8.c.html#6069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06069] Suspicious mix of Bitwise and Literal expressions in __size *  sizeof (__gid_t)&gt;__builtin_object_size(__list,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06090"
 , "c1link" : "./qc/apps/pkcs8.c.html#6090"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06090] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06092"
 , "c1link" : "./qc/apps/pkcs8.c.html#6092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06092] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06095"
 , "c1link" : "./qc/apps/pkcs8.c.html#6095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06095] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06095"
 , "c1link" : "./qc/apps/pkcs8.c.html#6095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06095] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06116"
 , "c1link" : "./qc/apps/pkcs8.c.html#6116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06116] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06118"
 , "c1link" : "./qc/apps/pkcs8.c.html#6118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06118] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06121"
 , "c1link" : "./qc/apps/pkcs8.c.html#6121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06121] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06121"
 , "c1link" : "./qc/apps/pkcs8.c.html#6121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06121] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06143"
 , "c1link" : "./qc/apps/pkcs8.c.html#6143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06143] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06145"
 , "c1link" : "./qc/apps/pkcs8.c.html#6145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06145] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06148"
 , "c1link" : "./qc/apps/pkcs8.c.html#6148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06148] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06148"
 , "c1link" : "./qc/apps/pkcs8.c.html#6148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06148] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06172"
 , "c1link" : "./qc/apps/pkcs8.c.html#6172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06172] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06174"
 , "c1link" : "./qc/apps/pkcs8.c.html#6174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06174] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/apps/pkcs8.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06177] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/apps/pkcs8.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06177] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "07183"
 , "c1link" : "./qc/apps/pkcs8.c.html#7183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07183] Suspicious mix of Bitwise and Literal expressions in ( unsigned  char  *)__cmsg+(((__cmsg-&gt;cmsg_len)+ sizeof (size_t)-1)&amp;(size_t ) ~ ( sizeof (size_t)-1))&gt;(( unsigned  char  *)__mhdr-&gt;msg_control+__mhdr-&gt;msg_controllen)"
}} 
,
{ "ligne" : {
   "c1" : "07482"
 , "c1link" : "./qc/apps/pkcs8.c.html#7482"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07482] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07484"
 , "c1link" : "./qc/apps/pkcs8.c.html#7484"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07484] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07487"
 , "c1link" : "./qc/apps/pkcs8.c.html#7487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07487] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07487"
 , "c1link" : "./qc/apps/pkcs8.c.html#7487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07487] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "07513"
 , "c1link" : "./qc/apps/pkcs8.c.html#7513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07513] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07515"
 , "c1link" : "./qc/apps/pkcs8.c.html#7515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07515] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/apps/pkcs8.c.html#7518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07518] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/apps/pkcs8.c.html#7518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07518] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "08918"
 , "c1link" : "./qc/apps/pkcs8.c.html#8918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08918] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08951"
 , "c1link" : "./qc/apps/pkcs8.c.html#8951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08951] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19220"
 , "c1link" : "./qc/apps/pkcs8.c.html#19220"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19220] The pointer prog is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19246"
 , "c1link" : "./qc/apps/pkcs8.c.html#19246"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19246] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19250"
 , "c1link" : "./qc/apps/pkcs8.c.html#19250"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[19250] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19252"
 , "c1link" : "./qc/apps/pkcs8.c.html#19252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19252] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19256"
 , "c1link" : "./qc/apps/pkcs8.c.html#19256"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19256] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19258"
 , "c1link" : "./qc/apps/pkcs8.c.html#19258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19258] The expression  ! opt_format(opt_arg(),(1L&lt;&lt;1), &amp; informat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19258"
 , "c1link" : "./qc/apps/pkcs8.c.html#19258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19258] The expression (1L&lt;&lt;1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19259"
 , "c1link" : "./qc/apps/pkcs8.c.html#19259"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19259] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19265"
 , "c1link" : "./qc/apps/pkcs8.c.html#19265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19265] The expression  ! opt_format(opt_arg(),(1L&lt;&lt;1), &amp; outformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19265"
 , "c1link" : "./qc/apps/pkcs8.c.html#19265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19265] The expression (1L&lt;&lt;1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19266"
 , "c1link" : "./qc/apps/pkcs8.c.html#19266"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19266] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19281"
 , "c1link" : "./qc/apps/pkcs8.c.html#19281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19281] The expression  ! opt_rand(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19282"
 , "c1link" : "./qc/apps/pkcs8.c.html#19282"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19282] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19285"
 , "c1link" : "./qc/apps/pkcs8.c.html#19285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19285] The expression  ! opt_provider(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19286"
 , "c1link" : "./qc/apps/pkcs8.c.html#19286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19286] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19299"
 , "c1link" : "./qc/apps/pkcs8.c.html#19299"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19299] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19304"
 , "c1link" : "./qc/apps/pkcs8.c.html#19304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19304] The expression  ! EVP_PBE_find(0x1,pbe_nid,(( void  *)0),(( void  *)0),0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19304"
 , "c1link" : "./qc/apps/pkcs8.c.html#19304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19304] The expression 0x1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19312"
 , "c1link" : "./qc/apps/pkcs8.c.html#19312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19312] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "19315"
 , "c1link" : "./qc/apps/pkcs8.c.html#19315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19315] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19350"
 , "c1link" : "./qc/apps/pkcs8.c.html#19350"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19350] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19354"
 , "c1link" : "./qc/apps/pkcs8.c.html#19354"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19354] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19358"
 , "c1link" : "./qc/apps/pkcs8.c.html#19358"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19358] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19367"
 , "c1link" : "./qc/apps/pkcs8.c.html#19367"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19367] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19370"
 , "c1link" : "./qc/apps/pkcs8.c.html#19370"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19370] The expression  ! app_RAND_load() applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19371"
 , "c1link" : "./qc/apps/pkcs8.c.html#19371"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19371] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19378"
 , "c1link" : "./qc/apps/pkcs8.c.html#19378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19378] The expression  ! opt_cipher(ciphername, &amp; cipher) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19379"
 , "c1link" : "./qc/apps/pkcs8.c.html#19379"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19379] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19382"
 , "c1link" : "./qc/apps/pkcs8.c.html#19382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19382] The expression  ! app_passwd(passinarg,passoutarg, &amp; passin, &amp; passout) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19384"
 , "c1link" : "./qc/apps/pkcs8.c.html#19384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19384] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19401"
 , "c1link" : "./qc/apps/pkcs8.c.html#19401"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19401] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19408"
 , "c1link" : "./qc/apps/pkcs8.c.html#19408"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19408] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19410"
 , "c1link" : "./qc/apps/pkcs8.c.html#19410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19410] The expression topk8 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19417"
 , "c1link" : "./qc/apps/pkcs8.c.html#19417"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19417] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19418"
 , "c1link" : "./qc/apps/pkcs8.c.html#19418"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19418] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19425"
 , "c1link" : "./qc/apps/pkcs8.c.html#19425"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19425] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19427"
 , "c1link" : "./qc/apps/pkcs8.c.html#19427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19427] The expression nocrypt applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19439"
 , "c1link" : "./qc/apps/pkcs8.c.html#19439"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19439] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19442"
 , "c1link" : "./qc/apps/pkcs8.c.html#19442"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19442] The pointer pbe is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19443"
 , "c1link" : "./qc/apps/pkcs8.c.html#19443"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19443] The expression cipher applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19482"
 , "c1link" : "./qc/apps/pkcs8.c.html#19482"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19482] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19490"
 , "c1link" : "./qc/apps/pkcs8.c.html#19490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19490] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "19494"
 , "c1link" : "./qc/apps/pkcs8.c.html#19494"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19494] The expression EVP_read_pw_string(pass, sizeof (pass),'Enter Encryption Password:',1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19495"
 , "c1link" : "./qc/apps/pkcs8.c.html#19495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19495] The expression 'Enter Encryption Password:' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19495"
 , "c1link" : "./qc/apps/pkcs8.c.html#19495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19495] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "19497"
 , "c1link" : "./qc/apps/pkcs8.c.html#19497"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19497] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19502"
 , "c1link" : "./qc/apps/pkcs8.c.html#19502"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19502] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19513"
 , "c1link" : "./qc/apps/pkcs8.c.html#19513"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19513] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19526"
 , "c1link" : "./qc/apps/pkcs8.c.html#19526"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19526] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19531"
 , "c1link" : "./qc/apps/pkcs8.c.html#19531"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19531] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19534"
 , "c1link" : "./qc/apps/pkcs8.c.html#19534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19534] The expression nocrypt applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19557"
 , "c1link" : "./qc/apps/pkcs8.c.html#19557"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19557] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19582"
 , "c1link" : "./qc/apps/pkcs8.c.html#19582"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19582] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19592"
 , "c1link" : "./qc/apps/pkcs8.c.html#19592"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19592] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19600"
 , "c1link" : "./qc/apps/pkcs8.c.html#19600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19600] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "19603"
 , "c1link" : "./qc/apps/pkcs8.c.html#19603"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19603] The expression EVP_read_pw_string(pass, sizeof (pass),'Enter Password:',0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19603"
 , "c1link" : "./qc/apps/pkcs8.c.html#19603"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19603] The expression 'Enter Password:' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19603"
 , "c1link" : "./qc/apps/pkcs8.c.html#19603"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19603] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "19605"
 , "c1link" : "./qc/apps/pkcs8.c.html#19605"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19605] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19610"
 , "c1link" : "./qc/apps/pkcs8.c.html#19610"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19610] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19622"
 , "c1link" : "./qc/apps/pkcs8.c.html#19622"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19622] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19625"
 , "c1link" : "./qc/apps/pkcs8.c.html#19625"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19625] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19632"
 , "c1link" : "./qc/apps/pkcs8.c.html#19632"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19632] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19641"
 , "c1link" : "./qc/apps/pkcs8.c.html#19641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19641] The expression traditional applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19674"
 , "c1link" : "./qc/apps/pkcs8.c.html#19674"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19674] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
