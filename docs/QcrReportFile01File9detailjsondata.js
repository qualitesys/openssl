console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/dgst.c.html" 
 , "texte" : "File apps/dgst.c 62 rule violations " 
 , "fic2"  : "./qc/apps/dgst.c.xml" 
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "39"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000014"
 , "c3" : "A pointer is defined but not initialized"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "02456"
 , "c1link" : "./qc/apps/dgst.c.html#2456"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[02456] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "18849"
 , "c1link" : "./qc/apps/dgst.c.html#18849"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[18849] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "18936"
 , "c1link" : "./qc/apps/dgst.c.html#18936"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18936] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18952"
 , "c1link" : "./qc/apps/dgst.c.html#18952"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18952] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "18956"
 , "c1link" : "./qc/apps/dgst.c.html#18956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[18956] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "18958"
 , "c1link" : "./qc/apps/dgst.c.html#18958"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18958] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18962"
 , "c1link" : "./qc/apps/dgst.c.html#18962"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18962] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18971"
 , "c1link" : "./qc/apps/dgst.c.html#18971"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18971] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18980"
 , "c1link" : "./qc/apps/dgst.c.html#18980"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[18980] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "18993"
 , "c1link" : "./qc/apps/dgst.c.html#18993"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[18993] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "19004"
 , "c1link" : "./qc/apps/dgst.c.html#19004"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19004] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19034"
 , "c1link" : "./qc/apps/dgst.c.html#19034"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19034] The expression  ! sigopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19037"
 , "c1link" : "./qc/apps/dgst.c.html#19037"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19037] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19040"
 , "c1link" : "./qc/apps/dgst.c.html#19040"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19040] The expression  ! macopts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19043"
 , "c1link" : "./qc/apps/dgst.c.html#19043"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19043] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19050"
 , "c1link" : "./qc/apps/dgst.c.html#19050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19050] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19064"
 , "c1link" : "./qc/apps/dgst.c.html#19064"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19064] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19073"
 , "c1link" : "./qc/apps/dgst.c.html#19073"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19073] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "19083"
 , "c1link" : "./qc/apps/dgst.c.html#19083"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19083] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19085"
 , "c1link" : "./qc/apps/dgst.c.html#19085"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19085] The expression engine_impl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19100"
 , "c1link" : "./qc/apps/dgst.c.html#19100"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19100] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19103"
 , "c1link" : "./qc/apps/dgst.c.html#19103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19103] The expression debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19119"
 , "c1link" : "./qc/apps/dgst.c.html#19119"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19119] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19139"
 , "c1link" : "./qc/apps/dgst.c.html#19139"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19139] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19155"
 , "c1link" : "./qc/apps/dgst.c.html#19155"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19155] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19165"
 , "c1link" : "./qc/apps/dgst.c.html#19165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19165] The expression want_pub applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19181"
 , "c1link" : "./qc/apps/dgst.c.html#19181"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19181] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19190"
 , "c1link" : "./qc/apps/dgst.c.html#19190"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19190] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19214"
 , "c1link" : "./qc/apps/dgst.c.html#19214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19214] goto statement jump to mac_end"
}} 
,
{ "ligne" : {
   "c1" : "19220"
 , "c1link" : "./qc/apps/dgst.c.html#19220"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19220] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19227"
 , "c1link" : "./qc/apps/dgst.c.html#19227"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19227] goto statement jump to mac_end"
}} 
,
{ "ligne" : {
   "c1" : "19234"
 , "c1link" : "./qc/apps/dgst.c.html#19234"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19234] goto statement jump to mac_end"
}} 
,
{ "ligne" : {
   "c1" : "19240"
 , "c1link" : "./qc/apps/dgst.c.html#19240"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19240] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19256"
 , "c1link" : "./qc/apps/dgst.c.html#19256"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19256] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19278"
 , "c1link" : "./qc/apps/dgst.c.html#19278"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19278] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19280"
 , "c1link" : "./qc/apps/dgst.c.html#19280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19280] The expression do_verify applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19284"
 , "c1link" : "./qc/apps/dgst.c.html#19284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19284] The expression  ! r applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19287"
 , "c1link" : "./qc/apps/dgst.c.html#19287"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19287] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19294"
 , "c1link" : "./qc/apps/dgst.c.html#19294"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19294] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19300"
 , "c1link" : "./qc/apps/dgst.c.html#19300"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19300] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19315"
 , "c1link" : "./qc/apps/dgst.c.html#19315"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19315] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19326"
 , "c1link" : "./qc/apps/dgst.c.html#19326"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19326] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19347"
 , "c1link" : "./qc/apps/dgst.c.html#19347"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19347] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19356"
 , "c1link" : "./qc/apps/dgst.c.html#19356"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19356] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19366"
 , "c1link" : "./qc/apps/dgst.c.html#19366"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19366] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19380"
 , "c1link" : "./qc/apps/dgst.c.html#19380"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19380] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19388"
 , "c1link" : "./qc/apps/dgst.c.html#19388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19388] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19410"
 , "c1link" : "./qc/apps/dgst.c.html#19410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19410] The expression  ! out_bin applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19429"
 , "c1link" : "./qc/apps/dgst.c.html#19429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19429] The expression r applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19542"
 , "c1link" : "./qc/apps/dgst.c.html#19542"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19542] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19561"
 , "c1link" : "./qc/apps/dgst.c.html#19561"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19561] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19571"
 , "c1link" : "./qc/apps/dgst.c.html#19571"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19571] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19578"
 , "c1link" : "./qc/apps/dgst.c.html#19578"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19578] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19582"
 , "c1link" : "./qc/apps/dgst.c.html#19582"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19582] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19585"
 , "c1link" : "./qc/apps/dgst.c.html#19585"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19585] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19592"
 , "c1link" : "./qc/apps/dgst.c.html#19592"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19592] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19603"
 , "c1link" : "./qc/apps/dgst.c.html#19603"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19603] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19613"
 , "c1link" : "./qc/apps/dgst.c.html#19613"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19613] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19616"
 , "c1link" : "./qc/apps/dgst.c.html#19616"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000014[19616] A pointer is declared but not initialized"
}} 
,
{ "ligne" : {
   "c1" : "19629"
 , "c1link" : "./qc/apps/dgst.c.html#19629"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19629] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19635"
 , "c1link" : "./qc/apps/dgst.c.html#19635"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[19635] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "19639"
 , "c1link" : "./qc/apps/dgst.c.html#19639"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19639] The expression binout applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
