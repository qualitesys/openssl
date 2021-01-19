console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/s_server.c.html" 
 , "texte" : "File apps/s_server.c 267 rule violations " 
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
   "c1" : "05848"
 , "c1link" : "./qc/apps/s_server.c.html#5848"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05848] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "05850"
 , "c1link" : "./qc/apps/s_server.c.html#5850"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[05850] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06217"
 , "c1link" : "./qc/apps/s_server.c.html#6217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06217] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06413"
 , "c1link" : "./qc/apps/s_server.c.html#6413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06413] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06414"
 , "c1link" : "./qc/apps/s_server.c.html#6414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06414] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "06415"
 , "c1link" : "./qc/apps/s_server.c.html#6415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[06415] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "07005"
 , "c1link" : "./qc/apps/s_server.c.html#7005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07005] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "07007"
 , "c1link" : "./qc/apps/s_server.c.html#7007"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07007] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "07849"
 , "c1link" : "./qc/apps/s_server.c.html#7849"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[07849] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09280"
 , "c1link" : "./qc/apps/s_server.c.html#9280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09280] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09302"
 , "c1link" : "./qc/apps/s_server.c.html#9302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09302] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09308"
 , "c1link" : "./qc/apps/s_server.c.html#9308"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09308] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09328"
 , "c1link" : "./qc/apps/s_server.c.html#9328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09328] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09334"
 , "c1link" : "./qc/apps/s_server.c.html#9334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09334] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10481"
 , "c1link" : "./qc/apps/s_server.c.html#10481"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10481] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10482"
 , "c1link" : "./qc/apps/s_server.c.html#10482"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10482] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11161"
 , "c1link" : "./qc/apps/s_server.c.html#11161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11161] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12177"
 , "c1link" : "./qc/apps/s_server.c.html#12177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12177] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "12179"
 , "c1link" : "./qc/apps/s_server.c.html#12179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[12179] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19354"
 , "c1link" : "./qc/apps/s_server.c.html#19354"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19354] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19660"
 , "c1link" : "./qc/apps/s_server.c.html#19660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19660] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20147"
 , "c1link" : "./qc/apps/s_server.c.html#20147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20147] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20149"
 , "c1link" : "./qc/apps/s_server.c.html#20149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20149] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20157"
 , "c1link" : "./qc/apps/s_server.c.html#20157"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20157] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20159"
 , "c1link" : "./qc/apps/s_server.c.html#20159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20159] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20168"
 , "c1link" : "./qc/apps/s_server.c.html#20168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20168] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20194"
 , "c1link" : "./qc/apps/s_server.c.html#20194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20194] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20198"
 , "c1link" : "./qc/apps/s_server.c.html#20198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20198] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20222"
 , "c1link" : "./qc/apps/s_server.c.html#20222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20222] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20325"
 , "c1link" : "./qc/apps/s_server.c.html#20325"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20325] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20332"
 , "c1link" : "./qc/apps/s_server.c.html#20332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20332] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20383"
 , "c1link" : "./qc/apps/s_server.c.html#20383"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20383] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20498"
 , "c1link" : "./qc/apps/s_server.c.html#20498"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20498] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20511"
 , "c1link" : "./qc/apps/s_server.c.html#20511"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20511] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "20525"
 , "c1link" : "./qc/apps/s_server.c.html#20525"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20525] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20537"
 , "c1link" : "./qc/apps/s_server.c.html#20537"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20537] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20546"
 , "c1link" : "./qc/apps/s_server.c.html#20546"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20546] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "20559"
 , "c1link" : "./qc/apps/s_server.c.html#20559"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20559] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20566"
 , "c1link" : "./qc/apps/s_server.c.html#20566"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20566] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20568"
 , "c1link" : "./qc/apps/s_server.c.html#20568"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20568] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20579"
 , "c1link" : "./qc/apps/s_server.c.html#20579"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20579] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20593"
 , "c1link" : "./qc/apps/s_server.c.html#20593"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20593] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "20597"
 , "c1link" : "./qc/apps/s_server.c.html#20597"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20597] goto statement jump to done"
}} 
,
{ "ligne" : {
   "c1" : "20635"
 , "c1link" : "./qc/apps/s_server.c.html#20635"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20635] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20658"
 , "c1link" : "./qc/apps/s_server.c.html#20658"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20658] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20672"
 , "c1link" : "./qc/apps/s_server.c.html#20672"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20672] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20677"
 , "c1link" : "./qc/apps/s_server.c.html#20677"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20677] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20682"
 , "c1link" : "./qc/apps/s_server.c.html#20682"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20682] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20732"
 , "c1link" : "./qc/apps/s_server.c.html#20732"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20732] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20737"
 , "c1link" : "./qc/apps/s_server.c.html#20737"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20737] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20751"
 , "c1link" : "./qc/apps/s_server.c.html#20751"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20751] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21203"
 , "c1link" : "./qc/apps/s_server.c.html#21203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[21203] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "21346"
 , "c1link" : "./qc/apps/s_server.c.html#21346"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21346] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21351"
 , "c1link" : "./qc/apps/s_server.c.html#21351"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21351] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21376"
 , "c1link" : "./qc/apps/s_server.c.html#21376"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21376] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21381"
 , "c1link" : "./qc/apps/s_server.c.html#21381"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21381] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21384"
 , "c1link" : "./qc/apps/s_server.c.html#21384"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21384] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21391"
 , "c1link" : "./qc/apps/s_server.c.html#21391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21391] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21396"
 , "c1link" : "./qc/apps/s_server.c.html#21396"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[21396] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21398"
 , "c1link" : "./qc/apps/s_server.c.html#21398"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21398] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21402"
 , "c1link" : "./qc/apps/s_server.c.html#21402"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21402] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21430"
 , "c1link" : "./qc/apps/s_server.c.html#21430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21430] The expression 1 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21430"
 , "c1link" : "./qc/apps/s_server.c.html#21430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21430] The expression 1 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21458"
 , "c1link" : "./qc/apps/s_server.c.html#21458"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21458] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21493"
 , "c1link" : "./qc/apps/s_server.c.html#21493"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21493] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21524"
 , "c1link" : "./qc/apps/s_server.c.html#21524"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21524] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21551"
 , "c1link" : "./qc/apps/s_server.c.html#21551"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21551] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21559"
 , "c1link" : "./qc/apps/s_server.c.html#21559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21559] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21572"
 , "c1link" : "./qc/apps/s_server.c.html#21572"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21572] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21585"
 , "c1link" : "./qc/apps/s_server.c.html#21585"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21585] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21592"
 , "c1link" : "./qc/apps/s_server.c.html#21592"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21592] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21605"
 , "c1link" : "./qc/apps/s_server.c.html#21605"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21605] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21612"
 , "c1link" : "./qc/apps/s_server.c.html#21612"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21612] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21658"
 , "c1link" : "./qc/apps/s_server.c.html#21658"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21658] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21678"
 , "c1link" : "./qc/apps/s_server.c.html#21678"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21678] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21683"
 , "c1link" : "./qc/apps/s_server.c.html#21683"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21683] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21688"
 , "c1link" : "./qc/apps/s_server.c.html#21688"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21688] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21715"
 , "c1link" : "./qc/apps/s_server.c.html#21715"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21715] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21736"
 , "c1link" : "./qc/apps/s_server.c.html#21736"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21736] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21756"
 , "c1link" : "./qc/apps/s_server.c.html#21756"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21756] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21793"
 , "c1link" : "./qc/apps/s_server.c.html#21793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21793] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21793"
 , "c1link" : "./qc/apps/s_server.c.html#21793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21793] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21810"
 , "c1link" : "./qc/apps/s_server.c.html#21810"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21810] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21822"
 , "c1link" : "./qc/apps/s_server.c.html#21822"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21822] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21949"
 , "c1link" : "./qc/apps/s_server.c.html#21949"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21949] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21953"
 , "c1link" : "./qc/apps/s_server.c.html#21953"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21953] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22008"
 , "c1link" : "./qc/apps/s_server.c.html#22008"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22008] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22015"
 , "c1link" : "./qc/apps/s_server.c.html#22015"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22015] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22043"
 , "c1link" : "./qc/apps/s_server.c.html#22043"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22043] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22052"
 , "c1link" : "./qc/apps/s_server.c.html#22052"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22052] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22062"
 , "c1link" : "./qc/apps/s_server.c.html#22062"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22062] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22071"
 , "c1link" : "./qc/apps/s_server.c.html#22071"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22071] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22081"
 , "c1link" : "./qc/apps/s_server.c.html#22081"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22081] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22096"
 , "c1link" : "./qc/apps/s_server.c.html#22096"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22096] goto statement jump to end"
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
   "c1" : "22107"
 , "c1link" : "./qc/apps/s_server.c.html#22107"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22107] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22125"
 , "c1link" : "./qc/apps/s_server.c.html#22125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22125] goto statement jump to end"
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
   "c1" : "22144"
 , "c1link" : "./qc/apps/s_server.c.html#22144"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22144] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22156"
 , "c1link" : "./qc/apps/s_server.c.html#22156"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22156] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22171"
 , "c1link" : "./qc/apps/s_server.c.html#22171"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22171] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22181"
 , "c1link" : "./qc/apps/s_server.c.html#22181"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22181] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22185"
 , "c1link" : "./qc/apps/s_server.c.html#22185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22185] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22192"
 , "c1link" : "./qc/apps/s_server.c.html#22192"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22192] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22200"
 , "c1link" : "./qc/apps/s_server.c.html#22200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22200] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22207"
 , "c1link" : "./qc/apps/s_server.c.html#22207"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22207] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22222"
 , "c1link" : "./qc/apps/s_server.c.html#22222"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22222] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22232"
 , "c1link" : "./qc/apps/s_server.c.html#22232"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22232] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22256"
 , "c1link" : "./qc/apps/s_server.c.html#22256"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22256] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22267"
 , "c1link" : "./qc/apps/s_server.c.html#22267"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22267] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22280"
 , "c1link" : "./qc/apps/s_server.c.html#22280"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22280] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22307"
 , "c1link" : "./qc/apps/s_server.c.html#22307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22307] The expression nocert applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22347"
 , "c1link" : "./qc/apps/s_server.c.html#22347"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22347] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22356"
 , "c1link" : "./qc/apps/s_server.c.html#22356"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22356] The expression sdebug applies to a single value or variable, might be ambiguous."
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
   "c1" : "22362"
 , "c1link" : "./qc/apps/s_server.c.html#22362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22362] The expression ssl_config applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22367"
 , "c1link" : "./qc/apps/s_server.c.html#22367"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22367] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22381"
 , "c1link" : "./qc/apps/s_server.c.html#22381"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22381] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22388"
 , "c1link" : "./qc/apps/s_server.c.html#22388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22388] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22390"
 , "c1link" : "./qc/apps/s_server.c.html#22390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22390] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22397"
 , "c1link" : "./qc/apps/s_server.c.html#22397"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22397] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22408"
 , "c1link" : "./qc/apps/s_server.c.html#22408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22408] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22410"
 , "c1link" : "./qc/apps/s_server.c.html#22410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22410] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22416"
 , "c1link" : "./qc/apps/s_server.c.html#22416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22416] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22425"
 , "c1link" : "./qc/apps/s_server.c.html#22425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22425] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22433"
 , "c1link" : "./qc/apps/s_server.c.html#22433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22433] The expression no_ca_names applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22437"
 , "c1link" : "./qc/apps/s_server.c.html#22437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22437] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22448"
 , "c1link" : "./qc/apps/s_server.c.html#22448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22448] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22459"
 , "c1link" : "./qc/apps/s_server.c.html#22459"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22459] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22469"
 , "c1link" : "./qc/apps/s_server.c.html#22469"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22469] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22485"
 , "c1link" : "./qc/apps/s_server.c.html#22485"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22485] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22493"
 , "c1link" : "./qc/apps/s_server.c.html#22493"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22493] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22498"
 , "c1link" : "./qc/apps/s_server.c.html#22498"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22498] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22509"
 , "c1link" : "./qc/apps/s_server.c.html#22509"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22509] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22512"
 , "c1link" : "./qc/apps/s_server.c.html#22512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22512] The expression s_cert2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22520"
 , "c1link" : "./qc/apps/s_server.c.html#22520"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22520] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22531"
 , "c1link" : "./qc/apps/s_server.c.html#22531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22531] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22534"
 , "c1link" : "./qc/apps/s_server.c.html#22534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22534] The expression session_id_prefix applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22541"
 , "c1link" : "./qc/apps/s_server.c.html#22541"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22541] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22552"
 , "c1link" : "./qc/apps/s_server.c.html#22552"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22552] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22555"
 , "c1link" : "./qc/apps/s_server.c.html#22555"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22555] The expression no_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22561"
 , "c1link" : "./qc/apps/s_server.c.html#22561"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22561] The expression ext_cache applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22570"
 , "c1link" : "./qc/apps/s_server.c.html#22570"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22570] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22580"
 , "c1link" : "./qc/apps/s_server.c.html#22580"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22580] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22585"
 , "c1link" : "./qc/apps/s_server.c.html#22585"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22585] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22590"
 , "c1link" : "./qc/apps/s_server.c.html#22590"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22590] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22600"
 , "c1link" : "./qc/apps/s_server.c.html#22600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22600] The expression  ! no_dhe applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22652"
 , "c1link" : "./qc/apps/s_server.c.html#22652"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22652] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22660"
 , "c1link" : "./qc/apps/s_server.c.html#22660"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22660] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22707"
 , "c1link" : "./qc/apps/s_server.c.html#22707"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22707] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22719"
 , "c1link" : "./qc/apps/s_server.c.html#22719"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22719] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22728"
 , "c1link" : "./qc/apps/s_server.c.html#22728"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22728] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22741"
 , "c1link" : "./qc/apps/s_server.c.html#22741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22741] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22749"
 , "c1link" : "./qc/apps/s_server.c.html#22749"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22749] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22752"
 , "c1link" : "./qc/apps/s_server.c.html#22752"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22752] The expression no_resume_ephemeral applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22770"
 , "c1link" : "./qc/apps/s_server.c.html#22770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22770] The expression s_debug applies to a single value or variable, might be ambiguous."
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
   "c1" : "22805"
 , "c1link" : "./qc/apps/s_server.c.html#22805"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22805] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22824"
 , "c1link" : "./qc/apps/s_server.c.html#22824"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22824] goto statement jump to end"
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
   "c1" : "22868"
 , "c1link" : "./qc/apps/s_server.c.html#22868"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22868] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22894"
 , "c1link" : "./qc/apps/s_server.c.html#22894"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22894] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22900"
 , "c1link" : "./qc/apps/s_server.c.html#22900"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22900] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22914"
 , "c1link" : "./qc/apps/s_server.c.html#22914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22914] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22918"
 , "c1link" : "./qc/apps/s_server.c.html#22918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22918] The expression s_tlsextstatus applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22921"
 , "c1link" : "./qc/apps/s_server.c.html#22921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22921] The expression ctx2 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22928"
 , "c1link" : "./qc/apps/s_server.c.html#22928"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22928] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22935"
 , "c1link" : "./qc/apps/s_server.c.html#22935"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22935] The expression rev applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22937"
 , "c1link" : "./qc/apps/s_server.c.html#22937"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22937] The expression www applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23125"
 , "c1link" : "./qc/apps/s_server.c.html#23125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23125] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23128"
 , "c1link" : "./qc/apps/s_server.c.html#23128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23128] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23139"
 , "c1link" : "./qc/apps/s_server.c.html#23139"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23139] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23142"
 , "c1link" : "./qc/apps/s_server.c.html#23142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23142] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23156"
 , "c1link" : "./qc/apps/s_server.c.html#23156"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23156] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23162"
 , "c1link" : "./qc/apps/s_server.c.html#23162"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23162] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23165"
 , "c1link" : "./qc/apps/s_server.c.html#23165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23165] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23173"
 , "c1link" : "./qc/apps/s_server.c.html#23173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23173] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23183"
 , "c1link" : "./qc/apps/s_server.c.html#23183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23183] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23197"
 , "c1link" : "./qc/apps/s_server.c.html#23197"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23197] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23208"
 , "c1link" : "./qc/apps/s_server.c.html#23208"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23208] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23234"
 , "c1link" : "./qc/apps/s_server.c.html#23234"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23234] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23237"
 , "c1link" : "./qc/apps/s_server.c.html#23237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23237] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23248"
 , "c1link" : "./qc/apps/s_server.c.html#23248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23248] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23252"
 , "c1link" : "./qc/apps/s_server.c.html#23252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23252] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23262"
 , "c1link" : "./qc/apps/s_server.c.html#23262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23262] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23267"
 , "c1link" : "./qc/apps/s_server.c.html#23267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23267] The expression early_data applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23286"
 , "c1link" : "./qc/apps/s_server.c.html#23286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23286] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23290"
 , "c1link" : "./qc/apps/s_server.c.html#23290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23290] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23302"
 , "c1link" : "./qc/apps/s_server.c.html#23302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23302] The expression write_header applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23326"
 , "c1link" : "./qc/apps/s_server.c.html#23326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23326] The expression  ! read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23329"
 , "c1link" : "./qc/apps/s_server.c.html#23329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23329] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23333"
 , "c1link" : "./qc/apps/s_server.c.html#23333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23333] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23333"
 , "c1link" : "./qc/apps/s_server.c.html#23333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23333] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23339"
 , "c1link" : "./qc/apps/s_server.c.html#23339"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23339] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23339"
 , "c1link" : "./qc/apps/s_server.c.html#23339"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23339] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23357"
 , "c1link" : "./qc/apps/s_server.c.html#23357"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23357] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23357"
 , "c1link" : "./qc/apps/s_server.c.html#23357"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23357] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23439"
 , "c1link" : "./qc/apps/s_server.c.html#23439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23439] The expression read_from_terminal applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23440"
 , "c1link" : "./qc/apps/s_server.c.html#23440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23440] The expression s_crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23477"
 , "c1link" : "./qc/apps/s_server.c.html#23477"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23477] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23491"
 , "c1link" : "./qc/apps/s_server.c.html#23491"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23491] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23552"
 , "c1link" : "./qc/apps/s_server.c.html#23552"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23552] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23607"
 , "c1link" : "./qc/apps/s_server.c.html#23607"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23607] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23617"
 , "c1link" : "./qc/apps/s_server.c.html#23617"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23617] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23627"
 , "c1link" : "./qc/apps/s_server.c.html#23627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23627] The expression read_from_sslcon applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23639"
 , "c1link" : "./qc/apps/s_server.c.html#23639"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23639] goto statement jump to err"
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
   "c1" : "23674"
 , "c1link" : "./qc/apps/s_server.c.html#23674"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23674] goto statement jump to again"
}} 
,
{ "ligne" : {
   "c1" : "23708"
 , "c1link" : "./qc/apps/s_server.c.html#23708"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23708] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23717"
 , "c1link" : "./qc/apps/s_server.c.html#23717"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23717] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "23768"
 , "c1link" : "./qc/apps/s_server.c.html#23768"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23768] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23769"
 , "c1link" : "./qc/apps/s_server.c.html#23769"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23769] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23785"
 , "c1link" : "./qc/apps/s_server.c.html#23785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23785] The expression dtlslisten applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23787"
 , "c1link" : "./qc/apps/s_server.c.html#23787"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23787] The expression wbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23868"
 , "c1link" : "./qc/apps/s_server.c.html#23868"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[23868] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
 , "c3" : "QC-CPP000011[23874] The expression s_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23916"
 , "c1link" : "./qc/apps/s_server.c.html#23916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23916] The expression next_proto_neg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23927"
 , "c1link" : "./qc/apps/s_server.c.html#23927"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23927] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24018"
 , "c1link" : "./qc/apps/s_server.c.html#24018"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24018] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24020"
 , "c1link" : "./qc/apps/s_server.c.html#24020"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24020] The expression s_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24023"
 , "c1link" : "./qc/apps/s_server.c.html#24023"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24023] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24029"
 , "c1link" : "./qc/apps/s_server.c.html#24029"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24029] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24031"
 , "c1link" : "./qc/apps/s_server.c.html#24031"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24031] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24036"
 , "c1link" : "./qc/apps/s_server.c.html#24036"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24036] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24038"
 , "c1link" : "./qc/apps/s_server.c.html#24038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24038] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24051"
 , "c1link" : "./qc/apps/s_server.c.html#24051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24051] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24055"
 , "c1link" : "./qc/apps/s_server.c.html#24055"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24055] The expression s_nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24071"
 , "c1link" : "./qc/apps/s_server.c.html#24071"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24071] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24075"
 , "c1link" : "./qc/apps/s_server.c.html#24075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24075] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24089"
 , "c1link" : "./qc/apps/s_server.c.html#24089"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24089] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24091"
 , "c1link" : "./qc/apps/s_server.c.html#24091"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24091] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24117"
 , "c1link" : "./qc/apps/s_server.c.html#24117"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24117] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24149"
 , "c1link" : "./qc/apps/s_server.c.html#24149"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24149] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24154"
 , "c1link" : "./qc/apps/s_server.c.html#24154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24154] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24158"
 , "c1link" : "./qc/apps/s_server.c.html#24158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24158] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24158"
 , "c1link" : "./qc/apps/s_server.c.html#24158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24158] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24163"
 , "c1link" : "./qc/apps/s_server.c.html#24163"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24163] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24163"
 , "c1link" : "./qc/apps/s_server.c.html#24163"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24163] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24211"
 , "c1link" : "./qc/apps/s_server.c.html#24211"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24211] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24280"
 , "c1link" : "./qc/apps/s_server.c.html#24280"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24280] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24281"
 , "c1link" : "./qc/apps/s_server.c.html#24281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24281] The expression  * p applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24373"
 , "c1link" : "./qc/apps/s_server.c.html#24373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24373] The expression dot applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24393"
 , "c1link" : "./qc/apps/s_server.c.html#24393"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24393] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24404"
 , "c1link" : "./qc/apps/s_server.c.html#24404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24404] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24435"
 , "c1link" : "./qc/apps/s_server.c.html#24435"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24435] goto statement jump to write_error"
}} 
,
{ "ligne" : {
   "c1" : "24497"
 , "c1link" : "./qc/apps/s_server.c.html#24497"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24497] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24501"
 , "c1link" : "./qc/apps/s_server.c.html#24501"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24501] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24503"
 , "c1link" : "./qc/apps/s_server.c.html#24503"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24503] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24508"
 , "c1link" : "./qc/apps/s_server.c.html#24508"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24508] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24510"
 , "c1link" : "./qc/apps/s_server.c.html#24510"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24510] The expression s_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24523"
 , "c1link" : "./qc/apps/s_server.c.html#24523"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24523] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24537"
 , "c1link" : "./qc/apps/s_server.c.html#24537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24537] The expression s_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24541"
 , "c1link" : "./qc/apps/s_server.c.html#24541"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24541] The expression s_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24562"
 , "c1link" : "./qc/apps/s_server.c.html#24562"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24562] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24588"
 , "c1link" : "./qc/apps/s_server.c.html#24588"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24588] The expression  ! s_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24590"
 , "c1link" : "./qc/apps/s_server.c.html#24590"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24590] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "24617"
 , "c1link" : "./qc/apps/s_server.c.html#24617"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24617] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24627"
 , "c1link" : "./qc/apps/s_server.c.html#24627"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24627] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24645"
 , "c1link" : "./qc/apps/s_server.c.html#24645"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24645] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24705"
 , "c1link" : "./qc/apps/s_server.c.html#24705"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24705] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24756"
 , "c1link" : "./qc/apps/s_server.c.html#24756"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24756] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24780"
 , "c1link" : "./qc/apps/s_server.c.html#24780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24780] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24785"
 , "c1link" : "./qc/apps/s_server.c.html#24785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24785] The expression prev applies to a single value or variable, might be ambiguous."
}} 
]
};
console.log('leListeStr 99 main end');
