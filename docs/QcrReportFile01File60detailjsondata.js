console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/s_server.c.html" 
 , "texte" : "File apps/s_server.c 241 rule violations " 
 , "fic2"  : "./qc/apps/s_server.c.xml" 
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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "78"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "126"
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
 , "c4" : "21"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-CPP000013"
 , "c3" : "Inline assembly code"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "20914"
 , "c1link" : "./qc/apps/s_server.c.html#20914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20914] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20916"
 , "c1link" : "./qc/apps/s_server.c.html#20916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20916] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20924"
 , "c1link" : "./qc/apps/s_server.c.html#20924"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20924] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20926"
 , "c1link" : "./qc/apps/s_server.c.html#20926"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20926] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20935"
 , "c1link" : "./qc/apps/s_server.c.html#20935"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20935] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20961"
 , "c1link" : "./qc/apps/s_server.c.html#20961"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20961] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20965"
 , "c1link" : "./qc/apps/s_server.c.html#20965"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20965] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20989"
 , "c1link" : "./qc/apps/s_server.c.html#20989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20989] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21089"
 , "c1link" : "./qc/apps/s_server.c.html#21089"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21089] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21216"
 , "c1link" : "./qc/apps/s_server.c.html#21216"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21216] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21229"
 , "c1link" : "./qc/apps/s_server.c.html#21229"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21229] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21243"
 , "c1link" : "./qc/apps/s_server.c.html#21243"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21243] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21255"
 , "c1link" : "./qc/apps/s_server.c.html#21255"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21255] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21264"
 , "c1link" : "./qc/apps/s_server.c.html#21264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21264] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21277"
 , "c1link" : "./qc/apps/s_server.c.html#21277"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21277] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21284"
 , "c1link" : "./qc/apps/s_server.c.html#21284"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21284] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21286"
 , "c1link" : "./qc/apps/s_server.c.html#21286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21286] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21297"
 , "c1link" : "./qc/apps/s_server.c.html#21297"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21297] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21311"
 , "c1link" : "./qc/apps/s_server.c.html#21311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21311] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21315"
 , "c1link" : "./qc/apps/s_server.c.html#21315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21315] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21353"
 , "c1link" : "./qc/apps/s_server.c.html#21353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21353] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21376"
 , "c1link" : "./qc/apps/s_server.c.html#21376"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21376] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21390"
 , "c1link" : "./qc/apps/s_server.c.html#21390"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21390] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21395"
 , "c1link" : "./qc/apps/s_server.c.html#21395"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21395] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21400"
 , "c1link" : "./qc/apps/s_server.c.html#21400"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21400] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21450"
 , "c1link" : "./qc/apps/s_server.c.html#21450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21450] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21455"
 , "c1link" : "./qc/apps/s_server.c.html#21455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21455] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21469"
 , "c1link" : "./qc/apps/s_server.c.html#21469"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21469] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21921"
 , "c1link" : "./qc/apps/s_server.c.html#21921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21921] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "22064"
 , "c1link" : "./qc/apps/s_server.c.html#22064"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22064] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22069"
 , "c1link" : "./qc/apps/s_server.c.html#22069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22069] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22094"
 , "c1link" : "./qc/apps/s_server.c.html#22094"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22094] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22099"
 , "c1link" : "./qc/apps/s_server.c.html#22099"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22099] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22102"
 , "c1link" : "./qc/apps/s_server.c.html#22102"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22102] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22109"
 , "c1link" : "./qc/apps/s_server.c.html#22109"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22109] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22114"
 , "c1link" : "./qc/apps/s_server.c.html#22114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[22114] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22116"
 , "c1link" : "./qc/apps/s_server.c.html#22116"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22116] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22120"
 , "c1link" : "./qc/apps/s_server.c.html#22120"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22120] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22148"
 , "c1link" : "./qc/apps/s_server.c.html#22148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22148] The expression 1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22148"
 , "c1link" : "./qc/apps/s_server.c.html#22148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22148] The expression 1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "22176"
 , "c1link" : "./qc/apps/s_server.c.html#22176"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22176] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22211"
 , "c1link" : "./qc/apps/s_server.c.html#22211"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22211] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22242"
 , "c1link" : "./qc/apps/s_server.c.html#22242"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22242] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22269"
 , "c1link" : "./qc/apps/s_server.c.html#22269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22269] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22277"
 , "c1link" : "./qc/apps/s_server.c.html#22277"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22277] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22290"
 , "c1link" : "./qc/apps/s_server.c.html#22290"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22290] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22303"
 , "c1link" : "./qc/apps/s_server.c.html#22303"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22303] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22310"
 , "c1link" : "./qc/apps/s_server.c.html#22310"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22310] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22323"
 , "c1link" : "./qc/apps/s_server.c.html#22323"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22323] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22330"
 , "c1link" : "./qc/apps/s_server.c.html#22330"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22330] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22376"
 , "c1link" : "./qc/apps/s_server.c.html#22376"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22376] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22396"
 , "c1link" : "./qc/apps/s_server.c.html#22396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22396] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22401"
 , "c1link" : "./qc/apps/s_server.c.html#22401"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22401] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22406"
 , "c1link" : "./qc/apps/s_server.c.html#22406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22406] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22433"
 , "c1link" : "./qc/apps/s_server.c.html#22433"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22433] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22454"
 , "c1link" : "./qc/apps/s_server.c.html#22454"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22454] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22486"
 , "c1link" : "./qc/apps/s_server.c.html#22486"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22486] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22523"
 , "c1link" : "./qc/apps/s_server.c.html#22523"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22523] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22523"
 , "c1link" : "./qc/apps/s_server.c.html#22523"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22523] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22540"
 , "c1link" : "./qc/apps/s_server.c.html#22540"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22540] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22552"
 , "c1link" : "./qc/apps/s_server.c.html#22552"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22552] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22679"
 , "c1link" : "./qc/apps/s_server.c.html#22679"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22679] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22683"
 , "c1link" : "./qc/apps/s_server.c.html#22683"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22683] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22738"
 , "c1link" : "./qc/apps/s_server.c.html#22738"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22738] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22745"
 , "c1link" : "./qc/apps/s_server.c.html#22745"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22745] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22773"
 , "c1link" : "./qc/apps/s_server.c.html#22773"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22773] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22783"
 , "c1link" : "./qc/apps/s_server.c.html#22783"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22783] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22793"
 , "c1link" : "./qc/apps/s_server.c.html#22793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22793] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22802"
 , "c1link" : "./qc/apps/s_server.c.html#22802"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22802] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22812"
 , "c1link" : "./qc/apps/s_server.c.html#22812"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22812] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22827"
 , "c1link" : "./qc/apps/s_server.c.html#22827"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22827] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22833"
 , "c1link" : "./qc/apps/s_server.c.html#22833"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22833] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22838"
 , "c1link" : "./qc/apps/s_server.c.html#22838"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22838] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22856"
 , "c1link" : "./qc/apps/s_server.c.html#22856"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22856] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22866"
 , "c1link" : "./qc/apps/s_server.c.html#22866"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22866] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22875"
 , "c1link" : "./qc/apps/s_server.c.html#22875"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22875] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22887"
 , "c1link" : "./qc/apps/s_server.c.html#22887"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22887] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22902"
 , "c1link" : "./qc/apps/s_server.c.html#22902"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22902] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22912"
 , "c1link" : "./qc/apps/s_server.c.html#22912"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22912] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22916"
 , "c1link" : "./qc/apps/s_server.c.html#22916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22916] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22923"
 , "c1link" : "./qc/apps/s_server.c.html#22923"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22923] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22931"
 , "c1link" : "./qc/apps/s_server.c.html#22931"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22931] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22938"
 , "c1link" : "./qc/apps/s_server.c.html#22938"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22938] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22953"
 , "c1link" : "./qc/apps/s_server.c.html#22953"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22953] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22963"
 , "c1link" : "./qc/apps/s_server.c.html#22963"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22963] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22987"
 , "c1link" : "./qc/apps/s_server.c.html#22987"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22987] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22998"
 , "c1link" : "./qc/apps/s_server.c.html#22998"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22998] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23011"
 , "c1link" : "./qc/apps/s_server.c.html#23011"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23011] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23038"
 , "c1link" : "./qc/apps/s_server.c.html#23038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23038] The expression nocert applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23078"
 , "c1link" : "./qc/apps/s_server.c.html#23078"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23078] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23087"
 , "c1link" : "./qc/apps/s_server.c.html#23087"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23087] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23091"
 , "c1link" : "./qc/apps/s_server.c.html#23091"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23091] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23093"
 , "c1link" : "./qc/apps/s_server.c.html#23093"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23093] The expression ssl_config applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23098"
 , "c1link" : "./qc/apps/s_server.c.html#23098"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23098] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23112"
 , "c1link" : "./qc/apps/s_server.c.html#23112"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23112] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23119"
 , "c1link" : "./qc/apps/s_server.c.html#23119"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23119] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23121"
 , "c1link" : "./qc/apps/s_server.c.html#23121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23121] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23128"
 , "c1link" : "./qc/apps/s_server.c.html#23128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23128] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23139"
 , "c1link" : "./qc/apps/s_server.c.html#23139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23139] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23141"
 , "c1link" : "./qc/apps/s_server.c.html#23141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23141] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23147"
 , "c1link" : "./qc/apps/s_server.c.html#23147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23147] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23156"
 , "c1link" : "./qc/apps/s_server.c.html#23156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23156] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23164"
 , "c1link" : "./qc/apps/s_server.c.html#23164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23164] The expression no_ca_names applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23168"
 , "c1link" : "./qc/apps/s_server.c.html#23168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23168] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23179"
 , "c1link" : "./qc/apps/s_server.c.html#23179"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23179] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23190"
 , "c1link" : "./qc/apps/s_server.c.html#23190"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23190] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23200"
 , "c1link" : "./qc/apps/s_server.c.html#23200"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23200] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23216"
 , "c1link" : "./qc/apps/s_server.c.html#23216"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23216] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23224"
 , "c1link" : "./qc/apps/s_server.c.html#23224"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23224] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23229"
 , "c1link" : "./qc/apps/s_server.c.html#23229"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23229] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23240"
 , "c1link" : "./qc/apps/s_server.c.html#23240"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23240] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23243"
 , "c1link" : "./qc/apps/s_server.c.html#23243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23243] The expression s_cert2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23251"
 , "c1link" : "./qc/apps/s_server.c.html#23251"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23251] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23262"
 , "c1link" : "./qc/apps/s_server.c.html#23262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23262] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23265"
 , "c1link" : "./qc/apps/s_server.c.html#23265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23265] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23272"
 , "c1link" : "./qc/apps/s_server.c.html#23272"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23272] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23283"
 , "c1link" : "./qc/apps/s_server.c.html#23283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23283] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23286"
 , "c1link" : "./qc/apps/s_server.c.html#23286"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23286] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23292"
 , "c1link" : "./qc/apps/s_server.c.html#23292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23292] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23301"
 , "c1link" : "./qc/apps/s_server.c.html#23301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23301] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23311"
 , "c1link" : "./qc/apps/s_server.c.html#23311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23311] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23316"
 , "c1link" : "./qc/apps/s_server.c.html#23316"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23316] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23321"
 , "c1link" : "./qc/apps/s_server.c.html#23321"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23321] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23331"
 , "c1link" : "./qc/apps/s_server.c.html#23331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23331] The expression  ! no_dhe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23383"
 , "c1link" : "./qc/apps/s_server.c.html#23383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23383] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23391"
 , "c1link" : "./qc/apps/s_server.c.html#23391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23391] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23438"
 , "c1link" : "./qc/apps/s_server.c.html#23438"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23438] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23450"
 , "c1link" : "./qc/apps/s_server.c.html#23450"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23450] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23459"
 , "c1link" : "./qc/apps/s_server.c.html#23459"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23459] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23472"
 , "c1link" : "./qc/apps/s_server.c.html#23472"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23472] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23480"
 , "c1link" : "./qc/apps/s_server.c.html#23480"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23480] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23483"
 , "c1link" : "./qc/apps/s_server.c.html#23483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23483] The expression no_resume_ephemeral applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23501"
 , "c1link" : "./qc/apps/s_server.c.html#23501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23501] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23517"
 , "c1link" : "./qc/apps/s_server.c.html#23517"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23517] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23536"
 , "c1link" : "./qc/apps/s_server.c.html#23536"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23536] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23555"
 , "c1link" : "./qc/apps/s_server.c.html#23555"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23555] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23577"
 , "c1link" : "./qc/apps/s_server.c.html#23577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23577] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23599"
 , "c1link" : "./qc/apps/s_server.c.html#23599"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23599] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23616"
 , "c1link" : "./qc/apps/s_server.c.html#23616"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23616] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23626"
 , "c1link" : "./qc/apps/s_server.c.html#23626"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23626] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23630"
 , "c1link" : "./qc/apps/s_server.c.html#23630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23630] The expression s_tlsextstatus applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23633"
 , "c1link" : "./qc/apps/s_server.c.html#23633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23633] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23640"
 , "c1link" : "./qc/apps/s_server.c.html#23640"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23640] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23647"
 , "c1link" : "./qc/apps/s_server.c.html#23647"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23647] The expression rev applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23649"
 , "c1link" : "./qc/apps/s_server.c.html#23649"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23649] The expression www applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23837"
 , "c1link" : "./qc/apps/s_server.c.html#23837"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23837] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23840"
 , "c1link" : "./qc/apps/s_server.c.html#23840"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23840] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23851"
 , "c1link" : "./qc/apps/s_server.c.html#23851"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23851] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23854"
 , "c1link" : "./qc/apps/s_server.c.html#23854"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23854] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23868"
 , "c1link" : "./qc/apps/s_server.c.html#23868"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23868] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23874"
 , "c1link" : "./qc/apps/s_server.c.html#23874"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23874] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23877"
 , "c1link" : "./qc/apps/s_server.c.html#23877"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23877] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23885"
 , "c1link" : "./qc/apps/s_server.c.html#23885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23885] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23895"
 , "c1link" : "./qc/apps/s_server.c.html#23895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23895] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23909"
 , "c1link" : "./qc/apps/s_server.c.html#23909"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23909] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23920"
 , "c1link" : "./qc/apps/s_server.c.html#23920"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23920] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23946"
 , "c1link" : "./qc/apps/s_server.c.html#23946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23946] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23949"
 , "c1link" : "./qc/apps/s_server.c.html#23949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23949] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23960"
 , "c1link" : "./qc/apps/s_server.c.html#23960"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23960] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23964"
 , "c1link" : "./qc/apps/s_server.c.html#23964"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23964] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23974"
 , "c1link" : "./qc/apps/s_server.c.html#23974"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23974] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23979"
 , "c1link" : "./qc/apps/s_server.c.html#23979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23979] The expression early_data applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23998"
 , "c1link" : "./qc/apps/s_server.c.html#23998"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23998] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24002"
 , "c1link" : "./qc/apps/s_server.c.html#24002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24002] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24014"
 , "c1link" : "./qc/apps/s_server.c.html#24014"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24014] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24038"
 , "c1link" : "./qc/apps/s_server.c.html#24038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24038] The expression  ! read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24041"
 , "c1link" : "./qc/apps/s_server.c.html#24041"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24041] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24041"
 , "c1link" : "./qc/apps/s_server.c.html#24041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24041] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24045"
 , "c1link" : "./qc/apps/s_server.c.html#24045"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24045] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24045"
 , "c1link" : "./qc/apps/s_server.c.html#24045"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24045] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24051"
 , "c1link" : "./qc/apps/s_server.c.html#24051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24051] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24051"
 , "c1link" : "./qc/apps/s_server.c.html#24051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24051] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24069"
 , "c1link" : "./qc/apps/s_server.c.html#24069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24069] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24069"
 , "c1link" : "./qc/apps/s_server.c.html#24069"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24069] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24151"
 , "c1link" : "./qc/apps/s_server.c.html#24151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24151] The expression read_from_terminal applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24152"
 , "c1link" : "./qc/apps/s_server.c.html#24152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24152] The expression s_crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24189"
 , "c1link" : "./qc/apps/s_server.c.html#24189"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24189] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24203"
 , "c1link" : "./qc/apps/s_server.c.html#24203"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24203] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24264"
 , "c1link" : "./qc/apps/s_server.c.html#24264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24264] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24313"
 , "c1link" : "./qc/apps/s_server.c.html#24313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24313] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24323"
 , "c1link" : "./qc/apps/s_server.c.html#24323"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24323] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24333"
 , "c1link" : "./qc/apps/s_server.c.html#24333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24333] The expression read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24345"
 , "c1link" : "./qc/apps/s_server.c.html#24345"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24345] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24348"
 , "c1link" : "./qc/apps/s_server.c.html#24348"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24348] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24374"
 , "c1link" : "./qc/apps/s_server.c.html#24374"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24374] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "24408"
 , "c1link" : "./qc/apps/s_server.c.html#24408"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24408] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24417"
 , "c1link" : "./qc/apps/s_server.c.html#24417"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24417] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24468"
 , "c1link" : "./qc/apps/s_server.c.html#24468"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24468] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24469"
 , "c1link" : "./qc/apps/s_server.c.html#24469"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24469] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24485"
 , "c1link" : "./qc/apps/s_server.c.html#24485"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24485] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24487"
 , "c1link" : "./qc/apps/s_server.c.html#24487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24487] The expression wbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24562"
 , "c1link" : "./qc/apps/s_server.c.html#24562"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24562] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24565"
 , "c1link" : "./qc/apps/s_server.c.html#24565"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24565] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24568"
 , "c1link" : "./qc/apps/s_server.c.html#24568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24568] The expression s_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24610"
 , "c1link" : "./qc/apps/s_server.c.html#24610"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24610] The expression next_proto_neg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24621"
 , "c1link" : "./qc/apps/s_server.c.html#24621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24621] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24712"
 , "c1link" : "./qc/apps/s_server.c.html#24712"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24712] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24714"
 , "c1link" : "./qc/apps/s_server.c.html#24714"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24714] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24717"
 , "c1link" : "./qc/apps/s_server.c.html#24717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24717] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24723"
 , "c1link" : "./qc/apps/s_server.c.html#24723"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24723] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24725"
 , "c1link" : "./qc/apps/s_server.c.html#24725"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24725] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24730"
 , "c1link" : "./qc/apps/s_server.c.html#24730"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24730] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24732"
 , "c1link" : "./qc/apps/s_server.c.html#24732"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24732] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24745"
 , "c1link" : "./qc/apps/s_server.c.html#24745"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24745] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24749"
 , "c1link" : "./qc/apps/s_server.c.html#24749"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24749] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24765"
 , "c1link" : "./qc/apps/s_server.c.html#24765"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24765] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24769"
 , "c1link" : "./qc/apps/s_server.c.html#24769"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24769] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24783"
 , "c1link" : "./qc/apps/s_server.c.html#24783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24783] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24785"
 , "c1link" : "./qc/apps/s_server.c.html#24785"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24785] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24805"
 , "c1link" : "./qc/apps/s_server.c.html#24805"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24805] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24837"
 , "c1link" : "./qc/apps/s_server.c.html#24837"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24837] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24842"
 , "c1link" : "./qc/apps/s_server.c.html#24842"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24842] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24842"
 , "c1link" : "./qc/apps/s_server.c.html#24842"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24842] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24846"
 , "c1link" : "./qc/apps/s_server.c.html#24846"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24846] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24846"
 , "c1link" : "./qc/apps/s_server.c.html#24846"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24846] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24851"
 , "c1link" : "./qc/apps/s_server.c.html#24851"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24851] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24851"
 , "c1link" : "./qc/apps/s_server.c.html#24851"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24851] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24899"
 , "c1link" : "./qc/apps/s_server.c.html#24899"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24899] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24968"
 , "c1link" : "./qc/apps/s_server.c.html#24968"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24968] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24969"
 , "c1link" : "./qc/apps/s_server.c.html#24969"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24969] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25061"
 , "c1link" : "./qc/apps/s_server.c.html#25061"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25061] The expression dot applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25081"
 , "c1link" : "./qc/apps/s_server.c.html#25081"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[25081] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "25092"
 , "c1link" : "./qc/apps/s_server.c.html#25092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25092] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25123"
 , "c1link" : "./qc/apps/s_server.c.html#25123"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25123] goto statement jump to write_error"
}} 
,
{ "ligne" : {
   "c1" : "25185"
 , "c1link" : "./qc/apps/s_server.c.html#25185"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25185] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25189"
 , "c1link" : "./qc/apps/s_server.c.html#25189"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25189] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25191"
 , "c1link" : "./qc/apps/s_server.c.html#25191"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[25191] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "25196"
 , "c1link" : "./qc/apps/s_server.c.html#25196"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25196] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25198"
 , "c1link" : "./qc/apps/s_server.c.html#25198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25198] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25211"
 , "c1link" : "./qc/apps/s_server.c.html#25211"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25211] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25225"
 , "c1link" : "./qc/apps/s_server.c.html#25225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25225] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25229"
 , "c1link" : "./qc/apps/s_server.c.html#25229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25229] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25250"
 , "c1link" : "./qc/apps/s_server.c.html#25250"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25250] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25270"
 , "c1link" : "./qc/apps/s_server.c.html#25270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25270] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25272"
 , "c1link" : "./qc/apps/s_server.c.html#25272"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25272] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25293"
 , "c1link" : "./qc/apps/s_server.c.html#25293"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25293] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25303"
 , "c1link" : "./qc/apps/s_server.c.html#25303"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25303] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25321"
 , "c1link" : "./qc/apps/s_server.c.html#25321"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25321] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25381"
 , "c1link" : "./qc/apps/s_server.c.html#25381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25381] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "25456"
 , "c1link" : "./qc/apps/s_server.c.html#25456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25456] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "25461"
 , "c1link" : "./qc/apps/s_server.c.html#25461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25461] The expression prev applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
