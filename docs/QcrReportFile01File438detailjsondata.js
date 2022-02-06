console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/e_seed.c.html" 
 , "texte" : "File crypto/evp/e_seed.c 27 rule violations " 
 , "fic2"  : "./qc/crypto/evp/e_seed.c.xml" 
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
 , "c4" : "5"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00999"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00999] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01004"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#1004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01004] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01033"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#1033"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01033] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01036"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#1036"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01036] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01061"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#1061"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01061] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01065"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#1065"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01065] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01069"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#1069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01069] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01077"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#1077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01077] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "03249"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3249"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03249] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "03412"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03412] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03415"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03415] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03439"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03439] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03441"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03441] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03443"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3443"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03443] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03465"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3465"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03465] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03465"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3465"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03465] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03489"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03489] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03491"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03491] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03495"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03495] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03520"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03520] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03522"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3522"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03522] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03524"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#3524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03524] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08290"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#8290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08290] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09567"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#9567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09567] The expression inl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09567"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#9567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09567] The expression 128==1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09567"
 , "c1link" : "./qc/crypto/evp/e_seed.c.html#9567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09567] The expression inl applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
