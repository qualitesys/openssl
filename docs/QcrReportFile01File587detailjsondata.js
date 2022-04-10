console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/pkcs7/pk7_doit.c.html" 
 , "texte" : "File crypto/pkcs7/pk7_doit.c 223 rule violations " 
 , "fic2"  : "./qc/crypto/pkcs7/pk7_doit.c.xml" 
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "38"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "44"
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
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000019"
 , "c3" : "Risk for an equal test to be always false"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-CPPCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "84"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "36"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02102"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2102"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02102] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02265"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02265] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02294"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02294] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02296"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02296] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02318] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02318] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02342"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2342"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02342] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02344"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02344] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02348"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2348"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02348] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02373"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02373] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02375"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02375] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02377"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#2377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02377] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08190"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#8190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08190] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14414"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14414] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14416"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14416] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14419"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14419] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "14444"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14444] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14446"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14446] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14449"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14449] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14478"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14478"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14478] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14480"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14480"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14480] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14483"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14483] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14504"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14504] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14506"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14506] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14509"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14509] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14525"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14525] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14544"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14544"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14544] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14546"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14546] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14549"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14549"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14549] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14569"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14569] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14574"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14574] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14595"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14595] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14597"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14597] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14600"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14600] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14621"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14621] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14623"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14623] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14626"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14626"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14626] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14648"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14648] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14650"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14650"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14650] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14653"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14653"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14653] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14677"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14677"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14677] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14679"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14679"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14679] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14682"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14682"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[14682] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "14889"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14889"
 , "c2" : "CRITICAL"
 , "c3" : "QC-CPPCWE484[14889] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "14914"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14914"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14914] The pointer btmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14921"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14921"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[14921] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "14923"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14923"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[14923] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "14933"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14933"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14933] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14961"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14961"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14961] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "14973"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[14973] The expression  ! BIO_push( * pbio,btmp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "14979"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#14979"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[14979] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15007"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15007"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15007] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15034"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15034"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15034] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15041"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15041"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15041] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15055"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15055"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15055] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15059"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15059"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15059] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15086"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15086"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15086] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15105"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15105] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15113"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15113"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15113] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15127"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15127] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15140"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15140] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15151"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15151] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15179"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15179"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15179] The pointer cipher is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15210"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15210"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15210] The pointer p7_ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15211"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15211"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15211] The pointer libctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15212"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15212"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15212] The pointer propq is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15274"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15274"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15274] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15291"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15291"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15291] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15306"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15306"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15306] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15310"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15310] The expression  ! pkcs7_bio_add_digest( &amp; out,((X509_ALGOR *)OPENSSL_sk_value(ossl_check_const_X509_ALGOR_sk_type(md_sk),(i))),p7_ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15311"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15311] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15314"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15314"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15314] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15324"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15324"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15324] The pointer ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15326"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15326"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15326] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15336"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15336"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15336] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15343"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15343] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15344"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15344"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15344] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15372"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15372"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15372] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "15373"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15373"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15373] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15383"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15383] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15392"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15392] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "15393"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15393"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15393] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15407"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15407] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15410"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15410] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15417"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15417"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15417] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15456"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15456"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15456] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15468"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15468"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15468] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15470"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15470] The expression out applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15492"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15492] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15519"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15519"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15519] The pointer xa is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15530"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15530"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15530] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15566"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[15566] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "15577"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15577] The pointer p7_ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15578"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15578"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15578] The pointer libctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15579"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15579"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[15579] The pointer propq is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "15645"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15645"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15645] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15680"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15680"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15680] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15713"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15713"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15713] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15723"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15723"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15723] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15741"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15741] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15752"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15752"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15752] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15762"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15762"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15762] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15789"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15789"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15789] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15816"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15816"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[15816] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "15826"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15826"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15826] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15829"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15829] The expression pcert applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15832"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15832"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15832] The expression  ! pkcs7_cmp_ri(ri,pcert) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15851"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15851"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15851] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15870"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15870"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15870] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15876"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15876"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15876] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15877"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15877"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15877] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15899"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15899"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15899] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15900"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15900"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15900] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15902"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15902"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15902] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15931"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15931"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[15931] The variable EVP_CIPHER_CTX_get_key_length is post  and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "15906"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15906"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15906] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15914"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15914"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15914] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15916"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15916"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15916] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "15937"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15937"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[15937] The expression  ! EVP_CIPHER_CTX_set_key_length(evp_ctx,eklen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "15963"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15963"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[15963] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "15964"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#15964"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[15964] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16009"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16009"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16009] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16021"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16021"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16021] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16049"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[16049] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "16049"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16049"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[16049] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "16101"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16101] The expression  ! PKCS7_get_signed_attribute(si,52) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16101"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[16101] The expression 52 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "16102"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16102] The expression  ! PKCS7_add0_attrib_signing_time(si,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16117"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16117] The expression  ! EVP_DigestFinal_ex(mctx,md_data, &amp; md_len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16125"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16125] The expression  ! PKCS7_add1_attrib_digest(si,md_data,md_len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16135"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16135] The expression  ! PKCS7_SIGNER_INFO_sign(si) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16145"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16145"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16145] The pointer btmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16146"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16146"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16146] The pointer si is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16147"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16147"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16147] The pointer mdc is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16147"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16147"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16147] The pointer ctx_tmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16148"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16148"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16148] The pointer sk is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16159"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16159"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16159] The pointer p7_ctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16230"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16230"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16230] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16254"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16254"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16254] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16302"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16302"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16302] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16330"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16330"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16330] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16335"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16335"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16335] The expression  ! EVP_MD_CTX_copy_ex(ctx_tmp,mdc) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16336"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16336"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16336] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16345"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16345"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16345] The expression  ! do_pkcs7_signed_attrib(si,ctx_tmp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16346"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16346"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16346] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16361"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16361"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16361] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16363"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16363"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16363] The expression  ! EVP_SignFinal_ex(ctx_tmp,abuf, &amp; abuflen,si-&gt;pkey,ossl_pkcs7_ctx_get0_libctx(p7_ctx),ossl_pkcs7_ctx_get0_propq(p7_ctx)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16372"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16372"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16372] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16380"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16380] The expression  ! PKCS7_find_digest( &amp; mdc,bio,OBJ_obj2nid(p7-&gt;d.digest-&gt;md-&gt;algorithm)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16382"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16382] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16383"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16383] The expression  ! EVP_DigestFinal_ex(mdc,md_data, &amp; md_len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16384"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16384] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16385"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16385] The expression  ! ASN1_OCTET_STRING_set(p7-&gt;d.digest-&gt;digest,md_data,md_len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16386"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16386] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16403"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16403"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16403] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16405"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16405] The pointer cont is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16418"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16418"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16418] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16442"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16442"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16442] The pointer mctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16448"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[16448] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "16481"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16481"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16481] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16492"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16492"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16492] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16496"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16496] The expression  ! abuf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16497"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16497"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16497] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16499"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16499"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16499] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16511"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16511"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16511] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16518"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16518"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16518] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16520"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16520"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16520] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16537"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16537"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16537] The pointer ias is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16539"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16539"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16539] The pointer cert is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16540"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16540"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16540] The pointer x509 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16578"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16578"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16578] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16596"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16596"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16596] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16600"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16600] The expression  ! X509_STORE_CTX_init(ctx,cert_store,x509,cert) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16606"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16606"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16606] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16616"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16616"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16616] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16627"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16627"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16627] The pointer os is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16628"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16628"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16628] The pointer mdc_tmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16628"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16628"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16628] The pointer mdc is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16629"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16629"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16629] The pointer md is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16637"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16637"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16637] The pointer sk is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16638"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16638"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16638] The pointer btmp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16639"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16639"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16639] The pointer pkey is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16655"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16655"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16655] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16664"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16664"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16664] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16670"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[16670] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "16670"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[16670] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "16676"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16676"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16676] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16686"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16686"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16686] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16699"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16699"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16699] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16716"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16716"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16716] The expression  ! EVP_MD_CTX_copy_ex(mdc_tmp,mdc) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16717"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16717"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16717] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16732"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16732"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16732] The pointer message_digest is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16734"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16734"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16734] The expression  ! EVP_DigestFinal_ex(mdc_tmp,md_dat, &amp; md_len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16735"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16735"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16735] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16737"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16737"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16737] The expression  ! message_digest applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16743"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16743"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16743] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16753"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16753"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16753] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16778"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16778] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16791"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16791"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16791] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16793"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16793] The expression  ! EVP_DigestUpdate(mdc_tmp,abuf,alen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "16794"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16794"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16794] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16807"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16807"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16807] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16818"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16818"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[16818] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "16829"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16829"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16829] The pointer rsk is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16830"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16830"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16830] The pointer ri is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16884"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16884"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16884] The pointer xa is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16892"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16892"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[16892] The pointer astype is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "16893"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16893"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16893] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16986"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16986"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16986] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16993"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16993"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[16993] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "16999"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#16999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[16999] The expression  ! OPENSSL_sk_push(ossl_check_X509_ATTRIBUTE_sk_type( * sk),ossl_check_X509_ATTRIBUTE_type(attr)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "17021"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#17021"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[17021] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "17024"
 , "c1link" : "./qc/crypto/pkcs7/pk7_doit.c.html#17024"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[17024] goto statement jump to new_attrib"
}} 
]
};
console.log('leListeStr 99 main end');
