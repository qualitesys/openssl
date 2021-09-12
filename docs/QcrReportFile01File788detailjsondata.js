console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/ssl/s3_cbc.c.html" 
 , "texte" : "File ssl/s3_cbc.c 102 rule violations " 
 , "fic2"  : "./qc/ssl/s3_cbc.c.xml" 
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
 , "c2" : "QC-CPP000005"
 , "c3" : "Check pointer declaration to unsigned char"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "39"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPPCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "48"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[01214] The pointer __p is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "01219"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#1219"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01219] The expression __l&lt;__u applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01406"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#1406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01406] The expression  ! __builtin_constant_p(__buflen) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01456"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#1456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01456] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01487"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#1487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01487] The expression  ! __builtin_constant_p(__len) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "01857"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#1857"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[01857] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02362"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#2362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02362] The expression i&lt;len applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02382"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#2382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[02382] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "02383"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#2383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[02383] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "02389"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#2389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02389] The expression i&lt;numrows applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "02391"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#2391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[02391] The expression j&lt;rowsize applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03428"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3428"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03428] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03458"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03458] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03459"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3459"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03459] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03460"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03460] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03460"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03460] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03490"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03490] The expression  ! __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03491"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03491] The expression  ! __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03492"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03492] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03492"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03492] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03502"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3502"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03502] The expression __builtin_constant_p(__size) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03503"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03503] The expression __builtin_constant_p(__n) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03504"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03504] The expression __size|__n applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03504"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[03504] The expression size_t applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "03515"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#3515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[03515] The expression ( - 1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06225"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#6225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06225] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06232"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#6232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06232] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "06239"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#6239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[06239] The expression (( unsigned  int  )0x7fffffff+1) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "08943"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8943"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08943] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08943"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8943"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08943] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08943"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8943"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08943] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08943"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8943"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08943] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08944"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8944"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08944] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08944"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8944"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08944] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08944"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8944"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08944] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08944"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8944"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08944] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08945"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8945"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08945] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08945"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8945"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08945] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08945"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8945"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08945] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08945"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8945"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08945] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08946"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08946] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08946"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08946] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08946"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08946] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08946"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08946] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08953"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8953"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08953] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08953"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8953"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08953] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08953"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8953"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08953] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08953"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8953"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08953] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08954"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8954"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08954] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08954"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8954"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08954] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08954"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8954"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08954] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08954"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8954"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08954] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08955"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8955"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08955] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08955"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8955"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08955] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08955"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8955"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08955] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08955"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8955"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08955] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08956"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08956] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08956"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08956] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08956"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08956] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08956"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08956] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08957"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08957] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08957"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08957] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08957"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08957] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08957"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08957] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08966"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8966"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08966] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08966"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8966"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08966] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08966"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8966"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08966] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08966"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8966"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08966] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08976"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08976"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08976"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08976"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08976"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08976"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08976"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "08976"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#8976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[08976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "09087"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09087] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09100"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09100] The expression is_sslv3 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09150"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09150] The expression is_sslv3 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09150"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09150] The expression 1 is invariable, always true"
}} 
,
{ "ligne" : {
   "c1" : "09150"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09150] The expression 0 is invariable, always false"
}} 
,
{ "ligne" : {
   "c1" : "09156"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09156] The expression  ! is_sslv3 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09164"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09164] The expression mac_secret_length&lt;= sizeof (hmac_pad) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09167"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09167] The expression i&lt;md_block_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09173"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09173] The expression length_is_big_endian applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09188"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09188] The expression is_sslv3 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09191"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09191] The expression header_length&lt;=md_block_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09207"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09207] The expression i&lt;k/md_block_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09220"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09220] The expression i&lt;=num_starting_blocks+variance_blocks applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09225"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09225] The expression j&lt;md_block_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09227"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9227"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09227] The expression k&lt;header_length applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09229"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09229] The expression k&lt;data_plus_mac_plus_padding_size+header_length applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09256"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09256] The expression j&gt;=md_block_size-md_length_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09269"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09269] The expression j&lt;md_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09276"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[09276] The expression (( void  *)0) is invariable"
}} 
,
{ "ligne" : {
   "c1" : "09279"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9279"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09279] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09286"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09286] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09287"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09287] The expression is_sslv3 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09294"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9294"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09294] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09297"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09297] The expression i&lt;md_block_size applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "09302"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9302"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[09302] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "09305"
 , "c1link" : "./qc/ssl/s3_cbc.c.html#9305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[09305] The expression ret&&md_out_size applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
