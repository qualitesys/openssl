console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/x509.c.html" 
 , "texte" : "File apps/x509.c 268 rule violations " 
 , "fic2"  : "./qc/apps/x509.c.xml" 
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
 , "c4" : "65"
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
 , "c4" : "23"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "92"
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
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/apps/x509.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/apps/x509.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/apps/x509.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/apps/x509.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/apps/x509.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/apps/x509.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/apps/x509.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/apps/x509.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/apps/x509.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02076"
 , "c1link" : "./qc/apps/x509.c.html#2076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02076] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02239"
 , "c1link" : "./qc/apps/x509.c.html#2239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02239] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02266"
 , "c1link" : "./qc/apps/x509.c.html#2266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02266] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02268"
 , "c1link" : "./qc/apps/x509.c.html#2268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02268] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/apps/x509.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/apps/x509.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02270] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/x509.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/x509.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/x509.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02292] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02316"
 , "c1link" : "./qc/apps/x509.c.html#2316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02316] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/apps/x509.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02318] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/apps/x509.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02322] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/apps/x509.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02322] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02347"
 , "c1link" : "./qc/apps/x509.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02349"
 , "c1link" : "./qc/apps/x509.c.html#2349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02349] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/apps/x509.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/apps/x509.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02351] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02718"
 , "c1link" : "./qc/apps/x509.c.html#2718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02718] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02719"
 , "c1link" : "./qc/apps/x509.c.html#2719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02719] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05909"
 , "c1link" : "./qc/apps/x509.c.html#5909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05909] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05911"
 , "c1link" : "./qc/apps/x509.c.html#5911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05911] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05914"
 , "c1link" : "./qc/apps/x509.c.html#5914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05914] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05914"
 , "c1link" : "./qc/apps/x509.c.html#5914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05914] Suspicious mix of Bitwise and Literal expressions in __nbytes&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "05939"
 , "c1link" : "./qc/apps/x509.c.html#5939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05939] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05941"
 , "c1link" : "./qc/apps/x509.c.html#5941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05941] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05944"
 , "c1link" : "./qc/apps/x509.c.html#5944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05944] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05944"
 , "c1link" : "./qc/apps/x509.c.html#5944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05944] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05973"
 , "c1link" : "./qc/apps/x509.c.html#5973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05973] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05975"
 , "c1link" : "./qc/apps/x509.c.html#5975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05975] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/apps/x509.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/apps/x509.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05978] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05999"
 , "c1link" : "./qc/apps/x509.c.html#5999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05999] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06001"
 , "c1link" : "./qc/apps/x509.c.html#6001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06001] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06004"
 , "c1link" : "./qc/apps/x509.c.html#6004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06004] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06004"
 , "c1link" : "./qc/apps/x509.c.html#6004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06004] Suspicious mix of Bitwise and Literal expressions in __size&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06020"
 , "c1link" : "./qc/apps/x509.c.html#6020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06020] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06039"
 , "c1link" : "./qc/apps/x509.c.html#6039"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06039] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06041"
 , "c1link" : "./qc/apps/x509.c.html#6041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06041] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06044"
 , "c1link" : "./qc/apps/x509.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06044] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06044"
 , "c1link" : "./qc/apps/x509.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06044] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__buf,2&gt;1)&lt;__len"
}} 
,
{ "ligne" : {
   "c1" : "06064"
 , "c1link" : "./qc/apps/x509.c.html#6064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06069"
 , "c1link" : "./qc/apps/x509.c.html#6069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06069"
 , "c1link" : "./qc/apps/x509.c.html#6069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06069] Suspicious mix of Bitwise and Literal expressions in __size *  sizeof (__gid_t)&gt;__builtin_object_size(__list,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06090"
 , "c1link" : "./qc/apps/x509.c.html#6090"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06090] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06092"
 , "c1link" : "./qc/apps/x509.c.html#6092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06092] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06095"
 , "c1link" : "./qc/apps/x509.c.html#6095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06095] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06095"
 , "c1link" : "./qc/apps/x509.c.html#6095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06095] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06116"
 , "c1link" : "./qc/apps/x509.c.html#6116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06116] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06118"
 , "c1link" : "./qc/apps/x509.c.html#6118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06118] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06121"
 , "c1link" : "./qc/apps/x509.c.html#6121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06121] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06121"
 , "c1link" : "./qc/apps/x509.c.html#6121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06121] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06143"
 , "c1link" : "./qc/apps/x509.c.html#6143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06143] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06145"
 , "c1link" : "./qc/apps/x509.c.html#6145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06145] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06148"
 , "c1link" : "./qc/apps/x509.c.html#6148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06148] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06148"
 , "c1link" : "./qc/apps/x509.c.html#6148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06148] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06172"
 , "c1link" : "./qc/apps/x509.c.html#6172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06172] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06174"
 , "c1link" : "./qc/apps/x509.c.html#6174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06174] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/apps/x509.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06177] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/apps/x509.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06177] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "07183"
 , "c1link" : "./qc/apps/x509.c.html#7183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07183] Suspicious mix of Bitwise and Literal expressions in ( unsigned  char  *)__cmsg+(((__cmsg-&gt;cmsg_len)+ sizeof (size_t)-1)&amp;(size_t ) ~ ( sizeof (size_t)-1))&gt;(( unsigned  char  *)__mhdr-&gt;msg_control+__mhdr-&gt;msg_controllen)"
}} 
,
{ "ligne" : {
   "c1" : "07482"
 , "c1link" : "./qc/apps/x509.c.html#7482"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07482] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07484"
 , "c1link" : "./qc/apps/x509.c.html#7484"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07484] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07487"
 , "c1link" : "./qc/apps/x509.c.html#7487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07487] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07487"
 , "c1link" : "./qc/apps/x509.c.html#7487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07487] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "07513"
 , "c1link" : "./qc/apps/x509.c.html#7513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07513] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07515"
 , "c1link" : "./qc/apps/x509.c.html#7515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07515] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/apps/x509.c.html#7518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07518] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/apps/x509.c.html#7518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07518] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "08918"
 , "c1link" : "./qc/apps/x509.c.html#8918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08918] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08951"
 , "c1link" : "./qc/apps/x509.c.html#8951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08951] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19029"
 , "c1link" : "./qc/apps/x509.c.html#19029"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19029] The pointer exts is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19057"
 , "c1link" : "./qc/apps/x509.c.html#19057"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19057] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19066"
 , "c1link" : "./qc/apps/x509.c.html#19066"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19066] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19073"
 , "c1link" : "./qc/apps/x509.c.html#19073"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19073] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19076"
 , "c1link" : "./qc/apps/x509.c.html#19076"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[19076] Suspicious mix of Bitwise and Literal expressions in OPENSSL_sk_num(ossl_check_const_X509_EXTENSION_sk_type(exts))&gt;0"
}} 
,
{ "ligne" : {
   "c1" : "19080"
 , "c1link" : "./qc/apps/x509.c.html#19080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19080] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19133"
 , "c1link" : "./qc/apps/x509.c.html#19133"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19133] The pointer pkey is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19177"
 , "c1link" : "./qc/apps/x509.c.html#19177"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19177] The pointer issuer_cert is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19261"
 , "c1link" : "./qc/apps/x509.c.html#19261"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19261] The pointer prog is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19293"
 , "c1link" : "./qc/apps/x509.c.html#19293"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19293] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19297"
 , "c1link" : "./qc/apps/x509.c.html#19297"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19297] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19301"
 , "c1link" : "./qc/apps/x509.c.html#19301"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[19301] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19303"
 , "c1link" : "./qc/apps/x509.c.html#19303"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19303] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19307"
 , "c1link" : "./qc/apps/x509.c.html#19307"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19307] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19309"
 , "c1link" : "./qc/apps/x509.c.html#19309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19309] The expression  ! opt_format(opt_arg(),(1L&lt;&lt;1), &amp; informat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19309"
 , "c1link" : "./qc/apps/x509.c.html#19309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19309] The expression (1L&lt;&lt;1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19310"
 , "c1link" : "./qc/apps/x509.c.html#19310"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19310] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19316"
 , "c1link" : "./qc/apps/x509.c.html#19316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19316] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; outformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19316"
 , "c1link" : "./qc/apps/x509.c.html#19316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19316] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19317"
 , "c1link" : "./qc/apps/x509.c.html#19317"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19317] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19320"
 , "c1link" : "./qc/apps/x509.c.html#19320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19320] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; keyformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19320"
 , "c1link" : "./qc/apps/x509.c.html#19320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19320] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19321"
 , "c1link" : "./qc/apps/x509.c.html#19321"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19321] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19324"
 , "c1link" : "./qc/apps/x509.c.html#19324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19324] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; CAformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19324"
 , "c1link" : "./qc/apps/x509.c.html#19324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19324] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19325"
 , "c1link" : "./qc/apps/x509.c.html#19325"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19325] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19328"
 , "c1link" : "./qc/apps/x509.c.html#19328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19328] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; CAkeyformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19328"
 , "c1link" : "./qc/apps/x509.c.html#19328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19328] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19329"
 , "c1link" : "./qc/apps/x509.c.html#19329"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19329] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19339"
 , "c1link" : "./qc/apps/x509.c.html#19339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19339] The expression  ! set_dateopt( &amp; dateopt,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19342"
 , "c1link" : "./qc/apps/x509.c.html#19342"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19342] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19346"
 , "c1link" : "./qc/apps/x509.c.html#19346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19346] The expression  ! set_ext_copy( &amp; ext_copy,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19349"
 , "c1link" : "./qc/apps/x509.c.html#19349"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19349] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19354"
 , "c1link" : "./qc/apps/x509.c.html#19354"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19354] The expression  ! sigopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19357"
 , "c1link" : "./qc/apps/x509.c.html#19357"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19357] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19360"
 , "c1link" : "./qc/apps/x509.c.html#19360"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19360] The expression  ! vfyopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19363"
 , "c1link" : "./qc/apps/x509.c.html#19363"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19363] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19370"
 , "c1link" : "./qc/apps/x509.c.html#19370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19370] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19380"
 , "c1link" : "./qc/apps/x509.c.html#19380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19380] The expression  ! opt_rand(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19381"
 , "c1link" : "./qc/apps/x509.c.html#19381"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19381] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19384"
 , "c1link" : "./qc/apps/x509.c.html#19384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19384] The expression  ! opt_provider(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19385"
 , "c1link" : "./qc/apps/x509.c.html#19385"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19385] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19410"
 , "c1link" : "./qc/apps/x509.c.html#19410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19410] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19412"
 , "c1link" : "./qc/apps/x509.c.html#19412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19412] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19421"
 , "c1link" : "./qc/apps/x509.c.html#19421"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19421] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19437"
 , "c1link" : "./qc/apps/x509.c.html#19437"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19437] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19442"
 , "c1link" : "./qc/apps/x509.c.html#19442"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19442] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19443"
 , "c1link" : "./qc/apps/x509.c.html#19443"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19443] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19450"
 , "c1link" : "./qc/apps/x509.c.html#19450"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19450] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19460"
 , "c1link" : "./qc/apps/x509.c.html#19460"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19460] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19465"
 , "c1link" : "./qc/apps/x509.c.html#19465"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19465] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19466"
 , "c1link" : "./qc/apps/x509.c.html#19466"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19466] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19473"
 , "c1link" : "./qc/apps/x509.c.html#19473"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19473] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19483"
 , "c1link" : "./qc/apps/x509.c.html#19483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19483] The expression  ! set_cert_ex( &amp; certflag,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19484"
 , "c1link" : "./qc/apps/x509.c.html#19484"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19484] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19487"
 , "c1link" : "./qc/apps/x509.c.html#19487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19487] The expression  ! set_nameopt(opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19488"
 , "c1link" : "./qc/apps/x509.c.html#19488"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19488] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19595"
 , "c1link" : "./qc/apps/x509.c.html#19595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19595] The expression  ! opt_intmax(opt_arg(), &amp; temp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19596"
 , "c1link" : "./qc/apps/x509.c.html#19596"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19596] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19601"
 , "c1link" : "./qc/apps/x509.c.html#19601"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19601] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19626"
 , "c1link" : "./qc/apps/x509.c.html#19626"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19626] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19628"
 , "c1link" : "./qc/apps/x509.c.html#19628"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19628] The expression  ! app_RAND_load() applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19629"
 , "c1link" : "./qc/apps/x509.c.html#19629"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19629] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19633"
 , "c1link" : "./qc/apps/x509.c.html#19633"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19633] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19638"
 , "c1link" : "./qc/apps/x509.c.html#19638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19638] The expression  ! app_passwd(passinarg,(( void  *)0), &amp; passin,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19648"
 , "c1link" : "./qc/apps/x509.c.html#19648"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19648] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19651"
 , "c1link" : "./qc/apps/x509.c.html#19651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19651] The expression  ! X509_STORE_set_default_paths_ex(ctx,app_get0_libctx(),app_get0_propq()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19653"
 , "c1link" : "./qc/apps/x509.c.html#19653"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19653] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19661"
 , "c1link" : "./qc/apps/x509.c.html#19661"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19661] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19666"
 , "c1link" : "./qc/apps/x509.c.html#19666"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19666] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19679"
 , "c1link" : "./qc/apps/x509.c.html#19679"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19679] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19686"
 , "c1link" : "./qc/apps/x509.c.html#19686"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19686] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19696"
 , "c1link" : "./qc/apps/x509.c.html#19696"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19696] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19699"
 , "c1link" : "./qc/apps/x509.c.html#19699"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19699] The expression newcert applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19707"
 , "c1link" : "./qc/apps/x509.c.html#19707"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19707] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19720"
 , "c1link" : "./qc/apps/x509.c.html#19720"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19720] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19728"
 , "c1link" : "./qc/apps/x509.c.html#19728"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19728] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19733"
 , "c1link" : "./qc/apps/x509.c.html#19733"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19733] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19752"
 , "c1link" : "./qc/apps/x509.c.html#19752"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19752] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19778"
 , "c1link" : "./qc/apps/x509.c.html#19778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19778] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19783"
 , "c1link" : "./qc/apps/x509.c.html#19783"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19783] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19817"
 , "c1link" : "./qc/apps/x509.c.html#19817"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19817] The expression  ! X509V3_EXT_add_nconf(extconf, &amp; ctx2,extsect,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19824"
 , "c1link" : "./qc/apps/x509.c.html#19824"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19824] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19828"
 , "c1link" : "./qc/apps/x509.c.html#19828"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19828] The expression reqfile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19842"
 , "c1link" : "./qc/apps/x509.c.html#19842"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19842] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19844"
 , "c1link" : "./qc/apps/x509.c.html#19844"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19844] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19850"
 , "c1link" : "./qc/apps/x509.c.html#19850"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19850] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19857"
 , "c1link" : "./qc/apps/x509.c.html#19857"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19857] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19867"
 , "c1link" : "./qc/apps/x509.c.html#19867"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19867] The expression preserve_dates applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19882"
 , "c1link" : "./qc/apps/x509.c.html#19882"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19882] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19884"
 , "c1link" : "./qc/apps/x509.c.html#19884"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19884] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19889"
 , "c1link" : "./qc/apps/x509.c.html#19889"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19889] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19905"
 , "c1link" : "./qc/apps/x509.c.html#19905"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19905] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19914"
 , "c1link" : "./qc/apps/x509.c.html#19914"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19914] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19915"
 , "c1link" : "./qc/apps/x509.c.html#19915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19915] The expression  ! copy_extensions(x,req,ext_copy) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19917"
 , "c1link" : "./qc/apps/x509.c.html#19917"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19917] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19934"
 , "c1link" : "./qc/apps/x509.c.html#19934"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19934] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19951"
 , "c1link" : "./qc/apps/x509.c.html#19951"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19951] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19976"
 , "c1link" : "./qc/apps/x509.c.html#19976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19976] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19989"
 , "c1link" : "./qc/apps/x509.c.html#19989"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19989] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19998"
 , "c1link" : "./qc/apps/x509.c.html#19998"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19998] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20003"
 , "c1link" : "./qc/apps/x509.c.html#20003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20003] The expression  alias  applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20006"
 , "c1link" : "./qc/apps/x509.c.html#20006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20006] The expression clrtrust applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20008"
 , "c1link" : "./qc/apps/x509.c.html#20008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20008] The expression clrreject applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20069"
 , "c1link" : "./qc/apps/x509.c.html#20069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20069] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20077"
 , "c1link" : "./qc/apps/x509.c.html#20077"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20077] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20097"
 , "c1link" : "./qc/apps/x509.c.html#20097"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20097] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20098"
 , "c1link" : "./qc/apps/x509.c.html#20098"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20098] The expression  ! X509_set_issuer_name(x,X509_get_subject_name(issuer_cert)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20099"
 , "c1link" : "./qc/apps/x509.c.html#20099"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20099] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20113"
 , "c1link" : "./qc/apps/x509.c.html#20113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20113] The expression  ! X509V3_EXT_add_nconf(extconf, &amp; ext_ctx,extsect,x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20116"
 , "c1link" : "./qc/apps/x509.c.html#20116"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20116] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20129"
 , "c1link" : "./qc/apps/x509.c.html#20129"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20129] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20132"
 , "c1link" : "./qc/apps/x509.c.html#20132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20132] The expression x509toreq applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20139"
 , "c1link" : "./qc/apps/x509.c.html#20139"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20139] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20143"
 , "c1link" : "./qc/apps/x509.c.html#20143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20143] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20145"
 , "c1link" : "./qc/apps/x509.c.html#20145"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20145] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20150"
 , "c1link" : "./qc/apps/x509.c.html#20150"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20150] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20157"
 , "c1link" : "./qc/apps/x509.c.html#20157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20157] The expression  ! X509V3_EXT_REQ_add_nconf(extconf, &amp; ext_ctx,extsect,rq) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20160"
 , "c1link" : "./qc/apps/x509.c.html#20160"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20160] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20163"
 , "c1link" : "./qc/apps/x509.c.html#20163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20163] The expression  ! do_X509_REQ_sign(rq,privkey,digest,sigopts) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20164"
 , "c1link" : "./qc/apps/x509.c.html#20164"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20164] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20165"
 , "c1link" : "./qc/apps/x509.c.html#20165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20165] The expression  ! noout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20172"
 , "c1link" : "./qc/apps/x509.c.html#20172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20172] The expression  ! i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20175"
 , "c1link" : "./qc/apps/x509.c.html#20175"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20175] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20184"
 , "c1link" : "./qc/apps/x509.c.html#20184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20184] The expression  ! do_X509_sign(x,privkey,digest,sigopts, &amp; ext_ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20185"
 , "c1link" : "./qc/apps/x509.c.html#20185"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20185] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20205"
 , "c1link" : "./qc/apps/x509.c.html#20205"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20205] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20212"
 , "c1link" : "./qc/apps/x509.c.html#20212"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20212] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20214"
 , "c1link" : "./qc/apps/x509.c.html#20214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20214] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20220"
 , "c1link" : "./qc/apps/x509.c.html#20220"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20220] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20221"
 , "c1link" : "./qc/apps/x509.c.html#20221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20221] The expression  ! X509_check_private_key(xca,CAkey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20224"
 , "c1link" : "./qc/apps/x509.c.html#20224"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20224] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20227"
 , "c1link" : "./qc/apps/x509.c.html#20227"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20227] The expression  ! do_X509_sign(x,CAkey,digest,sigopts, &amp; ext_ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20228"
 , "c1link" : "./qc/apps/x509.c.html#20228"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20228] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20230"
 , "c1link" : "./qc/apps/x509.c.html#20230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20230] The expression badsig applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20231"
 , "c1link" : "./qc/apps/x509.c.html#20231"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20231] The pointer signature is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20252"
 , "c1link" : "./qc/apps/x509.c.html#20252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20252] The pointer ser is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20264"
 , "c1link" : "./qc/apps/x509.c.html#20264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20264] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20266"
 , "c1link" : "./qc/apps/x509.c.html#20266"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20266] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20265"
 , "c1link" : "./qc/apps/x509.c.html#20265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20265] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "20276"
 , "c1link" : "./qc/apps/x509.c.html#20276"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20276] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20296"
 , "c1link" : "./qc/apps/x509.c.html#20296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20296] The expression alstr applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20318"
 , "c1link" : "./qc/apps/x509.c.html#20318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20318] The expression EVP_PKEY_is_a(pkey,'RSA') applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20318"
 , "c1link" : "./qc/apps/x509.c.html#20318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20318] The expression 'RSA' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20329"
 , "c1link" : "./qc/apps/x509.c.html#20329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20329] The expression EVP_PKEY_is_a(pkey,'DSA') applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20329"
 , "c1link" : "./qc/apps/x509.c.html#20329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20329] The expression 'DSA' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20360"
 , "c1link" : "./qc/apps/x509.c.html#20360"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20360] The pointer fdig is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20370"
 , "c1link" : "./qc/apps/x509.c.html#20370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20370] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20377"
 , "c1link" : "./qc/apps/x509.c.html#20377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20377] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20381"
 , "c1link" : "./qc/apps/x509.c.html#20381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20381] The expression  ! digres applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20383"
 , "c1link" : "./qc/apps/x509.c.html#20383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20383] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20396"
 , "c1link" : "./qc/apps/x509.c.html#20396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20396] The expression checkend applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20404"
 , "c1link" : "./qc/apps/x509.c.html#20404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20404] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20408"
 , "c1link" : "./qc/apps/x509.c.html#20408"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20408] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20415"
 , "c1link" : "./qc/apps/x509.c.html#20415"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20415] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20421"
 , "c1link" : "./qc/apps/x509.c.html#20421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20421] The expression trustout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20427"
 , "c1link" : "./qc/apps/x509.c.html#20427"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20427] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20429"
 , "c1link" : "./qc/apps/x509.c.html#20429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20429] The expression  ! i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20431"
 , "c1link" : "./qc/apps/x509.c.html#20431"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20431] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20506"
 , "c1link" : "./qc/apps/x509.c.html#20506"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20506] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20508"
 , "c1link" : "./qc/apps/x509.c.html#20508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20508] The expression  ! BN_add_word(serial,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20508"
 , "c1link" : "./qc/apps/x509.c.html#20508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20508] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "20510"
 , "c1link" : "./qc/apps/x509.c.html#20510"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20510] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20513"
 , "c1link" : "./qc/apps/x509.c.html#20513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20513] The expression  ! save_serial(serialfile,(( void  *)0),serial, &amp; bs) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20518"
 , "c1link" : "./qc/apps/x509.c.html#20518"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20518] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20529"
 , "c1link" : "./qc/apps/x509.c.html#20529"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20529] The pointer err_cert is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20544"
 , "c1link" : "./qc/apps/x509.c.html#20544"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20544] The expression ok applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20562"
 , "c1link" : "./qc/apps/x509.c.html#20562"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20562] The pointer pname is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20580"
 , "c1link" : "./qc/apps/x509.c.html#20580"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20580] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20580"
 , "c1link" : "./qc/apps/x509.c.html#20580"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20580] The pointer q is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20583"
 , "c1link" : "./qc/apps/x509.c.html#20583"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20583] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20626"
 , "c1link" : "./qc/apps/x509.c.html#20626"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20626] The pointer obj is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20628"
 , "c1link" : "./qc/apps/x509.c.html#20628"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20628] The pointer sn is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20640"
 , "c1link" : "./qc/apps/x509.c.html#20640"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20640] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20640"
 , "c1link" : "./qc/apps/x509.c.html#20640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[20640] Suspicious mix of Bitwise and Literal expressions in (num=OPENSSL_sk_num(ossl_check_const_X509_EXTENSION_sk_type(exts)))&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "20643"
 , "c1link" : "./qc/apps/x509.c.html#20643"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20643] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20647"
 , "c1link" : "./qc/apps/x509.c.html#20647"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20647] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20652"
 , "c1link" : "./qc/apps/x509.c.html#20652"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20652] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20653"
 , "c1link" : "./qc/apps/x509.c.html#20653"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20653] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20659"
 , "c1link" : "./qc/apps/x509.c.html#20659"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20659] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20661"
 , "c1link" : "./qc/apps/x509.c.html#20661"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20661] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20666"
 , "c1link" : "./qc/apps/x509.c.html#20666"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20666] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20679"
 , "c1link" : "./qc/apps/x509.c.html#20679"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20679] The expression 'UNDEF' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20690"
 , "c1link" : "./qc/apps/x509.c.html#20690"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20690] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20695"
 , "c1link" : "./qc/apps/x509.c.html#20695"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20695] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20696"
 , "c1link" : "./qc/apps/x509.c.html#20696"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20696] The expression  ! OPENSSL_sk_push(ossl_check_X509_EXTENSION_sk_type(exts2),ossl_check_X509_EXTENSION_type(ext)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20697"
 , "c1link" : "./qc/apps/x509.c.html#20697"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20697] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20702"
 , "c1link" : "./qc/apps/x509.c.html#20702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20702] The expression  ! OPENSSL_sk_num(ossl_check_const_X509_EXTENSION_sk_type(exts2)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20705"
 , "c1link" : "./qc/apps/x509.c.html#20705"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20705] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
