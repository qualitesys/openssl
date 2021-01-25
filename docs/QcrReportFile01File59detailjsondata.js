console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/s_server.c.html" 
 , "texte" : "File apps/s_server.c 269 rule violations " 
 , "fic2"  : "./qc/apps/s_server.c.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "dummy" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : " unsigned  int "
 , "c2" : "__bswap_32(unsignedint)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "__uint64_t"
 , "c2" : "__bswap_64(__uint64_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "__uint16_t"
 , "c2" : "__uint16_identity(__uint16_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "__uint32_t"
 , "c2" : "__uint32_identity(__uint32_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "__uint64_t"
 , "c2" : "__uint64_identity(__uint64_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "tolower(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "toupper(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "getchar(void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "fgetc_unlocked(FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "getc_unlocked(FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "getchar_unlocked(void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "putchar(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "fputc_unlocked(int;FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "putc_unlocked(int;FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "putchar_unlocked(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "feof_unlocked(FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "ferror_unlocked(FILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "sprintf(char*;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "vsprintf(char*;char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "snprintf(char*;size_t;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "vsnprintf(char*;size_t;char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "fprintf(FILE*;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "printf(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "vprintf(char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "vfprintf(FILE*;char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "dprintf(int;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "vdprintf(int;char*;__gnuc_va_list)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "fgets(char*;int;FILE*)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "fread(void*;size_t;size_t;FILE*)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "fread_unlocked(void*;size_t;size_t;FILE*)"
 , "c3" : "8"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "atoi(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " long  int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "atol(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " long  long  int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "atoll(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "gnu_dev_major(__dev_t)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "gnu_dev_minor(__dev_t)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "__dev_t"
 , "c2" : "gnu_dev_makedev(unsignedint;unsignedint)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "bsearch(void*;void*;size_t;size_t;__compar_fn_t)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : " double  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "atof(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "realpath(char*;char*)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "ptsname_r(int;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "wctomb(char*;wchar_t)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "mbstowcs(wchar_t*;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "wcstombs(char*;wchar_t*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " void  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "bcopy(void*;void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "bzero(void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "memcpy(void*;void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "memmove(void*;void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "memset(void*;int;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "explicit_bzero(void*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "strcpy(char*;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "strncpy(char*;char*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "stpncpy(char*;char*;size_t)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "strcat(char*;char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "strncat(char*;char*;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "intmax_t"
 , "c2" : "strtoimax(char*;char*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "uintmax_t"
 , "c2" : "strtoumax(char*;char*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "intmax_t"
 , "c2" : "wcstoimax(__gwchar_t*;__gwchar_t*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "uintmax_t"
 , "c2" : "wcstoumax(__gwchar_t*;__gwchar_t*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "ossl_check_OPENSSL_STRING_type(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OPENSSL_STRING_sk_type(structstack_st_OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OPENSSL_STRING_sk_type(structstack_st_OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OPENSSL_STRING_compfunc_type(sk_OPENSSL_STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OPENSSL_STRING_copyfunc_type(sk_OPENSSL_STRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OPENSSL_STRING_freefunc_type(sk_OPENSSL_STRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "ossl_check_OPENSSL_CSTRING_type(char*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OPENSSL_CSTRING_sk_type(structstack_st_OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OPENSSL_CSTRING_sk_type(structstack_st_OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OPENSSL_CSTRING_compfunc_type(sk_OPENSSL_CSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OPENSSL_CSTRING_copyfunc_type(sk_OPENSSL_CSTRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OPENSSL_CSTRING_freefunc_type(sk_OPENSSL_CSTRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "ossl_check_OPENSSL_BLOCK_type(void*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OPENSSL_BLOCK_sk_type(structstack_st_OPENSSL_BLOCK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OPENSSL_BLOCK_sk_type(structstack_st_OPENSSL_BLOCK*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OPENSSL_BLOCK_compfunc_type(sk_OPENSSL_BLOCK_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OPENSSL_BLOCK_copyfunc_type(sk_OPENSSL_BLOCK_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OPENSSL_BLOCK_freefunc_type(sk_OPENSSL_BLOCK_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "ossl_check_void_type(void*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_void_sk_type(structstack_st_void*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_void_sk_type(structstack_st_void*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_void_compfunc_type(sk_void_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_void_copyfunc_type(sk_void_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_void_freefunc_type(sk_void_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "pthread_equal(pthread_t;pthread_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BIO"
 , "c2" : "ossl_check_BIO_type(BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_BIO_sk_type(structstack_st_BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_BIO_sk_type(structstack_st_BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_BIO_compfunc_type(sk_BIO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_BIO_copyfunc_type(sk_BIO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_BIO_freefunc_type(sk_BIO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_ALGOR"
 , "c2" : "ossl_check_X509_ALGOR_type(X509_ALGOR*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_ALGOR_sk_type(structstack_st_X509_ALGOR*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_ALGOR_sk_type(structstack_st_X509_ALGOR*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_ALGOR_compfunc_type(sk_X509_ALGOR_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_ALGOR_copyfunc_type(sk_X509_ALGOR_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_ALGOR_freefunc_type(sk_X509_ALGOR_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_STRING_TABLE"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_type(ASN1_STRING_TABLE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_STRING_TABLE_sk_type(structstack_st_ASN1_STRING_TABLE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_sk_type(structstack_st_ASN1_STRING_TABLE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_compfunc_type(sk_ASN1_STRING_TABLE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_copyfunc_type(sk_ASN1_STRING_TABLE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_STRING_TABLE_freefunc_type(sk_ASN1_STRING_TABLE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_TYPE"
 , "c2" : "ossl_check_ASN1_TYPE_type(ASN1_TYPE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_TYPE_sk_type(structstack_st_ASN1_TYPE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_TYPE_sk_type(structstack_st_ASN1_TYPE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_TYPE_compfunc_type(sk_ASN1_TYPE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_TYPE_copyfunc_type(sk_ASN1_TYPE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_TYPE_freefunc_type(sk_ASN1_TYPE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_OBJECT"
 , "c2" : "ossl_check_ASN1_OBJECT_type(ASN1_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_OBJECT_sk_type(structstack_st_ASN1_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_OBJECT_sk_type(structstack_st_ASN1_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_OBJECT_compfunc_type(sk_ASN1_OBJECT_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_OBJECT_copyfunc_type(sk_ASN1_OBJECT_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_OBJECT_freefunc_type(sk_ASN1_OBJECT_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_INTEGER"
 , "c2" : "ossl_check_ASN1_INTEGER_type(ASN1_INTEGER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_INTEGER_sk_type(structstack_st_ASN1_INTEGER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_INTEGER_sk_type(structstack_st_ASN1_INTEGER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_INTEGER_compfunc_type(sk_ASN1_INTEGER_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_INTEGER_copyfunc_type(sk_ASN1_INTEGER_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_INTEGER_freefunc_type(sk_ASN1_INTEGER_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_UTF8STRING"
 , "c2" : "ossl_check_ASN1_UTF8STRING_type(ASN1_UTF8STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_UTF8STRING_sk_type(structstack_st_ASN1_UTF8STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_UTF8STRING_sk_type(structstack_st_ASN1_UTF8STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_UTF8STRING_compfunc_type(sk_ASN1_UTF8STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_UTF8STRING_copyfunc_type(sk_ASN1_UTF8STRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_UTF8STRING_freefunc_type(sk_ASN1_UTF8STRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_GENERALSTRING"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_type(ASN1_GENERALSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_GENERALSTRING_sk_type(structstack_st_ASN1_GENERALSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_sk_type(structstack_st_ASN1_GENERALSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_compfunc_type(sk_ASN1_GENERALSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_copyfunc_type(sk_ASN1_GENERALSTRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_GENERALSTRING_freefunc_type(sk_ASN1_GENERALSTRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_NAME"
 , "c2" : "ossl_check_X509_NAME_type(X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_NAME_sk_type(structstack_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_NAME_sk_type(structstack_st_X509_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_NAME_compfunc_type(sk_X509_NAME_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_NAME_copyfunc_type(sk_X509_NAME_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_NAME_freefunc_type(sk_X509_NAME_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509"
 , "c2" : "ossl_check_X509_type(X509*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_sk_type(structstack_st_X509*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_sk_type(structstack_st_X509*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_compfunc_type(sk_X509_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_copyfunc_type(sk_X509_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_freefunc_type(sk_X509_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_REVOKED"
 , "c2" : "ossl_check_X509_REVOKED_type(X509_REVOKED*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_REVOKED_sk_type(structstack_st_X509_REVOKED*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_REVOKED_sk_type(structstack_st_X509_REVOKED*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_REVOKED_compfunc_type(sk_X509_REVOKED_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_REVOKED_copyfunc_type(sk_X509_REVOKED_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_REVOKED_freefunc_type(sk_X509_REVOKED_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_CRL"
 , "c2" : "ossl_check_X509_CRL_type(X509_CRL*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_CRL_sk_type(structstack_st_X509_CRL*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_CRL_sk_type(structstack_st_X509_CRL*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_CRL_compfunc_type(sk_X509_CRL_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_CRL_copyfunc_type(sk_X509_CRL_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_CRL_freefunc_type(sk_X509_CRL_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_NAME_ENTRY"
 , "c2" : "ossl_check_X509_NAME_ENTRY_type(X509_NAME_ENTRY*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_NAME_ENTRY_sk_type(structstack_st_X509_NAME_ENTRY*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_NAME_ENTRY_sk_type(structstack_st_X509_NAME_ENTRY*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_NAME_ENTRY_compfunc_type(sk_X509_NAME_ENTRY_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_NAME_ENTRY_copyfunc_type(sk_X509_NAME_ENTRY_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_NAME_ENTRY_freefunc_type(sk_X509_NAME_ENTRY_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_EXTENSION"
 , "c2" : "ossl_check_X509_EXTENSION_type(X509_EXTENSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_EXTENSION_sk_type(structstack_st_X509_EXTENSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_EXTENSION_sk_type(structstack_st_X509_EXTENSION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_EXTENSION_compfunc_type(sk_X509_EXTENSION_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_EXTENSION_copyfunc_type(sk_X509_EXTENSION_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_EXTENSION_freefunc_type(sk_X509_EXTENSION_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_ATTRIBUTE"
 , "c2" : "ossl_check_X509_ATTRIBUTE_type(X509_ATTRIBUTE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_ATTRIBUTE_sk_type(structstack_st_X509_ATTRIBUTE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_ATTRIBUTE_sk_type(structstack_st_X509_ATTRIBUTE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_ATTRIBUTE_compfunc_type(sk_X509_ATTRIBUTE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_ATTRIBUTE_copyfunc_type(sk_X509_ATTRIBUTE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_ATTRIBUTE_freefunc_type(sk_X509_ATTRIBUTE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_TRUST"
 , "c2" : "ossl_check_X509_TRUST_type(X509_TRUST*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_TRUST_sk_type(structstack_st_X509_TRUST*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_TRUST_sk_type(structstack_st_X509_TRUST*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_TRUST_compfunc_type(sk_X509_TRUST_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_TRUST_copyfunc_type(sk_X509_TRUST_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_TRUST_freefunc_type(sk_X509_TRUST_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_INFO"
 , "c2" : "ossl_check_X509_INFO_type(X509_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_INFO_sk_type(structstack_st_X509_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_INFO_sk_type(structstack_st_X509_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_INFO_compfunc_type(sk_X509_INFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_INFO_copyfunc_type(sk_X509_INFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_INFO_freefunc_type(sk_X509_INFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_plain_type(OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "ossl_check_const_OPENSSL_STRING_lh_plain_type(OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_const_OPENSSL_STRING_lh_type(structlhash_st_OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_type(structlhash_st_OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_COMPFUNC"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_compfunc_type(lh_OPENSSL_STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_HASHFUNC"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_hashfunc_type(lh_OPENSSL_STRING_hashfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_DOALL_FUNC"
 , "c2" : "ossl_check_OPENSSL_STRING_lh_doallfunc_type(lh_OPENSSL_STRING_doallfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_CSTRING"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_plain_type(OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_CSTRING"
 , "c2" : "ossl_check_const_OPENSSL_CSTRING_lh_plain_type(OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_const_OPENSSL_CSTRING_lh_type(structlhash_st_OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_type(structlhash_st_OPENSSL_CSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_COMPFUNC"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_compfunc_type(lh_OPENSSL_CSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_HASHFUNC"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_hashfunc_type(lh_OPENSSL_CSTRING_hashfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_DOALL_FUNC"
 , "c2" : "ossl_check_OPENSSL_CSTRING_lh_doallfunc_type(lh_OPENSSL_CSTRING_doallfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_LOOKUP"
 , "c2" : "ossl_check_X509_LOOKUP_type(X509_LOOKUP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_LOOKUP_sk_type(structstack_st_X509_LOOKUP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_LOOKUP_sk_type(structstack_st_X509_LOOKUP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_LOOKUP_compfunc_type(sk_X509_LOOKUP_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_LOOKUP_copyfunc_type(sk_X509_LOOKUP_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_LOOKUP_freefunc_type(sk_X509_LOOKUP_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_OBJECT"
 , "c2" : "ossl_check_X509_OBJECT_type(X509_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_OBJECT_sk_type(structstack_st_X509_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_OBJECT_sk_type(structstack_st_X509_OBJECT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_OBJECT_compfunc_type(sk_X509_OBJECT_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_OBJECT_copyfunc_type(sk_X509_OBJECT_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_OBJECT_freefunc_type(sk_X509_OBJECT_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_VERIFY_PARAM"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_type(X509_VERIFY_PARAM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_VERIFY_PARAM_sk_type(structstack_st_X509_VERIFY_PARAM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_sk_type(structstack_st_X509_VERIFY_PARAM*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_compfunc_type(sk_X509_VERIFY_PARAM_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_copyfunc_type(sk_X509_VERIFY_PARAM_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_VERIFY_PARAM_freefunc_type(sk_X509_VERIFY_PARAM_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PKCS7_SIGNER_INFO"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_type(PKCS7_SIGNER_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_PKCS7_SIGNER_INFO_sk_type(structstack_st_PKCS7_SIGNER_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_sk_type(structstack_st_PKCS7_SIGNER_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_compfunc_type(sk_PKCS7_SIGNER_INFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_copyfunc_type(sk_PKCS7_SIGNER_INFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_PKCS7_SIGNER_INFO_freefunc_type(sk_PKCS7_SIGNER_INFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PKCS7_RECIP_INFO"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_type(PKCS7_RECIP_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_PKCS7_RECIP_INFO_sk_type(structstack_st_PKCS7_RECIP_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_sk_type(structstack_st_PKCS7_RECIP_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_compfunc_type(sk_PKCS7_RECIP_INFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_copyfunc_type(sk_PKCS7_RECIP_INFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_PKCS7_RECIP_INFO_freefunc_type(sk_PKCS7_RECIP_INFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PKCS7"
 , "c2" : "ossl_check_PKCS7_type(PKCS7*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_PKCS7_sk_type(structstack_st_PKCS7*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_PKCS7_sk_type(structstack_st_PKCS7*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_PKCS7_compfunc_type(sk_PKCS7_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_PKCS7_copyfunc_type(sk_PKCS7_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_PKCS7_freefunc_type(sk_PKCS7_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SCT"
 , "c2" : "ossl_check_SCT_type(SCT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SCT_sk_type(structstack_st_SCT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SCT_sk_type(structstack_st_SCT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SCT_compfunc_type(sk_SCT_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SCT_copyfunc_type(sk_SCT_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SCT_freefunc_type(sk_SCT_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CTLOG"
 , "c2" : "ossl_check_CTLOG_type(CTLOG*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_CTLOG_sk_type(structstack_st_CTLOG*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_CTLOG_sk_type(structstack_st_CTLOG*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_CTLOG_compfunc_type(sk_CTLOG_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_CTLOG_copyfunc_type(sk_CTLOG_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_CTLOG_freefunc_type(sk_CTLOG_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SRTP_PROTECTION_PROFILE"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_type(SRTP_PROTECTION_PROFILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SRTP_PROTECTION_PROFILE_sk_type(structstack_st_SRTP_PROTECTION_PROFILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_sk_type(structstack_st_SRTP_PROTECTION_PROFILE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_compfunc_type(sk_SRTP_PROTECTION_PROFILE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_copyfunc_type(sk_SRTP_PROTECTION_PROFILE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SRTP_PROTECTION_PROFILE_freefunc_type(sk_SRTP_PROTECTION_PROFILE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSL_CIPHER"
 , "c2" : "ossl_check_SSL_CIPHER_type(SSL_CIPHER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SSL_CIPHER_sk_type(structstack_st_SSL_CIPHER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SSL_CIPHER_sk_type(structstack_st_SSL_CIPHER*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SSL_CIPHER_compfunc_type(sk_SSL_CIPHER_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SSL_CIPHER_copyfunc_type(sk_SSL_CIPHER_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SSL_CIPHER_freefunc_type(sk_SSL_CIPHER_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SSL_COMP"
 , "c2" : "ossl_check_SSL_COMP_type(SSL_COMP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SSL_COMP_sk_type(structstack_st_SSL_COMP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SSL_COMP_sk_type(structstack_st_SSL_COMP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SSL_COMP_compfunc_type(sk_SSL_COMP_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SSL_COMP_copyfunc_type(sk_SSL_COMP_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SSL_COMP_freefunc_type(sk_SSL_COMP_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "read(int;void*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "readlink(char*;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "readlinkat(int;char*;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "getcwd(char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "getwd(char*)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "size_t"
 , "c2" : "confstr(int;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "getgroups(int;__gid_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "ttyname_r(int;char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "getlogin_r(char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "gethostname(char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "getdomainname(char*;size_t)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " struct cmsghdr"
 , "c2" : "__cmsg_nxthdr(structmsghdr*;structcmsghdr*)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "recv(int;void*;size_t;int)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "recvfrom(int;void*;size_t;int;structsockaddr*;socklen_t*)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "stat(char*;structstat*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "lstat(char*;structstat*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "fstat(int;structstat*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "fstatat(int;char*;structstat*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "mknod(char*;__mode_t;__dev_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int  __attribute__ (( __nothrow__ ,__leaf__))"
 , "c2" : "mknodat(int;char*;__mode_t;__dev_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "open(char*;int)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "openat(int;char*;int)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "CONF_VALUE"
 , "c2" : "ossl_check_CONF_VALUE_type(CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_CONF_VALUE_sk_type(structstack_st_CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_CONF_VALUE_sk_type(structstack_st_CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_CONF_VALUE_compfunc_type(sk_CONF_VALUE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_CONF_VALUE_copyfunc_type(sk_CONF_VALUE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_CONF_VALUE_freefunc_type(sk_CONF_VALUE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CONF_VALUE"
 , "c2" : "ossl_check_CONF_VALUE_lh_plain_type(CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CONF_VALUE"
 , "c2" : "ossl_check_const_CONF_VALUE_lh_plain_type(CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_const_CONF_VALUE_lh_type(structlhash_st_CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_CONF_VALUE_lh_type(structlhash_st_CONF_VALUE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_COMPFUNC"
 , "c2" : "ossl_check_CONF_VALUE_lh_compfunc_type(lh_CONF_VALUE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_HASHFUNC"
 , "c2" : "ossl_check_CONF_VALUE_lh_hashfunc_type(lh_CONF_VALUE_hashfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_DOALL_FUNC"
 , "c2" : "ossl_check_CONF_VALUE_lh_doallfunc_type(lh_CONF_VALUE_doallfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_num(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_value(structstack_st_OPENSSL_PSTRING*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_new(sk_OPENSSL_PSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_new_null(void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_new_reserve(sk_OPENSSL_PSTRING_compfunc;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_reserve(structstack_st_OPENSSL_PSTRING*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_OPENSSL_PSTRING_free(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_OPENSSL_PSTRING_zero(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_delete(structstack_st_OPENSSL_PSTRING*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_delete_ptr(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_push(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_unshift(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_pop(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_shift(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_OPENSSL_PSTRING_pop_free(structstack_st_OPENSSL_PSTRING*;sk_OPENSSL_PSTRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_insert(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STRING"
 , "c2" : "sk_OPENSSL_PSTRING_set(structstack_st_OPENSSL_PSTRING*;int;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_find(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_find_ex(structstack_st_OPENSSL_PSTRING*;OPENSSL_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "sk_OPENSSL_PSTRING_sort(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sk_OPENSSL_PSTRING_is_sorted(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_dup(structstack_st_OPENSSL_PSTRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct stack_st_OPENSSL_PSTRING"
 , "c2" : "sk_OPENSSL_PSTRING_deep_copy(structstack_st_OPENSSL_PSTRING*;sk_OPENSSL_PSTRING_copyfunc;sk_OPENSSL_PSTRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "sk_OPENSSL_PSTRING_compfunc"
 , "c2" : "sk_OPENSSL_PSTRING_set_cmp_func(structstack_st_OPENSSL_PSTRING*;sk_OPENSSL_PSTRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "UI_STRING"
 , "c2" : "ossl_check_UI_STRING_type(UI_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_UI_STRING_sk_type(structstack_st_UI_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_UI_STRING_sk_type(structstack_st_UI_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_UI_STRING_compfunc_type(sk_UI_STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_UI_STRING_copyfunc_type(sk_UI_STRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_UI_STRING_freefunc_type(sk_UI_STRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_GET_LIB(unsignedlong)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_GET_FUNC(unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_GET_RFLAGS(unsignedlong)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_GET_REASON(unsignedlong)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_FATAL_ERROR(unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ERR_COMMON_ERROR(unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ERR_STRING_DATA"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_plain_type(ERR_STRING_DATA*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ERR_STRING_DATA"
 , "c2" : "ossl_check_const_ERR_STRING_DATA_lh_plain_type(ERR_STRING_DATA*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_const_ERR_STRING_DATA_lh_type(structlhash_st_ERR_STRING_DATA*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LHASH"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_type(structlhash_st_ERR_STRING_DATA*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_COMPFUNC"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_compfunc_type(lh_ERR_STRING_DATA_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_HASHFUNC"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_hashfunc_type(lh_ERR_STRING_DATA_hashfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_LH_DOALL_FUNC"
 , "c2" : "ossl_check_ERR_STRING_DATA_lh_doallfunc_type(lh_ERR_STRING_DATA_doallfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509V3_EXT_METHOD"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_type(X509V3_EXT_METHOD*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509V3_EXT_METHOD_sk_type(structstack_st_X509V3_EXT_METHOD*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_sk_type(structstack_st_X509V3_EXT_METHOD*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_compfunc_type(sk_X509V3_EXT_METHOD_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_copyfunc_type(sk_X509V3_EXT_METHOD_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509V3_EXT_METHOD_freefunc_type(sk_X509V3_EXT_METHOD_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ACCESS_DESCRIPTION"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_type(ACCESS_DESCRIPTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ACCESS_DESCRIPTION_sk_type(structstack_st_ACCESS_DESCRIPTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_sk_type(structstack_st_ACCESS_DESCRIPTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_compfunc_type(sk_ACCESS_DESCRIPTION_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_copyfunc_type(sk_ACCESS_DESCRIPTION_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ACCESS_DESCRIPTION_freefunc_type(sk_ACCESS_DESCRIPTION_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GENERAL_NAME"
 , "c2" : "ossl_check_GENERAL_NAME_type(GENERAL_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_GENERAL_NAME_sk_type(structstack_st_GENERAL_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_GENERAL_NAME_sk_type(structstack_st_GENERAL_NAME*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_GENERAL_NAME_compfunc_type(sk_GENERAL_NAME_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_GENERAL_NAME_copyfunc_type(sk_GENERAL_NAME_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_GENERAL_NAME_freefunc_type(sk_GENERAL_NAME_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GENERAL_NAMES"
 , "c2" : "ossl_check_GENERAL_NAMES_type(GENERAL_NAMES*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_GENERAL_NAMES_sk_type(structstack_st_GENERAL_NAMES*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_GENERAL_NAMES_sk_type(structstack_st_GENERAL_NAMES*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_GENERAL_NAMES_compfunc_type(sk_GENERAL_NAMES_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_GENERAL_NAMES_copyfunc_type(sk_GENERAL_NAMES_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_GENERAL_NAMES_freefunc_type(sk_GENERAL_NAMES_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DIST_POINT"
 , "c2" : "ossl_check_DIST_POINT_type(DIST_POINT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_DIST_POINT_sk_type(structstack_st_DIST_POINT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_DIST_POINT_sk_type(structstack_st_DIST_POINT*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_DIST_POINT_compfunc_type(sk_DIST_POINT_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_DIST_POINT_copyfunc_type(sk_DIST_POINT_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_DIST_POINT_freefunc_type(sk_DIST_POINT_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SXNETID"
 , "c2" : "ossl_check_SXNETID_type(SXNETID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SXNETID_sk_type(structstack_st_SXNETID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SXNETID_sk_type(structstack_st_SXNETID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SXNETID_compfunc_type(sk_SXNETID_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SXNETID_copyfunc_type(sk_SXNETID_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SXNETID_freefunc_type(sk_SXNETID_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "POLICYQUALINFO"
 , "c2" : "ossl_check_POLICYQUALINFO_type(POLICYQUALINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_POLICYQUALINFO_sk_type(structstack_st_POLICYQUALINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_POLICYQUALINFO_sk_type(structstack_st_POLICYQUALINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_POLICYQUALINFO_compfunc_type(sk_POLICYQUALINFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_POLICYQUALINFO_copyfunc_type(sk_POLICYQUALINFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_POLICYQUALINFO_freefunc_type(sk_POLICYQUALINFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "POLICYINFO"
 , "c2" : "ossl_check_POLICYINFO_type(POLICYINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_POLICYINFO_sk_type(structstack_st_POLICYINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_POLICYINFO_sk_type(structstack_st_POLICYINFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_POLICYINFO_compfunc_type(sk_POLICYINFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_POLICYINFO_copyfunc_type(sk_POLICYINFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_POLICYINFO_freefunc_type(sk_POLICYINFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "POLICY_MAPPING"
 , "c2" : "ossl_check_POLICY_MAPPING_type(POLICY_MAPPING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_POLICY_MAPPING_sk_type(structstack_st_POLICY_MAPPING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_POLICY_MAPPING_sk_type(structstack_st_POLICY_MAPPING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_POLICY_MAPPING_compfunc_type(sk_POLICY_MAPPING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_POLICY_MAPPING_copyfunc_type(sk_POLICY_MAPPING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_POLICY_MAPPING_freefunc_type(sk_POLICY_MAPPING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GENERAL_SUBTREE"
 , "c2" : "ossl_check_GENERAL_SUBTREE_type(GENERAL_SUBTREE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_GENERAL_SUBTREE_sk_type(structstack_st_GENERAL_SUBTREE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_GENERAL_SUBTREE_sk_type(structstack_st_GENERAL_SUBTREE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_GENERAL_SUBTREE_compfunc_type(sk_GENERAL_SUBTREE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_GENERAL_SUBTREE_copyfunc_type(sk_GENERAL_SUBTREE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_GENERAL_SUBTREE_freefunc_type(sk_GENERAL_SUBTREE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_PURPOSE"
 , "c2" : "ossl_check_X509_PURPOSE_type(X509_PURPOSE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_PURPOSE_sk_type(structstack_st_X509_PURPOSE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_PURPOSE_sk_type(structstack_st_X509_PURPOSE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_PURPOSE_compfunc_type(sk_X509_PURPOSE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_PURPOSE_copyfunc_type(sk_X509_PURPOSE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_PURPOSE_freefunc_type(sk_X509_PURPOSE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "X509_POLICY_NODE"
 , "c2" : "ossl_check_X509_POLICY_NODE_type(X509_POLICY_NODE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_X509_POLICY_NODE_sk_type(structstack_st_X509_POLICY_NODE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_X509_POLICY_NODE_sk_type(structstack_st_X509_POLICY_NODE*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_X509_POLICY_NODE_compfunc_type(sk_X509_POLICY_NODE_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_X509_POLICY_NODE_copyfunc_type(sk_X509_POLICY_NODE_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_X509_POLICY_NODE_freefunc_type(sk_X509_POLICY_NODE_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASIdOrRange"
 , "c2" : "ossl_check_ASIdOrRange_type(ASIdOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASIdOrRange_sk_type(structstack_st_ASIdOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASIdOrRange_sk_type(structstack_st_ASIdOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASIdOrRange_compfunc_type(sk_ASIdOrRange_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASIdOrRange_copyfunc_type(sk_ASIdOrRange_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASIdOrRange_freefunc_type(sk_ASIdOrRange_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "IPAddressOrRange"
 , "c2" : "ossl_check_IPAddressOrRange_type(IPAddressOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_IPAddressOrRange_sk_type(structstack_st_IPAddressOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_IPAddressOrRange_sk_type(structstack_st_IPAddressOrRange*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_IPAddressOrRange_compfunc_type(sk_IPAddressOrRange_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_IPAddressOrRange_copyfunc_type(sk_IPAddressOrRange_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_IPAddressOrRange_freefunc_type(sk_IPAddressOrRange_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "IPAddressFamily"
 , "c2" : "ossl_check_IPAddressFamily_type(IPAddressFamily*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_IPAddressFamily_sk_type(structstack_st_IPAddressFamily*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_IPAddressFamily_sk_type(structstack_st_IPAddressFamily*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_IPAddressFamily_compfunc_type(sk_IPAddressFamily_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_IPAddressFamily_copyfunc_type(sk_IPAddressFamily_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_IPAddressFamily_freefunc_type(sk_IPAddressFamily_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ASN1_STRING"
 , "c2" : "ossl_check_ASN1_STRING_type(ASN1_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ASN1_STRING_sk_type(structstack_st_ASN1_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ASN1_STRING_sk_type(structstack_st_ASN1_STRING*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ASN1_STRING_compfunc_type(sk_ASN1_STRING_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ASN1_STRING_copyfunc_type(sk_ASN1_STRING_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ASN1_STRING_freefunc_type(sk_ASN1_STRING_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PROFESSION_INFO"
 , "c2" : "ossl_check_PROFESSION_INFO_type(PROFESSION_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_PROFESSION_INFO_sk_type(structstack_st_PROFESSION_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_PROFESSION_INFO_sk_type(structstack_st_PROFESSION_INFO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_PROFESSION_INFO_compfunc_type(sk_PROFESSION_INFO_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_PROFESSION_INFO_copyfunc_type(sk_PROFESSION_INFO_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_PROFESSION_INFO_freefunc_type(sk_PROFESSION_INFO_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ADMISSIONS"
 , "c2" : "ossl_check_ADMISSIONS_type(ADMISSIONS*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_ADMISSIONS_sk_type(structstack_st_ADMISSIONS*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_ADMISSIONS_sk_type(structstack_st_ADMISSIONS*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_ADMISSIONS_compfunc_type(sk_ADMISSIONS_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_ADMISSIONS_copyfunc_type(sk_ADMISSIONS_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_ADMISSIONS_freefunc_type(sk_ADMISSIONS_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OCSP_CERTID"
 , "c2" : "ossl_check_OCSP_CERTID_type(OCSP_CERTID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OCSP_CERTID_sk_type(structstack_st_OCSP_CERTID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OCSP_CERTID_sk_type(structstack_st_OCSP_CERTID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OCSP_CERTID_compfunc_type(sk_OCSP_CERTID_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OCSP_CERTID_copyfunc_type(sk_OCSP_CERTID_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OCSP_CERTID_freefunc_type(sk_OCSP_CERTID_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OCSP_ONEREQ"
 , "c2" : "ossl_check_OCSP_ONEREQ_type(OCSP_ONEREQ*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OCSP_ONEREQ_sk_type(structstack_st_OCSP_ONEREQ*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OCSP_ONEREQ_sk_type(structstack_st_OCSP_ONEREQ*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OCSP_ONEREQ_compfunc_type(sk_OCSP_ONEREQ_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OCSP_ONEREQ_copyfunc_type(sk_OCSP_ONEREQ_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OCSP_ONEREQ_freefunc_type(sk_OCSP_ONEREQ_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OCSP_RESPID"
 , "c2" : "ossl_check_OCSP_RESPID_type(OCSP_RESPID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OCSP_RESPID_sk_type(structstack_st_OCSP_RESPID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OCSP_RESPID_sk_type(structstack_st_OCSP_RESPID*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OCSP_RESPID_compfunc_type(sk_OCSP_RESPID_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OCSP_RESPID_copyfunc_type(sk_OCSP_RESPID_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OCSP_RESPID_freefunc_type(sk_OCSP_RESPID_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OCSP_SINGLERESP"
 , "c2" : "ossl_check_OCSP_SINGLERESP_type(OCSP_SINGLERESP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_OCSP_SINGLERESP_sk_type(structstack_st_OCSP_SINGLERESP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_OCSP_SINGLERESP_sk_type(structstack_st_OCSP_SINGLERESP*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_OCSP_SINGLERESP_compfunc_type(sk_OCSP_SINGLERESP_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_OCSP_SINGLERESP_copyfunc_type(sk_OCSP_SINGLERESP_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_OCSP_SINGLERESP_freefunc_type(sk_OCSP_SINGLERESP_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " struct lhash_st_FUNCTION"
 , "c2" : "lh_FUNCTION_new(unsignedlong;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_free(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_flush(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FUNCTION"
 , "c2" : "lh_FUNCTION_insert(structlhash_st_FUNCTION*;FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FUNCTION"
 , "c2" : "lh_FUNCTION_delete(structlhash_st_FUNCTION*;FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FUNCTION"
 , "c2" : "lh_FUNCTION_retrieve(structlhash_st_FUNCTION*;FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "lh_FUNCTION_error(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_FUNCTION_num_items(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_node_stats_bio(structlhash_st_FUNCTION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_node_usage_stats_bio(structlhash_st_FUNCTION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_stats_bio(structlhash_st_FUNCTION*;BIO*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  long "
 , "c2" : "lh_FUNCTION_get_down_load(structlhash_st_FUNCTION*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_set_down_load(structlhash_st_FUNCTION*;unsignedlong)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "lh_FUNCTION_doall(structlhash_st_FUNCTION*;void)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SRP_gN_cache"
 , "c2" : "ossl_check_SRP_gN_cache_type(SRP_gN_cache*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SRP_gN_cache_sk_type(structstack_st_SRP_gN_cache*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SRP_gN_cache_sk_type(structstack_st_SRP_gN_cache*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SRP_gN_cache_compfunc_type(sk_SRP_gN_cache_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SRP_gN_cache_copyfunc_type(sk_SRP_gN_cache_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SRP_gN_cache_freefunc_type(sk_SRP_gN_cache_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SRP_user_pwd"
 , "c2" : "ossl_check_SRP_user_pwd_type(SRP_user_pwd*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SRP_user_pwd_sk_type(structstack_st_SRP_user_pwd*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SRP_user_pwd_sk_type(structstack_st_SRP_user_pwd*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SRP_user_pwd_compfunc_type(sk_SRP_user_pwd_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SRP_user_pwd_copyfunc_type(sk_SRP_user_pwd_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SRP_user_pwd_freefunc_type(sk_SRP_user_pwd_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SRP_gN"
 , "c2" : "ossl_check_SRP_gN_type(SRP_gN*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_const_SRP_gN_sk_type(structstack_st_SRP_gN*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_STACK"
 , "c2" : "ossl_check_SRP_gN_sk_type(structstack_st_SRP_gN*)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_compfunc"
 , "c2" : "ossl_check_SRP_gN_compfunc_type(sk_SRP_gN_compfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_copyfunc"
 , "c2" : "ossl_check_SRP_gN_copyfunc_type(sk_SRP_gN_copyfunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OPENSSL_sk_freefunc"
 , "c2" : "ossl_check_SRP_gN_freefunc_type(sk_SRP_gN_freefunc)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  int "
 , "c2" : "psk_server_cb(SSL*;char*;unsignedchar*;unsignedint)"
 , "c3" : "11"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "psk_find_session_cb(SSL*;unsignedchar*;size_t;SSL_SESSION*)"
 , "c3" : "6"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl_srp_server_param_cb(SSL*;int*;void*)"
 , "c3" : "4"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl_servername_cb(SSL*;int*;void*)"
 , "c3" : "7"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "get_ocsp_resp_from_responder(SSL*;tlsextstatusctx*;OCSP_RESPONSE*)"
 , "c3" : "16"
 , "c4" : "54"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "cert_status_cb(SSL*;void*)"
 , "c3" : "10"
 , "c4" : "24"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "next_proto_cb(SSL*;unsignedchar*;unsignedint*;void*)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "alpn_cb(SSL*;unsignedchar*;unsignedchar*;unsignedchar*;unsignedint;void*)"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "not_resumable_sess_cb(SSL*;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "s_server_main(int;char*)"
 , "c3" : "375"
 , "c4" : "642"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "print_stats(BIO*;SSL_CTX*)"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "sv_body(int;int;int;unsignedchar*)"
 , "c3" : "100"
 , "c4" : "222"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "close_accept_socket(void)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "is_retryable(SSL*;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "init_ssl_connection(SSL*)"
 , "c3" : "22"
 , "c4" : "40"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "print_connection_info(SSL*)"
 , "c3" : "12"
 , "c4" : "42"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "www_body(int;int;int;unsignedchar*)"
 , "c3" : "72"
 , "c4" : "193"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "rev_body(int;int;int;unsignedchar*)"
 , "c3" : "30"
 , "c4" : "75"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "generate_session_id(SSL*;unsignedchar*;unsignedint*)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "add_session(SSL*;SSL_SESSION*)"
 , "c3" : "4"
 , "c4" : "24"
}} 
,
{ "ligne" : {
   "c1" : "SSL_SESSION"
 , "c2" : "get_session(SSL*;unsignedchar*;int;int*)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "del_session(SSL_CTX*;SSL_SESSION*)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "init_session_cache_ctx(SSL_CTX*)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "free_sessions(void)"
 , "c3" : "2"
 , "c4" : "9"
}} 
] 
}} 
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
 , "c4" : "33"
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
 , "c4" : "128"
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
   "c1" : "MINOR"
 , "c2" : "QC-CPP000013"
 , "c3" : "Inline assembly code"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03820"
 , "c1link" : "./qc/apps/s_server.c.html#3820"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03820] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05853"
 , "c1link" : "./qc/apps/s_server.c.html#5853"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05853] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05855"
 , "c1link" : "./qc/apps/s_server.c.html#5855"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05855] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06222"
 , "c1link" : "./qc/apps/s_server.c.html#6222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06222] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06418"
 , "c1link" : "./qc/apps/s_server.c.html#6418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06418] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06419"
 , "c1link" : "./qc/apps/s_server.c.html#6419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06419] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06420"
 , "c1link" : "./qc/apps/s_server.c.html#6420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06420] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06424"
 , "c1link" : "./qc/apps/s_server.c.html#6424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06424] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07010"
 , "c1link" : "./qc/apps/s_server.c.html#7010"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07010] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07012"
 , "c1link" : "./qc/apps/s_server.c.html#7012"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07012] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07015"
 , "c1link" : "./qc/apps/s_server.c.html#7015"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07015] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07854"
 , "c1link" : "./qc/apps/s_server.c.html#7854"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07854] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09285"
 , "c1link" : "./qc/apps/s_server.c.html#9285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09285] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09307"
 , "c1link" : "./qc/apps/s_server.c.html#9307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09307] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09313"
 , "c1link" : "./qc/apps/s_server.c.html#9313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09313] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09333"
 , "c1link" : "./qc/apps/s_server.c.html#9333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09333] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09339"
 , "c1link" : "./qc/apps/s_server.c.html#9339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09339] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10486"
 , "c1link" : "./qc/apps/s_server.c.html#10486"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10486] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10487"
 , "c1link" : "./qc/apps/s_server.c.html#10487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10487] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11166"
 , "c1link" : "./qc/apps/s_server.c.html#11166"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11166] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12182"
 , "c1link" : "./qc/apps/s_server.c.html#12182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12182] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12184"
 , "c1link" : "./qc/apps/s_server.c.html#12184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12184] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19357"
 , "c1link" : "./qc/apps/s_server.c.html#19357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19357] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19663"
 , "c1link" : "./qc/apps/s_server.c.html#19663"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19663] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20150"
 , "c1link" : "./qc/apps/s_server.c.html#20150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20150] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20152"
 , "c1link" : "./qc/apps/s_server.c.html#20152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20152] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20160"
 , "c1link" : "./qc/apps/s_server.c.html#20160"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20160] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20162"
 , "c1link" : "./qc/apps/s_server.c.html#20162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20162] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20171"
 , "c1link" : "./qc/apps/s_server.c.html#20171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20171] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20197"
 , "c1link" : "./qc/apps/s_server.c.html#20197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20197] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20201"
 , "c1link" : "./qc/apps/s_server.c.html#20201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20201] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20225"
 , "c1link" : "./qc/apps/s_server.c.html#20225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20225] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20328"
 , "c1link" : "./qc/apps/s_server.c.html#20328"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20328] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20335"
 , "c1link" : "./qc/apps/s_server.c.html#20335"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20335] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20386"
 , "c1link" : "./qc/apps/s_server.c.html#20386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20386] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20501"
 , "c1link" : "./qc/apps/s_server.c.html#20501"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20501] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20514"
 , "c1link" : "./qc/apps/s_server.c.html#20514"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20514] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "20528"
 , "c1link" : "./qc/apps/s_server.c.html#20528"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20528] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20540"
 , "c1link" : "./qc/apps/s_server.c.html#20540"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20540] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20549"
 , "c1link" : "./qc/apps/s_server.c.html#20549"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20549] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "20562"
 , "c1link" : "./qc/apps/s_server.c.html#20562"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20562] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20569"
 , "c1link" : "./qc/apps/s_server.c.html#20569"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20569] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20571"
 , "c1link" : "./qc/apps/s_server.c.html#20571"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20571] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20582"
 , "c1link" : "./qc/apps/s_server.c.html#20582"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20582] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20596"
 , "c1link" : "./qc/apps/s_server.c.html#20596"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20596] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "20600"
 , "c1link" : "./qc/apps/s_server.c.html#20600"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20600] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "20638"
 , "c1link" : "./qc/apps/s_server.c.html#20638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20638] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20661"
 , "c1link" : "./qc/apps/s_server.c.html#20661"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20661] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20675"
 , "c1link" : "./qc/apps/s_server.c.html#20675"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20675] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20680"
 , "c1link" : "./qc/apps/s_server.c.html#20680"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20680] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20685"
 , "c1link" : "./qc/apps/s_server.c.html#20685"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20685] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20735"
 , "c1link" : "./qc/apps/s_server.c.html#20735"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20735] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20740"
 , "c1link" : "./qc/apps/s_server.c.html#20740"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20740] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20754"
 , "c1link" : "./qc/apps/s_server.c.html#20754"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20754] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21206"
 , "c1link" : "./qc/apps/s_server.c.html#21206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21206] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21349"
 , "c1link" : "./qc/apps/s_server.c.html#21349"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21349] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21354"
 , "c1link" : "./qc/apps/s_server.c.html#21354"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21354] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21379"
 , "c1link" : "./qc/apps/s_server.c.html#21379"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21379] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21384"
 , "c1link" : "./qc/apps/s_server.c.html#21384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21384] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21387"
 , "c1link" : "./qc/apps/s_server.c.html#21387"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21387] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21394"
 , "c1link" : "./qc/apps/s_server.c.html#21394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21394] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21399"
 , "c1link" : "./qc/apps/s_server.c.html#21399"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[21399] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21401"
 , "c1link" : "./qc/apps/s_server.c.html#21401"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21401] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21405"
 , "c1link" : "./qc/apps/s_server.c.html#21405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21405] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21433"
 , "c1link" : "./qc/apps/s_server.c.html#21433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21433] The expression 1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21433"
 , "c1link" : "./qc/apps/s_server.c.html#21433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21433] The expression 1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21461"
 , "c1link" : "./qc/apps/s_server.c.html#21461"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21461] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21496"
 , "c1link" : "./qc/apps/s_server.c.html#21496"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21496] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21527"
 , "c1link" : "./qc/apps/s_server.c.html#21527"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21527] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21554"
 , "c1link" : "./qc/apps/s_server.c.html#21554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21554] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21562"
 , "c1link" : "./qc/apps/s_server.c.html#21562"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21562] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21575"
 , "c1link" : "./qc/apps/s_server.c.html#21575"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21575] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21588"
 , "c1link" : "./qc/apps/s_server.c.html#21588"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21588] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21595"
 , "c1link" : "./qc/apps/s_server.c.html#21595"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21595] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21608"
 , "c1link" : "./qc/apps/s_server.c.html#21608"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21608] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21615"
 , "c1link" : "./qc/apps/s_server.c.html#21615"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21615] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21661"
 , "c1link" : "./qc/apps/s_server.c.html#21661"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21661] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21681"
 , "c1link" : "./qc/apps/s_server.c.html#21681"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21681] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21686"
 , "c1link" : "./qc/apps/s_server.c.html#21686"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21686] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21691"
 , "c1link" : "./qc/apps/s_server.c.html#21691"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21691] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21718"
 , "c1link" : "./qc/apps/s_server.c.html#21718"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21718] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21739"
 , "c1link" : "./qc/apps/s_server.c.html#21739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21739] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21759"
 , "c1link" : "./qc/apps/s_server.c.html#21759"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21759] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21796"
 , "c1link" : "./qc/apps/s_server.c.html#21796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21796] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21796"
 , "c1link" : "./qc/apps/s_server.c.html#21796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21796] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21813"
 , "c1link" : "./qc/apps/s_server.c.html#21813"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21813] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21825"
 , "c1link" : "./qc/apps/s_server.c.html#21825"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21825] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21952"
 , "c1link" : "./qc/apps/s_server.c.html#21952"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21952] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21956"
 , "c1link" : "./qc/apps/s_server.c.html#21956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21956] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22011"
 , "c1link" : "./qc/apps/s_server.c.html#22011"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22011] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22018"
 , "c1link" : "./qc/apps/s_server.c.html#22018"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22018] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22046"
 , "c1link" : "./qc/apps/s_server.c.html#22046"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22046] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22055"
 , "c1link" : "./qc/apps/s_server.c.html#22055"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22055] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22065"
 , "c1link" : "./qc/apps/s_server.c.html#22065"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22065] goto statement jump to end"
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
   "c1" : "22084"
 , "c1link" : "./qc/apps/s_server.c.html#22084"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22084] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22099"
 , "c1link" : "./qc/apps/s_server.c.html#22099"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22099] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22105"
 , "c1link" : "./qc/apps/s_server.c.html#22105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22105] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22110"
 , "c1link" : "./qc/apps/s_server.c.html#22110"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22110] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22128"
 , "c1link" : "./qc/apps/s_server.c.html#22128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22128] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22138"
 , "c1link" : "./qc/apps/s_server.c.html#22138"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22138] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22147"
 , "c1link" : "./qc/apps/s_server.c.html#22147"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22147] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22159"
 , "c1link" : "./qc/apps/s_server.c.html#22159"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22159] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22174"
 , "c1link" : "./qc/apps/s_server.c.html#22174"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22174] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22184"
 , "c1link" : "./qc/apps/s_server.c.html#22184"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22184] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22188"
 , "c1link" : "./qc/apps/s_server.c.html#22188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22188] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22195"
 , "c1link" : "./qc/apps/s_server.c.html#22195"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22195] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22203"
 , "c1link" : "./qc/apps/s_server.c.html#22203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22203] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22210"
 , "c1link" : "./qc/apps/s_server.c.html#22210"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22210] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22225"
 , "c1link" : "./qc/apps/s_server.c.html#22225"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22225] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22235"
 , "c1link" : "./qc/apps/s_server.c.html#22235"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22235] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22259"
 , "c1link" : "./qc/apps/s_server.c.html#22259"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22259] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22270"
 , "c1link" : "./qc/apps/s_server.c.html#22270"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22270] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22283"
 , "c1link" : "./qc/apps/s_server.c.html#22283"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22283] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22310"
 , "c1link" : "./qc/apps/s_server.c.html#22310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22310] The expression nocert applies to a single value or variable, might be ambiguous."
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
   "c1" : "22359"
 , "c1link" : "./qc/apps/s_server.c.html#22359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22359] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22363"
 , "c1link" : "./qc/apps/s_server.c.html#22363"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22363] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22365"
 , "c1link" : "./qc/apps/s_server.c.html#22365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22365] The expression ssl_config applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22370"
 , "c1link" : "./qc/apps/s_server.c.html#22370"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22370] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22384"
 , "c1link" : "./qc/apps/s_server.c.html#22384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22384] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22391"
 , "c1link" : "./qc/apps/s_server.c.html#22391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22391] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22393"
 , "c1link" : "./qc/apps/s_server.c.html#22393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22393] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22400"
 , "c1link" : "./qc/apps/s_server.c.html#22400"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22400] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22411"
 , "c1link" : "./qc/apps/s_server.c.html#22411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22411] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22413"
 , "c1link" : "./qc/apps/s_server.c.html#22413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22413] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22419"
 , "c1link" : "./qc/apps/s_server.c.html#22419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22419] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22428"
 , "c1link" : "./qc/apps/s_server.c.html#22428"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22428] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22436"
 , "c1link" : "./qc/apps/s_server.c.html#22436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22436] The expression no_ca_names applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22440"
 , "c1link" : "./qc/apps/s_server.c.html#22440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22440] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22451"
 , "c1link" : "./qc/apps/s_server.c.html#22451"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22451] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22462"
 , "c1link" : "./qc/apps/s_server.c.html#22462"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22462] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22472"
 , "c1link" : "./qc/apps/s_server.c.html#22472"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22472] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22488"
 , "c1link" : "./qc/apps/s_server.c.html#22488"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22488] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22496"
 , "c1link" : "./qc/apps/s_server.c.html#22496"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22496] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22501"
 , "c1link" : "./qc/apps/s_server.c.html#22501"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22501] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22512"
 , "c1link" : "./qc/apps/s_server.c.html#22512"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22512] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22515"
 , "c1link" : "./qc/apps/s_server.c.html#22515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22515] The expression s_cert2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22523"
 , "c1link" : "./qc/apps/s_server.c.html#22523"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22523] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22534"
 , "c1link" : "./qc/apps/s_server.c.html#22534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22534] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22537"
 , "c1link" : "./qc/apps/s_server.c.html#22537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22537] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22544"
 , "c1link" : "./qc/apps/s_server.c.html#22544"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22544] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22555"
 , "c1link" : "./qc/apps/s_server.c.html#22555"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22555] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22558"
 , "c1link" : "./qc/apps/s_server.c.html#22558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22558] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22564"
 , "c1link" : "./qc/apps/s_server.c.html#22564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22564] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22573"
 , "c1link" : "./qc/apps/s_server.c.html#22573"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22573] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22583"
 , "c1link" : "./qc/apps/s_server.c.html#22583"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22583] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22588"
 , "c1link" : "./qc/apps/s_server.c.html#22588"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22588] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22593"
 , "c1link" : "./qc/apps/s_server.c.html#22593"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22593] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22603"
 , "c1link" : "./qc/apps/s_server.c.html#22603"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22603] The expression  ! no_dhe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22655"
 , "c1link" : "./qc/apps/s_server.c.html#22655"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22655] goto statement jump to end"
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
   "c1" : "22710"
 , "c1link" : "./qc/apps/s_server.c.html#22710"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22710] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22722"
 , "c1link" : "./qc/apps/s_server.c.html#22722"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22722] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22731"
 , "c1link" : "./qc/apps/s_server.c.html#22731"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22731] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22744"
 , "c1link" : "./qc/apps/s_server.c.html#22744"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22744] goto statement jump to end"
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
   "c1" : "22755"
 , "c1link" : "./qc/apps/s_server.c.html#22755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22755] The expression no_resume_ephemeral applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22773"
 , "c1link" : "./qc/apps/s_server.c.html#22773"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22773] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22789"
 , "c1link" : "./qc/apps/s_server.c.html#22789"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22789] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22808"
 , "c1link" : "./qc/apps/s_server.c.html#22808"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22808] goto statement jump to end"
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
   "c1" : "22849"
 , "c1link" : "./qc/apps/s_server.c.html#22849"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22849] goto statement jump to end"
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
   "c1" : "22897"
 , "c1link" : "./qc/apps/s_server.c.html#22897"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22897] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22903"
 , "c1link" : "./qc/apps/s_server.c.html#22903"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22903] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22917"
 , "c1link" : "./qc/apps/s_server.c.html#22917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22917] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22921"
 , "c1link" : "./qc/apps/s_server.c.html#22921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22921] The expression s_tlsextstatus applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22924"
 , "c1link" : "./qc/apps/s_server.c.html#22924"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22924] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22931"
 , "c1link" : "./qc/apps/s_server.c.html#22931"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22931] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22938"
 , "c1link" : "./qc/apps/s_server.c.html#22938"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22938] The expression rev applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22940"
 , "c1link" : "./qc/apps/s_server.c.html#22940"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22940] The expression www applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23128"
 , "c1link" : "./qc/apps/s_server.c.html#23128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23128] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23131"
 , "c1link" : "./qc/apps/s_server.c.html#23131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23131] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23142"
 , "c1link" : "./qc/apps/s_server.c.html#23142"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23142] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23145"
 , "c1link" : "./qc/apps/s_server.c.html#23145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23145] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23159"
 , "c1link" : "./qc/apps/s_server.c.html#23159"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23159] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23165"
 , "c1link" : "./qc/apps/s_server.c.html#23165"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23165] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23168"
 , "c1link" : "./qc/apps/s_server.c.html#23168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23168] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23176"
 , "c1link" : "./qc/apps/s_server.c.html#23176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23176] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23186"
 , "c1link" : "./qc/apps/s_server.c.html#23186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23186] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23200"
 , "c1link" : "./qc/apps/s_server.c.html#23200"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23200] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23211"
 , "c1link" : "./qc/apps/s_server.c.html#23211"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23211] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23237"
 , "c1link" : "./qc/apps/s_server.c.html#23237"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23237] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23240"
 , "c1link" : "./qc/apps/s_server.c.html#23240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23240] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23251"
 , "c1link" : "./qc/apps/s_server.c.html#23251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23251] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23255"
 , "c1link" : "./qc/apps/s_server.c.html#23255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23255] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23265"
 , "c1link" : "./qc/apps/s_server.c.html#23265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23265] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23270"
 , "c1link" : "./qc/apps/s_server.c.html#23270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23270] The expression early_data applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23289"
 , "c1link" : "./qc/apps/s_server.c.html#23289"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23289] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23293"
 , "c1link" : "./qc/apps/s_server.c.html#23293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23293] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23305"
 , "c1link" : "./qc/apps/s_server.c.html#23305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23305] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23329"
 , "c1link" : "./qc/apps/s_server.c.html#23329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23329] The expression  ! read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23332"
 , "c1link" : "./qc/apps/s_server.c.html#23332"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23332] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23332"
 , "c1link" : "./qc/apps/s_server.c.html#23332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23332] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23336"
 , "c1link" : "./qc/apps/s_server.c.html#23336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23336] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23336"
 , "c1link" : "./qc/apps/s_server.c.html#23336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23336] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23342"
 , "c1link" : "./qc/apps/s_server.c.html#23342"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23342] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23342"
 , "c1link" : "./qc/apps/s_server.c.html#23342"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23342] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23360"
 , "c1link" : "./qc/apps/s_server.c.html#23360"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23360] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23360"
 , "c1link" : "./qc/apps/s_server.c.html#23360"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23360] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23442"
 , "c1link" : "./qc/apps/s_server.c.html#23442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23442] The expression read_from_terminal applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23443"
 , "c1link" : "./qc/apps/s_server.c.html#23443"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23443] The expression s_crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23480"
 , "c1link" : "./qc/apps/s_server.c.html#23480"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23480] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23494"
 , "c1link" : "./qc/apps/s_server.c.html#23494"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23494] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23555"
 , "c1link" : "./qc/apps/s_server.c.html#23555"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23555] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23610"
 , "c1link" : "./qc/apps/s_server.c.html#23610"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23610] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23620"
 , "c1link" : "./qc/apps/s_server.c.html#23620"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23620] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23630"
 , "c1link" : "./qc/apps/s_server.c.html#23630"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23630] The expression read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23642"
 , "c1link" : "./qc/apps/s_server.c.html#23642"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23642] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23645"
 , "c1link" : "./qc/apps/s_server.c.html#23645"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23645] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23677"
 , "c1link" : "./qc/apps/s_server.c.html#23677"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23677] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "23711"
 , "c1link" : "./qc/apps/s_server.c.html#23711"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23711] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23720"
 , "c1link" : "./qc/apps/s_server.c.html#23720"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23720] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23771"
 , "c1link" : "./qc/apps/s_server.c.html#23771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23771] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23772"
 , "c1link" : "./qc/apps/s_server.c.html#23772"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23772] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23788"
 , "c1link" : "./qc/apps/s_server.c.html#23788"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23788] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23790"
 , "c1link" : "./qc/apps/s_server.c.html#23790"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23790] The expression wbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23871"
 , "c1link" : "./qc/apps/s_server.c.html#23871"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[23871] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "23874"
 , "c1link" : "./qc/apps/s_server.c.html#23874"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[23874] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "23877"
 , "c1link" : "./qc/apps/s_server.c.html#23877"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23877] The expression s_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23919"
 , "c1link" : "./qc/apps/s_server.c.html#23919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23919] The expression next_proto_neg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23930"
 , "c1link" : "./qc/apps/s_server.c.html#23930"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23930] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24021"
 , "c1link" : "./qc/apps/s_server.c.html#24021"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24021] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24023"
 , "c1link" : "./qc/apps/s_server.c.html#24023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24023] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24026"
 , "c1link" : "./qc/apps/s_server.c.html#24026"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24026] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24032"
 , "c1link" : "./qc/apps/s_server.c.html#24032"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24032] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24034"
 , "c1link" : "./qc/apps/s_server.c.html#24034"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24034] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24039"
 , "c1link" : "./qc/apps/s_server.c.html#24039"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24039] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24041"
 , "c1link" : "./qc/apps/s_server.c.html#24041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24041] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24054"
 , "c1link" : "./qc/apps/s_server.c.html#24054"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24054] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24058"
 , "c1link" : "./qc/apps/s_server.c.html#24058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24058] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24074"
 , "c1link" : "./qc/apps/s_server.c.html#24074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24074] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24078"
 , "c1link" : "./qc/apps/s_server.c.html#24078"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24078] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24092"
 , "c1link" : "./qc/apps/s_server.c.html#24092"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24092] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24094"
 , "c1link" : "./qc/apps/s_server.c.html#24094"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24094] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24120"
 , "c1link" : "./qc/apps/s_server.c.html#24120"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24120] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24152"
 , "c1link" : "./qc/apps/s_server.c.html#24152"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24152] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24157"
 , "c1link" : "./qc/apps/s_server.c.html#24157"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24157] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24157"
 , "c1link" : "./qc/apps/s_server.c.html#24157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24157] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24161"
 , "c1link" : "./qc/apps/s_server.c.html#24161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24161] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24161"
 , "c1link" : "./qc/apps/s_server.c.html#24161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24161] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24166"
 , "c1link" : "./qc/apps/s_server.c.html#24166"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24166] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24166"
 , "c1link" : "./qc/apps/s_server.c.html#24166"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24166] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24214"
 , "c1link" : "./qc/apps/s_server.c.html#24214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24214] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24283"
 , "c1link" : "./qc/apps/s_server.c.html#24283"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24283] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24284"
 , "c1link" : "./qc/apps/s_server.c.html#24284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24284] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24376"
 , "c1link" : "./qc/apps/s_server.c.html#24376"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24376] The expression dot applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24396"
 , "c1link" : "./qc/apps/s_server.c.html#24396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24396] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24407"
 , "c1link" : "./qc/apps/s_server.c.html#24407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24407] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24438"
 , "c1link" : "./qc/apps/s_server.c.html#24438"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24438] goto statement jump to write_error"
}} 
,
{ "ligne" : {
   "c1" : "24500"
 , "c1link" : "./qc/apps/s_server.c.html#24500"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24500] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24504"
 , "c1link" : "./qc/apps/s_server.c.html#24504"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24504] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24506"
 , "c1link" : "./qc/apps/s_server.c.html#24506"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24506] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24511"
 , "c1link" : "./qc/apps/s_server.c.html#24511"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24511] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24513"
 , "c1link" : "./qc/apps/s_server.c.html#24513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24513] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24526"
 , "c1link" : "./qc/apps/s_server.c.html#24526"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24526] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24540"
 , "c1link" : "./qc/apps/s_server.c.html#24540"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24540] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24544"
 , "c1link" : "./qc/apps/s_server.c.html#24544"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24544] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24565"
 , "c1link" : "./qc/apps/s_server.c.html#24565"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24565] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24591"
 , "c1link" : "./qc/apps/s_server.c.html#24591"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24591] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24593"
 , "c1link" : "./qc/apps/s_server.c.html#24593"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24593] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24620"
 , "c1link" : "./qc/apps/s_server.c.html#24620"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24620] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24630"
 , "c1link" : "./qc/apps/s_server.c.html#24630"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24630] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24648"
 , "c1link" : "./qc/apps/s_server.c.html#24648"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24648] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24708"
 , "c1link" : "./qc/apps/s_server.c.html#24708"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24708] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24759"
 , "c1link" : "./qc/apps/s_server.c.html#24759"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24759] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24783"
 , "c1link" : "./qc/apps/s_server.c.html#24783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24783] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24788"
 , "c1link" : "./qc/apps/s_server.c.html#24788"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24788] The expression prev applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
