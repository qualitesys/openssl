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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP999999"
 , "c3" : "Syntax error in source code"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "37"
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
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "15496"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP999999[15496] syntax analysis failed on file /home/runner/work/openssl/openssl/crypto/rand/rand_lib.c near following tokens , ( size_t ) num , 0 ) ; } typedef struct rand_global_st { CRYPTO_RWLOCK CPP_POINTEUR lock ; EVP_RAND_CTX CPP_POINTEUR seed "
}} 
,
{ "ligne" : {
   "c1" : "01172"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01172] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01177"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01177] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01202"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01202] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01206"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01206] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01209"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1209"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01209] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01234"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01234] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01238"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01238] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01242"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1242"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01242] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01250"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#1250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01250] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02283"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2283"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02283] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02446"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02446] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02473"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2473"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02473] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02477"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02477] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02499"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02499] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02499"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02499] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02523"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02523] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02529"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02529] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02554"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02554] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02558"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#2558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02558] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05114"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#5114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05114] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06472"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6472"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06472] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06477"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06477] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06502"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6502"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06502] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06507"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06507] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06536"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6536"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06536] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06541"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6541"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06541] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06562"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6562"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06562] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06567"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06567] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06583"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6583"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06583] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06602"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6602"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06602] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06607"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6607"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06607] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06627"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06627] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06632"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6632"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06632] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06653"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6653"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06653] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06658"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6658"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06658] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06679"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6679"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06679] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06684"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6684"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06684] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06706"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6706"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06706] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06711"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06711] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06735"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6735"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06735] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06740"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6740"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06740] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14968"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14968"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14968] The pointer funct_ref is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14969"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14969"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14969] The pointer rand_engine_lock is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14972"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14972"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14972] The pointer rand_meth_lock is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14973"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14973"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14973] The pointer default_RAND_meth is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15002"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15002"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15002] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15006"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15006"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15006] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15036"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15036"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15036] The expression  ! rand_inited applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15099"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15099] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15113"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15113"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15113] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15123"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15123"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15123] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15192"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15192"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15192] The pointer e is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15195"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15195"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15195] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15200"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15200"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15200] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15264"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15264] The pointer drbg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15301"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15301"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15301] The pointer drbg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15361"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15361"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15361] The pointer rand is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15377"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15377] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15393"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15393"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15393] The pointer rand is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15446"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15446"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15446] The pointer rand is declared but not initialized"
}} 
]
};
console.log('leListeStr 99 main end');
