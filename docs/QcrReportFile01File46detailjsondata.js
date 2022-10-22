console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/ocsp.c.html" 
 , "texte" : "File apps/ocsp.c 21 rule violations " 
 , "fic2"  : "./qc/apps/ocsp.c.xml" 
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
 , "c1" : "03810"
 , "c1link" : "./qc/apps/ocsp.c.html#3810"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP999999[03810] syntax analysis failed on file /home/runner/work/openssl/openssl/apps/ocsp.c near following tokens , CRYPTO_realloc_fn CPP_POINTEUR realloc_fn , CRYPTO_free_fn CPP_POINTEUR free_fn ) ; __attribute__ ( ( malloc ) ) void CPP_POINTEUR CRYPTO_malloc ( size_t "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00984"
 , "c1link" : "./qc/apps/ocsp.c.html#984"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00984] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00989"
 , "c1link" : "./qc/apps/ocsp.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01014"
 , "c1link" : "./qc/apps/ocsp.c.html#1014"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01014] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01018"
 , "c1link" : "./qc/apps/ocsp.c.html#1018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01018] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01021"
 , "c1link" : "./qc/apps/ocsp.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01046"
 , "c1link" : "./qc/apps/ocsp.c.html#1046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01046] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01050"
 , "c1link" : "./qc/apps/ocsp.c.html#1050"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01050] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01054"
 , "c1link" : "./qc/apps/ocsp.c.html#1054"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01054] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01062"
 , "c1link" : "./qc/apps/ocsp.c.html#1062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01062] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02101"
 , "c1link" : "./qc/apps/ocsp.c.html#2101"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02101] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02264"
 , "c1link" : "./qc/apps/ocsp.c.html#2264"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02264] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02291"
 , "c1link" : "./qc/apps/ocsp.c.html#2291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02291] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02295"
 , "c1link" : "./qc/apps/ocsp.c.html#2295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02295] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02317"
 , "c1link" : "./qc/apps/ocsp.c.html#2317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02317] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02317"
 , "c1link" : "./qc/apps/ocsp.c.html#2317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02317] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02341"
 , "c1link" : "./qc/apps/ocsp.c.html#2341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02341] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02347"
 , "c1link" : "./qc/apps/ocsp.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02372"
 , "c1link" : "./qc/apps/ocsp.c.html#2372"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02372] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02376"
 , "c1link" : "./qc/apps/ocsp.c.html#2376"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02376] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02743"
 , "c1link" : "./qc/apps/ocsp.c.html#2743"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02743] The expression 2&gt;1 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
