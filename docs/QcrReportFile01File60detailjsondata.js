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
   "c1" : "20873"
 , "c1link" : "./qc/apps/s_server.c.html#20873"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20873] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "20883"
 , "c1link" : "./qc/apps/s_server.c.html#20883"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20883] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20885"
 , "c1link" : "./qc/apps/s_server.c.html#20885"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20885] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20894"
 , "c1link" : "./qc/apps/s_server.c.html#20894"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20894] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20920"
 , "c1link" : "./qc/apps/s_server.c.html#20920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20920] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20924"
 , "c1link" : "./qc/apps/s_server.c.html#20924"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20924] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20948"
 , "c1link" : "./qc/apps/s_server.c.html#20948"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20948] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21048"
 , "c1link" : "./qc/apps/s_server.c.html#21048"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21048] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21175"
 , "c1link" : "./qc/apps/s_server.c.html#21175"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21175] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21188"
 , "c1link" : "./qc/apps/s_server.c.html#21188"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21188] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21202"
 , "c1link" : "./qc/apps/s_server.c.html#21202"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21202] goto statement jump to err"
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
   "c1" : "21223"
 , "c1link" : "./qc/apps/s_server.c.html#21223"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21223] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21236"
 , "c1link" : "./qc/apps/s_server.c.html#21236"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21236] goto statement jump to err"
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
   "c1" : "21245"
 , "c1link" : "./qc/apps/s_server.c.html#21245"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21245] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21256"
 , "c1link" : "./qc/apps/s_server.c.html#21256"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21256] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21270"
 , "c1link" : "./qc/apps/s_server.c.html#21270"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21270] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21274"
 , "c1link" : "./qc/apps/s_server.c.html#21274"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21274] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "21312"
 , "c1link" : "./qc/apps/s_server.c.html#21312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21312] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21335"
 , "c1link" : "./qc/apps/s_server.c.html#21335"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21335] goto statement jump to err"
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
   "c1" : "21359"
 , "c1link" : "./qc/apps/s_server.c.html#21359"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21359] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "21409"
 , "c1link" : "./qc/apps/s_server.c.html#21409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21409] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21414"
 , "c1link" : "./qc/apps/s_server.c.html#21414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21414] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21428"
 , "c1link" : "./qc/apps/s_server.c.html#21428"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21428] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21880"
 , "c1link" : "./qc/apps/s_server.c.html#21880"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21880] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "22028"
 , "c1link" : "./qc/apps/s_server.c.html#22028"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22028] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
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
   "c1" : "22058"
 , "c1link" : "./qc/apps/s_server.c.html#22058"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22058] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22061"
 , "c1link" : "./qc/apps/s_server.c.html#22061"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22061] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22068"
 , "c1link" : "./qc/apps/s_server.c.html#22068"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22068] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22073"
 , "c1link" : "./qc/apps/s_server.c.html#22073"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[22073] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22075"
 , "c1link" : "./qc/apps/s_server.c.html#22075"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22075] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22079"
 , "c1link" : "./qc/apps/s_server.c.html#22079"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22079] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22107"
 , "c1link" : "./qc/apps/s_server.c.html#22107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22107] The expression 1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22107"
 , "c1link" : "./qc/apps/s_server.c.html#22107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[22107] The expression 1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "22135"
 , "c1link" : "./qc/apps/s_server.c.html#22135"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22135] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22170"
 , "c1link" : "./qc/apps/s_server.c.html#22170"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22170] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22201"
 , "c1link" : "./qc/apps/s_server.c.html#22201"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22201] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22228"
 , "c1link" : "./qc/apps/s_server.c.html#22228"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22228] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22236"
 , "c1link" : "./qc/apps/s_server.c.html#22236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22236] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22249"
 , "c1link" : "./qc/apps/s_server.c.html#22249"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22249] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22262"
 , "c1link" : "./qc/apps/s_server.c.html#22262"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22262] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22269"
 , "c1link" : "./qc/apps/s_server.c.html#22269"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22269] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22282"
 , "c1link" : "./qc/apps/s_server.c.html#22282"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22282] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22289"
 , "c1link" : "./qc/apps/s_server.c.html#22289"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22289] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22335"
 , "c1link" : "./qc/apps/s_server.c.html#22335"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22335] goto statement jump to opthelp"
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
   "c1" : "22365"
 , "c1link" : "./qc/apps/s_server.c.html#22365"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22365] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22392"
 , "c1link" : "./qc/apps/s_server.c.html#22392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22392] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22413"
 , "c1link" : "./qc/apps/s_server.c.html#22413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22413] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22445"
 , "c1link" : "./qc/apps/s_server.c.html#22445"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22445] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22482"
 , "c1link" : "./qc/apps/s_server.c.html#22482"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22482] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22482"
 , "c1link" : "./qc/apps/s_server.c.html#22482"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22482] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22499"
 , "c1link" : "./qc/apps/s_server.c.html#22499"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22499] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22511"
 , "c1link" : "./qc/apps/s_server.c.html#22511"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22511] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22638"
 , "c1link" : "./qc/apps/s_server.c.html#22638"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22638] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22642"
 , "c1link" : "./qc/apps/s_server.c.html#22642"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22642] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22697"
 , "c1link" : "./qc/apps/s_server.c.html#22697"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22697] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22704"
 , "c1link" : "./qc/apps/s_server.c.html#22704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22704] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22732"
 , "c1link" : "./qc/apps/s_server.c.html#22732"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22732] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22742"
 , "c1link" : "./qc/apps/s_server.c.html#22742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22742] goto statement jump to opthelp"
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
   "c1" : "22761"
 , "c1link" : "./qc/apps/s_server.c.html#22761"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22761] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22771"
 , "c1link" : "./qc/apps/s_server.c.html#22771"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22771] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22786"
 , "c1link" : "./qc/apps/s_server.c.html#22786"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22786] goto statement jump to end"
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
   "c1" : "22797"
 , "c1link" : "./qc/apps/s_server.c.html#22797"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22797] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22815"
 , "c1link" : "./qc/apps/s_server.c.html#22815"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22815] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22825"
 , "c1link" : "./qc/apps/s_server.c.html#22825"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22825] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22834"
 , "c1link" : "./qc/apps/s_server.c.html#22834"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22834] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22846"
 , "c1link" : "./qc/apps/s_server.c.html#22846"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22846] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22861"
 , "c1link" : "./qc/apps/s_server.c.html#22861"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22861] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22871"
 , "c1link" : "./qc/apps/s_server.c.html#22871"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22871] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22875"
 , "c1link" : "./qc/apps/s_server.c.html#22875"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22875] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22882"
 , "c1link" : "./qc/apps/s_server.c.html#22882"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22882] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22890"
 , "c1link" : "./qc/apps/s_server.c.html#22890"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22890] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22897"
 , "c1link" : "./qc/apps/s_server.c.html#22897"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22897] goto statement jump to end"
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
   "c1" : "22922"
 , "c1link" : "./qc/apps/s_server.c.html#22922"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22922] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22946"
 , "c1link" : "./qc/apps/s_server.c.html#22946"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22946] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22957"
 , "c1link" : "./qc/apps/s_server.c.html#22957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22957] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22970"
 , "c1link" : "./qc/apps/s_server.c.html#22970"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22970] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22997"
 , "c1link" : "./qc/apps/s_server.c.html#22997"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22997] The expression nocert applies to a single value or variable, might be ambiguous."
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
   "c1" : "23046"
 , "c1link" : "./qc/apps/s_server.c.html#23046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23046] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23050"
 , "c1link" : "./qc/apps/s_server.c.html#23050"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23050] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23052"
 , "c1link" : "./qc/apps/s_server.c.html#23052"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23052] The expression ssl_config applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23057"
 , "c1link" : "./qc/apps/s_server.c.html#23057"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23057] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23071"
 , "c1link" : "./qc/apps/s_server.c.html#23071"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23071] goto statement jump to end"
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
   "c1" : "23080"
 , "c1link" : "./qc/apps/s_server.c.html#23080"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23080] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23087"
 , "c1link" : "./qc/apps/s_server.c.html#23087"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23087] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23098"
 , "c1link" : "./qc/apps/s_server.c.html#23098"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23098] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23100"
 , "c1link" : "./qc/apps/s_server.c.html#23100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23100] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23106"
 , "c1link" : "./qc/apps/s_server.c.html#23106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23106] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23115"
 , "c1link" : "./qc/apps/s_server.c.html#23115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23115] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23123"
 , "c1link" : "./qc/apps/s_server.c.html#23123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23123] The expression no_ca_names applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23127"
 , "c1link" : "./qc/apps/s_server.c.html#23127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23127] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23138"
 , "c1link" : "./qc/apps/s_server.c.html#23138"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23138] goto statement jump to end"
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
   "c1" : "23159"
 , "c1link" : "./qc/apps/s_server.c.html#23159"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23159] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23175"
 , "c1link" : "./qc/apps/s_server.c.html#23175"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23175] goto statement jump to end"
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
   "c1" : "23188"
 , "c1link" : "./qc/apps/s_server.c.html#23188"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23188] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23199"
 , "c1link" : "./qc/apps/s_server.c.html#23199"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23199] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23202"
 , "c1link" : "./qc/apps/s_server.c.html#23202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23202] The expression s_cert2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23210"
 , "c1link" : "./qc/apps/s_server.c.html#23210"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23210] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23221"
 , "c1link" : "./qc/apps/s_server.c.html#23221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23221] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23224"
 , "c1link" : "./qc/apps/s_server.c.html#23224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23224] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23231"
 , "c1link" : "./qc/apps/s_server.c.html#23231"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23231] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23242"
 , "c1link" : "./qc/apps/s_server.c.html#23242"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23242] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23245"
 , "c1link" : "./qc/apps/s_server.c.html#23245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23245] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23251"
 , "c1link" : "./qc/apps/s_server.c.html#23251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23251] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23260"
 , "c1link" : "./qc/apps/s_server.c.html#23260"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23260] The expression async applies to a single value or variable, might be ambiguous."
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
   "c1" : "23280"
 , "c1link" : "./qc/apps/s_server.c.html#23280"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23280] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23290"
 , "c1link" : "./qc/apps/s_server.c.html#23290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23290] The expression  ! no_dhe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23342"
 , "c1link" : "./qc/apps/s_server.c.html#23342"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23342] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23350"
 , "c1link" : "./qc/apps/s_server.c.html#23350"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23350] goto statement jump to end"
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
   "c1" : "23409"
 , "c1link" : "./qc/apps/s_server.c.html#23409"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23409] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23418"
 , "c1link" : "./qc/apps/s_server.c.html#23418"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23418] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23431"
 , "c1link" : "./qc/apps/s_server.c.html#23431"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23431] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23439"
 , "c1link" : "./qc/apps/s_server.c.html#23439"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23439] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23442"
 , "c1link" : "./qc/apps/s_server.c.html#23442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23442] The expression no_resume_ephemeral applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23460"
 , "c1link" : "./qc/apps/s_server.c.html#23460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23460] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23476"
 , "c1link" : "./qc/apps/s_server.c.html#23476"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23476] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23495"
 , "c1link" : "./qc/apps/s_server.c.html#23495"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23495] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23514"
 , "c1link" : "./qc/apps/s_server.c.html#23514"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23514] goto statement jump to end"
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
   "c1" : "23558"
 , "c1link" : "./qc/apps/s_server.c.html#23558"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23558] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23575"
 , "c1link" : "./qc/apps/s_server.c.html#23575"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23575] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23585"
 , "c1link" : "./qc/apps/s_server.c.html#23585"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23585] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23589"
 , "c1link" : "./qc/apps/s_server.c.html#23589"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23589] The expression s_tlsextstatus applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23592"
 , "c1link" : "./qc/apps/s_server.c.html#23592"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23592] The expression ctx2 applies to a single value or variable, might be ambiguous."
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
   "c1" : "23606"
 , "c1link" : "./qc/apps/s_server.c.html#23606"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23606] The expression rev applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23608"
 , "c1link" : "./qc/apps/s_server.c.html#23608"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23608] The expression www applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23796"
 , "c1link" : "./qc/apps/s_server.c.html#23796"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23796] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23799"
 , "c1link" : "./qc/apps/s_server.c.html#23799"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23799] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23810"
 , "c1link" : "./qc/apps/s_server.c.html#23810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23810] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23813"
 , "c1link" : "./qc/apps/s_server.c.html#23813"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23813] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23827"
 , "c1link" : "./qc/apps/s_server.c.html#23827"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23827] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23833"
 , "c1link" : "./qc/apps/s_server.c.html#23833"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23833] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23836"
 , "c1link" : "./qc/apps/s_server.c.html#23836"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23836] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23844"
 , "c1link" : "./qc/apps/s_server.c.html#23844"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23844] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23854"
 , "c1link" : "./qc/apps/s_server.c.html#23854"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23854] The expression socket_mtu applies to a single value or variable, might be ambiguous."
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
   "c1" : "23879"
 , "c1link" : "./qc/apps/s_server.c.html#23879"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23879] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23905"
 , "c1link" : "./qc/apps/s_server.c.html#23905"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23905] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23908"
 , "c1link" : "./qc/apps/s_server.c.html#23908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23908] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23919"
 , "c1link" : "./qc/apps/s_server.c.html#23919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23919] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23923"
 , "c1link" : "./qc/apps/s_server.c.html#23923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23923] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23933"
 , "c1link" : "./qc/apps/s_server.c.html#23933"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23933] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23938"
 , "c1link" : "./qc/apps/s_server.c.html#23938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23938] The expression early_data applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23957"
 , "c1link" : "./qc/apps/s_server.c.html#23957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23957] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23961"
 , "c1link" : "./qc/apps/s_server.c.html#23961"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23961] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23973"
 , "c1link" : "./qc/apps/s_server.c.html#23973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23973] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23997"
 , "c1link" : "./qc/apps/s_server.c.html#23997"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23997] The expression  ! read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24000"
 , "c1link" : "./qc/apps/s_server.c.html#24000"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24000] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24000"
 , "c1link" : "./qc/apps/s_server.c.html#24000"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24000] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24004"
 , "c1link" : "./qc/apps/s_server.c.html#24004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24004] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24004"
 , "c1link" : "./qc/apps/s_server.c.html#24004"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24004] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24010"
 , "c1link" : "./qc/apps/s_server.c.html#24010"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24010] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24010"
 , "c1link" : "./qc/apps/s_server.c.html#24010"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24010] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24028"
 , "c1link" : "./qc/apps/s_server.c.html#24028"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24028] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24028"
 , "c1link" : "./qc/apps/s_server.c.html#24028"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24028] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24110"
 , "c1link" : "./qc/apps/s_server.c.html#24110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24110] The expression read_from_terminal applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24111"
 , "c1link" : "./qc/apps/s_server.c.html#24111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24111] The expression s_crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24148"
 , "c1link" : "./qc/apps/s_server.c.html#24148"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24148] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24162"
 , "c1link" : "./qc/apps/s_server.c.html#24162"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24162] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24223"
 , "c1link" : "./qc/apps/s_server.c.html#24223"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24223] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24272"
 , "c1link" : "./qc/apps/s_server.c.html#24272"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24272] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24282"
 , "c1link" : "./qc/apps/s_server.c.html#24282"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24282] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24292"
 , "c1link" : "./qc/apps/s_server.c.html#24292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24292] The expression read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24304"
 , "c1link" : "./qc/apps/s_server.c.html#24304"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24304] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24307"
 , "c1link" : "./qc/apps/s_server.c.html#24307"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24307] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24333"
 , "c1link" : "./qc/apps/s_server.c.html#24333"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24333] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "24367"
 , "c1link" : "./qc/apps/s_server.c.html#24367"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24367] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24376"
 , "c1link" : "./qc/apps/s_server.c.html#24376"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24376] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24427"
 , "c1link" : "./qc/apps/s_server.c.html#24427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24427] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24428"
 , "c1link" : "./qc/apps/s_server.c.html#24428"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24428] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24444"
 , "c1link" : "./qc/apps/s_server.c.html#24444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24444] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24446"
 , "c1link" : "./qc/apps/s_server.c.html#24446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24446] The expression wbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24521"
 , "c1link" : "./qc/apps/s_server.c.html#24521"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24521] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24524"
 , "c1link" : "./qc/apps/s_server.c.html#24524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24524] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24527"
 , "c1link" : "./qc/apps/s_server.c.html#24527"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24527] The expression s_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24569"
 , "c1link" : "./qc/apps/s_server.c.html#24569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24569] The expression next_proto_neg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24580"
 , "c1link" : "./qc/apps/s_server.c.html#24580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24580] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24671"
 , "c1link" : "./qc/apps/s_server.c.html#24671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24671] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24673"
 , "c1link" : "./qc/apps/s_server.c.html#24673"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24673] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24676"
 , "c1link" : "./qc/apps/s_server.c.html#24676"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24676] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24682"
 , "c1link" : "./qc/apps/s_server.c.html#24682"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24682] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24684"
 , "c1link" : "./qc/apps/s_server.c.html#24684"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24684] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24689"
 , "c1link" : "./qc/apps/s_server.c.html#24689"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24689] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24691"
 , "c1link" : "./qc/apps/s_server.c.html#24691"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24691] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24704"
 , "c1link" : "./qc/apps/s_server.c.html#24704"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24704] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24708"
 , "c1link" : "./qc/apps/s_server.c.html#24708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24708] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24724"
 , "c1link" : "./qc/apps/s_server.c.html#24724"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24724] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24728"
 , "c1link" : "./qc/apps/s_server.c.html#24728"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24728] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24742"
 , "c1link" : "./qc/apps/s_server.c.html#24742"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24742] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24744"
 , "c1link" : "./qc/apps/s_server.c.html#24744"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24744] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24764"
 , "c1link" : "./qc/apps/s_server.c.html#24764"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24764] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24796"
 , "c1link" : "./qc/apps/s_server.c.html#24796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24796] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24801"
 , "c1link" : "./qc/apps/s_server.c.html#24801"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24801] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24801"
 , "c1link" : "./qc/apps/s_server.c.html#24801"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24801] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24805"
 , "c1link" : "./qc/apps/s_server.c.html#24805"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24805] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24805"
 , "c1link" : "./qc/apps/s_server.c.html#24805"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24805] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24810"
 , "c1link" : "./qc/apps/s_server.c.html#24810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24810] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24810"
 , "c1link" : "./qc/apps/s_server.c.html#24810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24810] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24858"
 , "c1link" : "./qc/apps/s_server.c.html#24858"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24858] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24927"
 , "c1link" : "./qc/apps/s_server.c.html#24927"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24927] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24928"
 , "c1link" : "./qc/apps/s_server.c.html#24928"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24928] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25020"
 , "c1link" : "./qc/apps/s_server.c.html#25020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25020] The expression dot applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25040"
 , "c1link" : "./qc/apps/s_server.c.html#25040"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[25040] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "25051"
 , "c1link" : "./qc/apps/s_server.c.html#25051"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25051] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25082"
 , "c1link" : "./qc/apps/s_server.c.html#25082"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25082] goto statement jump to write_error"
}} 
,
{ "ligne" : {
   "c1" : "25144"
 , "c1link" : "./qc/apps/s_server.c.html#25144"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25144] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25148"
 , "c1link" : "./qc/apps/s_server.c.html#25148"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25148] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25150"
 , "c1link" : "./qc/apps/s_server.c.html#25150"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[25150] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "25155"
 , "c1link" : "./qc/apps/s_server.c.html#25155"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25155] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25157"
 , "c1link" : "./qc/apps/s_server.c.html#25157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25157] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25170"
 , "c1link" : "./qc/apps/s_server.c.html#25170"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25170] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25184"
 , "c1link" : "./qc/apps/s_server.c.html#25184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25184] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25188"
 , "c1link" : "./qc/apps/s_server.c.html#25188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25188] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25209"
 , "c1link" : "./qc/apps/s_server.c.html#25209"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25209] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25229"
 , "c1link" : "./qc/apps/s_server.c.html#25229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25229] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "25231"
 , "c1link" : "./qc/apps/s_server.c.html#25231"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25231] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "25252"
 , "c1link" : "./qc/apps/s_server.c.html#25252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25252] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25262"
 , "c1link" : "./qc/apps/s_server.c.html#25262"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25262] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25280"
 , "c1link" : "./qc/apps/s_server.c.html#25280"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[25280] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "25340"
 , "c1link" : "./qc/apps/s_server.c.html#25340"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25340] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "25415"
 , "c1link" : "./qc/apps/s_server.c.html#25415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[25415] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "25420"
 , "c1link" : "./qc/apps/s_server.c.html#25420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[25420] The expression prev applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
