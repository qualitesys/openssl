console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/crypto/conf/conf_def.c.html" 
 , "texte" : "File crypto/conf/conf_def.c 181 rule violations " 
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
 , "c4" : "10"
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
   "c1" : "05906"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5906"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05906] The expression 0 is invariable, always false"
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
   "c1" : "06174"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06174] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08267"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8267"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08267] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08385"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08385] The expression 'on' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08386"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08386] The expression 'true' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08388"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08388] The expression 'off' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08389"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08389] The expression 'false' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08412"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08412] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08412"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08412] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08412"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08412] The pointer end is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08421"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8421"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08421] The pointer tv is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08431"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8431"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08431] The pointer buf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08432"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8432"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08432] The pointer start is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08432"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8432"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08432] The pointer psection is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08432"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8432"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08432] The pointer pname is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08452"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8452"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08452] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08462"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8462"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08462] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08476"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8476"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08476] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08485"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8485"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08485] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08499"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8499"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08499] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08504"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[08504] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "08504"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[08504] The end expression of for loop is empty, infinite loop risk"
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
   "c1" : "08520"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08520] The expression 512-1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08521"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8521"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08521] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08523"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8523"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08523] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08524"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08524] The expression first_call applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08529"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08529] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08539"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8539"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08539] The pointer parent is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08548"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8548"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08548] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08550"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8550"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08550] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08557"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8557"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08557] goto statement jump to read_retry"
}} 
,
{ "ligne" : {
   "c1" : "08569"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08569] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08579"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8579"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08579] goto statement jump to read_retry"
}} 
,
{ "ligne" : {
   "c1" : "08592"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8592"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08592] The variable i is post decremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08616"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8616"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08616] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08616"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8616"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08616] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08621"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08621] The expression again applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08628"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8628"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08628] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08631"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8631"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08631] The pointer ss is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08639"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8639"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08639] The variable s is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08642"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8642"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08642] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08649"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8649"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08649] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08657"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8657"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08657] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08658"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8658"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08658] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08674"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8674"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08674] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08690"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8690"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08690] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08692"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8692"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08692] The pointer pval is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08706"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8706"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08706] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08712"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8712"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08712] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08719"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08719] The expression 'dollarid' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08721"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8721"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08721] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08722"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8722"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08722] The expression 'abspath' is invariable"
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
   "c1" : "08725"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8725"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08725] The expression 'includedir' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08727"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8727"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08727] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08737"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8737"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08737] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08745"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8745"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08745] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08752"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8752"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08752] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08773"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8773"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08773] goto statement jump to err"
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
   "c1" : "08814"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8814"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08814] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08840"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8840"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08840] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08851"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8851"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08851] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08861"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8861"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08861] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08870"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8870"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08870] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08877"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8877"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08877] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08887"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8887"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08887] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08905"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8905"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08905] goto statement jump to err"
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
   "c1" : "08911"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8911"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08911] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
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
   "c1" : "08939"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8939"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08939] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09010"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9010"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09010] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09010"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9010"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09010] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09011"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9011"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09011] The expression 2048 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09015"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9015"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09015] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09021"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09021] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09021"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09021] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09022"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09022] The expression 128 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09026"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9026"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09026] The expression 1024 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09030"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9030"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09030] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09034"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09034] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09035"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000001[09035] The unary operator + should be avoided, confusing"
}} 
,
{ "ligne" : {
   "c1" : "09038"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09038] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09048"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09048] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09048"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09048] The pointer e is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09048"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09048] The pointer rp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09048"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09048] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09048"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09048] The pointer rrp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09048"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09048] The pointer np is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09048"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09048] The pointer cp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09049"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9049"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09049] The pointer buf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09051"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09051] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09060"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09060] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09062"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09062] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09062"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9062"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09062] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09063"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9063"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09063] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09066"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09066] The variable from is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09074"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09074] The variable from is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09066"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09066] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09067"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9067"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09067] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09069] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09076"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9076"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09076] The expression 1024 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09079"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09079] The variable from is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09089"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09089] The variable from is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09079"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09079] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09091"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9091"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09091] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09094"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09094] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09105"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09105] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09127"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09127] The expression q applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09130"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09130] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09131"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09131] The expression ((2|4)|1|256) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09141"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09141] The expression ((2|4)|1|256) is invariable"
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
   "c1" : "09155"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9155"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09155] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09178"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9178"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09178] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09187"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9187"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09187] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09195"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9195"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09195] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09197"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09197] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09236"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09236] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09275"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9275"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09275] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09294"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9294"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09294] The pointer filename is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09298"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9298"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09298] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09311"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09311] The pointer newpath is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09312"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9312"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09312] The pointer bio is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09329"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09329] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09375"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09375] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09384"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09384] The expression 8 is invariable"
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
   "c1" : "09395"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09395] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09395"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09395] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09396"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09396] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09397"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000001[09397] The unary operator + should be avoided, confusing"
}} 
,
{ "ligne" : {
   "c1" : "09412"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09412] The variable p is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09420"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09420] The variable p is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09413"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09413] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09415"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09415] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09430"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09430] The variable p is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09440"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[09440] The variable p is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "09447"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9447"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09447] The expression a-&gt;name applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
