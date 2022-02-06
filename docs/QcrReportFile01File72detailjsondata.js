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
   "c1" : "07511"
 , "c1link" : "./qc/apps/x509.c.html#7511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07511] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "07513"
 , "c1link" : "./qc/apps/x509.c.html#7513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07513] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07516"
 , "c1link" : "./qc/apps/x509.c.html#7516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07516] The expression 0 is invariable, always false"
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
   "c1" : "07544"
 , "c1link" : "./qc/apps/x509.c.html#7544"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[07544] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "07547"
 , "c1link" : "./qc/apps/x509.c.html#7547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[07547] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "08947"
 , "c1link" : "./qc/apps/x509.c.html#8947"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08947] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "08980"
 , "c1link" : "./qc/apps/x509.c.html#8980"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[08980] The expression __builtin_constant_p(__oflag) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19075"
 , "c1link" : "./qc/apps/x509.c.html#19075"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19075] The pointer exts is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19103"
 , "c1link" : "./qc/apps/x509.c.html#19103"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19103] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19112"
 , "c1link" : "./qc/apps/x509.c.html#19112"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19112] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19119"
 , "c1link" : "./qc/apps/x509.c.html#19119"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19119] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19126"
 , "c1link" : "./qc/apps/x509.c.html#19126"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19126] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19202"
 , "c1link" : "./qc/apps/x509.c.html#19202"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19202] The pointer pkey is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19246"
 , "c1link" : "./qc/apps/x509.c.html#19246"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19246] The pointer issuer_cert is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19330"
 , "c1link" : "./qc/apps/x509.c.html#19330"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19330] The pointer prog is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19362"
 , "c1link" : "./qc/apps/x509.c.html#19362"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19362] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19367"
 , "c1link" : "./qc/apps/x509.c.html#19367"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19367] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19371"
 , "c1link" : "./qc/apps/x509.c.html#19371"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[19371] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19373"
 , "c1link" : "./qc/apps/x509.c.html#19373"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19373] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19377"
 , "c1link" : "./qc/apps/x509.c.html#19377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19377] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19379"
 , "c1link" : "./qc/apps/x509.c.html#19379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19379] The expression  ! opt_format(opt_arg(),(1L&lt;&lt;1), &amp; informat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19379"
 , "c1link" : "./qc/apps/x509.c.html#19379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19379] The expression (1L&lt;&lt;1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19380"
 , "c1link" : "./qc/apps/x509.c.html#19380"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19380] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19386"
 , "c1link" : "./qc/apps/x509.c.html#19386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19386] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; outformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19386"
 , "c1link" : "./qc/apps/x509.c.html#19386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19386] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19387"
 , "c1link" : "./qc/apps/x509.c.html#19387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19387] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19390"
 , "c1link" : "./qc/apps/x509.c.html#19390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19390] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; keyformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19390"
 , "c1link" : "./qc/apps/x509.c.html#19390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19390] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19391"
 , "c1link" : "./qc/apps/x509.c.html#19391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19391] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19394"
 , "c1link" : "./qc/apps/x509.c.html#19394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19394] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; CAformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19394"
 , "c1link" : "./qc/apps/x509.c.html#19394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19394] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19395"
 , "c1link" : "./qc/apps/x509.c.html#19395"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19395] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19398"
 , "c1link" : "./qc/apps/x509.c.html#19398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19398] The expression  ! opt_format(opt_arg(),((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)), &amp; CAkeyformat) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19398"
 , "c1link" : "./qc/apps/x509.c.html#19398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[19398] The expression ((1L&lt;&lt;1)|(1L&lt;&lt;2)|(1L&lt;&lt;3)|(1L&lt;&lt;4)|(1L&lt;&lt;5)|(1L&lt;&lt;7)|(1L&lt;&lt;8)|(1L&lt;&lt;9)|(1L&lt;&lt;10)) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "19399"
 , "c1link" : "./qc/apps/x509.c.html#19399"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19399] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19409"
 , "c1link" : "./qc/apps/x509.c.html#19409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19409] The expression  ! set_dateopt( &amp; dateopt,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19412"
 , "c1link" : "./qc/apps/x509.c.html#19412"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19412] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19416"
 , "c1link" : "./qc/apps/x509.c.html#19416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19416] The expression  ! set_ext_copy( &amp; ext_copy,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19419"
 , "c1link" : "./qc/apps/x509.c.html#19419"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19419] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19424"
 , "c1link" : "./qc/apps/x509.c.html#19424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19424] The expression  ! sigopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19427"
 , "c1link" : "./qc/apps/x509.c.html#19427"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19427] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19430"
 , "c1link" : "./qc/apps/x509.c.html#19430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19430] The expression  ! vfyopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19433"
 , "c1link" : "./qc/apps/x509.c.html#19433"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19433] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19440"
 , "c1link" : "./qc/apps/x509.c.html#19440"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19440] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19450"
 , "c1link" : "./qc/apps/x509.c.html#19450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19450] The expression  ! opt_rand(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19451"
 , "c1link" : "./qc/apps/x509.c.html#19451"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19451] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19454"
 , "c1link" : "./qc/apps/x509.c.html#19454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19454] The expression  ! opt_provider(o) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19455"
 , "c1link" : "./qc/apps/x509.c.html#19455"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19455] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19480"
 , "c1link" : "./qc/apps/x509.c.html#19480"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19480] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19482"
 , "c1link" : "./qc/apps/x509.c.html#19482"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19482] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19491"
 , "c1link" : "./qc/apps/x509.c.html#19491"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19491] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19507"
 , "c1link" : "./qc/apps/x509.c.html#19507"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19507] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19512"
 , "c1link" : "./qc/apps/x509.c.html#19512"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19512] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19513"
 , "c1link" : "./qc/apps/x509.c.html#19513"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19513] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19520"
 , "c1link" : "./qc/apps/x509.c.html#19520"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19520] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19530"
 , "c1link" : "./qc/apps/x509.c.html#19530"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19530] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19535"
 , "c1link" : "./qc/apps/x509.c.html#19535"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19535] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19536"
 , "c1link" : "./qc/apps/x509.c.html#19536"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19536] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19543"
 , "c1link" : "./qc/apps/x509.c.html#19543"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19543] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19553"
 , "c1link" : "./qc/apps/x509.c.html#19553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19553] The expression  ! set_cert_ex( &amp; certflag,opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19554"
 , "c1link" : "./qc/apps/x509.c.html#19554"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19554] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19557"
 , "c1link" : "./qc/apps/x509.c.html#19557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19557] The expression  ! set_nameopt(opt_arg()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19558"
 , "c1link" : "./qc/apps/x509.c.html#19558"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19558] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19665"
 , "c1link" : "./qc/apps/x509.c.html#19665"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19665] The expression  ! opt_intmax(opt_arg(), &amp; temp) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19666"
 , "c1link" : "./qc/apps/x509.c.html#19666"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19666] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19671"
 , "c1link" : "./qc/apps/x509.c.html#19671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19671] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19693"
 , "c1link" : "./qc/apps/x509.c.html#19693"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19693] The expression  ! opt_check_rest_arg((( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19698"
 , "c1link" : "./qc/apps/x509.c.html#19698"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19698] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19700"
 , "c1link" : "./qc/apps/x509.c.html#19700"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19700] The expression  ! app_RAND_load() applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19701"
 , "c1link" : "./qc/apps/x509.c.html#19701"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19701] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19703"
 , "c1link" : "./qc/apps/x509.c.html#19703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19703] The expression  ! opt_check_md(digest) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19704"
 , "c1link" : "./qc/apps/x509.c.html#19704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19704] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19708"
 , "c1link" : "./qc/apps/x509.c.html#19708"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19708] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19713"
 , "c1link" : "./qc/apps/x509.c.html#19713"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19713] The expression  ! app_passwd(passinarg,(( void  *)0), &amp; passin,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19723"
 , "c1link" : "./qc/apps/x509.c.html#19723"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19723] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19726"
 , "c1link" : "./qc/apps/x509.c.html#19726"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19726] The expression  ! X509_STORE_set_default_paths_ex(ctx,app_get0_libctx(),app_get0_propq()) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19728"
 , "c1link" : "./qc/apps/x509.c.html#19728"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19728] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19736"
 , "c1link" : "./qc/apps/x509.c.html#19736"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19736] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19741"
 , "c1link" : "./qc/apps/x509.c.html#19741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19741] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19754"
 , "c1link" : "./qc/apps/x509.c.html#19754"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19754] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19761"
 , "c1link" : "./qc/apps/x509.c.html#19761"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19761] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19771"
 , "c1link" : "./qc/apps/x509.c.html#19771"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19771] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19774"
 , "c1link" : "./qc/apps/x509.c.html#19774"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19774] The expression newcert applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19782"
 , "c1link" : "./qc/apps/x509.c.html#19782"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19782] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19795"
 , "c1link" : "./qc/apps/x509.c.html#19795"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19795] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19803"
 , "c1link" : "./qc/apps/x509.c.html#19803"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19803] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19808"
 , "c1link" : "./qc/apps/x509.c.html#19808"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19808] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19827"
 , "c1link" : "./qc/apps/x509.c.html#19827"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19827] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19853"
 , "c1link" : "./qc/apps/x509.c.html#19853"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19853] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19858"
 , "c1link" : "./qc/apps/x509.c.html#19858"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19858] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19892"
 , "c1link" : "./qc/apps/x509.c.html#19892"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19892] The expression  ! X509V3_EXT_add_nconf(extconf, &amp; ctx2,extsect,(( void  *)0)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19899"
 , "c1link" : "./qc/apps/x509.c.html#19899"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19899] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19903"
 , "c1link" : "./qc/apps/x509.c.html#19903"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19903] The expression reqfile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19917"
 , "c1link" : "./qc/apps/x509.c.html#19917"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19917] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19919"
 , "c1link" : "./qc/apps/x509.c.html#19919"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19919] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19925"
 , "c1link" : "./qc/apps/x509.c.html#19925"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19925] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19932"
 , "c1link" : "./qc/apps/x509.c.html#19932"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19932] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19942"
 , "c1link" : "./qc/apps/x509.c.html#19942"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19942] The expression preserve_dates applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19957"
 , "c1link" : "./qc/apps/x509.c.html#19957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19957] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "19959"
 , "c1link" : "./qc/apps/x509.c.html#19959"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[19959] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19964"
 , "c1link" : "./qc/apps/x509.c.html#19964"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19964] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19980"
 , "c1link" : "./qc/apps/x509.c.html#19980"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19980] goto statement jump to end"
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
   "c1" : "19990"
 , "c1link" : "./qc/apps/x509.c.html#19990"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19990] The expression  ! copy_extensions(x,req,ext_copy) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19992"
 , "c1link" : "./qc/apps/x509.c.html#19992"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19992] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20009"
 , "c1link" : "./qc/apps/x509.c.html#20009"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20009] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20026"
 , "c1link" : "./qc/apps/x509.c.html#20026"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20026] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20051"
 , "c1link" : "./qc/apps/x509.c.html#20051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20051] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20064"
 , "c1link" : "./qc/apps/x509.c.html#20064"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20064] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20073"
 , "c1link" : "./qc/apps/x509.c.html#20073"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20073] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20078"
 , "c1link" : "./qc/apps/x509.c.html#20078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20078] The expression  alias  applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20081"
 , "c1link" : "./qc/apps/x509.c.html#20081"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20081] The expression clrtrust applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20083"
 , "c1link" : "./qc/apps/x509.c.html#20083"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20083] The expression clrreject applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20144"
 , "c1link" : "./qc/apps/x509.c.html#20144"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20144] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20146"
 , "c1link" : "./qc/apps/x509.c.html#20146"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20146] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20162"
 , "c1link" : "./qc/apps/x509.c.html#20162"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20162] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20182"
 , "c1link" : "./qc/apps/x509.c.html#20182"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20182] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20183"
 , "c1link" : "./qc/apps/x509.c.html#20183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20183] The expression  ! X509_set_issuer_name(x,X509_get_subject_name(issuer_cert)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20184"
 , "c1link" : "./qc/apps/x509.c.html#20184"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20184] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20202"
 , "c1link" : "./qc/apps/x509.c.html#20202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20202] The expression  ! X509V3_set_issuer_pkey( &amp; ext_ctx,privkey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20203"
 , "c1link" : "./qc/apps/x509.c.html#20203"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20203] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20211"
 , "c1link" : "./qc/apps/x509.c.html#20211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20211] The expression  ! X509V3_EXT_add_nconf(extconf, &amp; ext_ctx,extsect,x) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20214"
 , "c1link" : "./qc/apps/x509.c.html#20214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20214] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20227"
 , "c1link" : "./qc/apps/x509.c.html#20227"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20227] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20230"
 , "c1link" : "./qc/apps/x509.c.html#20230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20230] The expression x509toreq applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20237"
 , "c1link" : "./qc/apps/x509.c.html#20237"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20237] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20241"
 , "c1link" : "./qc/apps/x509.c.html#20241"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20241] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20243"
 , "c1link" : "./qc/apps/x509.c.html#20243"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20243] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20248"
 , "c1link" : "./qc/apps/x509.c.html#20248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20248] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20255"
 , "c1link" : "./qc/apps/x509.c.html#20255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20255] The expression  ! X509V3_EXT_REQ_add_nconf(extconf, &amp; ext_ctx,extsect,rq) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20258"
 , "c1link" : "./qc/apps/x509.c.html#20258"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20258] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20261"
 , "c1link" : "./qc/apps/x509.c.html#20261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20261] The expression  ! do_X509_REQ_sign(rq,privkey,digest,sigopts) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20262"
 , "c1link" : "./qc/apps/x509.c.html#20262"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20262] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20263"
 , "c1link" : "./qc/apps/x509.c.html#20263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20263] The expression  ! noout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20270"
 , "c1link" : "./qc/apps/x509.c.html#20270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20270] The expression  ! i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20273"
 , "c1link" : "./qc/apps/x509.c.html#20273"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20273] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20282"
 , "c1link" : "./qc/apps/x509.c.html#20282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20282] The expression  ! do_X509_sign(x,privkey,digest,sigopts, &amp; ext_ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20283"
 , "c1link" : "./qc/apps/x509.c.html#20283"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20283] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20289"
 , "c1link" : "./qc/apps/x509.c.html#20289"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20289] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20295"
 , "c1link" : "./qc/apps/x509.c.html#20295"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20295] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20296"
 , "c1link" : "./qc/apps/x509.c.html#20296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20296] The expression  ! X509_check_private_key(xca,CAkey) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20299"
 , "c1link" : "./qc/apps/x509.c.html#20299"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20299] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20302"
 , "c1link" : "./qc/apps/x509.c.html#20302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20302] The expression  ! do_X509_sign(x,CAkey,digest,sigopts, &amp; ext_ctx) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20303"
 , "c1link" : "./qc/apps/x509.c.html#20303"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20303] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20305"
 , "c1link" : "./qc/apps/x509.c.html#20305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20305] The expression badsig applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20306"
 , "c1link" : "./qc/apps/x509.c.html#20306"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20306] The pointer signature is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20327"
 , "c1link" : "./qc/apps/x509.c.html#20327"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20327] The pointer ser is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20339"
 , "c1link" : "./qc/apps/x509.c.html#20339"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20339] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20341"
 , "c1link" : "./qc/apps/x509.c.html#20341"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20341] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20340"
 , "c1link" : "./qc/apps/x509.c.html#20340"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20340] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "20351"
 , "c1link" : "./qc/apps/x509.c.html#20351"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20351] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20371"
 , "c1link" : "./qc/apps/x509.c.html#20371"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20371] The expression alstr applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20393"
 , "c1link" : "./qc/apps/x509.c.html#20393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20393] The expression EVP_PKEY_is_a(pkey,'RSA') applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20393"
 , "c1link" : "./qc/apps/x509.c.html#20393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20393] The expression 'RSA' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20404"
 , "c1link" : "./qc/apps/x509.c.html#20404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20404] The expression EVP_PKEY_is_a(pkey,'DSA') applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20404"
 , "c1link" : "./qc/apps/x509.c.html#20404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20404] The expression 'DSA' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20435"
 , "c1link" : "./qc/apps/x509.c.html#20435"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20435] The pointer fdig is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20445"
 , "c1link" : "./qc/apps/x509.c.html#20445"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20445] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20452"
 , "c1link" : "./qc/apps/x509.c.html#20452"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20452] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20456"
 , "c1link" : "./qc/apps/x509.c.html#20456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20456] The expression  ! digres applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20458"
 , "c1link" : "./qc/apps/x509.c.html#20458"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20458] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20471"
 , "c1link" : "./qc/apps/x509.c.html#20471"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20471] The expression checkend applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20479"
 , "c1link" : "./qc/apps/x509.c.html#20479"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20479] The expression ret applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20483"
 , "c1link" : "./qc/apps/x509.c.html#20483"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20483] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20486"
 , "c1link" : "./qc/apps/x509.c.html#20486"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20486] The expression  ! check_cert_attributes(out,x,checkhost,checkemail,checkip,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20486"
 , "c1link" : "./qc/apps/x509.c.html#20486"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20486] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "20487"
 , "c1link" : "./qc/apps/x509.c.html#20487"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20487] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20491"
 , "c1link" : "./qc/apps/x509.c.html#20491"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20491] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20497"
 , "c1link" : "./qc/apps/x509.c.html#20497"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20497] The expression trustout applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20503"
 , "c1link" : "./qc/apps/x509.c.html#20503"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20503] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20505"
 , "c1link" : "./qc/apps/x509.c.html#20505"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20505] The expression  ! i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20507"
 , "c1link" : "./qc/apps/x509.c.html#20507"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20507] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20511"
 , "c1link" : "./qc/apps/x509.c.html#20511"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20511] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20585"
 , "c1link" : "./qc/apps/x509.c.html#20585"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20585] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20587"
 , "c1link" : "./qc/apps/x509.c.html#20587"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20587] The expression  ! BN_add_word(serial,1) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20587"
 , "c1link" : "./qc/apps/x509.c.html#20587"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20587] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "20589"
 , "c1link" : "./qc/apps/x509.c.html#20589"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20589] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20592"
 , "c1link" : "./qc/apps/x509.c.html#20592"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20592] The expression  ! save_serial(serialfile,(( void  *)0),serial, &amp; bs) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20597"
 , "c1link" : "./qc/apps/x509.c.html#20597"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20597] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20608"
 , "c1link" : "./qc/apps/x509.c.html#20608"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20608] The pointer err_cert is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20623"
 , "c1link" : "./qc/apps/x509.c.html#20623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20623] The expression ok applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20641"
 , "c1link" : "./qc/apps/x509.c.html#20641"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20641] The pointer pname is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20659"
 , "c1link" : "./qc/apps/x509.c.html#20659"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20659] The pointer p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20659"
 , "c1link" : "./qc/apps/x509.c.html#20659"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20659] The pointer q is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20662"
 , "c1link" : "./qc/apps/x509.c.html#20662"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20662] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20705"
 , "c1link" : "./qc/apps/x509.c.html#20705"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20705] The pointer obj is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20707"
 , "c1link" : "./qc/apps/x509.c.html#20707"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[20707] The pointer sn is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "20719"
 , "c1link" : "./qc/apps/x509.c.html#20719"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20719] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20722"
 , "c1link" : "./qc/apps/x509.c.html#20722"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20722] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20726"
 , "c1link" : "./qc/apps/x509.c.html#20726"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20726] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20731"
 , "c1link" : "./qc/apps/x509.c.html#20731"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20731] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20732"
 , "c1link" : "./qc/apps/x509.c.html#20732"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20732] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20738"
 , "c1link" : "./qc/apps/x509.c.html#20738"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20738] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20740"
 , "c1link" : "./qc/apps/x509.c.html#20740"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20740] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20745"
 , "c1link" : "./qc/apps/x509.c.html#20745"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20745] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20758"
 , "c1link" : "./qc/apps/x509.c.html#20758"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[20758] The expression 'UNDEF' is invariable"
}} 
,
{ "ligne" : {
   "c1" : "20769"
 , "c1link" : "./qc/apps/x509.c.html#20769"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20769] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20774"
 , "c1link" : "./qc/apps/x509.c.html#20774"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20774] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20775"
 , "c1link" : "./qc/apps/x509.c.html#20775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20775] The expression  ! OPENSSL_sk_push(ossl_check_X509_EXTENSION_sk_type(exts2),ossl_check_X509_EXTENSION_type(ext)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20776"
 , "c1link" : "./qc/apps/x509.c.html#20776"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20776] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "20781"
 , "c1link" : "./qc/apps/x509.c.html#20781"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20781] The expression  ! OPENSSL_sk_num(ossl_check_const_X509_EXTENSION_sk_type(exts2)) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20784"
 , "c1link" : "./qc/apps/x509.c.html#20784"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20784] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
