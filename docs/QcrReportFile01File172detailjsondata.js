console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bio/bss_file.c.html" 
 , "texte" : "File crypto/bio/bss_file.c 103 rule violations " 
 , "fic2"  : "./qc/crypto/bio/bss_file.c.xml" 
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
 , "c2" : "QC-CPP000008"
 , "c3" : "Suspicious bitwise operation"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "18"
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
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000002"
 , "c3" : "Avoid multiple switch labels with default case in switch case"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "2"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00948"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00948] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00953"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00953] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00953"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00953] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00978"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00978] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00985"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#985"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00985] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00985"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#985"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00985] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01010"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#1010"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01010] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01018"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#1018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01018] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01018"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#1018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01018] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02341"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2341"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02341] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02504"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02504] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02507"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02507] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02507"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02507] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__resolved,2&gt;1)&lt;4096"
}} 
,
{ "ligne" : {
   "c1" : "02531"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02531] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02533"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02533] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02535"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02535] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02535"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02535] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02557"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02557] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02557"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02557] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02557"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02557] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02581"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2581"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02581] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02583"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2583"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02583] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02587"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2587"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02587] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02587"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2587"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02587] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02612"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2612"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02612] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02614"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2614"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02614] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02616"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2616"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02616] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02616"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#2616"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02616] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05576"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05576] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05578"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05578] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05581"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5581"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05581] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05581"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5581"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05581] Suspicious mix of Bitwise and Literal expressions in __nbytes&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "05606"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5606"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05606] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05608"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5608"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05608] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05611"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5611"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05611] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05611"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5611"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05611] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05640"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05640] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05642"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5642"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05642] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05645"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05645] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05645"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05645] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05666"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5666"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05666] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05668"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05668] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05671"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05671] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05671"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05671] Suspicious mix of Bitwise and Literal expressions in __size&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05687"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5687"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05687] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05706"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5706"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05706] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05708"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05708] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05711"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05711] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05711"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05711] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__buf,2&gt;1)&lt;__len"
}} 
,
{ "ligne" : {
   "c1" : "05731"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5731"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05731] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05736"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5736"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05736] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05736"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5736"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05736] Suspicious mix of Bitwise and Literal expressions in __size *  sizeof (__gid_t)&gt;__builtin_object_size(__list,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05757"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5757"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05757] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05759"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5759"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05759] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05762"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5762"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05762] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05762"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5762"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05762] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05783"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05783] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05785"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05785] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05788"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5788"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05788] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05788"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5788"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05788] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05810"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5810"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05810] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05812"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5812"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05812] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05815"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5815"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05815] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05815"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5815"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05815] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "05839"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5839"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05839] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05841"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5841"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05841] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05844"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5844"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05844] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05844"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#5844"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[05844] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "06940"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#6940"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[06940] Suspicious mix of Bitwise and Literal expressions in ( unsigned  char  *)__cmsg+(((__cmsg-&gt;cmsg_len)+ sizeof (size_t)-1)&amp;(size_t ) ~ ( sizeof (size_t)-1))&gt;(( unsigned  char  *)__mhdr-&gt;msg_control+__mhdr-&gt;msg_controllen)"
}} 
,
{ "ligne" : {
   "c1" : "07239"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#7239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07239] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07241"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#7241"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07241] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07244"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#7244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07244] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07244"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#7244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07244] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "07270"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#7270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07270] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07272"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#7272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07272] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07275"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#7275"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07275] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07275"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#7275"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[07275] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__buf,0)"
}} 
,
{ "ligne" : {
   "c1" : "08291"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#8291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08291] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08292"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#8292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[08292] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "10502"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10502"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10502] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10506"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10506] The expression 'b' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10563"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10563"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10563] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10584"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10584"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10584] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10586"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10586"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10586] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10629"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10629] The expression a-&gt;shutdown applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10635"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10635"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10635] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10660"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10660] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10665"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10665"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10665] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10693"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10693"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10693] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10697"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10697] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10713"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10713"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10713] The pointer fpp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10720"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10720] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10726"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10726"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10726] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10733"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10733"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10733] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10816"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10816"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10816] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10816"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10816"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10816] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10841"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10841"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000002[10841] Avoid multiple switch labels with default case in switch case"
}} 
,
{ "ligne" : {
   "c1" : "10857"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000008[10857] Suspicious bitwise operation with value 0, result is a and 0 = 0"
}} 
,
{ "ligne" : {
   "c1" : "10858"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10858"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10858] The expression  ! fgets(buf,size,bp-&gt;ptr) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10859"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10859"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10859] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10861"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10861"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10861] The expression  ! fgets(buf,size,(FILE *)bp-&gt;ptr) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10862"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10862"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10862] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10864"
 , "c1link" : "./qc/crypto/bio/bss_file.c.html#10864"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10864] The expression 0 is invariable, always false"
}} 
]
};
console.log('leListeStr 99 main end');
