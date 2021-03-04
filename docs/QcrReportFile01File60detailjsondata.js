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
   "c1" : "20868"
 , "c1link" : "./qc/apps/s_server.c.html#20868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20868] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20870"
 , "c1link" : "./qc/apps/s_server.c.html#20870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20870] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20878"
 , "c1link" : "./qc/apps/s_server.c.html#20878"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20878] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20880"
 , "c1link" : "./qc/apps/s_server.c.html#20880"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20880] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20889"
 , "c1link" : "./qc/apps/s_server.c.html#20889"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20889] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20915"
 , "c1link" : "./qc/apps/s_server.c.html#20915"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20915] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20919"
 , "c1link" : "./qc/apps/s_server.c.html#20919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20919] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20943"
 , "c1link" : "./qc/apps/s_server.c.html#20943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20943] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21043"
 , "c1link" : "./qc/apps/s_server.c.html#21043"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21043] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21170"
 , "c1link" : "./qc/apps/s_server.c.html#21170"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21170] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21183"
 , "c1link" : "./qc/apps/s_server.c.html#21183"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21183] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21197"
 , "c1link" : "./qc/apps/s_server.c.html#21197"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21197] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21209"
 , "c1link" : "./qc/apps/s_server.c.html#21209"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21209] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21218"
 , "c1link" : "./qc/apps/s_server.c.html#21218"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21218] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21231"
 , "c1link" : "./qc/apps/s_server.c.html#21231"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21231] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21238"
 , "c1link" : "./qc/apps/s_server.c.html#21238"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21238] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21240"
 , "c1link" : "./qc/apps/s_server.c.html#21240"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21240] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21251"
 , "c1link" : "./qc/apps/s_server.c.html#21251"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21251] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21265"
 , "c1link" : "./qc/apps/s_server.c.html#21265"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21265] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21269"
 , "c1link" : "./qc/apps/s_server.c.html#21269"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21269] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21307"
 , "c1link" : "./qc/apps/s_server.c.html#21307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21307] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21330"
 , "c1link" : "./qc/apps/s_server.c.html#21330"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21330] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21344"
 , "c1link" : "./qc/apps/s_server.c.html#21344"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21344] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21349"
 , "c1link" : "./qc/apps/s_server.c.html#21349"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21349] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21354"
 , "c1link" : "./qc/apps/s_server.c.html#21354"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21354] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21404"
 , "c1link" : "./qc/apps/s_server.c.html#21404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21404] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21409"
 , "c1link" : "./qc/apps/s_server.c.html#21409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21409] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21423"
 , "c1link" : "./qc/apps/s_server.c.html#21423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21423] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21875"
 , "c1link" : "./qc/apps/s_server.c.html#21875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21875] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "22018"
 , "c1link" : "./qc/apps/s_server.c.html#22018"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22018] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22023"
 , "c1link" : "./qc/apps/s_server.c.html#22023"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22023] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22048"
 , "c1link" : "./qc/apps/s_server.c.html#22048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22048] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22053"
 , "c1link" : "./qc/apps/s_server.c.html#22053"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22053] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22056"
 , "c1link" : "./qc/apps/s_server.c.html#22056"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22056] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22063"
 , "c1link" : "./qc/apps/s_server.c.html#22063"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22063] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22068"
 , "c1link" : "./qc/apps/s_server.c.html#22068"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[22068] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22070"
 , "c1link" : "./qc/apps/s_server.c.html#22070"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22070] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22074"
 , "c1link" : "./qc/apps/s_server.c.html#22074"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22074] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22102"
 , "c1link" : "./qc/apps/s_server.c.html#22102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22102] The expression 1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22102"
 , "c1link" : "./qc/apps/s_server.c.html#22102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22102] The expression 1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "22130"
 , "c1link" : "./qc/apps/s_server.c.html#22130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22130] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22165"
 , "c1link" : "./qc/apps/s_server.c.html#22165"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22165] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22196"
 , "c1link" : "./qc/apps/s_server.c.html#22196"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22196] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22223"
 , "c1link" : "./qc/apps/s_server.c.html#22223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22223] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22231"
 , "c1link" : "./qc/apps/s_server.c.html#22231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22231] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22244"
 , "c1link" : "./qc/apps/s_server.c.html#22244"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22244] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22257"
 , "c1link" : "./qc/apps/s_server.c.html#22257"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22257] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22264"
 , "c1link" : "./qc/apps/s_server.c.html#22264"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22264] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22277"
 , "c1link" : "./qc/apps/s_server.c.html#22277"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22277] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22284"
 , "c1link" : "./qc/apps/s_server.c.html#22284"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22284] goto statement jump to opthelp"
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
   "c1" : "22350"
 , "c1link" : "./qc/apps/s_server.c.html#22350"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22350] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22355"
 , "c1link" : "./qc/apps/s_server.c.html#22355"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22355] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22360"
 , "c1link" : "./qc/apps/s_server.c.html#22360"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22360] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22387"
 , "c1link" : "./qc/apps/s_server.c.html#22387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22387] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22408"
 , "c1link" : "./qc/apps/s_server.c.html#22408"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22408] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22440"
 , "c1link" : "./qc/apps/s_server.c.html#22440"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22440] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22477"
 , "c1link" : "./qc/apps/s_server.c.html#22477"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22477] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22477"
 , "c1link" : "./qc/apps/s_server.c.html#22477"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22477] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22494"
 , "c1link" : "./qc/apps/s_server.c.html#22494"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22494] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22506"
 , "c1link" : "./qc/apps/s_server.c.html#22506"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22506] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22633"
 , "c1link" : "./qc/apps/s_server.c.html#22633"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22633] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22637"
 , "c1link" : "./qc/apps/s_server.c.html#22637"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22637] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22692"
 , "c1link" : "./qc/apps/s_server.c.html#22692"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22692] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22699"
 , "c1link" : "./qc/apps/s_server.c.html#22699"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22699] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22727"
 , "c1link" : "./qc/apps/s_server.c.html#22727"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22727] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22737"
 , "c1link" : "./qc/apps/s_server.c.html#22737"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22737] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22747"
 , "c1link" : "./qc/apps/s_server.c.html#22747"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22747] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22756"
 , "c1link" : "./qc/apps/s_server.c.html#22756"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22756] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22766"
 , "c1link" : "./qc/apps/s_server.c.html#22766"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22766] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22781"
 , "c1link" : "./qc/apps/s_server.c.html#22781"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22781] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22787"
 , "c1link" : "./qc/apps/s_server.c.html#22787"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22787] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22792"
 , "c1link" : "./qc/apps/s_server.c.html#22792"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22792] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22810"
 , "c1link" : "./qc/apps/s_server.c.html#22810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22810] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22820"
 , "c1link" : "./qc/apps/s_server.c.html#22820"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22820] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22829"
 , "c1link" : "./qc/apps/s_server.c.html#22829"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22829] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22841"
 , "c1link" : "./qc/apps/s_server.c.html#22841"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22841] goto statement jump to end"
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
   "c1" : "22870"
 , "c1link" : "./qc/apps/s_server.c.html#22870"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22870] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22877"
 , "c1link" : "./qc/apps/s_server.c.html#22877"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22877] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22885"
 , "c1link" : "./qc/apps/s_server.c.html#22885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22885] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22892"
 , "c1link" : "./qc/apps/s_server.c.html#22892"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22892] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22907"
 , "c1link" : "./qc/apps/s_server.c.html#22907"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22907] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22917"
 , "c1link" : "./qc/apps/s_server.c.html#22917"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22917] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22941"
 , "c1link" : "./qc/apps/s_server.c.html#22941"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22941] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22952"
 , "c1link" : "./qc/apps/s_server.c.html#22952"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22952] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22965"
 , "c1link" : "./qc/apps/s_server.c.html#22965"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22965] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22992"
 , "c1link" : "./qc/apps/s_server.c.html#22992"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22992] The expression nocert applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23032"
 , "c1link" : "./qc/apps/s_server.c.html#23032"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23032] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23041"
 , "c1link" : "./qc/apps/s_server.c.html#23041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23041] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23045"
 , "c1link" : "./qc/apps/s_server.c.html#23045"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23045] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23047"
 , "c1link" : "./qc/apps/s_server.c.html#23047"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23047] The expression ssl_config applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23052"
 , "c1link" : "./qc/apps/s_server.c.html#23052"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23052] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23066"
 , "c1link" : "./qc/apps/s_server.c.html#23066"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23066] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23073"
 , "c1link" : "./qc/apps/s_server.c.html#23073"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23073] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23075"
 , "c1link" : "./qc/apps/s_server.c.html#23075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23075] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23082"
 , "c1link" : "./qc/apps/s_server.c.html#23082"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23082] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23093"
 , "c1link" : "./qc/apps/s_server.c.html#23093"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23093] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23095"
 , "c1link" : "./qc/apps/s_server.c.html#23095"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23095] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23101"
 , "c1link" : "./qc/apps/s_server.c.html#23101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23101] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23110"
 , "c1link" : "./qc/apps/s_server.c.html#23110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23110] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23118"
 , "c1link" : "./qc/apps/s_server.c.html#23118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23118] The expression no_ca_names applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23122"
 , "c1link" : "./qc/apps/s_server.c.html#23122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23122] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23133"
 , "c1link" : "./qc/apps/s_server.c.html#23133"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23133] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23144"
 , "c1link" : "./qc/apps/s_server.c.html#23144"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23144] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23154"
 , "c1link" : "./qc/apps/s_server.c.html#23154"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23154] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23170"
 , "c1link" : "./qc/apps/s_server.c.html#23170"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23170] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23178"
 , "c1link" : "./qc/apps/s_server.c.html#23178"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23178] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23183"
 , "c1link" : "./qc/apps/s_server.c.html#23183"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23183] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23194"
 , "c1link" : "./qc/apps/s_server.c.html#23194"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23194] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23197"
 , "c1link" : "./qc/apps/s_server.c.html#23197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23197] The expression s_cert2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23205"
 , "c1link" : "./qc/apps/s_server.c.html#23205"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23205] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23216"
 , "c1link" : "./qc/apps/s_server.c.html#23216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23216] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23219"
 , "c1link" : "./qc/apps/s_server.c.html#23219"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23219] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23226"
 , "c1link" : "./qc/apps/s_server.c.html#23226"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23226] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23237"
 , "c1link" : "./qc/apps/s_server.c.html#23237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23237] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23240"
 , "c1link" : "./qc/apps/s_server.c.html#23240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23240] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23246"
 , "c1link" : "./qc/apps/s_server.c.html#23246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23246] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23255"
 , "c1link" : "./qc/apps/s_server.c.html#23255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23255] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23265"
 , "c1link" : "./qc/apps/s_server.c.html#23265"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23265] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23270"
 , "c1link" : "./qc/apps/s_server.c.html#23270"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23270] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23275"
 , "c1link" : "./qc/apps/s_server.c.html#23275"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23275] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23285"
 , "c1link" : "./qc/apps/s_server.c.html#23285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23285] The expression  ! no_dhe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23337"
 , "c1link" : "./qc/apps/s_server.c.html#23337"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23337] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23345"
 , "c1link" : "./qc/apps/s_server.c.html#23345"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23345] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23392"
 , "c1link" : "./qc/apps/s_server.c.html#23392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23392] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23404"
 , "c1link" : "./qc/apps/s_server.c.html#23404"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23404] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23413"
 , "c1link" : "./qc/apps/s_server.c.html#23413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23413] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23426"
 , "c1link" : "./qc/apps/s_server.c.html#23426"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23426] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23434"
 , "c1link" : "./qc/apps/s_server.c.html#23434"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23434] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23437"
 , "c1link" : "./qc/apps/s_server.c.html#23437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23437] The expression no_resume_ephemeral applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23455"
 , "c1link" : "./qc/apps/s_server.c.html#23455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23455] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23471"
 , "c1link" : "./qc/apps/s_server.c.html#23471"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23471] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23490"
 , "c1link" : "./qc/apps/s_server.c.html#23490"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23490] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23509"
 , "c1link" : "./qc/apps/s_server.c.html#23509"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23509] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23531"
 , "c1link" : "./qc/apps/s_server.c.html#23531"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23531] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23553"
 , "c1link" : "./qc/apps/s_server.c.html#23553"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23553] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23570"
 , "c1link" : "./qc/apps/s_server.c.html#23570"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23570] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23580"
 , "c1link" : "./qc/apps/s_server.c.html#23580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23580] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23584"
 , "c1link" : "./qc/apps/s_server.c.html#23584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23584] The expression s_tlsextstatus applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23587"
 , "c1link" : "./qc/apps/s_server.c.html#23587"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23587] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23594"
 , "c1link" : "./qc/apps/s_server.c.html#23594"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23594] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23601"
 , "c1link" : "./qc/apps/s_server.c.html#23601"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23601] The expression rev applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23603"
 , "c1link" : "./qc/apps/s_server.c.html#23603"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23603] The expression www applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23791"
 , "c1link" : "./qc/apps/s_server.c.html#23791"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23791] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23794"
 , "c1link" : "./qc/apps/s_server.c.html#23794"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23794] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23805"
 , "c1link" : "./qc/apps/s_server.c.html#23805"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23805] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23808"
 , "c1link" : "./qc/apps/s_server.c.html#23808"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23808] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23822"
 , "c1link" : "./qc/apps/s_server.c.html#23822"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23822] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23828"
 , "c1link" : "./qc/apps/s_server.c.html#23828"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23828] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23831"
 , "c1link" : "./qc/apps/s_server.c.html#23831"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23831] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23839"
 , "c1link" : "./qc/apps/s_server.c.html#23839"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23839] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23849"
 , "c1link" : "./qc/apps/s_server.c.html#23849"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23849] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23863"
 , "c1link" : "./qc/apps/s_server.c.html#23863"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23863] goto statement jump to err"
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
   "c1" : "23900"
 , "c1link" : "./qc/apps/s_server.c.html#23900"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23900] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23903"
 , "c1link" : "./qc/apps/s_server.c.html#23903"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23903] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23914"
 , "c1link" : "./qc/apps/s_server.c.html#23914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23914] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23918"
 , "c1link" : "./qc/apps/s_server.c.html#23918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23918] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23928"
 , "c1link" : "./qc/apps/s_server.c.html#23928"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23928] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23933"
 , "c1link" : "./qc/apps/s_server.c.html#23933"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23933] The expression early_data applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23952"
 , "c1link" : "./qc/apps/s_server.c.html#23952"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23952] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23956"
 , "c1link" : "./qc/apps/s_server.c.html#23956"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23956] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23968"
 , "c1link" : "./qc/apps/s_server.c.html#23968"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23968] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23992"
 , "c1link" : "./qc/apps/s_server.c.html#23992"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23992] The expression  ! read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23995"
 , "c1link" : "./qc/apps/s_server.c.html#23995"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23995] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23995"
 , "c1link" : "./qc/apps/s_server.c.html#23995"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23995] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23999"
 , "c1link" : "./qc/apps/s_server.c.html#23999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23999] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23999"
 , "c1link" : "./qc/apps/s_server.c.html#23999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23999] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24005"
 , "c1link" : "./qc/apps/s_server.c.html#24005"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24005] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24005"
 , "c1link" : "./qc/apps/s_server.c.html#24005"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24005] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24023"
 , "c1link" : "./qc/apps/s_server.c.html#24023"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24023] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24023"
 , "c1link" : "./qc/apps/s_server.c.html#24023"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24023] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24105"
 , "c1link" : "./qc/apps/s_server.c.html#24105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24105] The expression read_from_terminal applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24106"
 , "c1link" : "./qc/apps/s_server.c.html#24106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24106] The expression s_crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24143"
 , "c1link" : "./qc/apps/s_server.c.html#24143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24143] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24157"
 , "c1link" : "./qc/apps/s_server.c.html#24157"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24157] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24218"
 , "c1link" : "./qc/apps/s_server.c.html#24218"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24218] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24267"
 , "c1link" : "./qc/apps/s_server.c.html#24267"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24267] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24277"
 , "c1link" : "./qc/apps/s_server.c.html#24277"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24277] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24287"
 , "c1link" : "./qc/apps/s_server.c.html#24287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24287] The expression read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24299"
 , "c1link" : "./qc/apps/s_server.c.html#24299"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24299] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24302"
 , "c1link" : "./qc/apps/s_server.c.html#24302"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24302] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24328"
 , "c1link" : "./qc/apps/s_server.c.html#24328"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24328] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "24362"
 , "c1link" : "./qc/apps/s_server.c.html#24362"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24362] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24371"
 , "c1link" : "./qc/apps/s_server.c.html#24371"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24371] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24422"
 , "c1link" : "./qc/apps/s_server.c.html#24422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24422] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24423"
 , "c1link" : "./qc/apps/s_server.c.html#24423"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24423] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24439"
 , "c1link" : "./qc/apps/s_server.c.html#24439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24439] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24441"
 , "c1link" : "./qc/apps/s_server.c.html#24441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24441] The expression wbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24516"
 , "c1link" : "./qc/apps/s_server.c.html#24516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24516] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24519"
 , "c1link" : "./qc/apps/s_server.c.html#24519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24519] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24522"
 , "c1link" : "./qc/apps/s_server.c.html#24522"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24522] The expression s_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24564"
 , "c1link" : "./qc/apps/s_server.c.html#24564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24564] The expression next_proto_neg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24575"
 , "c1link" : "./qc/apps/s_server.c.html#24575"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24575] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24666"
 , "c1link" : "./qc/apps/s_server.c.html#24666"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24666] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24668"
 , "c1link" : "./qc/apps/s_server.c.html#24668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24668] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24671"
 , "c1link" : "./qc/apps/s_server.c.html#24671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24671] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24677"
 , "c1link" : "./qc/apps/s_server.c.html#24677"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24677] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24679"
 , "c1link" : "./qc/apps/s_server.c.html#24679"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24679] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24684"
 , "c1link" : "./qc/apps/s_server.c.html#24684"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24684] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24686"
 , "c1link" : "./qc/apps/s_server.c.html#24686"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24686] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24699"
 , "c1link" : "./qc/apps/s_server.c.html#24699"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24699] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24703"
 , "c1link" : "./qc/apps/s_server.c.html#24703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24703] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24719"
 , "c1link" : "./qc/apps/s_server.c.html#24719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24719] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24723"
 , "c1link" : "./qc/apps/s_server.c.html#24723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24723] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24737"
 , "c1link" : "./qc/apps/s_server.c.html#24737"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24737] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24739"
 , "c1link" : "./qc/apps/s_server.c.html#24739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24739] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24759"
 , "c1link" : "./qc/apps/s_server.c.html#24759"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24759] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24791"
 , "c1link" : "./qc/apps/s_server.c.html#24791"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24791] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24796"
 , "c1link" : "./qc/apps/s_server.c.html#24796"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24796] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24796"
 , "c1link" : "./qc/apps/s_server.c.html#24796"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24796] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24800"
 , "c1link" : "./qc/apps/s_server.c.html#24800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24800] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24800"
 , "c1link" : "./qc/apps/s_server.c.html#24800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24800] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24805"
 , "c1link" : "./qc/apps/s_server.c.html#24805"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24805] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24805"
 , "c1link" : "./qc/apps/s_server.c.html#24805"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24805] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24853"
 , "c1link" : "./qc/apps/s_server.c.html#24853"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24853] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24922"
 , "c1link" : "./qc/apps/s_server.c.html#24922"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24922] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24923"
 , "c1link" : "./qc/apps/s_server.c.html#24923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24923] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25015"
 , "c1link" : "./qc/apps/s_server.c.html#25015"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25015] The expression dot applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25035"
 , "c1link" : "./qc/apps/s_server.c.html#25035"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[25035] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "25046"
 , "c1link" : "./qc/apps/s_server.c.html#25046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25046] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25077"
 , "c1link" : "./qc/apps/s_server.c.html#25077"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25077] goto statement jump to write_error"
}} 
,
{ "ligne" : {
   "c1" : "25139"
 , "c1link" : "./qc/apps/s_server.c.html#25139"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25139] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25143"
 , "c1link" : "./qc/apps/s_server.c.html#25143"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25143] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25145"
 , "c1link" : "./qc/apps/s_server.c.html#25145"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[25145] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "25150"
 , "c1link" : "./qc/apps/s_server.c.html#25150"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25150] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25152"
 , "c1link" : "./qc/apps/s_server.c.html#25152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25152] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25165"
 , "c1link" : "./qc/apps/s_server.c.html#25165"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25165] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25179"
 , "c1link" : "./qc/apps/s_server.c.html#25179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25179] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25183"
 , "c1link" : "./qc/apps/s_server.c.html#25183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25183] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25204"
 , "c1link" : "./qc/apps/s_server.c.html#25204"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25204] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25224"
 , "c1link" : "./qc/apps/s_server.c.html#25224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25224] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25226"
 , "c1link" : "./qc/apps/s_server.c.html#25226"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25226] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25247"
 , "c1link" : "./qc/apps/s_server.c.html#25247"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25247] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25257"
 , "c1link" : "./qc/apps/s_server.c.html#25257"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25257] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25275"
 , "c1link" : "./qc/apps/s_server.c.html#25275"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25275] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25335"
 , "c1link" : "./qc/apps/s_server.c.html#25335"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25335] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "25410"
 , "c1link" : "./qc/apps/s_server.c.html#25410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25410] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "25415"
 , "c1link" : "./qc/apps/s_server.c.html#25415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25415] The expression prev applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
