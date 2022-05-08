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
   "c1" : "15431"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP999999[15431] syntax analysis failed on file /home/runner/work/openssl/openssl/crypto/rand/rand_lib.c near following tokens , ( size_t ) num , 0 ) ; } typedef struct rand_global_st { CRYPTO_RWLOCK CPP_POINTEUR lock ; EVP_RAND_CTX CPP_POINTEUR seed "
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
   "c1" : "05107"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#5107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05107] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06465"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6465"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06465] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06470"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06470] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06495"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06495] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06500"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06500] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06529"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06529] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06534"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06534] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06555"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6555"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06555] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06560"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06560] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06576"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06576] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06595"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06595] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06600"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06600] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06620"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6620"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06620] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06625"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06625] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06646"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6646"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06646] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06651"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06651] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06672"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6672"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06672] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06677"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6677"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06677] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06699"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6699"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06699] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06704"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6704"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06704] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06728"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6728"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06728] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06733"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#6733"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06733] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14903"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14903"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14903] The pointer funct_ref is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14904"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14904"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14904] The pointer rand_engine_lock is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14907"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14907"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14907] The pointer rand_meth_lock is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14908"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14908"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14908] The pointer default_RAND_meth is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14937"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14937"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14937] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14941"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14941"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14941] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14971"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#14971"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14971] The expression  ! rand_inited applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15034"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15034] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15048"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15048] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15058"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15058"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15058] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15127"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15127] The pointer e is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15130"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15130] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15135"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15135"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15135] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15199"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15199"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15199] The pointer drbg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15236"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15236] The pointer drbg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15296"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15296"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15296] The pointer rand is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15312"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15312"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15312] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15328"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15328"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15328] The pointer rand is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15381"
 , "c1link" : "./qc/crypto/rand/rand_lib.c.html#15381"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15381] The pointer rand is declared but not initialized"
}} 
]
};
console.log('leListeStr 99 main end');
