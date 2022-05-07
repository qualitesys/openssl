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
   "c1" : "05908"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05908] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05913"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05913] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05938"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05938] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05943"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05943] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05972"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5972"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05972] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05977"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5977"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05977] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05998"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#5998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05998] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06003"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06003] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06019"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6019"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06019] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06038"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06038] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06043"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6043"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06043] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06063"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6063"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06063] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06068"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6068"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06068] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06089"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06089] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06094"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06094] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06115"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06115] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06120"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06120] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06142"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06142] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06147"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06147] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06171"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06171] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06176"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#6176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06176] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08269"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8269"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08269] The pointer ret is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08387"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08387] The expression 'on' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08388"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08388] The expression 'true' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08390"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08390] The expression 'off' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08391"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08391] The expression 'false' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08414"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8414"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08414] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08414"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8414"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08414] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08414"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8414"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08414] The pointer end is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08423"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08423] The pointer tv is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08433"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8433"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08433] The pointer buf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08434"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8434"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08434] The pointer start is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08434"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8434"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08434] The pointer psection is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08434"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8434"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08434] The pointer pname is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08454"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8454"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08454] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08464"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8464"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08464] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08478"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8478"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08478] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08487"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8487"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08487] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08501"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8501"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08501] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08506"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[08506] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "08506"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[08506] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "08513"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8513"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08513] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08522"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8522"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08522] The expression 512-1 is invariable"
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
   "c1" : "08525"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8525"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08525] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08526"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8526"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08526] The expression first_call applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08531"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08531] The expression 3 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08541"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8541"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08541] The pointer parent is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08550"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8550"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08550] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08552"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8552"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08552] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08559"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8559"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08559] goto statement jump to read_retry"
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
   "c1" : "08581"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8581"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08581] goto statement jump to read_retry"
}} 
,
{ "ligne" : {
   "c1" : "08594"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8594"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08594] The variable i is post decremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08618"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08618] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08618"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08618] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08623"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08623] The expression again applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08630"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08630] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08633"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8633"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08633] The pointer ss is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08641"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8641"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000019[08641] The variable s is post incremented and is tested with equility, risk to be always false"
}} 
,
{ "ligne" : {
   "c1" : "08644"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8644"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08644] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "08651"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8651"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08651] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08659"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8659"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08659] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08660"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8660"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08660] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08676"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8676"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08676] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08692"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8692"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08692] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08694"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8694"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08694] The pointer pval is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08708"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08708] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "08714"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8714"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08714] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08721"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8721"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08721] The expression 'dollarid' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08723"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8723"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08723] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08724"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8724"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08724] The expression 'abspath' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08726"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8726"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08726] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08727"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8727"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[08727] The expression 'includedir' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08729"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8729"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08729] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08739"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08739] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08747"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8747"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08747] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08754"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8754"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[08754] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "08775"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8775"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08775] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08796"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08796] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08816"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8816"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08816] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08842"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8842"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08842] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08853"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8853"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08853] goto statement jump to err"
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
   "c1" : "08872"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8872"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08872] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08879"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8879"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08879] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08889"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8889"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08889] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08907"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8907"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08907] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08910"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8910"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08910] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "08913"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8913"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08913] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08931"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#8931"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[08931] goto statement jump to err"
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
   "c1" : "09012"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9012"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09012] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09012"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9012"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09012] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09013"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9013"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09013] The expression 2048 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09017"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9017"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09017] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09023"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09023] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09023"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09023] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09024"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9024"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09024] The expression 128 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09028"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9028"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09028] The expression 1024 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09032"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9032"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09032] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09036"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9036"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09036] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09037"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000001[09037] The unary operator + should be avoided, confusing"
}} 
,
{ "ligne" : {
   "c1" : "09040"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9040"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09040] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09050] The pointer s is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09050] The pointer e is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09050] The pointer rp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09050] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09050] The pointer rrp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09050] The pointer np is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09050"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09050] The pointer cp is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09051"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09051] The pointer buf is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09053"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9053"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09053] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09062"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9062"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09062] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09064"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09064] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09064"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09064] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09065"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9065"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09065] The expression 64 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09068"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9068"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09068] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09069"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09069] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09071"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9071"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09071] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09078"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09078] The expression 1024 is invariable"
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
   "c1" : "09093"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9093"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09093] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09096"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9096"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09096] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09107"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09107] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09129"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09129] The expression q applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09132"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9132"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09132] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09133"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09133] The expression ((2|4)|1|256) is invariable"
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
   "c1" : "09150"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09150] The expression q applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09157"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9157"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09157] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09180"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9180"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09180] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09189"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9189"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09189] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09197"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9197"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09197] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09199"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09199] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09238"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9238"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09238] The pointer next is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09277"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9277"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09277] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09296"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9296"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09296] The pointer filename is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09300"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9300"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[09300] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09315"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09315] The pointer newpath is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09316"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9316"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[09316] The pointer bio is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "09333"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09333] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09379"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09379] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09388"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09388] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09391"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09391] The expression 16 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09399"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09399] The condition of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09399"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9399"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[09399] The end expression of for loop is empty, infinite loop risk"
}} 
,
{ "ligne" : {
   "c1" : "09400"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09400] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09401"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000001[09401] The unary operator + should be avoided, confusing"
}} 
,
{ "ligne" : {
   "c1" : "09417"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09417] The expression 32 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09419"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09419] The expression 8 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09451"
 , "c1link" : "./qc/crypto/conf/conf_def.c.html#9451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09451] The expression a-&gt;name applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
