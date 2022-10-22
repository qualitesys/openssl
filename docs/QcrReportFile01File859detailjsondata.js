console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html" 
 , "texte" : "File providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c 21 rule violations " 
 , "fic2"  : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.xml" 
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
 , "c1" : "03404"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#3404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP999999[03404] syntax analysis failed on file /home/runner/work/openssl/openssl/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c near following tokens , CRYPTO_realloc_fn CPP_POINTEUR realloc_fn , CRYPTO_free_fn CPP_POINTEUR free_fn ) ; __attribute__ ( ( malloc ) ) void CPP_POINTEUR CRYPTO_malloc ( size_t "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01640"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01640] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01645"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01645] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01670"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01670] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01674"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1674"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01674] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01677"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1677"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01677] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01702"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01702] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01706"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1706"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01706] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01710"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1710"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01710] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01718"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#1718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01718] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02762"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#2762"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02762] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02925"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#2925"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02925] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02928"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#2928"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02928] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02952"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#2952"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02952] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02956"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#2956"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02956] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02978"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#2978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02978"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#2978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "03002"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#3002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03002] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "03008"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#3008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03008] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "03033"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#3033"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03033] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "03037"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_aes_cbc_hmac_sha.c.html#3037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03037] The expression 2&gt;1 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
