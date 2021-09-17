console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rsa/rsa_pk1.c.html" 
 , "texte" : "File crypto/rsa/rsa_pk1.c 47 rule violations " 
 , "fic2"  : "./qc/crypto/rsa/rsa_pk1.c.xml" 
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "13"
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
   "c1" : "01214"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01214] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01404"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01404] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01406"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01406] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01408"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01408] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01408"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01408] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01430"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01430] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01430"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01430] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01430"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01430] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01454"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01454] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01456"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01456] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01460] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01460] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "01485"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1485"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01485] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01487"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01487] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01489"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01489] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01489"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01489] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01856"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1856"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01856] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01857"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#1857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01857] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02382"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#2382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[02382] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "02383"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#2383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[02383] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "03198"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03198] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03203"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03203] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03203"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03203] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03228"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3228"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03228] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03235"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03235] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03235"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03235] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03260"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3260"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03260] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03268"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03268] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03268"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#3268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03268] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "09802"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9802"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09802] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09802"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09802] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09804"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9804"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[09804] Suspicious mix of Bitwise and Literal expressions in flen&gt;(tlen-11)"
}} 
,
{ "ligne" : {
   "c1" : "09832"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9832"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09832] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09832"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9832"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09832] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09841"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9841"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09841] The expression  * p++ applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09917"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9917"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09917] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09917"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09917] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09919"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[09919] Suspicious mix of Bitwise and Literal expressions in flen&gt;(tlen-11)"
}} 
,
{ "ligne" : {
   "c1" : "09943"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09943] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09943"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[09943] Suspicious mix of Bitwise and Literal expressions in RAND_bytes_ex(libctx,p,j,0)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "09948"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09948] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "09948"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09948] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09948"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[09948] Suspicious mix of Bitwise and Literal expressions in RAND_bytes_ex(libctx,p,1,0)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "09976"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#9976"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09976] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10117"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#10117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10117] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "10116"
 , "c1link" : "./qc/crypto/rsa/rsa_pk1.c.html#10116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[10116] Suspicious mix of Bitwise and Literal expressions in RAND_priv_bytes_ex(libctx,rand_premaster_secret, sizeof (rand_premaster_secret),0)&lt;=0"
}} 
]
};
console.log('leListeStr 99 main end');
