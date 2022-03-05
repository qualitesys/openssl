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
   "c1" : "07958"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#7958"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07958] The expression a applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08299"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08299] The expression  ! cb applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08304"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08304] The expression  ! cb-&gt;cb.cb_1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08322"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8322"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08322] The pointer t is declared but not initialized"
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
   "c1" : "08387"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08387] The expression  ! probable_prime(ret,bits,safe,mods,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08388"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08388] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08390"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08390] The expression  ! probable_prime_dh(ret,bits,safe,mods,add,rem,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08391"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08391] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08394"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08394] The expression  ! BN_GENCB_call(cb,0,c1++) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08394"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08394] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08396"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08396] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08398"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08398] The expression  ! safe applies to a single value or variable, might be ambiguous."
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
   "c1" : "08403"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8403"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08403] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08409"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08409] The expression  ! BN_rshift1(t,ret) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08410"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8410"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08410] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08415"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8415"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08415] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08417"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8417"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08417] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08421"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8421"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08421] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08423"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08423] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08425"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08425] The expression  ! BN_GENCB_call(cb,2,c1-1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08425"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08425] The expression 2 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08426"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8426"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08426] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08518"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08518] The expression BN_is_odd(w) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08520"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08520] The expression BN_is_word(w,3) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08520"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08520] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08528"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8528"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08528] The expression do_trial_division applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08538"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8538"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08538] The expression  ! BN_GENCB_call(cb,1, - 1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08538"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8538"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08538] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08538"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8538"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08538] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08546"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8546"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08546] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08551"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8551"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08551] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08555"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8555"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08555] The expression  ! ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08556"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8556"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08556] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08569] The pointer g is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08569] The pointer w1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08569] The pointer w3 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08569] The pointer x is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08569] The pointer m is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08569] The pointer z is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08569] The pointer b is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08577"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8577"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08577] The expression  ! BN_is_odd(w) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08600"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8600"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08600] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08604"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8604"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08604] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08608"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8608"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08608] The expression  ! BN_is_bit_set(w1,a) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08611"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8611"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08611] The expression  ! BN_rshift(m,w1,a) applies to a single value or variable, might be ambiguous."
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
   "c1" : "08621"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8621"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08621] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08629"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8629"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08629] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08630"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08630] The expression 2 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08631"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8631"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08631] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08633"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08633] The expression enhanced applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08635"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8635"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08635] The expression  ! BN_gcd(g,b,w,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08636"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8636"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08636] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08638"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08638] The expression  ! BN_is_one(g) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08641"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8641"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08641] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08645"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8645"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08645] The expression  ! BN_mod_exp_mont(z,b,m,w,ctx,mont) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08646"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8646"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08646] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08649"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8649"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08649] goto statement jump to outer_loop"
}} 
,
{ "ligne" : {
   "c1" : "08654"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8654"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08654] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08657"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8657"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08657] goto statement jump to outer_loop"
}} 
,
{ "ligne" : {
   "c1" : "08659"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8659"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08659] The expression BN_is_one(z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08660"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8660"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08660] goto statement jump to composite"
}} 
,
{ "ligne" : {
   "c1" : "08665"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8665"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08665] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08667"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8667"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08667] The expression BN_is_one(z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08668"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8668"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08668] goto statement jump to composite"
}} 
,
{ "ligne" : {
   "c1" : "08670"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08670] The expression  ! BN_copy(x,z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08671"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08671] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08673"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8673"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08673] The expression enhanced applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08675"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8675"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08675] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08676"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8676"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08676] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08678"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8678"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08678] The expression BN_is_one(g) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08686"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8686"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08686] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08689"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08689] The expression  ! BN_GENCB_call(cb,1,i) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08689"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08689] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08690"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8690"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08690] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08717"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08717] The expression  ! BN_priv_rand_ex(rnd,bits,1,1,0,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08717"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08717] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08717"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08717] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08717"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08717] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08720"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08720] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08742"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8742"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08742] The expression safe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08746"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8746"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08746] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08747"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8747"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08747] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08750"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8750"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08750] The expression  ! BN_add_word(rnd,delta) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08753"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8753"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08753] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08763"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8763"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08763] The pointer t1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08769"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8769"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08769] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08774"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8774"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08774] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08780"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08780] The expression  ! BN_rand_ex(rnd,bits,0,1,0,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08780"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08780] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08780"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08780] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08780"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08780] The expression 0 is invariable, always false"
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
   "c1" : "08785"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08785] The expression  ! BN_div((( void  *)0),(t1),(rnd),(add),(ctx)) applies to a single value or variable, might be ambiguous."
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
   "c1" : "08791"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8791"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08791] The expression  ! BN_sub(rnd,rnd,t1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08792"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8792"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08792] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08798"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08798] The expression  ! BN_add_word(rnd,safe?3u : 1u) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08798"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08798] The expression 3u is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08798"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8798"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08798] The expression 1u is invariable"
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
   "c1" : "08801"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8801"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08801] The expression  ! BN_add(rnd,rnd,rem) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08802"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8802"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08802] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08807"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8807"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08807] The expression  ! BN_add(rnd,rnd,add) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08808"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8808"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08808] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08815"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8815"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08815] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08826"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08826] The expression safe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08830"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8830"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08830] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08831"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8831"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08831] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08834"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8834"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08834] The expression  ! BN_add_word(rnd,delta) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08835"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8835"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08835] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
