console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/x509/x_x509a.c.html" 
 , "texte" : "File crypto/x509/x_x509a.c 57 rule violations " 
 , "fic2"  : "./qc/crypto/x509/x_x509a.c.xml" 
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "16"
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
 , "c4" : "4"
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
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02080"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02243"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02243] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02272"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02272] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02274] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02274] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02296] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02320"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02320] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02322] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02326] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02326] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02353"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02353] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02355] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02355] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02722"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02722] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02723"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#2723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02723] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "13903"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13903"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[13903] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "13918"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13918"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13918] The pointer aux is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13919"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13919] The expression  ! name applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13930"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13930"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[13930] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "13940"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13940"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[13940] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "13951"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13951"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13951] The pointer aux is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13952"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13952"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13952] The expression  ! id applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13963"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13963"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[13963] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "13974"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13974"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[13974] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "13991"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#13991"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13991] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14004"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14004] The expression len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14011"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14011"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14011] The pointer aux is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14017"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14017"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14017] The expression obj applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14019"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14019"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14019] The expression  ! objtmp applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14022"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14022"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14022] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14027"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14027"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14027] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14033"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14033"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14033] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14038"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14038"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14038] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14048"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14048] The pointer aux is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14049"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14049"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14049] The pointer objtmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14052"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14052"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14052] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14058"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14058"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14058] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14063"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14063"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14063] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14069"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14069] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14074"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14074"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14074] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14075"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14075] Suspicious mix of Bitwise and Literal expressions in OPENSSL_sk_push(ossl_check_ASN1_OBJECT_sk_type(aux-&gt;reject),ossl_check_ASN1_OBJECT_type(objtmp))&gt;0"
}} 
,
{ "ligne" : {
   "c1" : "14079"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14079] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14086"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14086"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14086] The expression x-&gt;aux applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14098"
 , "c1link" : "./qc/crypto/x509/x_x509a.c.html#14098"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14098] The expression x-&gt;aux applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
