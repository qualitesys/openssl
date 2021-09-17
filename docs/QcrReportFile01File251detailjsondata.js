console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/cms/cms_kari.c.html" 
 , "texte" : "File crypto/cms/cms_kari.c 112 rule violations " 
 , "fic2"  : "./qc/crypto/cms/cms_kari.c.xml" 
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
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "43"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01214] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01404"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01404] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01406"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01406] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01408"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01408] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01408"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01408] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01430"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01430] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01430"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01430] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01430"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01430] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01454"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01454] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01456"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01456] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01460] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01460"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01460] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "01485"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1485"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01485] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01487"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01487] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01489"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01489] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01489"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01489] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01856"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1856"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01856] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01857"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#1857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01857] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03079"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03079] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03084"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3084"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03084] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03084"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3084"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03084] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03109"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03109] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03116"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03116] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03116"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03116] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03141"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03141] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03149"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03149] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03149"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#3149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03149] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "14491"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14491] The expression palg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14493"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14493] The expression pukm applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14525"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14525"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14525] The pointer oik is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14536"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14536"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14536] The expression issuer applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14542"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14542"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14542] The expression sno applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14548"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14548"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14548] The expression keyid applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14554"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14554] The expression pubalg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14560"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14560] The expression pubkey applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14567"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14567] The expression issuer applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14569"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14569] The expression sno applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14572"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14572] The expression keyid applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14575"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14575"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14575] The expression pubalg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14577"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14577"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14577] The expression pubkey applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14586"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14586"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14586] The pointer oik is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14613"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14613"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14613] The expression issuer applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14615"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14615"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14615] The expression sno applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14617"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14617"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14617] The expression keyid applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14623"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14623] The expression tm applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14629"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14629] The expression other applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14636"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14636] The expression keyid applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14638"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14638] The expression tm applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14640"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14640] The expression other applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14642"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14642"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14642] The expression issuer applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14648"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14648] The expression sno applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14676"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14676"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14676] The pointer pctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14699"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14699"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14699] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_derive_init(pctx)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14700"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14700"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14700] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14709"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14709"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14709] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_derive_set_peer(pctx,pub_pkey)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14710"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14710"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14710] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14753"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14753"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14753] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14764"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14764"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14764] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_derive(kari-&gt;pctx,kek, &amp; keklen)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14765"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14765"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14765] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14767"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14767"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14767] The expression  ! EVP_CipherInit_ex(kari-&gt;ctx,(( void  *)0),(( void  *)0),kek,(( void  *)0),enc) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14780"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14780"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14780] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14782"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14782"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14782] The expression  ! EVP_CipherUpdate(kari-&gt;ctx,(( void  *)0), &amp; outlen,in,inlen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14787"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14787"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14787] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14794"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14794"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14794] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14795"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14795"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14795] The expression  ! EVP_CipherUpdate(kari-&gt;ctx,out, &amp; outlen,in,inlen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14796"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14796] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14803"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14803"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14803] The expression  ! rv applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14821"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14821] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14832"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14832"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14832] The pointer ec is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14837"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14837"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14837] The expression  ! ossl_cms_env_asn1_ctrl(ri,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14837"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14837"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14837] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "14838"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14838"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14838] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14840"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14840"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14840] The expression  ! cms_kek_cipher( &amp; cek, &amp; ceklen,enckey,enckeylen,ri-&gt;d.kari,0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14840"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14840"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14840] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14841"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14841"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14841] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14882"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14882"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14882] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14883"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14883"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14883] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_keygen_init(pctx)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14884"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14884"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14884] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14885"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14885] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_keygen(pctx, &amp; ekey)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14886"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14886"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14886] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14894"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14894"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14894] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14895"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14895] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_derive_init(pctx)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14896"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14896] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14900"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14900"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14900] The expression  ! rv applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14926"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14926"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14926] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14927"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14927"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14927] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_derive_init(pctx)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14928"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14928"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14928] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14945"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14945"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14945] The pointer kari is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14973"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14973] The expression  ! OPENSSL_sk_push(ossl_check_CMS_RecipientEncryptedKey_sk_type(kari-&gt;recipientEncryptedKeys),ossl_check_CMS_RecipientEncryptedKey_type(rek)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14987"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14987"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14987] The expression  ! ossl_cms_set1_keyid( &amp; rek-&gt;rid-&gt;d.rKeyId-&gt;subjectKeyIdentifier,recip) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14991"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#14991"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14991] The expression  ! ossl_cms_set1_ias( &amp; rek-&gt;rid-&gt;d.issuerAndSerialNumber,recip) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15005"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15005] The expression  ! cms_kari_create_ephemeral_key(kari,recipPubKey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15031"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15031"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15031] The expression  ! ossl_cms_set1_keyid( &amp; oik-&gt;d.subjectKeyIdentifier,originator) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15035"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15035] The expression  ! ossl_cms_set1_ias( &amp; oik-&gt;d.issuerAndSerialNumber,originator) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15039"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15039"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15039] The expression  ! cms_kari_set_originator_private_key(kari,originatorPrivKey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15053"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15053"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15053] The pointer kekcipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15054"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15054"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15054] The pointer fetched_kekcipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15055"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15055"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15055] The pointer kekcipher_name is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15095"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15095"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15095] goto statement jump to enc"
}} 
,
{ "ligne" : {
   "c1" : "15146"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15146"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15146] The pointer kari is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15147"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15147"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15147] The pointer ec is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15148"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15148"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15148] The pointer rek is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15149"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15149"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15149] The pointer reks is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15164"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15164] The expression  ! cms_wrap_init(kari,ec-&gt;cipher) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15174"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15174] The expression  ! oik-&gt;d.originatorKey applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15178"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15178] The expression  ! ossl_cms_env_asn1_ctrl(ri,0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15178"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15178] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15182"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15182"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15182] The pointer enckey is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15185"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[15185] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_derive_set_peer(kari-&gt;pctx,rek-&gt;pkey)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "15187"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15187] The expression  ! cms_kek_cipher( &amp; enckey, &amp; enckeylen,ec-&gt;key,ec-&gt;keylen,kari,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15188"
 , "c1link" : "./qc/crypto/cms/cms_kari.c.html#15188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15188] The expression 1 is invariable, always true"
}} 
]
};
console.log('leListeStr 99 main end');
