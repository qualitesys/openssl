console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/rand/rand_lib.c.html" 
 , "texte" : "File crypto/rand/rand_lib.c 61 rule violations " 
 , "fic2"  : "./qc/crypto/rand/rand_lib.c.xml" 
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
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "37"
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
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "15680"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15680"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP999999[15680] syntax analysis failed on file /home/runner/work/openssl/openssl/crypto/rand/rand_lib.c near following tokens , ( size_t ) num , 0 ) ; } typedef struct rand_global_st { CRYPTO_RWLOCK CPP_POINTEUR lock ; EVP_RAND_CTX CPP_POINTEUR seed "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01172"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01172] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01177"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01177] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01202"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01202] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01206"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01206] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01209"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1209"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01209] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01234"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01234] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01238"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01238] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01242"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1242"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01242] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01250"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01250] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02283"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2283"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02283] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02446"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02446] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02473"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2473"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02473] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02477"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02477] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02499"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02499] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02499"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02499] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02523"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02523] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02529"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02529] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02554"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02554] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02558"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02558] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "05152"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#5152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05152] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06511"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06511] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06516"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06516] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06541"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6541"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06541] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06546"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06546] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06575"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6575"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06575] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06580"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06580] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06601"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6601"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06601] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06606"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6606"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06606] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06622"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6622"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06622] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06641"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06641] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06646"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6646"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06646] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06666"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6666"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06666] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06671"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06671] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06692"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6692"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06692] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06697"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06697] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06718"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06718] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06723"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06723] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06745"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6745"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06745] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06750"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6750"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06750] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06774"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6774"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06774] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "06779"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6779"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06779] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15152"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15152"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15152] The pointer funct_ref is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15153"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15153] The pointer rand_engine_lock is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15156"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15156"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15156] The pointer rand_meth_lock is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15157"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15157"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15157] The pointer default_RAND_meth is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15186"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15186"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15186] goto statement jump to err"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15190"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15190"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15190] goto statement jump to err"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15220"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15220] The expression  ! rand_inited applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15283"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15283] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15297"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15297"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15297] goto statement jump to err"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15307"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15307"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15307] goto statement jump to err"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15376"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15376"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15376] The pointer e is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15379"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15379"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15379] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15384"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15384] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15448"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15448] The pointer drbg is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15485"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15485"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15485] The pointer drbg is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15545"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15545"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15545] The pointer rand is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15561"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15561"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15561] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15577"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15577] The pointer rand is declared but not initialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "15630"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15630"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15630] The pointer rand is declared but not initialized"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/crypto/rand/rand_lib.c.svg" }

};
console.log('leListeStr 99 main end');
