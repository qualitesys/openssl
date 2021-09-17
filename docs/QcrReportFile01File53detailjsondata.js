console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/prime.c.html" 
 , "texte" : "File apps/prime.c 103 rule violations " 
 , "fic2"  : "./qc/apps/prime.c.xml" 
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
 , "c4" : "24"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "42"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "10"
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
 , "c4" : "1"
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
   "c1" : "00383"
 , "c1link" : "./qc/apps/prime.c.html#383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00383] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/apps/prime.c.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00384] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01812"
 , "c1link" : "./qc/apps/prime.c.html#1812"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01812] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01975"
 , "c1link" : "./qc/apps/prime.c.html#1975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01975] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01978"
 , "c1link" : "./qc/apps/prime.c.html#1978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01978"
 , "c1link" : "./qc/apps/prime.c.html#1978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01978] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__resolved,2&gt;1)&lt;4096"
}} 
,
{ "ligne" : {
   "c1" : "02002"
 , "c1link" : "./qc/apps/prime.c.html#2002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02002] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02004"
 , "c1link" : "./qc/apps/prime.c.html#2004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02004] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02006"
 , "c1link" : "./qc/apps/prime.c.html#2006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02006] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02006"
 , "c1link" : "./qc/apps/prime.c.html#2006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02006] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02028"
 , "c1link" : "./qc/apps/prime.c.html#2028"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02028] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02028"
 , "c1link" : "./qc/apps/prime.c.html#2028"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02028] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02028"
 , "c1link" : "./qc/apps/prime.c.html#2028"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02028] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02052"
 , "c1link" : "./qc/apps/prime.c.html#2052"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02052] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02054"
 , "c1link" : "./qc/apps/prime.c.html#2054"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02054] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02058"
 , "c1link" : "./qc/apps/prime.c.html#2058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02058] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02058"
 , "c1link" : "./qc/apps/prime.c.html#2058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02058] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02083"
 , "c1link" : "./qc/apps/prime.c.html#2083"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02083] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02085"
 , "c1link" : "./qc/apps/prime.c.html#2085"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02085] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02087"
 , "c1link" : "./qc/apps/prime.c.html#2087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02087] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02087"
 , "c1link" : "./qc/apps/prime.c.html#2087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02087] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03108"
 , "c1link" : "./qc/apps/prime.c.html#3108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03108] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03113"
 , "c1link" : "./qc/apps/prime.c.html#3113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03113] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03113"
 , "c1link" : "./qc/apps/prime.c.html#3113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03113] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03138"
 , "c1link" : "./qc/apps/prime.c.html#3138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03138] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03145"
 , "c1link" : "./qc/apps/prime.c.html#3145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03145] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03145"
 , "c1link" : "./qc/apps/prime.c.html#3145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03145] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03170"
 , "c1link" : "./qc/apps/prime.c.html#3170"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03170] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03178"
 , "c1link" : "./qc/apps/prime.c.html#3178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03178] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03178"
 , "c1link" : "./qc/apps/prime.c.html#3178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03178] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "05914"
 , "c1link" : "./qc/apps/prime.c.html#5914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05914] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05916"
 , "c1link" : "./qc/apps/prime.c.html#5916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05916] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05919"
 , "c1link" : "./qc/apps/prime.c.html#5919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05919] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05919"
 , "c1link" : "./qc/apps/prime.c.html#5919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05919] Suspicious mix of Bitwise and Literal expressions in __nbytes&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "05944"
 , "c1link" : "./qc/apps/prime.c.html#5944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05944] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05946"
 , "c1link" : "./qc/apps/prime.c.html#5946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05946] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05949"
 , "c1link" : "./qc/apps/prime.c.html#5949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05949] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05949"
 , "c1link" : "./qc/apps/prime.c.html#5949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05949] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/apps/prime.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05980"
 , "c1link" : "./qc/apps/prime.c.html#5980"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05980] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05983"
 , "c1link" : "./qc/apps/prime.c.html#5983"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05983] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05983"
 , "c1link" : "./qc/apps/prime.c.html#5983"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05983] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06004"
 , "c1link" : "./qc/apps/prime.c.html#6004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06004] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06006"
 , "c1link" : "./qc/apps/prime.c.html#6006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06006] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06009"
 , "c1link" : "./qc/apps/prime.c.html#6009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06009] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06009"
 , "c1link" : "./qc/apps/prime.c.html#6009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06009] Suspicious mix of Bitwise and Literal expressions in __size&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06025"
 , "c1link" : "./qc/apps/prime.c.html#6025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06025] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06044"
 , "c1link" : "./qc/apps/prime.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06044] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06046"
 , "c1link" : "./qc/apps/prime.c.html#6046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06046] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06049"
 , "c1link" : "./qc/apps/prime.c.html#6049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06049] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06049"
 , "c1link" : "./qc/apps/prime.c.html#6049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06049] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__buf,2&gt;1)&lt;__len"
}} 
,
{ "ligne" : {
   "c1" : "06069"
 , "c1link" : "./qc/apps/prime.c.html#6069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06074"
 , "c1link" : "./qc/apps/prime.c.html#6074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06074] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06074"
 , "c1link" : "./qc/apps/prime.c.html#6074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06074] Suspicious mix of Bitwise and Literal expressions in __size *  sizeof (__gid_t)&gt;__builtin_object_size(__list,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06095"
 , "c1link" : "./qc/apps/prime.c.html#6095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06095] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06097"
 , "c1link" : "./qc/apps/prime.c.html#6097"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06097] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06100"
 , "c1link" : "./qc/apps/prime.c.html#6100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06100] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06100"
 , "c1link" : "./qc/apps/prime.c.html#6100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06100] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06121"
 , "c1link" : "./qc/apps/prime.c.html#6121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06121] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06123"
 , "c1link" : "./qc/apps/prime.c.html#6123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06123] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06126"
 , "c1link" : "./qc/apps/prime.c.html#6126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06126] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06126"
 , "c1link" : "./qc/apps/prime.c.html#6126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06126] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06148"
 , "c1link" : "./qc/apps/prime.c.html#6148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06148] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06150"
 , "c1link" : "./qc/apps/prime.c.html#6150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06150] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06153"
 , "c1link" : "./qc/apps/prime.c.html#6153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06153] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06153"
 , "c1link" : "./qc/apps/prime.c.html#6153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06153] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/apps/prime.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06177] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06179"
 , "c1link" : "./qc/apps/prime.c.html#6179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06179] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06182"
 , "c1link" : "./qc/apps/prime.c.html#6182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06182] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06182"
 , "c1link" : "./qc/apps/prime.c.html#6182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06182] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "07188"
 , "c1link" : "./qc/apps/prime.c.html#7188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07188] Suspicious mix of Bitwise and Literal expressions in ( unsigned  char  *)__cmsg+(((__cmsg-&gt;cmsg_len)+ sizeof (size_t)-1)&amp;(size_t ) ~ ( sizeof (size_t)-1))&gt;(( unsigned  char  *)__mhdr-&gt;msg_control+__mhdr-&gt;msg_controllen)"
}} 
,
{ "ligne" : {
   "c1" : "07487"
 , "c1link" : "./qc/apps/prime.c.html#7487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07487] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07489"
 , "c1link" : "./qc/apps/prime.c.html#7489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07489] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07492"
 , "c1link" : "./qc/apps/prime.c.html#7492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07492] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07492"
 , "c1link" : "./qc/apps/prime.c.html#7492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07492] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "07518"
 , "c1link" : "./qc/apps/prime.c.html#7518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07518] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07520"
 , "c1link" : "./qc/apps/prime.c.html#7520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07520] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07523"
 , "c1link" : "./qc/apps/prime.c.html#7523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07523] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07523"
 , "c1link" : "./qc/apps/prime.c.html#7523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07523] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "08923"
 , "c1link" : "./qc/apps/prime.c.html#8923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08923] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08956"
 , "c1link" : "./qc/apps/prime.c.html#8956"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08956] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18898"
 , "c1link" : "./qc/apps/prime.c.html#18898"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[18898] The pointer prog is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "18902"
 , "c1link" : "./qc/apps/prime.c.html#18902"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18902] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18906"
 , "c1link" : "./qc/apps/prime.c.html#18906"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[18906] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18908"
 , "c1link" : "./qc/apps/prime.c.html#18908"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18908] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18912"
 , "c1link" : "./qc/apps/prime.c.html#18912"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18912] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18930"
 , "c1link" : "./qc/apps/prime.c.html#18930"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18930] The expression  ! opt_provider(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18931"
 , "c1link" : "./qc/apps/prime.c.html#18931"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18931] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18939"
 , "c1link" : "./qc/apps/prime.c.html#18939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18939] The expression generate applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18941"
 , "c1link" : "./qc/apps/prime.c.html#18941"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18941] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18943"
 , "c1link" : "./qc/apps/prime.c.html#18943"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18943] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18946"
 , "c1link" : "./qc/apps/prime.c.html#18946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18946] The expression generate applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18947"
 , "c1link" : "./qc/apps/prime.c.html#18947"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[18947] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "18949"
 , "c1link" : "./qc/apps/prime.c.html#18949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18949] The expression  ! bits applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18951"
 , "c1link" : "./qc/apps/prime.c.html#18951"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18951] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18960"
 , "c1link" : "./qc/apps/prime.c.html#18960"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18960] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18962"
 , "c1link" : "./qc/apps/prime.c.html#18962"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18962] The expression  ! BN_generate_prime_ex(bn,bits,safe,(( void  *)0),(( void  *)0),(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18976"
 , "c1link" : "./qc/apps/prime.c.html#18976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18976] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18985"
 , "c1link" : "./qc/apps/prime.c.html#18985"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18985] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18990"
 , "c1link" : "./qc/apps/prime.c.html#18990"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18990] The expression  * argv applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18993"
 , "c1link" : "./qc/apps/prime.c.html#18993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18993] The expression hex applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "18998"
 , "c1link" : "./qc/apps/prime.c.html#18998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[18998] The expression  ! r applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19000"
 , "c1link" : "./qc/apps/prime.c.html#19000"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19000] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
