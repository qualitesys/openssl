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
   "c1" : "20863"
 , "c1link" : "./qc/apps/s_server.c.html#20863"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20863] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20865"
 , "c1link" : "./qc/apps/s_server.c.html#20865"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20865] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20873"
 , "c1link" : "./qc/apps/s_server.c.html#20873"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20873] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20875"
 , "c1link" : "./qc/apps/s_server.c.html#20875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20875] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20884"
 , "c1link" : "./qc/apps/s_server.c.html#20884"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20884] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20910"
 , "c1link" : "./qc/apps/s_server.c.html#20910"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20910] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20914"
 , "c1link" : "./qc/apps/s_server.c.html#20914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20914] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20938"
 , "c1link" : "./qc/apps/s_server.c.html#20938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20938] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21038"
 , "c1link" : "./qc/apps/s_server.c.html#21038"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21038] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21153"
 , "c1link" : "./qc/apps/s_server.c.html#21153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21153] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21166"
 , "c1link" : "./qc/apps/s_server.c.html#21166"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21166] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21180"
 , "c1link" : "./qc/apps/s_server.c.html#21180"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21180] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21192"
 , "c1link" : "./qc/apps/s_server.c.html#21192"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21192] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21201"
 , "c1link" : "./qc/apps/s_server.c.html#21201"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21201] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21214"
 , "c1link" : "./qc/apps/s_server.c.html#21214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21214] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21221"
 , "c1link" : "./qc/apps/s_server.c.html#21221"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21221] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21223"
 , "c1link" : "./qc/apps/s_server.c.html#21223"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21223] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21234"
 , "c1link" : "./qc/apps/s_server.c.html#21234"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21234] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21248"
 , "c1link" : "./qc/apps/s_server.c.html#21248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21248] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21252"
 , "c1link" : "./qc/apps/s_server.c.html#21252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21252] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21290"
 , "c1link" : "./qc/apps/s_server.c.html#21290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21290] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21313"
 , "c1link" : "./qc/apps/s_server.c.html#21313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21313] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21327"
 , "c1link" : "./qc/apps/s_server.c.html#21327"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21327] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21332"
 , "c1link" : "./qc/apps/s_server.c.html#21332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21332] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21337"
 , "c1link" : "./qc/apps/s_server.c.html#21337"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21337] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21387"
 , "c1link" : "./qc/apps/s_server.c.html#21387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21387] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21392"
 , "c1link" : "./qc/apps/s_server.c.html#21392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21392] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21406"
 , "c1link" : "./qc/apps/s_server.c.html#21406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21406] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21858"
 , "c1link" : "./qc/apps/s_server.c.html#21858"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21858] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "22001"
 , "c1link" : "./qc/apps/s_server.c.html#22001"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22001] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22006"
 , "c1link" : "./qc/apps/s_server.c.html#22006"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22006] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22031"
 , "c1link" : "./qc/apps/s_server.c.html#22031"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22031] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22036"
 , "c1link" : "./qc/apps/s_server.c.html#22036"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22036] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22039"
 , "c1link" : "./qc/apps/s_server.c.html#22039"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22039] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22046"
 , "c1link" : "./qc/apps/s_server.c.html#22046"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22046] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22051"
 , "c1link" : "./qc/apps/s_server.c.html#22051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[22051] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22053"
 , "c1link" : "./qc/apps/s_server.c.html#22053"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22053] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22057"
 , "c1link" : "./qc/apps/s_server.c.html#22057"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22057] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22085"
 , "c1link" : "./qc/apps/s_server.c.html#22085"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22085] The expression 1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22085"
 , "c1link" : "./qc/apps/s_server.c.html#22085"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22085] The expression 1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "22113"
 , "c1link" : "./qc/apps/s_server.c.html#22113"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22113] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22148"
 , "c1link" : "./qc/apps/s_server.c.html#22148"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22148] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22179"
 , "c1link" : "./qc/apps/s_server.c.html#22179"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22179] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22206"
 , "c1link" : "./qc/apps/s_server.c.html#22206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22206] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22214"
 , "c1link" : "./qc/apps/s_server.c.html#22214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22214] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22227"
 , "c1link" : "./qc/apps/s_server.c.html#22227"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22227] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22240"
 , "c1link" : "./qc/apps/s_server.c.html#22240"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22240] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22247"
 , "c1link" : "./qc/apps/s_server.c.html#22247"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22247] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22260"
 , "c1link" : "./qc/apps/s_server.c.html#22260"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22260] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22267"
 , "c1link" : "./qc/apps/s_server.c.html#22267"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22267] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22313"
 , "c1link" : "./qc/apps/s_server.c.html#22313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22313] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22333"
 , "c1link" : "./qc/apps/s_server.c.html#22333"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22333] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22338"
 , "c1link" : "./qc/apps/s_server.c.html#22338"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22338] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22343"
 , "c1link" : "./qc/apps/s_server.c.html#22343"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22343] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22370"
 , "c1link" : "./qc/apps/s_server.c.html#22370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22370] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22391"
 , "c1link" : "./qc/apps/s_server.c.html#22391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22391] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22411"
 , "c1link" : "./qc/apps/s_server.c.html#22411"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22411] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22448"
 , "c1link" : "./qc/apps/s_server.c.html#22448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22448] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22448"
 , "c1link" : "./qc/apps/s_server.c.html#22448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22448] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22465"
 , "c1link" : "./qc/apps/s_server.c.html#22465"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22465] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22477"
 , "c1link" : "./qc/apps/s_server.c.html#22477"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22477] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22604"
 , "c1link" : "./qc/apps/s_server.c.html#22604"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22604] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22608"
 , "c1link" : "./qc/apps/s_server.c.html#22608"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22608] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22663"
 , "c1link" : "./qc/apps/s_server.c.html#22663"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22663] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22670"
 , "c1link" : "./qc/apps/s_server.c.html#22670"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22670] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22698"
 , "c1link" : "./qc/apps/s_server.c.html#22698"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22698] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22708"
 , "c1link" : "./qc/apps/s_server.c.html#22708"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22708] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22718"
 , "c1link" : "./qc/apps/s_server.c.html#22718"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22718] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22727"
 , "c1link" : "./qc/apps/s_server.c.html#22727"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22727] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22737"
 , "c1link" : "./qc/apps/s_server.c.html#22737"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22737] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22752"
 , "c1link" : "./qc/apps/s_server.c.html#22752"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22752] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22758"
 , "c1link" : "./qc/apps/s_server.c.html#22758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22758] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22763"
 , "c1link" : "./qc/apps/s_server.c.html#22763"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22763] goto statement jump to end"
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
   "c1" : "22791"
 , "c1link" : "./qc/apps/s_server.c.html#22791"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22791] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22800"
 , "c1link" : "./qc/apps/s_server.c.html#22800"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22800] goto statement jump to end"
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
   "c1" : "22837"
 , "c1link" : "./qc/apps/s_server.c.html#22837"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22837] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22841"
 , "c1link" : "./qc/apps/s_server.c.html#22841"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22841] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22848"
 , "c1link" : "./qc/apps/s_server.c.html#22848"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22848] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22856"
 , "c1link" : "./qc/apps/s_server.c.html#22856"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22856] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22863"
 , "c1link" : "./qc/apps/s_server.c.html#22863"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22863] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22878"
 , "c1link" : "./qc/apps/s_server.c.html#22878"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22878] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22888"
 , "c1link" : "./qc/apps/s_server.c.html#22888"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22888] goto statement jump to end"
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
   "c1" : "22923"
 , "c1link" : "./qc/apps/s_server.c.html#22923"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22923] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22936"
 , "c1link" : "./qc/apps/s_server.c.html#22936"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22936] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22963"
 , "c1link" : "./qc/apps/s_server.c.html#22963"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22963] The expression nocert applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23003"
 , "c1link" : "./qc/apps/s_server.c.html#23003"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23003] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23012"
 , "c1link" : "./qc/apps/s_server.c.html#23012"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23012] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23016"
 , "c1link" : "./qc/apps/s_server.c.html#23016"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23016] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23018"
 , "c1link" : "./qc/apps/s_server.c.html#23018"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23018] The expression ssl_config applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23023"
 , "c1link" : "./qc/apps/s_server.c.html#23023"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23023] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23037"
 , "c1link" : "./qc/apps/s_server.c.html#23037"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23037] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23044"
 , "c1link" : "./qc/apps/s_server.c.html#23044"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23044] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23046"
 , "c1link" : "./qc/apps/s_server.c.html#23046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23046] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23053"
 , "c1link" : "./qc/apps/s_server.c.html#23053"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23053] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23064"
 , "c1link" : "./qc/apps/s_server.c.html#23064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23064] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23066"
 , "c1link" : "./qc/apps/s_server.c.html#23066"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23066] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23072"
 , "c1link" : "./qc/apps/s_server.c.html#23072"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23072] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23081"
 , "c1link" : "./qc/apps/s_server.c.html#23081"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23081] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23089"
 , "c1link" : "./qc/apps/s_server.c.html#23089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23089] The expression no_ca_names applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23093"
 , "c1link" : "./qc/apps/s_server.c.html#23093"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23093] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23104"
 , "c1link" : "./qc/apps/s_server.c.html#23104"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23104] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23115"
 , "c1link" : "./qc/apps/s_server.c.html#23115"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23115] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23125"
 , "c1link" : "./qc/apps/s_server.c.html#23125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23125] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23141"
 , "c1link" : "./qc/apps/s_server.c.html#23141"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23141] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23149"
 , "c1link" : "./qc/apps/s_server.c.html#23149"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23149] goto statement jump to end"
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
   "c1" : "23165"
 , "c1link" : "./qc/apps/s_server.c.html#23165"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23165] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23168"
 , "c1link" : "./qc/apps/s_server.c.html#23168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23168] The expression s_cert2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23176"
 , "c1link" : "./qc/apps/s_server.c.html#23176"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23176] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23187"
 , "c1link" : "./qc/apps/s_server.c.html#23187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23187] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23190"
 , "c1link" : "./qc/apps/s_server.c.html#23190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23190] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23197"
 , "c1link" : "./qc/apps/s_server.c.html#23197"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23197] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23208"
 , "c1link" : "./qc/apps/s_server.c.html#23208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23208] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23211"
 , "c1link" : "./qc/apps/s_server.c.html#23211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23211] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23217"
 , "c1link" : "./qc/apps/s_server.c.html#23217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23217] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23226"
 , "c1link" : "./qc/apps/s_server.c.html#23226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23226] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23236"
 , "c1link" : "./qc/apps/s_server.c.html#23236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23236] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23241"
 , "c1link" : "./qc/apps/s_server.c.html#23241"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23241] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23246"
 , "c1link" : "./qc/apps/s_server.c.html#23246"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23246] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23256"
 , "c1link" : "./qc/apps/s_server.c.html#23256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23256] The expression  ! no_dhe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23308"
 , "c1link" : "./qc/apps/s_server.c.html#23308"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23308] goto statement jump to end"
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
   "c1" : "23363"
 , "c1link" : "./qc/apps/s_server.c.html#23363"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23363] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23375"
 , "c1link" : "./qc/apps/s_server.c.html#23375"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23375] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23384"
 , "c1link" : "./qc/apps/s_server.c.html#23384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23384] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23397"
 , "c1link" : "./qc/apps/s_server.c.html#23397"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23397] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23405"
 , "c1link" : "./qc/apps/s_server.c.html#23405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23405] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23408"
 , "c1link" : "./qc/apps/s_server.c.html#23408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23408] The expression no_resume_ephemeral applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23426"
 , "c1link" : "./qc/apps/s_server.c.html#23426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23426] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23442"
 , "c1link" : "./qc/apps/s_server.c.html#23442"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23442] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23461"
 , "c1link" : "./qc/apps/s_server.c.html#23461"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23461] goto statement jump to end"
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
   "c1" : "23502"
 , "c1link" : "./qc/apps/s_server.c.html#23502"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23502] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23524"
 , "c1link" : "./qc/apps/s_server.c.html#23524"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23524] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23541"
 , "c1link" : "./qc/apps/s_server.c.html#23541"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23541] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23551"
 , "c1link" : "./qc/apps/s_server.c.html#23551"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23551] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23555"
 , "c1link" : "./qc/apps/s_server.c.html#23555"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23555] The expression s_tlsextstatus applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23558"
 , "c1link" : "./qc/apps/s_server.c.html#23558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23558] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23565"
 , "c1link" : "./qc/apps/s_server.c.html#23565"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23565] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23572"
 , "c1link" : "./qc/apps/s_server.c.html#23572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23572] The expression rev applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23574"
 , "c1link" : "./qc/apps/s_server.c.html#23574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23574] The expression www applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23762"
 , "c1link" : "./qc/apps/s_server.c.html#23762"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23762] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23765"
 , "c1link" : "./qc/apps/s_server.c.html#23765"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23765] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23776"
 , "c1link" : "./qc/apps/s_server.c.html#23776"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23776] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23779"
 , "c1link" : "./qc/apps/s_server.c.html#23779"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23779] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23793"
 , "c1link" : "./qc/apps/s_server.c.html#23793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23793] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23799"
 , "c1link" : "./qc/apps/s_server.c.html#23799"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23799] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23802"
 , "c1link" : "./qc/apps/s_server.c.html#23802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23802] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23810"
 , "c1link" : "./qc/apps/s_server.c.html#23810"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23810] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23820"
 , "c1link" : "./qc/apps/s_server.c.html#23820"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23820] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23834"
 , "c1link" : "./qc/apps/s_server.c.html#23834"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23834] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23845"
 , "c1link" : "./qc/apps/s_server.c.html#23845"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23845] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23871"
 , "c1link" : "./qc/apps/s_server.c.html#23871"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23871] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23874"
 , "c1link" : "./qc/apps/s_server.c.html#23874"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23874] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23885"
 , "c1link" : "./qc/apps/s_server.c.html#23885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23885] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23889"
 , "c1link" : "./qc/apps/s_server.c.html#23889"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23889] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23899"
 , "c1link" : "./qc/apps/s_server.c.html#23899"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23899] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23904"
 , "c1link" : "./qc/apps/s_server.c.html#23904"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23904] The expression early_data applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23923"
 , "c1link" : "./qc/apps/s_server.c.html#23923"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23923] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23927"
 , "c1link" : "./qc/apps/s_server.c.html#23927"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23927] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23939"
 , "c1link" : "./qc/apps/s_server.c.html#23939"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23939] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23963"
 , "c1link" : "./qc/apps/s_server.c.html#23963"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23963] The expression  ! read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23966"
 , "c1link" : "./qc/apps/s_server.c.html#23966"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23966] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23966"
 , "c1link" : "./qc/apps/s_server.c.html#23966"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23966] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23970"
 , "c1link" : "./qc/apps/s_server.c.html#23970"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23970] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23970"
 , "c1link" : "./qc/apps/s_server.c.html#23970"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23970] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23976"
 , "c1link" : "./qc/apps/s_server.c.html#23976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23976"
 , "c1link" : "./qc/apps/s_server.c.html#23976"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23976] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23994"
 , "c1link" : "./qc/apps/s_server.c.html#23994"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23994] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23994"
 , "c1link" : "./qc/apps/s_server.c.html#23994"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23994] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24076"
 , "c1link" : "./qc/apps/s_server.c.html#24076"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24076] The expression read_from_terminal applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24077"
 , "c1link" : "./qc/apps/s_server.c.html#24077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24077] The expression s_crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24114"
 , "c1link" : "./qc/apps/s_server.c.html#24114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24114] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24128"
 , "c1link" : "./qc/apps/s_server.c.html#24128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24128] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24189"
 , "c1link" : "./qc/apps/s_server.c.html#24189"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24189] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24238"
 , "c1link" : "./qc/apps/s_server.c.html#24238"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24238] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24248"
 , "c1link" : "./qc/apps/s_server.c.html#24248"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24248] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24258"
 , "c1link" : "./qc/apps/s_server.c.html#24258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24258] The expression read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24270"
 , "c1link" : "./qc/apps/s_server.c.html#24270"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24270] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24273"
 , "c1link" : "./qc/apps/s_server.c.html#24273"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24273] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24299"
 , "c1link" : "./qc/apps/s_server.c.html#24299"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24299] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "24333"
 , "c1link" : "./qc/apps/s_server.c.html#24333"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24333] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24342"
 , "c1link" : "./qc/apps/s_server.c.html#24342"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24342] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24393"
 , "c1link" : "./qc/apps/s_server.c.html#24393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24393] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24394"
 , "c1link" : "./qc/apps/s_server.c.html#24394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24394] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24410"
 , "c1link" : "./qc/apps/s_server.c.html#24410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24410] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24412"
 , "c1link" : "./qc/apps/s_server.c.html#24412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24412] The expression wbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24487"
 , "c1link" : "./qc/apps/s_server.c.html#24487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24487] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24490"
 , "c1link" : "./qc/apps/s_server.c.html#24490"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24490] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24493"
 , "c1link" : "./qc/apps/s_server.c.html#24493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24493] The expression s_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24535"
 , "c1link" : "./qc/apps/s_server.c.html#24535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24535] The expression next_proto_neg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24546"
 , "c1link" : "./qc/apps/s_server.c.html#24546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24546] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24637"
 , "c1link" : "./qc/apps/s_server.c.html#24637"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24637] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24639"
 , "c1link" : "./qc/apps/s_server.c.html#24639"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24639] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24642"
 , "c1link" : "./qc/apps/s_server.c.html#24642"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24642] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24648"
 , "c1link" : "./qc/apps/s_server.c.html#24648"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24648] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24650"
 , "c1link" : "./qc/apps/s_server.c.html#24650"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24650] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24655"
 , "c1link" : "./qc/apps/s_server.c.html#24655"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24655] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24657"
 , "c1link" : "./qc/apps/s_server.c.html#24657"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24657] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24670"
 , "c1link" : "./qc/apps/s_server.c.html#24670"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24670] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24674"
 , "c1link" : "./qc/apps/s_server.c.html#24674"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24674] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24690"
 , "c1link" : "./qc/apps/s_server.c.html#24690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24690] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24694"
 , "c1link" : "./qc/apps/s_server.c.html#24694"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24694] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24708"
 , "c1link" : "./qc/apps/s_server.c.html#24708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24708] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24710"
 , "c1link" : "./qc/apps/s_server.c.html#24710"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24710] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24730"
 , "c1link" : "./qc/apps/s_server.c.html#24730"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24730] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24762"
 , "c1link" : "./qc/apps/s_server.c.html#24762"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24762] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24767"
 , "c1link" : "./qc/apps/s_server.c.html#24767"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24767] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24767"
 , "c1link" : "./qc/apps/s_server.c.html#24767"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24767] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24771"
 , "c1link" : "./qc/apps/s_server.c.html#24771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24771] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24771"
 , "c1link" : "./qc/apps/s_server.c.html#24771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24771] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24776"
 , "c1link" : "./qc/apps/s_server.c.html#24776"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24776] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24776"
 , "c1link" : "./qc/apps/s_server.c.html#24776"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24776] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24824"
 , "c1link" : "./qc/apps/s_server.c.html#24824"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24824] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24893"
 , "c1link" : "./qc/apps/s_server.c.html#24893"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24893] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24894"
 , "c1link" : "./qc/apps/s_server.c.html#24894"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24894] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24986"
 , "c1link" : "./qc/apps/s_server.c.html#24986"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24986] The expression dot applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25006"
 , "c1link" : "./qc/apps/s_server.c.html#25006"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[25006] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "25017"
 , "c1link" : "./qc/apps/s_server.c.html#25017"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25017] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25048"
 , "c1link" : "./qc/apps/s_server.c.html#25048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25048] goto statement jump to write_error"
}} 
,
{ "ligne" : {
   "c1" : "25110"
 , "c1link" : "./qc/apps/s_server.c.html#25110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25110] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25114"
 , "c1link" : "./qc/apps/s_server.c.html#25114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25114] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25116"
 , "c1link" : "./qc/apps/s_server.c.html#25116"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[25116] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "25121"
 , "c1link" : "./qc/apps/s_server.c.html#25121"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25121] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25123"
 , "c1link" : "./qc/apps/s_server.c.html#25123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25123] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25136"
 , "c1link" : "./qc/apps/s_server.c.html#25136"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25136] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25150"
 , "c1link" : "./qc/apps/s_server.c.html#25150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25150] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25154"
 , "c1link" : "./qc/apps/s_server.c.html#25154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25154] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25175"
 , "c1link" : "./qc/apps/s_server.c.html#25175"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25175] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25195"
 , "c1link" : "./qc/apps/s_server.c.html#25195"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25195] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25197"
 , "c1link" : "./qc/apps/s_server.c.html#25197"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25197] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25218"
 , "c1link" : "./qc/apps/s_server.c.html#25218"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25218] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25228"
 , "c1link" : "./qc/apps/s_server.c.html#25228"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25228] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25246"
 , "c1link" : "./qc/apps/s_server.c.html#25246"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25246] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25306"
 , "c1link" : "./qc/apps/s_server.c.html#25306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25306] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "25386"
 , "c1link" : "./qc/apps/s_server.c.html#25386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25386] The expression prev applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
