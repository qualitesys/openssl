console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/ec/ecdsa_ossl.c.html" 
 , "texte" : "File crypto/ec/ecdsa_ossl.c 121 rule violations " 
 , "fic2"  : "./qc/crypto/ec/ecdsa_ossl.c.xml" 
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
 , "c2" : "QC-CPP000005"
 , "c3" : "Check pointer declaration to unsigned char"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "27"
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "20"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00410] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00411] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01562"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1562"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01562] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01567"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01567] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01567"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01567] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01592"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1592"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01592] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01599"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01599] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01599"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01599] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01624"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1624"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01624] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01632"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1632"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01632] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01632"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#1632"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01632] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02673"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2673"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02673] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02836"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2836"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02836] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02863"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2863"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02863] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02865"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2865"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02865] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02867"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2867"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02867] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02867"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2867"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02867] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02889"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2889"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02889] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02889"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2889"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02889] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02889"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2889"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02889] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02913"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02913] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02915"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02915] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02919"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02919] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02919"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02919] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02944"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02944] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02946"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02946] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02948"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02948] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02948"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#2948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02948] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "10290"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10290"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10290] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10328"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10328"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10328] The pointer order is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10334"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10334"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10334] The pointer group is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10337"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10337"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10337] The pointer priv_key is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10343"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10343"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10343] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10355"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10355"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10355] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10368"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10368] The expression  ! EC_KEY_can_sign(eckey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10377"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10377] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10382"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10382] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10417"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10417"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10417] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10419"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10419"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10419] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10429"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10429"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10429] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10438"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10438"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10438] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10448"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10448] The expression  ! BN_generate_dsa_nonce(k,order,priv_key,dgst,dlen,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10455"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10455"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10455] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10458"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10458] The expression  ! BN_priv_rand_range_ex(k,order,0,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10458"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10458] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "10464"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10464"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10464] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10467"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10467"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10467] The expression BN_is_zero(k) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10470"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10470] The expression  ! EC_POINT_mul(group,tmp_point,k,(( void  *)0),(( void  *)0),ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10484"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10484"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10484] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10487"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10487] The expression  ! EC_POINT_get_affine_coordinates(group,tmp_point,X,(( void  *)0),ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10497"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10497"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10497] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10500"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10500] The expression  ! BN_nnmod(r,X,order,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10506"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10506"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10506] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10508"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10508] The expression BN_is_zero(r) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10511"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10511] The expression  ! ossl_ec_group_do_inverse_ord(group,k,k,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10517"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10517"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10517] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10528"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10528"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10528] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10558"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10558"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10558] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10563"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10563"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10563] The pointer order is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10563"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10563"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10563] The pointer ckinv is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10569"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10569] The pointer group is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10570"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10570"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10570] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10571"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10571"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10571] The pointer priv_key is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10609"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10609"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10609] The expression  ! EC_KEY_can_sign(eckey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10655"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10655"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10655] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10659"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10659"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10659] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10664"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10664"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10664] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10674"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10674"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10674] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10684"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10684"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10684] The expression  ! BN_bin2bn(dgst,dgst_len,m) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10690"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10690"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10690] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10699"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10699"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10699] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10711"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10711] The expression  ! ecdsa_sign_setup(eckey,ctx, &amp; kinv, &amp; ret-&gt;r,dgst,dgst_len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10717"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10717"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10717] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10732"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10732"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10732] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10743"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10743"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10743] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10745"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10745"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10745] The expression  ! bn_mod_add_fixed_top(s,s,m,order) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10751"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10751"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10751] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10764"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10764"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10764] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10767"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10767"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10767] The expression BN_is_zero(s) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10786"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10786"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10786] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10701"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10701"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[10701] The condition of do while loop is always true, infinite loop risk do{} while (1); 1"
}} 
,
{ "ligne" : {
   "c1" : "10792"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[10792] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "10796"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10796"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10796] The expression  ! ok applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10819"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10819"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10819] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10820"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10820"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10820] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10821"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10821] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10841"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10841"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10841] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10845"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10845"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10845] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10857"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10857"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10857] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10858"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10858"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10858] The pointer order is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10859"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10859"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10859] The pointer u1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10859"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10859"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10859] The pointer u2 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10859"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10859"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10859] The pointer m is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10859"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10859"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10859] The pointer X is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10865"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10865"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10865] The pointer group is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10866"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10866"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[10866] The pointer pub_key is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "10873"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10873"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10873] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10878"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10878"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[10878] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "10895"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10895] The expression  ! EC_KEY_can_sign(eckey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10932"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10932"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10932] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10946"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10946] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10950"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10950"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[10950] Suspicious mix of Bitwise and Literal expressions in BN_ucmp(sig-&gt;r,order)&gt;=0"
}} 
,
{ "ligne" : {
   "c1" : "10951"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[10951] Suspicious mix of Bitwise and Literal expressions in BN_ucmp(sig-&gt;s,order)&gt;=0"
}} 
,
{ "ligne" : {
   "c1" : "10958"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10958"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10958] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10961"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10961"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10961] The expression  ! ossl_ec_group_do_inverse_ord(group,u2,sig-&gt;s,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10967"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10967"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10967] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10976"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10976"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10976] The expression  ! BN_bin2bn(dgst,dgst_len,m) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "10982"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10982"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10982] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10991"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10991"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[10991] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "10994"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#10994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[10994] The expression  ! BN_mod_mul(u1,m,u2,order,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11000"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11000"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11000] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11003"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11003] The expression  ! BN_mod_mul(u2,sig-&gt;r,u2,order,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11009"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11009"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11009] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11012"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11012"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11012] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11022"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11022"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11022] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11024"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11024"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11024] The expression  ! EC_POINT_mul(group,point,u1,pub_key,u2,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11030"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11030"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11030] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11033"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11033"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11033] The expression  ! EC_POINT_get_affine_coordinates(group,point,X,(( void  *)0),ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11043"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11043"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11043] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11046"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[11046] The expression  ! BN_nnmod(u1,X,order,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "11052"
 , "c1link" : "./qc/crypto/ec/ecdsa_ossl.c.html#11052"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11052] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
