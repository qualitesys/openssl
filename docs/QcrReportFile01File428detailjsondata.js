console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/e_camellia.c.html" 
 , "texte" : "File crypto/evp/e_camellia.c 30 rule violations " 
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
   "c1" : "01030"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1030"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01030] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01034"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01034] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
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
   "c1" : "01062"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01062] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01066"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01066] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
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
   "c1" : "01078"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#1078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01078] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
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
   "c1" : "08286"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#8286"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08286] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09971"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#9971"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09971] The expression dat-&gt;stream.cbc applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09974"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#9974"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09974] The expression EVP_CIPHER_CTX_is_encrypting(ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10038"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#10038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10038] The expression EVP_CIPHER_CTX_test_flags(ctx,0x2000) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10038"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#10038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10038] The expression 0x2000 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "10058"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#10058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10058] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10080"
 , "c1link" : "./qc/crypto/evp/e_camellia.c.html#10080"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10080] The expression dat-&gt;stream.ctr applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
