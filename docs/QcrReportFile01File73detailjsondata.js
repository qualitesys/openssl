console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/x509.c.html" 
 , "texte" : "File apps/x509.c 256 rule violations " 
 , "fic2"  : "./qc/apps/x509.c.xml" 
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
 , "c4" : "69"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "52"
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
 , "c4" : "95"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000010"
 , "c3" : "A switch clause refers to a jump label"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/apps/x509.c.html#959"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00959] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/apps/x509.c.html#964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00964] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/apps/x509.c.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00989] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/apps/x509.c.html#993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[00993] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/apps/x509.c.html#996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[00996] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/apps/x509.c.html#1021"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01021] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/apps/x509.c.html#1025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01025] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&gt;=(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/apps/x509.c.html#1029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[01029] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/apps/x509.c.html#1037"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000018[01037] Suspicious mix of Bitwise and Literal expressions in (__size|__n)&lt;(((size_t )1)&lt;&lt;(8 *  sizeof (size_t)/2))"
}} 
,
{ "ligne" : {
   "c1" : "02076"
 , "c1link" : "./qc/apps/x509.c.html#2076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02076] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "02239"
 , "c1link" : "./qc/apps/x509.c.html#2239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02239] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02266"
 , "c1link" : "./qc/apps/x509.c.html#2266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02266] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02268"
 , "c1link" : "./qc/apps/x509.c.html#2268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02268] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02270"
 , "c1link" : "./qc/apps/x509.c.html#2270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02270] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/x509.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02292"
 , "c1link" : "./qc/apps/x509.c.html#2292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02292] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02316"
 , "c1link" : "./qc/apps/x509.c.html#2316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02316] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02318"
 , "c1link" : "./qc/apps/x509.c.html#2318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02318] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02322"
 , "c1link" : "./qc/apps/x509.c.html#2322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02322] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02347"
 , "c1link" : "./qc/apps/x509.c.html#2347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02347] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02349"
 , "c1link" : "./qc/apps/x509.c.html#2349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02349] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02351"
 , "c1link" : "./qc/apps/x509.c.html#2351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02351] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "02718"
 , "c1link" : "./qc/apps/x509.c.html#2718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[02718] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05909"
 , "c1link" : "./qc/apps/x509.c.html#5909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05909] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05911"
 , "c1link" : "./qc/apps/x509.c.html#5911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05911] The expression  ! __builtin_constant_p(__nbytes) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05914"
 , "c1link" : "./qc/apps/x509.c.html#5914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05914] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "05939"
 , "c1link" : "./qc/apps/x509.c.html#5939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05939] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05941"
 , "c1link" : "./qc/apps/x509.c.html#5941"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05941] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05944"
 , "c1link" : "./qc/apps/x509.c.html#5944"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05944] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05973"
 , "c1link" : "./qc/apps/x509.c.html#5973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05973] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05975"
 , "c1link" : "./qc/apps/x509.c.html#5975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[05975] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "05978"
 , "c1link" : "./qc/apps/x509.c.html#5978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05978] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "05999"
 , "c1link" : "./qc/apps/x509.c.html#5999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[05999] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06001"
 , "c1link" : "./qc/apps/x509.c.html#6001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06001] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06004"
 , "c1link" : "./qc/apps/x509.c.html#6004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06004] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06020"
 , "c1link" : "./qc/apps/x509.c.html#6020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06020] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06039"
 , "c1link" : "./qc/apps/x509.c.html#6039"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06039] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06041"
 , "c1link" : "./qc/apps/x509.c.html#6041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06041] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06044"
 , "c1link" : "./qc/apps/x509.c.html#6044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06044] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06064"
 , "c1link" : "./qc/apps/x509.c.html#6064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06064] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06069"
 , "c1link" : "./qc/apps/x509.c.html#6069"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06069] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06090"
 , "c1link" : "./qc/apps/x509.c.html#6090"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06090] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06092"
 , "c1link" : "./qc/apps/x509.c.html#6092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06092] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06095"
 , "c1link" : "./qc/apps/x509.c.html#6095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06095] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06116"
 , "c1link" : "./qc/apps/x509.c.html#6116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06116] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06118"
 , "c1link" : "./qc/apps/x509.c.html#6118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06118] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06121"
 , "c1link" : "./qc/apps/x509.c.html#6121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06121] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06143"
 , "c1link" : "./qc/apps/x509.c.html#6143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06143] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06145"
 , "c1link" : "./qc/apps/x509.c.html#6145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06145] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06148"
 , "c1link" : "./qc/apps/x509.c.html#6148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06148] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06172"
 , "c1link" : "./qc/apps/x509.c.html#6172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06172] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06174"
 , "c1link" : "./qc/apps/x509.c.html#6174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[06174] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "06177"
 , "c1link" : "./qc/apps/x509.c.html#6177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06177] The expression 2&gt;1 is invariable"
}} 
,
{ "ligne" : {
   "c1" : "07506"
 , "c1link" : "./qc/apps/x509.c.html#7506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07506] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07508"
 , "c1link" : "./qc/apps/x509.c.html#7508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07508] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07511"
 , "c1link" : "./qc/apps/x509.c.html#7511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07511] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07537"
 , "c1link" : "./qc/apps/x509.c.html#7537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07537] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07539"
 , "c1link" : "./qc/apps/x509.c.html#7539"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07539] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07542"
 , "c1link" : "./qc/apps/x509.c.html#7542"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07542] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08942"
 , "c1link" : "./qc/apps/x509.c.html#8942"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08942] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08975"
 , "c1link" : "./qc/apps/x509.c.html#8975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08975] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19072"
 , "c1link" : "./qc/apps/x509.c.html#19072"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19072] The pointer exts is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19100"
 , "c1link" : "./qc/apps/x509.c.html#19100"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19100] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19109"
 , "c1link" : "./qc/apps/x509.c.html#19109"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19109] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19116"
 , "c1link" : "./qc/apps/x509.c.html#19116"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19116] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19123"
 , "c1link" : "./qc/apps/x509.c.html#19123"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19123] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19199"
 , "c1link" : "./qc/apps/x509.c.html#19199"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19199] The pointer pkey is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19243"
 , "c1link" : "./qc/apps/x509.c.html#19243"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19243] The pointer issuer_cert is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19327"
 , "c1link" : "./qc/apps/x509.c.html#19327"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19327] The pointer prog is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19359"
 , "c1link" : "./qc/apps/x509.c.html#19359"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19359] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19364"
 , "c1link" : "./qc/apps/x509.c.html#19364"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19364] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19368"
 , "c1link" : "./qc/apps/x509.c.html#19368"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[19368] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19370"
 , "c1link" : "./qc/apps/x509.c.html#19370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19370] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19374"
 , "c1link" : "./qc/apps/x509.c.html#19374"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19374] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19376"
 , "c1link" : "./qc/apps/x509.c.html#19376"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19376] The expression  ! opt_format(opt_arg(),(1L&lt;&lt;1), &amp; informat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19376"
 , "c1link" : "./qc/apps/x509.c.html#19376"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19376] The expression (1L&lt;&lt;1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19377"
 , "c1link" : "./qc/apps/x509.c.html#19377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19377] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19383"
 , "c1link" : "./qc/apps/x509.c.html#19383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19383] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; outformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19383"
 , "c1link" : "./qc/apps/x509.c.html#19383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19383] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19384"
 , "c1link" : "./qc/apps/x509.c.html#19384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19384] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19387"
 , "c1link" : "./qc/apps/x509.c.html#19387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19387] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; keyformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19387"
 , "c1link" : "./qc/apps/x509.c.html#19387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19387] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19388"
 , "c1link" : "./qc/apps/x509.c.html#19388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19388] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19391"
 , "c1link" : "./qc/apps/x509.c.html#19391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19391] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; CAformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19391"
 , "c1link" : "./qc/apps/x509.c.html#19391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19391] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19392"
 , "c1link" : "./qc/apps/x509.c.html#19392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19392] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19395"
 , "c1link" : "./qc/apps/x509.c.html#19395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19395] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; CAkeyformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19395"
 , "c1link" : "./qc/apps/x509.c.html#19395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19395] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19396"
 , "c1link" : "./qc/apps/x509.c.html#19396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19396] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19406"
 , "c1link" : "./qc/apps/x509.c.html#19406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19406] The expression  ! set_dateopt( &amp; dateopt,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19409"
 , "c1link" : "./qc/apps/x509.c.html#19409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19409] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19413"
 , "c1link" : "./qc/apps/x509.c.html#19413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19413] The expression  ! set_ext_copy( &amp; ext_copy,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19416"
 , "c1link" : "./qc/apps/x509.c.html#19416"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19416] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19421"
 , "c1link" : "./qc/apps/x509.c.html#19421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19421] The expression  ! sigopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19424"
 , "c1link" : "./qc/apps/x509.c.html#19424"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19424] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19427"
 , "c1link" : "./qc/apps/x509.c.html#19427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19427] The expression  ! vfyopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19430"
 , "c1link" : "./qc/apps/x509.c.html#19430"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19430] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19437"
 , "c1link" : "./qc/apps/x509.c.html#19437"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19437] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19447"
 , "c1link" : "./qc/apps/x509.c.html#19447"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19447] The expression  ! opt_rand(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19448"
 , "c1link" : "./qc/apps/x509.c.html#19448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19448] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19451"
 , "c1link" : "./qc/apps/x509.c.html#19451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19451] The expression  ! opt_provider(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19452"
 , "c1link" : "./qc/apps/x509.c.html#19452"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19452] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19477"
 , "c1link" : "./qc/apps/x509.c.html#19477"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19477] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19479"
 , "c1link" : "./qc/apps/x509.c.html#19479"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19479] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19488"
 , "c1link" : "./qc/apps/x509.c.html#19488"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19488] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19504"
 , "c1link" : "./qc/apps/x509.c.html#19504"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19504] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19509"
 , "c1link" : "./qc/apps/x509.c.html#19509"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19509] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19510"
 , "c1link" : "./qc/apps/x509.c.html#19510"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19510] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19517"
 , "c1link" : "./qc/apps/x509.c.html#19517"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19517] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19527"
 , "c1link" : "./qc/apps/x509.c.html#19527"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19527] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19532"
 , "c1link" : "./qc/apps/x509.c.html#19532"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19532] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19533"
 , "c1link" : "./qc/apps/x509.c.html#19533"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19533] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19540"
 , "c1link" : "./qc/apps/x509.c.html#19540"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19540] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19550"
 , "c1link" : "./qc/apps/x509.c.html#19550"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19550] The expression  ! set_cert_ex( &amp; certflag,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19551"
 , "c1link" : "./qc/apps/x509.c.html#19551"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19551] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19554"
 , "c1link" : "./qc/apps/x509.c.html#19554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19554] The expression  ! set_nameopt(opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19555"
 , "c1link" : "./qc/apps/x509.c.html#19555"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19555] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19662"
 , "c1link" : "./qc/apps/x509.c.html#19662"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19662] The expression  ! opt_intmax(opt_arg(), &amp; temp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19663"
 , "c1link" : "./qc/apps/x509.c.html#19663"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19663] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19668"
 , "c1link" : "./qc/apps/x509.c.html#19668"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19668] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19690"
 , "c1link" : "./qc/apps/x509.c.html#19690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19690] The expression  ! opt_check_rest_arg((( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19695"
 , "c1link" : "./qc/apps/x509.c.html#19695"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19695] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19697"
 , "c1link" : "./qc/apps/x509.c.html#19697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19697] The expression  ! app_RAND_load() applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19698"
 , "c1link" : "./qc/apps/x509.c.html#19698"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19698] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19700"
 , "c1link" : "./qc/apps/x509.c.html#19700"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19700] The expression  ! opt_check_md(digest) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19701"
 , "c1link" : "./qc/apps/x509.c.html#19701"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19701] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19705"
 , "c1link" : "./qc/apps/x509.c.html#19705"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19705] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19710"
 , "c1link" : "./qc/apps/x509.c.html#19710"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19710] The expression  ! app_passwd(passinarg,(( void  *)0), &amp; passin,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19720"
 , "c1link" : "./qc/apps/x509.c.html#19720"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19720] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19723"
 , "c1link" : "./qc/apps/x509.c.html#19723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19723] The expression  ! X509_STORE_set_default_paths_ex(ctx,app_get0_libctx(),app_get0_propq()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19725"
 , "c1link" : "./qc/apps/x509.c.html#19725"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19725] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19733"
 , "c1link" : "./qc/apps/x509.c.html#19733"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19733] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19738"
 , "c1link" : "./qc/apps/x509.c.html#19738"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19738] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19751"
 , "c1link" : "./qc/apps/x509.c.html#19751"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19751] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19758"
 , "c1link" : "./qc/apps/x509.c.html#19758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19758] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19768"
 , "c1link" : "./qc/apps/x509.c.html#19768"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19768] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19771"
 , "c1link" : "./qc/apps/x509.c.html#19771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19771] The expression newcert applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19779"
 , "c1link" : "./qc/apps/x509.c.html#19779"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19779] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19792"
 , "c1link" : "./qc/apps/x509.c.html#19792"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19792] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19800"
 , "c1link" : "./qc/apps/x509.c.html#19800"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19800] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19805"
 , "c1link" : "./qc/apps/x509.c.html#19805"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19805] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19824"
 , "c1link" : "./qc/apps/x509.c.html#19824"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19824] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19850"
 , "c1link" : "./qc/apps/x509.c.html#19850"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19850] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19855"
 , "c1link" : "./qc/apps/x509.c.html#19855"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19855] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19889"
 , "c1link" : "./qc/apps/x509.c.html#19889"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19889] The expression  ! X509V3_EXT_add_nconf(extconf, &amp; ctx2,extsect,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19896"
 , "c1link" : "./qc/apps/x509.c.html#19896"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19896] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19900"
 , "c1link" : "./qc/apps/x509.c.html#19900"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19900] The expression reqfile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19914"
 , "c1link" : "./qc/apps/x509.c.html#19914"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19914] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19916"
 , "c1link" : "./qc/apps/x509.c.html#19916"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19916] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19922"
 , "c1link" : "./qc/apps/x509.c.html#19922"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19922] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19929"
 , "c1link" : "./qc/apps/x509.c.html#19929"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19929] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19939"
 , "c1link" : "./qc/apps/x509.c.html#19939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19939] The expression preserve_dates applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19954"
 , "c1link" : "./qc/apps/x509.c.html#19954"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19954] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19956"
 , "c1link" : "./qc/apps/x509.c.html#19956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19956] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19961"
 , "c1link" : "./qc/apps/x509.c.html#19961"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19961] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19977"
 , "c1link" : "./qc/apps/x509.c.html#19977"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19977] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19986"
 , "c1link" : "./qc/apps/x509.c.html#19986"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19986] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19987"
 , "c1link" : "./qc/apps/x509.c.html#19987"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19987] The expression  ! copy_extensions(x,req,ext_copy) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19989"
 , "c1link" : "./qc/apps/x509.c.html#19989"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19989] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20006"
 , "c1link" : "./qc/apps/x509.c.html#20006"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20006] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20023"
 , "c1link" : "./qc/apps/x509.c.html#20023"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20023] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20048"
 , "c1link" : "./qc/apps/x509.c.html#20048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20048] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20061"
 , "c1link" : "./qc/apps/x509.c.html#20061"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20061] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20070"
 , "c1link" : "./qc/apps/x509.c.html#20070"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20070] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20075"
 , "c1link" : "./qc/apps/x509.c.html#20075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20075] The expression  alias  applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20078"
 , "c1link" : "./qc/apps/x509.c.html#20078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20078] The expression clrtrust applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20080"
 , "c1link" : "./qc/apps/x509.c.html#20080"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20080] The expression clrreject applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20141"
 , "c1link" : "./qc/apps/x509.c.html#20141"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20141] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20143"
 , "c1link" : "./qc/apps/x509.c.html#20143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20143] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20159"
 , "c1link" : "./qc/apps/x509.c.html#20159"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20159] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20179"
 , "c1link" : "./qc/apps/x509.c.html#20179"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20179] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20180"
 , "c1link" : "./qc/apps/x509.c.html#20180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20180] The expression  ! X509_set_issuer_name(x,X509_get_subject_name(issuer_cert)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20181"
 , "c1link" : "./qc/apps/x509.c.html#20181"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20181] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20199"
 , "c1link" : "./qc/apps/x509.c.html#20199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20199] The expression  ! X509V3_set_issuer_pkey( &amp; ext_ctx,privkey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20200"
 , "c1link" : "./qc/apps/x509.c.html#20200"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20200] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20208"
 , "c1link" : "./qc/apps/x509.c.html#20208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20208] The expression  ! X509V3_EXT_add_nconf(extconf, &amp; ext_ctx,extsect,x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20211"
 , "c1link" : "./qc/apps/x509.c.html#20211"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20211] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20224"
 , "c1link" : "./qc/apps/x509.c.html#20224"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20224] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20227"
 , "c1link" : "./qc/apps/x509.c.html#20227"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20227] The expression x509toreq applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20234"
 , "c1link" : "./qc/apps/x509.c.html#20234"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20234] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20238"
 , "c1link" : "./qc/apps/x509.c.html#20238"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20238] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20240"
 , "c1link" : "./qc/apps/x509.c.html#20240"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20240] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20245"
 , "c1link" : "./qc/apps/x509.c.html#20245"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20245] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20252"
 , "c1link" : "./qc/apps/x509.c.html#20252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20252] The expression  ! X509V3_EXT_REQ_add_nconf(extconf, &amp; ext_ctx,extsect,rq) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20255"
 , "c1link" : "./qc/apps/x509.c.html#20255"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20255] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20258"
 , "c1link" : "./qc/apps/x509.c.html#20258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20258] The expression  ! do_X509_REQ_sign(rq,privkey,digest,sigopts) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20259"
 , "c1link" : "./qc/apps/x509.c.html#20259"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20259] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20260"
 , "c1link" : "./qc/apps/x509.c.html#20260"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20260] The expression  ! noout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20267"
 , "c1link" : "./qc/apps/x509.c.html#20267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20267] The expression  ! i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20270"
 , "c1link" : "./qc/apps/x509.c.html#20270"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20270] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20279"
 , "c1link" : "./qc/apps/x509.c.html#20279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20279] The expression  ! do_X509_sign(x,privkey,digest,sigopts, &amp; ext_ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20280"
 , "c1link" : "./qc/apps/x509.c.html#20280"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20280] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20286"
 , "c1link" : "./qc/apps/x509.c.html#20286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20286] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20292"
 , "c1link" : "./qc/apps/x509.c.html#20292"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20292] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20293"
 , "c1link" : "./qc/apps/x509.c.html#20293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20293] The expression  ! X509_check_private_key(xca,CAkey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20296"
 , "c1link" : "./qc/apps/x509.c.html#20296"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20296] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20299"
 , "c1link" : "./qc/apps/x509.c.html#20299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20299] The expression  ! do_X509_sign(x,CAkey,digest,sigopts, &amp; ext_ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20300"
 , "c1link" : "./qc/apps/x509.c.html#20300"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20300] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20302"
 , "c1link" : "./qc/apps/x509.c.html#20302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20302] The expression badsig applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20303"
 , "c1link" : "./qc/apps/x509.c.html#20303"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20303] The pointer signature is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20324"
 , "c1link" : "./qc/apps/x509.c.html#20324"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20324] The pointer ser is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20336"
 , "c1link" : "./qc/apps/x509.c.html#20336"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20336] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20338"
 , "c1link" : "./qc/apps/x509.c.html#20338"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20338] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20337"
 , "c1link" : "./qc/apps/x509.c.html#20337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20337] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "20348"
 , "c1link" : "./qc/apps/x509.c.html#20348"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20348] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20368"
 , "c1link" : "./qc/apps/x509.c.html#20368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20368] The expression alstr applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20390"
 , "c1link" : "./qc/apps/x509.c.html#20390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20390] The expression EVP_PKEY_is_a(pkey,'RSA') applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20390"
 , "c1link" : "./qc/apps/x509.c.html#20390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20390] The expression 'RSA' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20401"
 , "c1link" : "./qc/apps/x509.c.html#20401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20401] The expression EVP_PKEY_is_a(pkey,'DSA') applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20401"
 , "c1link" : "./qc/apps/x509.c.html#20401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20401] The expression 'DSA' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20432"
 , "c1link" : "./qc/apps/x509.c.html#20432"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20432] The pointer fdig is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20442"
 , "c1link" : "./qc/apps/x509.c.html#20442"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20442] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20449"
 , "c1link" : "./qc/apps/x509.c.html#20449"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20449] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20453"
 , "c1link" : "./qc/apps/x509.c.html#20453"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20453] The expression  ! digres applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20455"
 , "c1link" : "./qc/apps/x509.c.html#20455"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20455] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20468"
 , "c1link" : "./qc/apps/x509.c.html#20468"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20468] The expression checkend applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20476"
 , "c1link" : "./qc/apps/x509.c.html#20476"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20476] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20480"
 , "c1link" : "./qc/apps/x509.c.html#20480"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20480] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20483"
 , "c1link" : "./qc/apps/x509.c.html#20483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20483] The expression  ! check_cert_attributes(out,x,checkhost,checkemail,checkip,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20483"
 , "c1link" : "./qc/apps/x509.c.html#20483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20483] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "20484"
 , "c1link" : "./qc/apps/x509.c.html#20484"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20484] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20488"
 , "c1link" : "./qc/apps/x509.c.html#20488"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20488] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20494"
 , "c1link" : "./qc/apps/x509.c.html#20494"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20494] The expression trustout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20500"
 , "c1link" : "./qc/apps/x509.c.html#20500"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20500] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20502"
 , "c1link" : "./qc/apps/x509.c.html#20502"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20502] The expression  ! i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20504"
 , "c1link" : "./qc/apps/x509.c.html#20504"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20504] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20508"
 , "c1link" : "./qc/apps/x509.c.html#20508"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20508] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20582"
 , "c1link" : "./qc/apps/x509.c.html#20582"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20582] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20584"
 , "c1link" : "./qc/apps/x509.c.html#20584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20584] The expression  ! BN_add_word(serial,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20584"
 , "c1link" : "./qc/apps/x509.c.html#20584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20584] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "20586"
 , "c1link" : "./qc/apps/x509.c.html#20586"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20586] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20589"
 , "c1link" : "./qc/apps/x509.c.html#20589"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20589] The expression  ! save_serial(serialfile,(( void  *)0),serial, &amp; bs) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20594"
 , "c1link" : "./qc/apps/x509.c.html#20594"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20594] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20605"
 , "c1link" : "./qc/apps/x509.c.html#20605"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20605] The pointer err_cert is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20620"
 , "c1link" : "./qc/apps/x509.c.html#20620"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20620] The expression ok applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20638"
 , "c1link" : "./qc/apps/x509.c.html#20638"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20638] The pointer pname is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20656"
 , "c1link" : "./qc/apps/x509.c.html#20656"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20656] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20656"
 , "c1link" : "./qc/apps/x509.c.html#20656"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20656] The pointer q is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20659"
 , "c1link" : "./qc/apps/x509.c.html#20659"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20659] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20702"
 , "c1link" : "./qc/apps/x509.c.html#20702"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20702] The pointer obj is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20704"
 , "c1link" : "./qc/apps/x509.c.html#20704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20704] The pointer sn is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20716"
 , "c1link" : "./qc/apps/x509.c.html#20716"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20716] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20719"
 , "c1link" : "./qc/apps/x509.c.html#20719"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20719] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20723"
 , "c1link" : "./qc/apps/x509.c.html#20723"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20723] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20728"
 , "c1link" : "./qc/apps/x509.c.html#20728"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20728] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20729"
 , "c1link" : "./qc/apps/x509.c.html#20729"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20729] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20735"
 , "c1link" : "./qc/apps/x509.c.html#20735"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20735] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20737"
 , "c1link" : "./qc/apps/x509.c.html#20737"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20737] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20742"
 , "c1link" : "./qc/apps/x509.c.html#20742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20742] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20755"
 , "c1link" : "./qc/apps/x509.c.html#20755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20755] The expression 'UNDEF' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20766"
 , "c1link" : "./qc/apps/x509.c.html#20766"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20766] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20771"
 , "c1link" : "./qc/apps/x509.c.html#20771"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20771] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20772"
 , "c1link" : "./qc/apps/x509.c.html#20772"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20772] The expression  ! OPENSSL_sk_push(ossl_check_X509_EXTENSION_sk_type(exts2),ossl_check_X509_EXTENSION_type(ext)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20773"
 , "c1link" : "./qc/apps/x509.c.html#20773"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20773] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20778"
 , "c1link" : "./qc/apps/x509.c.html#20778"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20778] The expression  ! OPENSSL_sk_num(ossl_check_const_X509_EXTENSION_sk_type(exts2)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20781"
 , "c1link" : "./qc/apps/x509.c.html#20781"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20781] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
