console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/ssl_cert.c.html" 
 , "texte" : "File ssl/ssl_cert.c 20 rule violations " 
 , "fic2"  : "./qc/ssl/ssl_cert.c.xml" 
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
 , "c4" : "15"
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
 , "c1" : "03389"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#3389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP999999[03389] syntax analysis failed on file /home/runner/work/openssl/openssl/ssl/ssl_cert.c near following tokens , CRYPTO_realloc_fn CPP_POINTEUR realloc_fn , CRYPTO_free_fn CPP_POINTEUR free_fn ) ; __attribute__ ( ( malloc ) ) void CPP_POINTEUR CRYPTO_malloc ( size_t "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00959"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00964"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00989"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00993"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00996"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01021"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01025"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01029"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01037"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02311"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02311] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02474"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2474"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02474] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02501"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02501] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02505"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2505"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02505] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02527"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2527"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02527] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02527"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2527"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02527] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02551"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2551"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02551] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02557"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02557] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02582"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2582"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02582] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02586"
 , "c1link" : "./qc/ssl/ssl_cert.c.html#2586"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02586] The expression 2&gt;1 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
