console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/evp/kem.c.html" 
 , "texte" : "File crypto/evp/kem.c 70 rule violations " 
 , "fic2"  : "./qc/crypto/evp/kem.c.xml" 
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
 , "c4" : "12"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/evp/kem.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/evp/kem.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/evp/kem.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/evp/kem.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/evp/kem.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/evp/kem.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/evp/kem.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/evp/kem.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/evp/kem.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02076"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02076] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02239"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02239] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02266"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02266] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02268"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02268] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02316"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02316] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02318] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02322] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02347"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02349"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02349] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/crypto/evp/kem.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08072"
 , "c1link" : "./qc/crypto/evp/kem.c.html#8072"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08072] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09429"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09429] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09431"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09431] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09434"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9434"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09434] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09459"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9459"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09459] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09461"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09461] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09464"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9464"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09464] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09493"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09493] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09495"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09495] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09498"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09498] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09519"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09519] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09521"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9521"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09521] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09524"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09524] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09540"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09540] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09559"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09559] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09561"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9561"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09561] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09564"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09564] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09584"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09584] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09589"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9589"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09589] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09610"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9610"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09610] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09612"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9612"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09612] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09615"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9615"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09615] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09636"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09636] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09638"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09638] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09641"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09641] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09663"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9663"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09663] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09665"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9665"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09665] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09668"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09668] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09692"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9692"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09692] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09694"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9694"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09694] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09697"
 , "c1link" : "./qc/crypto/evp/kem.c.html#9697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09697] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "11567"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11567"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11567] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11584"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11584"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11584] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11598"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11598"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11598] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11651"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11651"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11651] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11661"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11661"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11661] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11691"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11691"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11691] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11707"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11707"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11707] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11723"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11723"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11723] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11739"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11739] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11749"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11749"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11749] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11936"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11936"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11936] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11946"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11946] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "11950"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11950"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[11950] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "11955"
 , "c1link" : "./qc/crypto/evp/kem.c.html#11955"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[11955] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "12087"
 , "c1link" : "./qc/crypto/evp/kem.c.html#12087"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[12087] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "12201"
 , "c1link" : "./qc/crypto/evp/kem.c.html#12201"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[12201] The pointer provctx is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "12228"
 , "c1link" : "./qc/crypto/evp/kem.c.html#12228"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[12228] The pointer provctx is declared but not initialized"
}} 
]
};
console.log('leListeStr 99 main end');
