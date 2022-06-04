console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/conf/conf_def.c.html" 
 , "texte" : "File crypto/conf/conf_def.c 173 rule violations " 
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
 , "c4" : "6"
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
 , "c4" : "2"
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
   "c1" : "02977"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#2977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02977] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05912"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5912"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05912] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05917"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05917] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05942"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5942"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05942] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05947"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5947"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05947] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05976"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5976"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05976] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05981"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5981"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05981] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06002"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06002] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06007"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6007"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06007] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06023"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06023] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06042"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06042] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06047"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6047"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06047] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06067"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6067"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06067] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06072"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6072"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06072] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06093"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6093"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06093] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06098"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6098"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06098] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06119"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06119] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06124"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06124] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06146"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06146] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06151"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06151] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06175"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06175] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06180"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06180] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08288"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8288"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08288] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08406"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08406] The expression 'on' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08407"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08407] The expression 'true' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08409"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08409] The expression 'off' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08410"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08410] The expression 'false' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08433"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8433"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08433] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08433"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8433"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08433] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08433"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8433"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08433] The pointer end is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08442"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8442"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08442] The pointer tv is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08452"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8452"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08452] The pointer buf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08453"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08453] The pointer start is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08453"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08453] The pointer psection is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08453"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8453"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08453] The pointer pname is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08473"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8473"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08473] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08483"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8483"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08483] goto statement jump to err"
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
   "c1" : "08506"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8506"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08506] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08520"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8520"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08520] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08525"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[08525] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "08525"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[08525] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "08532"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8532"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08532] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08541"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8541"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08541] The expression 512-1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08542"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8542"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08542] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08544"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8544"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08544] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08545"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8545"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08545] The expression first_call applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08550"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08550] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08560"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08560] The pointer parent is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08569] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08571"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8571"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08571] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08578"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8578"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08578] goto statement jump to read_retry"
}} 
,
{ "ligne" : {
   "c1" : "08590"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8590"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08590] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08600"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8600"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08600] goto statement jump to read_retry"
}} 
,
{ "ligne" : {
   "c1" : "08613"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8613"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08613] The variable i is post decremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08637"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8637"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08637] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08637"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8637"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08637] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08642"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8642"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08642] The expression again applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08649"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8649"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08649] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08652"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8652"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08652] The pointer ss is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08660"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08660] The variable s is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08663"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8663"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08663] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08670"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8670"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08670] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08678"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8678"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08678] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08679"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8679"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08679] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08695"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8695"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08695] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08711"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8711"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08711] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08713"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8713"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08713] The pointer pval is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08727"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8727"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08727] The expression 1 is invariable, always true"
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
   "c1" : "08740"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8740"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08740] The expression 'dollarid' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08742"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08742] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08743"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8743"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08743] The expression 'abspath' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08745"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8745"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08745] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08746"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8746"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08746] The expression 'includedir' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08748"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8748"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08748] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08758"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08758] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08766"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8766"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08766] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08773"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8773"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08773] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08794"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8794"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08794] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08815"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8815"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08815] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08835"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8835"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08835] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08861"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8861"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08861] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08872"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8872"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08872] goto statement jump to err"
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
   "c1" : "08891"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8891"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08891] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08898"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8898"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08898] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08908"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8908"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08908] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08926"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8926"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08926] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08929"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8929"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08929] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08932"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8932"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08932] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08950"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8950"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08950] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08960"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8960"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08960] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09031"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9031"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09031] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09031"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9031"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09031] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09032"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09032] The expression 2048 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09036"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9036"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09036] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09042"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09042] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09042"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09042] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09043"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9043"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09043] The expression 128 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09047"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9047"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09047] The expression 1024 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09051"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9051"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09051] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09055"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9055"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09055] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09056"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9056"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000001[09056] The unary operator + should be avoided, confusing"
}} 
,
{ "ligne" : {
   "c1" : "09059"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9059"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09059] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09069] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09069] The pointer e is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09069] The pointer rp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09069] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09069] The pointer rrp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09069] The pointer np is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09069] The pointer cp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09070"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9070"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09070] The pointer buf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09072"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9072"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09072] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09081"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9081"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09081] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09083"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9083"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09083] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09083"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9083"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09083] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09084"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9084"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09084] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09087"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09087] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09088"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9088"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09088] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09090"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9090"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09090] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09097"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9097"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09097] The expression 1024 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09100"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09100] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09112"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09112] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09115"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09115] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09126"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09126] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09148"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09148] The expression q applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09151"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9151"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09151] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09152"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09152] The expression ((2|4)|1|256) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09162"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09162] The expression ((2|4)|1|256) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09169"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09169] The expression q applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09176"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9176"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09176] goto statement jump to err"
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
   "c1" : "09208"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9208"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09208] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09216"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9216"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09216] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09218"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9218"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09218] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09257"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9257"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09257] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09296"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9296"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09296] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09315"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09315] The pointer filename is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09319"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9319"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09319] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09334"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9334"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09334] The pointer newpath is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09335"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9335"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09335] The pointer bio is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09352"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9352"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09352] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09398"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09398] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09407"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09407] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09410"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09410] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09418"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09418] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09418"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09418] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09419"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09419] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09420"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000001[09420] The unary operator + should be avoided, confusing"
}} 
,
{ "ligne" : {
   "c1" : "09436"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09436] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09438"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09438] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09470"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09470] The expression a-&gt;name applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
