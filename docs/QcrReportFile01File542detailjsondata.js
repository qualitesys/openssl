console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/ocsp/v3_ocsp.c.html" 
 , "texte" : "File crypto/ocsp/v3_ocsp.c 101 rule violations " 
 , "fic2"  : "./qc/crypto/ocsp/v3_ocsp.c.xml" 
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
 , "c4" : "42"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000018"
 , "c3" : "A suspicious bitwise expression is compared to a numerical expression"
 , "c4" : "26"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00964] Suspicious mix of Bitwise and Literal expressions in (size_t )__n&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00996] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01029] Suspicious mix of Bitwise and Literal expressions in __size * __n&gt;__builtin_object_size(__ptr,0)"
}} 
,
{ "ligne" : {
   "c1" : "02080"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2080"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02080] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02243"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02243] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02272"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02272] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02274] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02274"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02274] Suspicious mix of Bitwise and Literal expressions in __buflen&gt;__builtin_object_size(__buf,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02296] Suspicious mix of Bitwise and Literal expressions in 16&gt;__builtin_object_size(__s,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02320"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02320] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02322] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02326] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02326"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02326] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)/ sizeof ( wchar_t  )"
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02353"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02353] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02355] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02355"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02355] Suspicious mix of Bitwise and Literal expressions in __len&gt;__builtin_object_size(__dst,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "02722"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02722] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02723"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#2723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[02723] Suspicious mix of Bitwise and Literal expressions in __n&gt;__builtin_object_size(__dest,2&gt;1)"
}} 
,
{ "ligne" : {
   "c1" : "13904"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13904"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13904] The expression a-&gt;crlUrl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13905"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13905"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13905] The expression '%*scrlUrl: ' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13905"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13905"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13905] The expression '' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13905"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13905"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13905] Suspicious mix of Bitwise and Literal expressions in BIO_printf(bp,'%*scrlUrl: ',ind,'')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13906"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13906"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13906] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13907"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13907"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13907] The expression  ! ASN1_STRING_print(bp,(ASN1_STRING *)a-&gt;crlUrl) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13908"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13908"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13908] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13909"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13909] The expression '\n' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13909"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13909] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "13909"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13909] Suspicious mix of Bitwise and Literal expressions in BIO_write(bp,'\n',1)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13910"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13910"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13910] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13912"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13912"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13912] The expression a-&gt;crlNum applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13913"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13913] The expression '%*scrlNum: ' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13913"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13913] The expression '' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13913"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13913] Suspicious mix of Bitwise and Literal expressions in BIO_printf(bp,'%*scrlNum: ',ind,'')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13914"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13914"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13914] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13915"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13915] Suspicious mix of Bitwise and Literal expressions in i2a_ASN1_INTEGER(bp,a-&gt;crlNum)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13916"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13916"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13916] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13917"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13917] The expression '\n' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13917"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13917] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "13917"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13917] Suspicious mix of Bitwise and Literal expressions in BIO_write(bp,'\n',1)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13918"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13918"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13918] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13920"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13920] The expression a-&gt;crlTime applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13921"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13921] The expression '%*scrlTime: ' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13921"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13921] The expression '' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13921"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13921] Suspicious mix of Bitwise and Literal expressions in BIO_printf(bp,'%*scrlTime: ',ind,'')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13922"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13922"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13922] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13923"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13923] The expression  ! ASN1_GENERALIZEDTIME_print(bp,a-&gt;crlTime) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13924"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13924"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13924] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13925"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13925"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13925] The expression '\n' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13925"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13925"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13925] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "13925"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13925"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13925] Suspicious mix of Bitwise and Literal expressions in BIO_write(bp,'\n',1)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13926"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13926"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13926] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13936"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13936"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13936] The expression '%*s' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13936"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13936"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13936] The expression '' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13936"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13936"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13936] Suspicious mix of Bitwise and Literal expressions in BIO_printf(bp,'%*s',ind,'')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13938"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13938] The expression  ! ASN1_GENERALIZEDTIME_print(bp,cutoff) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13946"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13946] The expression '%*s' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13946"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[13946] The expression '' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "13946"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13946"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13946] Suspicious mix of Bitwise and Literal expressions in BIO_printf(bp,'%*s',ind,'')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13948"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[13948] Suspicious mix of Bitwise and Literal expressions in i2a_ASN1_OBJECT(bp,oid)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "13966"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13966"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13966] The expression pp applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13975"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13975"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13975] The pointer os is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13975"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13975"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[13975] The pointer pos is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "13992"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13992"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13992] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "13996"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[13996] The expression  ! ASN1_OCTET_STRING_set(os, * pp,length) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "13997"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#13997"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[13997] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14001"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14001] The expression pos applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14032"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14032] The expression '%*s' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14032"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14032] The expression '' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14032"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14032] Suspicious mix of Bitwise and Literal expressions in BIO_printf(out,'%*s',indent,'')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14034"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14034] The expression 4 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14034"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14034] Suspicious mix of Bitwise and Literal expressions in i2a_ASN1_STRING(out,nonce,4)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14058"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14058"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14058] The pointer ad is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14060"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14060"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14060] The expression '%*sIssuer: ' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14060"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14060"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14060] The expression '' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14060"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14060"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14060] Suspicious mix of Bitwise and Literal expressions in BIO_printf(bp,'%*sIssuer: ',ind,'')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14061"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14061"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14061] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14062"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14062] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14062"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14062] The expression ((1|2|4|0x10|0x100|0x200)|8|(2&lt;&lt;16)|(1&lt;&lt;23)|0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14062"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14062] Suspicious mix of Bitwise and Literal expressions in X509_NAME_print_ex(bp,a-&gt;issuer,0,((1|2|4|0x10|0x100|0x200)|8|(2&lt;&lt;16)|(1&lt;&lt;23)|0))&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14063"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14063"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14063] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14066"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14066] The expression '\n%*s' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14066"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14066] The expression '' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14066"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14066] Suspicious mix of Bitwise and Literal expressions in BIO_printf(bp,'\n%*s',(2 * ind),'')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14067"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14067"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14067] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14068"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14068"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14068] Suspicious mix of Bitwise and Literal expressions in i2a_ASN1_OBJECT(bp,ad-&gt;method)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14069"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14069] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14070"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14070"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14070] The expression ' - ' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14070"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14070"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14070] Suspicious mix of Bitwise and Literal expressions in BIO_puts(bp,' - ')&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14071"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14071"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14071] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14072"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14072"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[14072] Suspicious mix of Bitwise and Literal expressions in GENERAL_NAME_print(bp,ad-&gt;location)&lt;=0"
}} 
,
{ "ligne" : {
   "c1" : "14073"
 , "c1link" : "./qc/crypto/ocsp/v3_ocsp.c.html#14073"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14073] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
