console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/bn/bn_print.c.html" 
 , "texte" : "File crypto/bn/bn_print.c 65 rule violations " 
 , "fic2"  : "./qc/crypto/bn/bn_print.c.xml" 
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
 , "c4" : "14"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02297"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2297"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02297] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02460"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02460] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02487"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02487] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02489"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02489] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02491"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02491] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02513"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02513] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02513"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02513] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02537"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02537] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02539"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2539"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02539] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02543"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2543"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02543] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02568"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02568] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02570"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2570"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02570] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02572"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#2572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02572] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05358"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#5358"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05358] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06715"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6715"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06715] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06717"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06717] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06720"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06720] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "06745"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6745"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06745] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06747"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6747"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06747] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06750"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6750"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06750] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06779"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6779"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06779] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06781"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6781"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06781] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06784"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6784"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06784] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06805"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6805"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06805] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06807"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6807"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06807] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06810"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6810"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06810] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06826"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6826"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06826] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06845"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6845"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06845] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06847"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6847"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06847] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06850"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6850"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06850] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06870"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06870] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06875"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06875] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06896"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6896"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06896] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06898"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6898"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06898] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06901"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06901] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06922"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06922] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06924"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6924"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06924] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06927"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6927"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06927] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06949"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06949] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06951"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6951"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06951] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06954"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6954"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06954] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06978"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06980"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6980"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06980] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06983"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#6983"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06983] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07968"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7968"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07968] The expression a applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07983"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7983"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[07983] The pointer b is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "07986"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#7986"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[07986] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08004"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08004] The expression '-' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08004"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08004] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08005"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8005"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08005] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "08006"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08006] The expression '0' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08006"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08006] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08007"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8007"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08007] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "08013"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8013"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08013] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08014"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8014"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08014] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "08029"
 , "c1link" : "./qc/crypto/bn/bn_print.c.html#8029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08029] The expression  ! init applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
