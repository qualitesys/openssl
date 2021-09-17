console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/e_camellia.c.html" 
 , "texte" : "File crypto/evp/e_camellia.c 36 rule violations " 
 , "fic2"  : "./qc/crypto/evp/e_camellia.c.xml" 
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
 , "c4" : "8"
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
 , "c4" : "9"
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
   "c1" : "01000"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1000"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01000] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01005"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01005] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01005"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01005] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01030"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1030"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01030] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01037] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01062"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01062] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1070"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01070] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1070"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01070] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03250"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3250"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03250] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "03413"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03413] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03416"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03416] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03416"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03416] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__resolved,2&gt;1)&lt;4096"
}} 
,
{ "ligne" : {
   "c1" : "03440"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03440] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03442"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03442] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03444"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03444] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03444"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03444] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03466"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3466"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03466] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03466"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3466"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03466] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03466"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3466"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03466] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03490"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03490] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03492"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03492] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03496"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03496] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03496"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03496] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "03521"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3521"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03521] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03523"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03523] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03525"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03525] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03525"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#3525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03525] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "08283"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#8283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08283] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08284"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#8284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[08284] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "09942"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#9942"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09942] The expression dat-&gt;stream.cbc applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09945"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#9945"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09945] The expression EVP_CIPHER_CTX_is_encrypting(ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10009"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#10009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10009] The expression EVP_CIPHER_CTX_test_flags(ctx,0x2000) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10009"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#10009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10009] The expression 0x2000 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10029"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#10029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10029] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10051"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#10051"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10051] The expression dat-&gt;stream.ctr applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
