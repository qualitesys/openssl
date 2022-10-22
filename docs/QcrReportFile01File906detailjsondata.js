console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html" 
 , "texte" : "File providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c 21 rule violations " 
 , "fic2"  : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.xml" 
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
 , "c1" : "03433"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#3433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP999999[03433] syntax analysis failed on file /home/runner/work/openssl/openssl/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c near following tokens , CRYPTO_realloc_fn CPP_POINTEUR realloc_fn , CRYPTO_free_fn CPP_POINTEUR free_fn ) ; __attribute__ ( ( malloc ) ) void CPP_POINTEUR CRYPTO_malloc ( size_t "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01611"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1611"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01611] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01616"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1616"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01616] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01641"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01641] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01645"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01645] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01648"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01648] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01673"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1673"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01673] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01677"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1677"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01677] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01681"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1681"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01681] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01689"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#1689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01689] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02733"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2733"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02733] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02896"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2896"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02896] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02899"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2899"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02899] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02923"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02923] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02927"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2927"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02927] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02949"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02949] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02949"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02949] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02973"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02973] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02979"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#2979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02979] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "03004"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#3004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03004] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "03008"
 , "c1link" : "./qc/providers/implementations/ciphers/cipher_rc4_hmac_md5_hw.c.html#3008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03008] The expression 2&gt;1 is invariable"
}} 
]
};
console.log('leListeStr 99 main end');
