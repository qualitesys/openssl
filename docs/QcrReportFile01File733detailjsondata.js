console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/x509/x509_cmp.c.html" 
 , "texte" : "File crypto/x509/x509_cmp.c 61 rule violations " 
 , "fic2"  : "./qc/crypto/x509/x509_cmp.c.xml" 
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
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02080"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02243"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02243] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02272"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02272] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02274] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02274] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02296] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02320"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02320] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02322] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02326] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02326] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02353"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02353] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02355] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02355] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02722"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02722] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02723"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#2723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02723] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "13626"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13626"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13626] The pointer ai is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13626"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13626"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13626] The pointer bi is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13658"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13658"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13658] The pointer f is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13670"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13670"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13670] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13681"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13681"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13681] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13688"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13688"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13688] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13690"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13690] The expression  ! EVP_DigestInit_ex(ctx,digest,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13695"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13695"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13695] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13696"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13696"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13696] The expression  ! EVP_DigestUpdate(ctx,( unsigned  char  *)f,strlen(f)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13697"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13697"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13697] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13699"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13699"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13699] The expression  ! EVP_DigestUpdate(ctx,( unsigned  char  *)a-&gt;cert_info.serialNumber.data,( unsigned  long  )a-&gt;cert_info.serialNumber.length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13702"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13702"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13702] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13703"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13703] The expression  ! EVP_DigestFinal_ex(ctx, &amp; (md[0]),(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13708"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13708"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13708] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13849"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13849"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[13849] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "13890"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13890"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13890] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "13892"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13892"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13892] The expression  ! OPENSSL_sk_insert(ossl_check_X509_sk_type(sk),ossl_check_X509_type(cert),((flags&amp;0x2)!=0?0 :  - 1)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13935"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#13935"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13935] The expression  ! ossl_x509_add_cert_new(p_sk,((X509 *)OPENSSL_sk_value(ossl_check_const_X509_sk_type(certs),(j))),flags) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14084"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14084"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14084] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "14126"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14126] The expression  ! sk applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14150"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14150"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14150] The pointer x509 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14197"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14197"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14197] The pointer xk is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14214"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14214] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14251"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14251] The expression 'EC' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14254"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14254] The expression  ! EVP_PKEY_get_group_name(pkey,curve_name, sizeof (curve_name), &amp; curve_name_len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14285"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14285"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14285] The pointer pk is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14321"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14321"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14321] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "14329"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14329"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14329] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "14336"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14336"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14336] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "14341"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14341"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14341] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "14358"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14358"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14358] The expression perror_depth applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14391"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14391] The expression  ! X509_up_ref(x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14392"
 , "c1link" : "./qc/crypto/x509/x509_cmp.c.html#14392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14392] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
