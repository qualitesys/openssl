console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rsa/rsa_schemes.c.html" 
 , "texte" : "File crypto/rsa/rsa_schemes.c 24 rule violations " 
 , "fic2"  : "./qc/crypto/rsa/rsa_schemes.c.xml" 
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "16"
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
   "c1" : "01552"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01552] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01557"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01557] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01582"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1582"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01582] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01586"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1586"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01586] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01589"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1589"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01589] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01614"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1614"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01614] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01618"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01618] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01622"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1622"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01622] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01630"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#1630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01630] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "03246"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3246"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[03246] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "03409"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03409] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03412"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03412] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03436"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03436] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03438"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03438] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03440"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03440] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03462"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03462] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03462"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03462] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03486"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3486"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03486] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03488"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3488"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03488] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03492"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03492] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03517"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03517] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03519"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03519] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03521"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#3521"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03521] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08279"
 , "c1link" : "./qc/crypto/rsa/rsa_schemes.c.html#8279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08279] The expression meth_is_a(meth,items[i].ptr) applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
