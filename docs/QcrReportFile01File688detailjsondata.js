console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/self_test_core.c.html" 
 , "texte" : "File crypto/self_test_core.c 21 rule violations " 
 , "fic2"  : "./qc/crypto/self_test_core.c.xml" 
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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP999999"
 , "c3" : "Syntax error in source code"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "03391"
 , "c1link" : "./qc/crypto/self_test_core.c.html#3391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP999999[03391] syntax analysis failed on file /home/runner/work/openssl/openssl/crypto/self_test_core.c near following tokens , CRYPTO_realloc_fn CPP_POINTEUR realloc_fn , CRYPTO_free_fn CPP_POINTEUR free_fn ) ; __attribute__ ( ( malloc ) ) void CPP_POINTEUR CRYPTO_malloc ( size_t "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01569"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01569] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01574"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01574] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01599"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01599] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01603"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1603"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01603] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01606"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1606"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01606] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01631"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1631"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01631] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01635"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1635"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01635] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01639"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1639"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01639] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01647"
 , "c1link" : "./qc/crypto/self_test_core.c.html#1647"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01647] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02691"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2691"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02691] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02854"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2854"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02854] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02857"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02857] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02881"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2881"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02881] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02885"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02885] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02907"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2907"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02907] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02907"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2907"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02907] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02931"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2931"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02931] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02937"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2937"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02937] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02962"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2962"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02962] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02966"
 , "c1link" : "./qc/crypto/self_test_core.c.html#2966"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02966] The expression 2&gt;1 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
