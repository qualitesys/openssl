console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/cms/cms_rsa.c.html" 
 , "texte" : "File crypto/cms/cms_rsa.c 78 rule violations " 
 , "fic2"  : "./qc/crypto/cms/cms_rsa.c.xml" 
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
 , "c4" : "10"
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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01704"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01704] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01867"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1867"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01867] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01870"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01870] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01870"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01870] Suspicious mix of Bitwise and Literal expressions in __builtin_object_size(__resolved,2&gt;1)&lt;4096"
}} 
,
{ "ligne" : {
   "c1" : "01894"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1894"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01894] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01896"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1896"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01896] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01898"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1898"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01898] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01898"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1898"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01898] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01920"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01920] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01920"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01920] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01920"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01920] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "01944"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01944] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01946"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01946] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01950"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1950"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01950] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01950"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1950"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01950] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "01975"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01975] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01977"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01977] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01979"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01979] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "01979"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#1979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01979] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03030"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3030"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03030] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03035"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03035] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "03035"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03035] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "03060"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3060"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03060] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03067"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3067"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03067] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03067"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3067"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03067] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "03092"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03092] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03100"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03100] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "03100"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#3100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[03100] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "13677"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13677"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13677] The pointer oaep is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13717"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13717"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13717] The pointer pkctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13718"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13718"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13718] The pointer cmsalg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13721"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13721"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13721] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13736"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13736"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13736] The pointer oaep is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13745"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13745"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13745] The expression  ! CMS_RecipientInfo_ktri_get0_algs(ri,(( void  *)0),(( void  *)0), &amp; cmsalg) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13779"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13779"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13779] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13788"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13788"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13788] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13795"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13795"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13795] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13810"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13810] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13818"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13818"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13818] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13831"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13831"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13831] The expression 4 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13831"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13831"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13831] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_CTX_set_rsa_padding(pkctx,4)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13832"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13832"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13832] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13833"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13833] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_CTX_set_rsa_oaep_md(pkctx,md)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13834"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13834"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13834] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13835"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13835"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13835] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_CTX_set_rsa_mgf1_md(pkctx,mgf1md)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13836"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13836"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13836] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13842"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13842"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13842] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_CTX_set0_rsa_oaep_label(pkctx,label,labellen)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13843"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13843"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13843] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13854"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13854"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13854] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13854"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13854"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13854] The pointer mgf1md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13865"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13865"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13865] The pointer alg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13868"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13868"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13868] The pointer label is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13868"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13868] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13870"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13870] Suspicious mix of Bitwise and Literal expressions in CMS_RecipientInfo_ktri_get0_algs(ri,(( void  *)0),(( void  *)0), &amp; alg)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13885"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13885] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_CTX_get_rsa_padding(pkctx, &amp; pad_mode)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13895"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13895] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_CTX_get_rsa_oaep_md(pkctx, &amp; md)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13896"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13896] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13897"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13897"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13897] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_CTX_get_rsa_mgf1_md(pkctx, &amp; mgf1md)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13898"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13898"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13898] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13901"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13901"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13901] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13908"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13908"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13908] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13909"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13909] The expression  ! ossl_x509_algor_new_from_md( &amp; oaep-&gt;hashFunc,md) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13910"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13910"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13910] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13911"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13911] The expression  ! ossl_x509_algor_md_to_mgf1( &amp; oaep-&gt;maskGenFunc,mgf1md) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13912"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13912"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13912] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13914"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13914"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13914] The pointer los is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13922"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13922"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13922] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13929"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13929"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13929] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13930"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13930"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13930] The expression  ! ASN1_OCTET_STRING_set(los,label,labellen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13932"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13932"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13932] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13938"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13938] The expression  ! ASN1_item_pack(oaep,(RSA_OAEP_PARAMS_it()), &amp; os) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13939"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13939"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13939] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13978"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#13978"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13978] The pointer alg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14004"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#14004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14004] Suspicious mix of Bitwise and Literal expressions in EVP_PKEY_CTX_get_rsa_padding(pkctx, &amp; pad_mode)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14028"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#14028"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14028] The pointer alg is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14057"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#14057"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14057] The expression EVP_PKEY_is_a(pkey,'RSA-PSS') applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14057"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#14057"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14057] The expression 'RSA-PSS' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14068"
 , "c1link" : "./qc/crypto/cms/cms_rsa.c.html#14068"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14068] The expression OBJ_find_sigid_algs(nid,(( void  *)0), &amp; nid2) applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
