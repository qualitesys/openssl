console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/x509/v3_akid.c.html" 
 , "texte" : "File crypto/x509/v3_akid.c 61 rule violations " 
 , "fic2"  : "./qc/crypto/x509/v3_akid.c.xml" 
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
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "23"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02080"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02243"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02243] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02272"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02272] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02274] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02274] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02296] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02320"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02320] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02322] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02326] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02326] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02353"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02353] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02355] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02355] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02722"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02722] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02723"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#2723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02723] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "13865"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13865"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13865] The pointer tmpextlist is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13867"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13867"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13867] The expression akeyid-&gt;keyid applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13885"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13885] The expression  ! X509V3_add_value((akeyid-&gt;issuer||akeyid-&gt;serial)?'keyid' : (( void  *)0),tmp, &amp; extlist) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13885"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13885] The expression 'keyid' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13897"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13897"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13897] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13901"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13901] The expression akeyid-&gt;issuer applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13917"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13917"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13917] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13921"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13921] The expression akeyid-&gt;serial applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13933"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13933"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13933] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13935"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13935"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13935] The expression  ! X509V3_add_value('serial',tmp, &amp; extlist) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13935"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13935"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13935] The expression 'serial' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13937"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13937"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13937] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13962"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13962"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13962] The pointer cnf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13988"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13988"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13988] The pointer ext is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13989"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13989"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13989] The pointer issuer_cert is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13997"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13997"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13997] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13999"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#13999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13999] The expression 'none' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14005"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14005] The expression 'keyid' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14007"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14007"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14007] The expression 'always' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14009"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14009] The expression 'issuer' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14011"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14011] The expression 'always' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14016"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14016"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14016] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14037"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14037"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14037] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14039"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14039"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14039] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14049"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14049"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14049] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14055"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14055"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14055] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14077"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14077] The expression X509_PUBKEY_set( &amp; pubkey,ctx-&gt;issuer_pkey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14087"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14087] Suspicious mix of Bitwise and Literal expressions in ASN1_STRING_length(ikeyid)&lt;=2"
}} 
,
{ "ligne" : {
   "c1" : "14093"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14093"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14093] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14118"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14118"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14118] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14127"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14127] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14132"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14132"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14132] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14143"
 , "c1link" : "./qc/crypto/x509/v3_akid.c.html#14143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14143] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
