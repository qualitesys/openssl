console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/x509/v3_purp.c.html" 
 , "texte" : "File crypto/x509/v3_purp.c 97 rule violations " 
 , "fic2"  : "./qc/crypto/x509/v3_purp.c.xml" 
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
 , "c4" : "25"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "36"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "12"
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
 , "c4" : "9"
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
   "c1" : "00959"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02080"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02243"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02243] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02272"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02272] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02274] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02274] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02296] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02320"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02320] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02322] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02326] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02326] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02353"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02353] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02355] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02355] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02722"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02722] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02723"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#2723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02723] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "13875"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#13875"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13875] The pointer pt is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13877"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#13877"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13877] The expression  ! ossl_x509v3_cache_extensions(x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13905"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#13905"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13905] The expression  ! xptable applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13918"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#13918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13918] Suspicious mix of Bitwise and Literal expressions in idx&lt;( int  )( sizeof (xstandard)/ sizeof ((xstandard)[0]))"
}} 
,
{ "ligne" : {
   "c1" : "13926"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#13926"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13926] The pointer xptmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13961"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#13961"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13961] The pointer ptmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13971"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#13971"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[13971] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14009"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14009"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14009] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14028"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14028"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14028] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14038"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14038"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14038] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14040"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14040"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14040] The expression  ! OPENSSL_sk_push(ossl_check_X509_PURPOSE_sk_type(xptable),ossl_check_X509_PURPOSE_type(ptmp)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14046"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14046"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14046] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14148"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14148] The expression OBJ_bsearch_nid( &amp; ex_nid,supported_nids,( sizeof (supported_nids)/ sizeof ((supported_nids)[0]))) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14167"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14167] Suspicious mix of Bitwise and Literal expressions in OPENSSL_sk_num(ossl_check_const_GENERAL_NAME_sk_type(dp-&gt;CRLissuer))&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14264"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14264] The pointer bs is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14265"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14265"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14265] The pointer pci is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14266"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14266"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14266] The pointer usage is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14267"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14267"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14267] The pointer ns is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14268"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14268"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14268] The pointer extusage is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14276"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14276] The expression ((( _Atomic  int  *) &amp; x-&gt;ex_cached)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14280"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14280] The expression  * __atomic_load_ptr applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14280"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14280] The expression __atomic_load(__atomic_load_ptr, &amp; __atomic_load_tmp,(memory_order_acquire)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14290"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14290] The expression  ! CRYPTO_THREAD_write_lock(x-&gt;lock) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14298"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14298] The expression  ! X509_digest(x,EVP_sha1(),x-&gt;sha1_hash,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14313"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14313] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14322"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14322] The expression bs-&gt;ca applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14351"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14351"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14351] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14361"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14361"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14361] The expression 85 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14361"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14361"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14361] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14362"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14362] The expression 86 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14362"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14362] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14361"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14361"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14361] Suspicious mix of Bitwise and Literal expressions in X509_get_ext_by_NID(x,85, - 1)&gt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14362"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14362] Suspicious mix of Bitwise and Literal expressions in X509_get_ext_by_NID(x,86, - 1)&gt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14380"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14380"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14380] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14412"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14412] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14463"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14463"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14463] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14546"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14546"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14546] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14578"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14578] The expression  ! X509_EXTENSION_get_critical(ex) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14580"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14580] The expression  ! X509_supported_extension(ex) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14676"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14676"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14676] The expression CRYPTO_THREAD_write_lock(x-&gt;lock) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14690"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14690] The expression  ! ossl_x509v3_cache_extensions(x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14712"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14712] The expression require_ca applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14728"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14728"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14728] The expression require_ca applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14758"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14758"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14758] The expression require_ca applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14807"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14807"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14807] The expression require_ca applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14809"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14809"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14809] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14830"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14830] The expression require_ca applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14842"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14842"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14842] The expression require_ca applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14864"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14864"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14864] The expression  ! X509_EXTENSION_get_critical(ext) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14881"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14881"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14881] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14936"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14936"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14936] The expression akid-&gt;issuer applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14942"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14942"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14942] The pointer gens is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14943"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14943"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14943] The pointer gen is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14978"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14978] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14978"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14978] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14992"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14992"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14992] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14992"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#14992"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14992] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15006"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15006] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15006"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15006] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15018"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15018] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15018"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15018] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15038"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15038] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15038"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15038] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15058"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15058] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15058"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15058] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15078"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15078] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15078"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15078] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15087"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15087] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "15087"
 , "c1link" : "./qc/crypto/x509/v3_purp.c.html#15087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15087] The expression 0 is invariable, always false"
}} 
]
};
console.log('leListeStr 99 main end');
