console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bn/bn_prime.c.html" 
 , "texte" : "File crypto/bn/bn_prime.c 166 rule violations " 
 , "fic2"  : "./qc/crypto/bn/bn_prime.c.xml" 
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
 , "c4" : "50"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "55"
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
 , "c4" : "46"
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
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02332"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02332] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02495"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02495] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02522"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2522"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02522] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02524"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02524] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02526"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2526"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02526] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02548"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2548"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02548] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02548"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2548"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02548] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02572"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02572] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02574"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02574] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02578"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2578"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02578] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02603"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2603"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02603] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02605"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2605"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02605] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02607"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2607"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02607] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02952"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#2952"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02952] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05913"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05913] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05915"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05915] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05918"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05918] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05943"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05943] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05945"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5945"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05945] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05948"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05948] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05977"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05977] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05979"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05979] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05982"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#5982"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05982] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06003"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06003] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06005"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06005] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06008"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6008"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06008] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06024"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6024"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06024] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06043"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6043"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06043] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06045"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6045"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06045] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06048"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6048"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06048] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06068"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6068"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06068] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06073"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6073"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06073] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06094"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06094] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06096"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6096"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06096] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06099"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06099] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06120"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06120] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06122"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06122] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06125"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06125] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06147"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06147] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06149"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06149] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06152"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06152] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06176"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06176] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06178"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06178] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06181"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#6181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06181] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07949"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#7949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07949] The expression a applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08290"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08290] The expression  ! cb applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08295"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08295] The expression  ! cb-&gt;cb.cb_1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08313"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08313] The pointer t is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08370"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08370] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08378"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08378] The expression  ! probable_prime(ret,bits,safe,mods,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08379"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8379"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08379] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08381"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08381] The expression  ! probable_prime_dh(ret,bits,safe,mods,add,rem,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08382"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8382"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08382] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08385"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08385] The expression  ! BN_GENCB_call(cb,0,c1++) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08385"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08385] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08387"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08387] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08389"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08389] The expression  ! safe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08392"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08392] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08394"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08394] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08400"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08400] The expression  ! BN_rshift1(t,ret) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08401"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8401"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08401] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08406"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08406] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08408"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8408"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08408] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08412"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08412] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08414"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8414"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08414] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08416"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08416] The expression  ! BN_GENCB_call(cb,2,c1-1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08416"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08416] The expression 2 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08417"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8417"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08417] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08509"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08509] The expression BN_is_odd(w) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08511"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08511] The expression BN_is_word(w,3) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08511"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08511] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08519"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08519] The expression do_trial_division applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08529"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08529] The expression  ! BN_GENCB_call(cb,1, - 1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08529"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08529] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08529"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08529] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08537"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8537"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08537] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08542"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8542"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08542] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08546"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08546] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08547"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8547"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08547] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer g is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer w1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer w3 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer x is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer m is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer z is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer b is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08568"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08568] The expression  ! BN_is_odd(w) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08591"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8591"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08591] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08595"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8595"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08595] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08599"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08599] The expression  ! BN_is_bit_set(w1,a) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08602"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8602"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08602] The expression  ! BN_rshift(m,w1,a) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08603"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8603"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08603] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08612"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8612"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08612] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08620"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8620"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08620] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08621"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08621] The expression 2 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08622"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8622"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08622] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08624"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8624"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08624] The expression enhanced applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08626"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8626"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08626] The expression  ! BN_gcd(g,b,w,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08627"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8627"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08627] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08629"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08629] The expression  ! BN_is_one(g) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08632"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8632"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08632] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08636"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08636] The expression  ! BN_mod_exp_mont(z,b,m,w,ctx,mont) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08637"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8637"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08637] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08640"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8640"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08640] goto statement jump to outer_loop"
}} 
,
{ "ligne" : {
   "c1" : "08645"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8645"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08645] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08648"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8648"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08648] goto statement jump to outer_loop"
}} 
,
{ "ligne" : {
   "c1" : "08650"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8650"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08650] The expression BN_is_one(z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08651"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8651"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08651] goto statement jump to composite"
}} 
,
{ "ligne" : {
   "c1" : "08656"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8656"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08656] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08658"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8658"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08658] The expression BN_is_one(z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08659"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8659"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08659] goto statement jump to composite"
}} 
,
{ "ligne" : {
   "c1" : "08661"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8661"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08661] The expression  ! BN_copy(x,z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08662"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8662"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08662] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08664"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8664"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08664] The expression enhanced applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08666"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8666"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08666] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08667"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8667"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08667] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08669"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8669"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08669] The expression BN_is_one(g) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08677"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8677"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08677] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08680"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8680"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08680] The expression  ! BN_GENCB_call(cb,1,i) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08680"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8680"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08680] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08681"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8681"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08681] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08708"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08708] The expression  ! BN_priv_rand_ex(rnd,bits,1,1,0,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08708"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08708] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08708"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08708] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08708"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08708] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08711"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08711] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08733"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8733"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08733] The expression safe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08737"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8737"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08737] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08738"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8738"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08738] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08741"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8741"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08741] The expression  ! BN_add_word(rnd,delta) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08744"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8744"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08744] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08754"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8754"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08754] The pointer t1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08760"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8760"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08760] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08765"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8765"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08765] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08771"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08771] The expression  ! BN_rand_ex(rnd,bits,0,1,0,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08771"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08771] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08771"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08771] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08771"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08771] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08772"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8772"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08772] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08776"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8776"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08776] The expression  ! BN_div((( void  *)0),(t1),(rnd),(add),(ctx)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08781"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8781"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08781] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08782"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8782"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08782] The expression  ! BN_sub(rnd,rnd,t1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08783"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8783"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08783] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08789"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8789"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08789] The expression  ! BN_add_word(rnd,safe?3u : 1u) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08789"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8789"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08789] The expression 3u is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08789"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8789"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08789] The expression 1u is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08790"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8790"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08790] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08792"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08792] The expression  ! BN_add(rnd,rnd,rem) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08793"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08793] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08798"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08798] The expression  ! BN_add(rnd,rnd,add) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08799"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8799"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08799] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08806"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8806"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08806] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08817"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8817"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08817] The expression safe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08821"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8821"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08821] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08822"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8822"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08822] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08825"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8825"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08825] The expression  ! BN_add_word(rnd,delta) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08826"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8826"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08826] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
