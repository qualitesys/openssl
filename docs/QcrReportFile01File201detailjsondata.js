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
   "c1" : "07953"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#7953"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07953] The expression a applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08294"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08294] The expression  ! cb applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08299"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08299] The expression  ! cb-&gt;cb.cb_1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08317"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8317"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08317] The pointer t is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08374"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8374"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08374] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08382"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08382] The expression  ! probable_prime(ret,bits,safe,mods,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08383"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08383] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08385"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08385] The expression  ! probable_prime_dh(ret,bits,safe,mods,add,rem,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08386"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08386] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08389"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08389] The expression  ! BN_GENCB_call(cb,0,c1++) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08389"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08389] The expression 0 is invariable, always false"
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
   "c1" : "08393"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08393] The expression  ! safe applies to a single value or variable, might be ambiguous."
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
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08398] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08404"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08404] The expression  ! BN_rshift1(t,ret) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08405"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08405] goto statement jump to err"
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
   "c1" : "08412"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08412] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08416"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8416"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08416] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08418"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8418"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08418] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08420"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08420] The expression  ! BN_GENCB_call(cb,2,c1-1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08420"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08420] The expression 2 is invariable"
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
   "c1" : "08513"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08513] The expression BN_is_odd(w) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08515"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08515] The expression BN_is_word(w,3) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08515"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08515] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08523"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08523] The expression do_trial_division applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08533"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08533] The expression  ! BN_GENCB_call(cb,1, - 1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08533"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08533] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08533"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08533] The expression  - 1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08541"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8541"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08541] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08546"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8546"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08546] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08550"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08550] The expression  ! ret applies to a single value or variable, might be ambiguous."
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
   "c1" : "08564"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08564] The pointer g is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08564"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08564] The pointer w1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08564"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08564] The pointer w3 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08564"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08564] The pointer x is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08564"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08564] The pointer m is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08564"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08564] The pointer z is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08564"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08564] The pointer b is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08572"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08572] The expression  ! BN_is_odd(w) applies to a single value or variable, might be ambiguous."
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
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08599] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08603"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8603"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08603] The expression  ! BN_is_bit_set(w1,a) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08606"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8606"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08606] The expression  ! BN_rshift(m,w1,a) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08607"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8607"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08607] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08616"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8616"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08616] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08624"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8624"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08624] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08625"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08625] The expression 2 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08626"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8626"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08626] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08628"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8628"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08628] The expression enhanced applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08630"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08630] The expression  ! BN_gcd(g,b,w,ctx) applies to a single value or variable, might be ambiguous."
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
 , "c3" : "QC-CPP000011[08633] The expression  ! BN_is_one(g) applies to a single value or variable, might be ambiguous."
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
   "c1" : "08640"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08640] The expression  ! BN_mod_exp_mont(z,b,m,w,ctx,mont) applies to a single value or variable, might be ambiguous."
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
   "c1" : "08644"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8644"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08644] goto statement jump to outer_loop"
}} 
,
{ "ligne" : {
   "c1" : "08649"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8649"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08649] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08652"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8652"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08652] goto statement jump to outer_loop"
}} 
,
{ "ligne" : {
   "c1" : "08654"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8654"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08654] The expression BN_is_one(z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08655"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8655"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08655] goto statement jump to composite"
}} 
,
{ "ligne" : {
   "c1" : "08660"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8660"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08660] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08662"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8662"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08662] The expression BN_is_one(z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08663"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8663"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08663] goto statement jump to composite"
}} 
,
{ "ligne" : {
   "c1" : "08665"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8665"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08665] The expression  ! BN_copy(x,z) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08666"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8666"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08666] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08668"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08668] The expression enhanced applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08670"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08670] The expression 1 is invariable, always true"
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
 , "c3" : "QC-CPP000011[08673] The expression BN_is_one(g) applies to a single value or variable, might be ambiguous."
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
   "c1" : "08684"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8684"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08684] The expression  ! BN_GENCB_call(cb,1,i) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08684"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8684"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08684] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08685"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8685"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08685] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08712"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08712] The expression  ! BN_priv_rand_ex(rnd,bits,1,1,0,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08712"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08712] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08712"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08712] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08712"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08712] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08715"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8715"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08715] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08737"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8737"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08737] The expression safe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08741"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08741] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08742"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08742] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08745"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8745"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08745] The expression  ! BN_add_word(rnd,delta) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08748"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8748"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08748] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08758"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08758] The pointer t1 is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08764"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8764"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08764] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08769"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8769"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08769] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08775"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08775] The expression  ! BN_rand_ex(rnd,bits,0,1,0,ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08775"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08775] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08775"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08775] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08775"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08775] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08776"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8776"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08776] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08780"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08780] The expression  ! BN_div((( void  *)0),(t1),(rnd),(add),(ctx)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08785"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8785"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08785] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08786"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8786"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08786] The expression  ! BN_sub(rnd,rnd,t1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08787"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8787"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08787] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08793"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08793] The expression  ! BN_add_word(rnd,safe?3u : 1u) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08793"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08793] The expression 3u is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08793"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08793] The expression 1u is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08794"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8794"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08794] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08796"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8796"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08796] The expression  ! BN_add(rnd,rnd,rem) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08797"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8797"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08797] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08802"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08802] The expression  ! BN_add(rnd,rnd,add) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08803"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8803"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08803] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08810"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08810] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08821"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08821] The expression safe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08825"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8825"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08825] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08826"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8826"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08826] goto statement jump to loop"
}} 
,
{ "ligne" : {
   "c1" : "08829"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08829] The expression  ! BN_add_word(rnd,delta) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08830"
 , "c1link" : "./qc/crypto/bn/bn_prime.c.html#8830"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08830] goto statement jump to err"
}} 
]
};
console.log('leListeStr 99 main end');
