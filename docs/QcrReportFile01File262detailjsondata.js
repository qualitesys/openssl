console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/conf/conf_def.c.html" 
 , "texte" : "File crypto/conf/conf_def.c 227 rule violations " 
 , "fic2"  : "./qc/crypto/conf/conf_def.c.xml" 
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
 , "c2" : "QC-CPP000001"
 , "c3" : "Confusing use of the + unary expression"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "10"
}}
,
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
 , "c4" : "76"
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "32"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "27"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01419"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#1419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01419] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02702"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2702"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02702] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02865"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2865"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02865] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02868"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02868] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02892"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2892"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02892] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02894"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2894"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02894] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02896"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2896"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02896] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02918"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02918] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02918"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02918] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02942"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2942"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02942] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02944"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02944] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02948"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02948] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02973"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02973] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02975"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02975] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02977"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02977] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05906"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5906"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05906] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05908"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05908] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05911"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05911] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05936"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5936"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05936] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05938"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05938] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05941"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05941] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05970"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5970"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05970] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05972"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5972"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05972] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05975"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05975] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05996"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05996] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05998"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05998] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06001"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06001] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06017"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6017"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06017] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06036"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6036"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06036] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06038"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06038] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06041"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06041] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06061"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6061"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06061] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06066"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06066] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06087"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06087] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06089"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06089] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06092"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06092] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06113"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06113] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06115"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06115] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06118"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06118] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06140"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06140] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06142"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06142] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06145"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06145] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06169"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06169] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06171"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06171] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06174"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06174] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08279"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8279"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08279] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08334"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08334] The expression def_destroy_data(conf) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08397"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08397] The expression 'on' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08398"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08398] The expression 'true' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08400"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08400] The expression 'off' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08401"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08401] The expression 'false' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08424"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8424"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08424] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08424"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8424"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08424] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08424"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8424"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08424] The pointer end is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08433"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8433"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08433] The pointer tv is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08443"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8443"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08443] The pointer buf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08444"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8444"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08444] The pointer start is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08444"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8444"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08444] The pointer psection is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08444"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8444"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08444] The pointer pname is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08464"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8464"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08464] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08474"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8474"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08474] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08488"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8488"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08488] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08497"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8497"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08497] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08511"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8511"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08511] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08516"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[08516] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "08516"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[08516] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "08517"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08517] The expression  ! BUF_MEM_grow(buff,bufnum+512) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08523"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8523"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08523] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08532"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8532"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08532] The expression 512-1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08533"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8533"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08533] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08642"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8642"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08642] The variable p is post  and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08535"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8535"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08535] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08536"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8536"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08536] The expression first_call applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08541"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8541"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08541] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08551"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8551"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08551] The pointer parent is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08562"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8562"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08562] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08569] goto statement jump to read_retry"
}} 
,
{ "ligne" : {
   "c1" : "08581"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8581"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08581] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08591"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8591"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08591] goto statement jump to read_retry"
}} 
,
{ "ligne" : {
   "c1" : "08604"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8604"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08604] The variable i is post decremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08628"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8628"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08628] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08628"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8628"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08628] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08633"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08633] The expression again applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08640"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08640] The expression is_keytype(conf, * s,8) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08640"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08640] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08643"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8643"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08643] The pointer ss is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08651"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08651] The variable s is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08654"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8654"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08654] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08661"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8661"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08661] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08664"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8664"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08664] The expression  ! str_copy(conf,(( void  *)0), &amp;  section ,start) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08669"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8669"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08669] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08670"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8670"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08670] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08686"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8686"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08686] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08702"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8702"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08702] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08704"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08704] The pointer pval is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08718"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08718] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08724"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8724"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08724] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08731"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8731"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08731] The expression 'dollarid' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08732"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8732"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08732] The expression  ! parsebool(pval, &amp; conf-&gt;flag_dollarid) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08733"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8733"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08733] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08734"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8734"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08734] The expression 'abspath' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08735"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8735"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08735] The expression  ! parsebool(pval, &amp; conf-&gt;flag_abspath) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08736"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8736"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08736] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08737"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8737"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08737] The expression 'includedir' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08739"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08739] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08749"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8749"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08749] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08757"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8757"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08757] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08764"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8764"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08764] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08784"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8784"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08784] The expression  ! str_copy(conf,psection, &amp;  include ,p) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08785"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8785"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08785] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08806"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8806"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08806] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08810"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8810"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08810] The expression  ! ossl_ends_with_dirsep(include_path) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08826"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8826"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08826] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08852"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8852"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08852] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08863"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8863"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08863] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08866"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8866"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08866] The expression  ! OPENSSL_sk_push(ossl_check_BIO_sk_type(biosk),ossl_check_BIO_type(in)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08873"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8873"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08873] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08882"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8882"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08882] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08889"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8889"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08889] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08899"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8899"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08899] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08922"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8922"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08922] The variable v is post  and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08917"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8917"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08917] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08919"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08919] The expression  ! str_copy(conf,psection, &amp; (v-&gt;value),start) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08920"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8920"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08920] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08923"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8923"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08923] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08941"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8941"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08941] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08951"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8951"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08951] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09022"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09022] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09022"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09022] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09023"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09023] The expression is_keytype(conf, * p,2048) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09023"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09023] The expression 2048 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09027"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9027"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09027] The expression  ! is_keytype(conf, * p,16) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09027"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9027"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09027] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09033"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9033"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09033] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09033"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9033"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09033] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09034"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09034] The expression is_keytype(conf, * p,128) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09034"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09034] The expression 128 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09038"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09038] The expression is_keytype(conf, * p,1024) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09038"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09038] The expression 1024 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09042"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09042] The expression is_keytype(conf, * p,64) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09042"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09042] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09046"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09046] The expression is_keytype(conf, * p,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09046"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09046] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09047"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9047"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000001[09047] The unary operator + should be avoided, confusing"
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09050] The expression is_keytype(conf, * p,8) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09050] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09060"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09060] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09060"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09060] The pointer e is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09060"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09060] The pointer rp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09060"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09060] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09060"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09060] The pointer rrp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09060"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09060] The pointer np is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09060"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09060] The pointer cp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09061"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9061"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09061] The pointer buf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09063"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9063"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09063] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09071"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9071"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09071] The expression  ! BUF_MEM_grow(buf,len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09072"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9072"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09072] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09074"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09074] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09074"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09074] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09075"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09075] The expression is_keytype(conf, * from,64) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09075"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09075] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09078"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09078] The variable from is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09086"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9086"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09086] The variable from is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09078"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09078] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09079"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09079] The expression is_keytype(conf, * from,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09079"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09079] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09081"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9081"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09081] The expression is_keytype(conf, * from,8) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09081"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9081"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09081] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09088"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9088"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09088] The expression is_keytype(conf, * from,1024) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09088"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9088"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09088] The expression 1024 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09091"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9091"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09091] The variable from is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09101"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09101] The variable from is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09091"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9091"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09091] The expression  ! is_keytype(conf, * from,8) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09091"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9091"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09091] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09103"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09103] The expression is_keytype(conf, * from,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09103"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09103] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09106"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09106] The expression is_keytype(conf,v,8) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09106"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09106] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09117"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09117] The expression is_keytype(conf, * from,8) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09117"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09117] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09139"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09139] The expression q applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09142"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9142"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09142] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09143"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09143] The expression ((2|4)|1|256) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09153"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09153] The expression ((2|4)|1|256) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09160"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09160] The expression q applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09167"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9167"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09167] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09190"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9190"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09190] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09199"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9199"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09199] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09201"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09201] The expression  ! BUF_MEM_grow_clean(buf,newsize) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09207"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9207"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09207] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09209"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9209"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09209] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09248"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09248] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09287"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9287"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09287] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09306"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9306"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09306] The pointer filename is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09310"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9310"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09310] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09323"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9323"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09323] The pointer newpath is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09324"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9324"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09324] The pointer bio is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09341"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09341] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09387"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09387] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09396"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09396] The expression  ! is_keytype(conf, * p,8) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09396"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09396] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09399"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09399] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09407"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09407] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09407"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09407] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09408"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09408] The expression is_keytype(conf, * p,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09408"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09408] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09409"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000001[09409] The unary operator + should be avoided, confusing"
}} 
,
{ "ligne" : {
   "c1" : "09424"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09424] The variable p is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09432"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9432"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09432] The variable p is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09425"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09425] The expression is_keytype(conf, * p,32) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09425"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09425] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09427"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09427] The expression is_keytype(conf, * p,8) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09427"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09427] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09442"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09442] The variable p is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09452"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9452"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09452] The variable p is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09442"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09442] The expression  ! (is_keytype(conf, * p,8)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09459"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9459"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09459] The expression a-&gt;name applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
