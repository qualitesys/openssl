console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/s_client.c.html" 
 , "texte" : "File apps/s_client.c 283 rule violations " 
 , "fic2"  : "./qc/apps/s_client.c.xml" 
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
 , "c3" : "3"
 , "c4" : "3"
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
   "c1" : " void "
 , "c2" : "save_errno(void)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "restore_errno(void)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " unsigned  int "
 , "c2" : "psk_client_cb(SSL*;char*;char*;unsignedint;unsignedchar*;unsignedint)"
 , "c3" : "12"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "psk_use_session_cb(SSL*;EVP_MD*;unsignedchar*;size_t*;SSL_SESSION*)"
 , "c3" : "9"
 , "c4" : "28"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl_servername_cb(SSL*;int*;void*)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "srp_Verify_N_and_g(BIGNUM*;BIGNUM*)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ssl_srp_verify_param_cb(SSL*;void*)"
 , "c3" : "7"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : " char "
 , "c2" : "ssl_give_srp_client_pwd_cb(SSL*;void*)"
 , "c3" : "2"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "next_proto_cb(SSL*;unsignedchar*;unsignedchar*;unsignedchar*;unsignedint;void*)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "serverinfo_cli_parse_cb(SSL*;unsignedint;unsignedchar*;size_t;int*;void*)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "hexdecode(char*;void*)"
 , "c3" : "8"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "ssize_t"
 , "c2" : "checked_uint8(char*;void*)"
 , "c3" : "3"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "tlsa_import_rr(SSL*;char*)"
 , "c3" : "5"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "tlsa_import_rrset(SSL*;structstack_st_OPENSSL_STRING*)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "freeandcopy(char*;char*)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "new_session_cb(SSL*;SSL_SESSION*)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "s_client_main(int;char*)"
 , "c3" : "543"
 , "c4" : "1125"
}} 
,
{ "ligne" : {
   "c1" : " void "
 , "c2" : "print_stuff(BIO*;SSL*;int)"
 , "c3" : "31"
 , "c4" : "110"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ocsp_resp_cb(SSL*;void*)"
 , "c3" : "3"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "ldap_ExtendedResponse_parse(char*;long)"
 , "c3" : "6"
 , "c4" : "26"
}} 
,
{ "ligne" : {
   "c1" : " int "
 , "c2" : "is_dNS_name(char*)"
 , "c3" : "7"
 , "c4" : "23"
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
 , "c4" : "37"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000006"
 , "c3" : "Risk of infinite while loop"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000011"
 , "c3" : "The condition expression on a single value can be confusing"
 , "c4" : "65"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-CPP000012"
 , "c3" : "The condition expression is invariable, always true or false"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-CPP000007"
 , "c3" : "goto statement"
 , "c4" : "136"
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
 , "c4" : "31"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "03272"
 , "c1link" : "./qc/apps/s_client.c.html#3272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[03272] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09992"
 , "c1link" : "./qc/apps/s_client.c.html#9992"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09992] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "09994"
 , "c1link" : "./qc/apps/s_client.c.html#9994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[09994] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10361"
 , "c1link" : "./qc/apps/s_client.c.html#10361"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10361] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10557"
 , "c1link" : "./qc/apps/s_client.c.html#10557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10557] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10558"
 , "c1link" : "./qc/apps/s_client.c.html#10558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10558] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10559"
 , "c1link" : "./qc/apps/s_client.c.html#10559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10559] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "10563"
 , "c1link" : "./qc/apps/s_client.c.html#10563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[10563] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11149"
 , "c1link" : "./qc/apps/s_client.c.html#11149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11149] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11151"
 , "c1link" : "./qc/apps/s_client.c.html#11151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11151] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11154"
 , "c1link" : "./qc/apps/s_client.c.html#11154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11154] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "11993"
 , "c1link" : "./qc/apps/s_client.c.html#11993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[11993] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13424"
 , "c1link" : "./qc/apps/s_client.c.html#13424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13424] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13446"
 , "c1link" : "./qc/apps/s_client.c.html#13446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13446] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13452"
 , "c1link" : "./qc/apps/s_client.c.html#13452"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13452] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13472"
 , "c1link" : "./qc/apps/s_client.c.html#13472"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13472] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "13478"
 , "c1link" : "./qc/apps/s_client.c.html#13478"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[13478] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14625"
 , "c1link" : "./qc/apps/s_client.c.html#14625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14625] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "14626"
 , "c1link" : "./qc/apps/s_client.c.html#14626"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[14626] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17449"
 , "c1link" : "./qc/apps/s_client.c.html#17449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17449] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17755"
 , "c1link" : "./qc/apps/s_client.c.html#17755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17755] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18029"
 , "c1link" : "./qc/apps/s_client.c.html#18029"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18029] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19105"
 , "c1link" : "./qc/apps/s_client.c.html#19105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19105] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19107"
 , "c1link" : "./qc/apps/s_client.c.html#19107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19107] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19997"
 , "c1link" : "./qc/apps/s_client.c.html#19997"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19997] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19999"
 , "c1link" : "./qc/apps/s_client.c.html#19999"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19999] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20001"
 , "c1link" : "./qc/apps/s_client.c.html#20001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20001] The expression  ! hint applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20003"
 , "c1link" : "./qc/apps/s_client.c.html#20003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20003] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20006"
 , "c1link" : "./qc/apps/s_client.c.html#20006"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20006] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20015"
 , "c1link" : "./qc/apps/s_client.c.html#20015"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20015] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20016"
 , "c1link" : "./qc/apps/s_client.c.html#20016"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20016] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20042"
 , "c1link" : "./qc/apps/s_client.c.html#20042"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20042] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20047"
 , "c1link" : "./qc/apps/s_client.c.html#20047"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20047] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20080"
 , "c1link" : "./qc/apps/s_client.c.html#20080"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20080] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20114"
 , "c1link" : "./qc/apps/s_client.c.html#20114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20114] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20125"
 , "c1link" : "./qc/apps/s_client.c.html#20125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20125] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20255"
 , "c1link" : "./qc/apps/s_client.c.html#20255"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20255] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20259"
 , "c1link" : "./qc/apps/s_client.c.html#20259"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20259] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20305"
 , "c1link" : "./qc/apps/s_client.c.html#20305"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20305] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20337"
 , "c1link" : "./qc/apps/s_client.c.html#20337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20337] The expression  ! c_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20342"
 , "c1link" : "./qc/apps/s_client.c.html#20342"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20342] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20383"
 , "c1link" : "./qc/apps/s_client.c.html#20383"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20383] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20385"
 , "c1link" : "./qc/apps/s_client.c.html#20385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20385] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20386"
 , "c1link" : "./qc/apps/s_client.c.html#20386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20386] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20416"
 , "c1link" : "./qc/apps/s_client.c.html#20416"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20416] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20466"
 , "c1link" : "./qc/apps/s_client.c.html#20466"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20466] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20496"
 , "c1link" : "./qc/apps/s_client.c.html#20496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20496] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20515"
 , "c1link" : "./qc/apps/s_client.c.html#20515"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20515] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21279"
 , "c1link" : "./qc/apps/s_client.c.html#21279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21279] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "21283"
 , "c1link" : "./qc/apps/s_client.c.html#21283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21283] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21283"
 , "c1link" : "./qc/apps/s_client.c.html#21283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21283] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21288"
 , "c1link" : "./qc/apps/s_client.c.html#21288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21288] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "21292"
 , "c1link" : "./qc/apps/s_client.c.html#21292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21292] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21292"
 , "c1link" : "./qc/apps/s_client.c.html#21292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21292] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21313"
 , "c1link" : "./qc/apps/s_client.c.html#21313"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21313] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21323"
 , "c1link" : "./qc/apps/s_client.c.html#21323"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21323] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21329"
 , "c1link" : "./qc/apps/s_client.c.html#21329"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21329] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21335"
 , "c1link" : "./qc/apps/s_client.c.html#21335"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21335] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21340"
 , "c1link" : "./qc/apps/s_client.c.html#21340"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21340] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21347"
 , "c1link" : "./qc/apps/s_client.c.html#21347"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21347] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21353"
 , "c1link" : "./qc/apps/s_client.c.html#21353"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[21353] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21355"
 , "c1link" : "./qc/apps/s_client.c.html#21355"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21355] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21359"
 , "c1link" : "./qc/apps/s_client.c.html#21359"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21359] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21424"
 , "c1link" : "./qc/apps/s_client.c.html#21424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21424] The expression  ! c_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21432"
 , "c1link" : "./qc/apps/s_client.c.html#21432"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21432] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21448"
 , "c1link" : "./qc/apps/s_client.c.html#21448"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21448] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21452"
 , "c1link" : "./qc/apps/s_client.c.html#21452"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21452] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21462"
 , "c1link" : "./qc/apps/s_client.c.html#21462"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21462] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21462"
 , "c1link" : "./qc/apps/s_client.c.html#21462"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21462] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21479"
 , "c1link" : "./qc/apps/s_client.c.html#21479"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21479] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21484"
 , "c1link" : "./qc/apps/s_client.c.html#21484"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21484] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21489"
 , "c1link" : "./qc/apps/s_client.c.html#21489"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21489] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21501"
 , "c1link" : "./qc/apps/s_client.c.html#21501"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21501] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21521"
 , "c1link" : "./qc/apps/s_client.c.html#21521"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21521] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21527"
 , "c1link" : "./qc/apps/s_client.c.html#21527"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21527] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21531"
 , "c1link" : "./qc/apps/s_client.c.html#21531"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21531] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21585"
 , "c1link" : "./qc/apps/s_client.c.html#21585"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21585] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21597"
 , "c1link" : "./qc/apps/s_client.c.html#21597"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21597] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21757"
 , "c1link" : "./qc/apps/s_client.c.html#21757"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21757] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21841"
 , "c1link" : "./qc/apps/s_client.c.html#21841"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21841] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21869"
 , "c1link" : "./qc/apps/s_client.c.html#21869"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21869] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21910"
 , "c1link" : "./qc/apps/s_client.c.html#21910"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21910] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21951"
 , "c1link" : "./qc/apps/s_client.c.html#21951"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21951] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21956"
 , "c1link" : "./qc/apps/s_client.c.html#21956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21956] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21961"
 , "c1link" : "./qc/apps/s_client.c.html#21961"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21961] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21963"
 , "c1link" : "./qc/apps/s_client.c.html#21963"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21963] The expression noservername applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21972"
 , "c1link" : "./qc/apps/s_client.c.html#21972"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21972] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21982"
 , "c1link" : "./qc/apps/s_client.c.html#21982"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21982] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21993"
 , "c1link" : "./qc/apps/s_client.c.html#21993"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21993] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22010"
 , "c1link" : "./qc/apps/s_client.c.html#22010"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22010] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22014"
 , "c1link" : "./qc/apps/s_client.c.html#22014"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22014] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22036"
 , "c1link" : "./qc/apps/s_client.c.html#22036"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22036] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22052"
 , "c1link" : "./qc/apps/s_client.c.html#22052"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22052] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22060"
 , "c1link" : "./qc/apps/s_client.c.html#22060"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22060] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22063"
 , "c1link" : "./qc/apps/s_client.c.html#22063"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22063] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22075"
 , "c1link" : "./qc/apps/s_client.c.html#22075"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22075] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22079"
 , "c1link" : "./qc/apps/s_client.c.html#22079"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22079] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22095"
 , "c1link" : "./qc/apps/s_client.c.html#22095"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22095] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22099"
 , "c1link" : "./qc/apps/s_client.c.html#22099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22099] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22108"
 , "c1link" : "./qc/apps/s_client.c.html#22108"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22108] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22128"
 , "c1link" : "./qc/apps/s_client.c.html#22128"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22128] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22141"
 , "c1link" : "./qc/apps/s_client.c.html#22141"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22141] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22154"
 , "c1link" : "./qc/apps/s_client.c.html#22154"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22154] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22176"
 , "c1link" : "./qc/apps/s_client.c.html#22176"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22176] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22190"
 , "c1link" : "./qc/apps/s_client.c.html#22190"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22190] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22199"
 , "c1link" : "./qc/apps/s_client.c.html#22199"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22199] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22214"
 , "c1link" : "./qc/apps/s_client.c.html#22214"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22214] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22224"
 , "c1link" : "./qc/apps/s_client.c.html#22224"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22224] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22229"
 , "c1link" : "./qc/apps/s_client.c.html#22229"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22229] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22262"
 , "c1link" : "./qc/apps/s_client.c.html#22262"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22262] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22273"
 , "c1link" : "./qc/apps/s_client.c.html#22273"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22273] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22282"
 , "c1link" : "./qc/apps/s_client.c.html#22282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22282] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22286"
 , "c1link" : "./qc/apps/s_client.c.html#22286"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22286] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22297"
 , "c1link" : "./qc/apps/s_client.c.html#22297"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22297] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22312"
 , "c1link" : "./qc/apps/s_client.c.html#22312"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22312] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22319"
 , "c1link" : "./qc/apps/s_client.c.html#22319"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22319] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22321"
 , "c1link" : "./qc/apps/s_client.c.html#22321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22321] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22327"
 , "c1link" : "./qc/apps/s_client.c.html#22327"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22327] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22330"
 , "c1link" : "./qc/apps/s_client.c.html#22330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22330] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22346"
 , "c1link" : "./qc/apps/s_client.c.html#22346"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22346] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22357"
 , "c1link" : "./qc/apps/s_client.c.html#22357"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22357] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22368"
 , "c1link" : "./qc/apps/s_client.c.html#22368"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22368] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22380"
 , "c1link" : "./qc/apps/s_client.c.html#22380"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22380] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22389"
 , "c1link" : "./qc/apps/s_client.c.html#22389"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22389] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22406"
 , "c1link" : "./qc/apps/s_client.c.html#22406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22406] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22411"
 , "c1link" : "./qc/apps/s_client.c.html#22411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22411] The expression ssl_client_engine applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22416"
 , "c1link" : "./qc/apps/s_client.c.html#22416"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22416] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22428"
 , "c1link" : "./qc/apps/s_client.c.html#22428"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22428] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22447"
 , "c1link" : "./qc/apps/s_client.c.html#22447"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22447] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22466"
 , "c1link" : "./qc/apps/s_client.c.html#22466"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22466] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22490"
 , "c1link" : "./qc/apps/s_client.c.html#22490"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22490] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22510"
 , "c1link" : "./qc/apps/s_client.c.html#22510"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22510] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22512"
 , "c1link" : "./qc/apps/s_client.c.html#22512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[22512] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "22520"
 , "c1link" : "./qc/apps/s_client.c.html#22520"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22520] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22525"
 , "c1link" : "./qc/apps/s_client.c.html#22525"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22525] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22557"
 , "c1link" : "./qc/apps/s_client.c.html#22557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22557] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22565"
 , "c1link" : "./qc/apps/s_client.c.html#22565"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22565] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22569"
 , "c1link" : "./qc/apps/s_client.c.html#22569"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22569] The expression ct_validation applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22571"
 , "c1link" : "./qc/apps/s_client.c.html#22571"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22571] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22589"
 , "c1link" : "./qc/apps/s_client.c.html#22589"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22589] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22595"
 , "c1link" : "./qc/apps/s_client.c.html#22595"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22595] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22597"
 , "c1link" : "./qc/apps/s_client.c.html#22597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22597] The expression  ! noservername applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22606"
 , "c1link" : "./qc/apps/s_client.c.html#22606"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22606] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22629"
 , "c1link" : "./qc/apps/s_client.c.html#22629"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22629] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22647"
 , "c1link" : "./qc/apps/s_client.c.html#22647"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22647] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22655"
 , "c1link" : "./qc/apps/s_client.c.html#22655"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22655] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22657"
 , "c1link" : "./qc/apps/s_client.c.html#22657"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22657] The expression enable_pha applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22674"
 , "c1link" : "./qc/apps/s_client.c.html#22674"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22674] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22693"
 , "c1link" : "./qc/apps/s_client.c.html#22693"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22693] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22698"
 , "c1link" : "./qc/apps/s_client.c.html#22698"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22698] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22704"
 , "c1link" : "./qc/apps/s_client.c.html#22704"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22704] The expression fallback_scsv applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22743"
 , "c1link" : "./qc/apps/s_client.c.html#22743"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22743] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22756"
 , "c1link" : "./qc/apps/s_client.c.html#22756"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22756] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22765"
 , "c1link" : "./qc/apps/s_client.c.html#22765"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22765] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22770"
 , "c1link" : "./qc/apps/s_client.c.html#22770"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22770] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22772"
 , "c1link" : "./qc/apps/s_client.c.html#22772"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22772] The expression dane_ee_no_name applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22781"
 , "c1link" : "./qc/apps/s_client.c.html#22781"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22781] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22793"
 , "c1link" : "./qc/apps/s_client.c.html#22793"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22793] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22797"
 , "c1link" : "./qc/apps/s_client.c.html#22797"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22797] The expression c_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22800"
 , "c1link" : "./qc/apps/s_client.c.html#22800"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22800] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22805"
 , "c1link" : "./qc/apps/s_client.c.html#22805"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22805] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22815"
 , "c1link" : "./qc/apps/s_client.c.html#22815"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22815] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22822"
 , "c1link" : "./qc/apps/s_client.c.html#22822"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22822] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22833"
 , "c1link" : "./qc/apps/s_client.c.html#22833"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22833] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22844"
 , "c1link" : "./qc/apps/s_client.c.html#22844"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22844] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22854"
 , "c1link" : "./qc/apps/s_client.c.html#22854"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22854] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22867"
 , "c1link" : "./qc/apps/s_client.c.html#22867"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22867] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "22877"
 , "c1link" : "./qc/apps/s_client.c.html#22877"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22877] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "22891"
 , "c1link" : "./qc/apps/s_client.c.html#22891"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22891] The expression nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22898"
 , "c1link" : "./qc/apps/s_client.c.html#22898"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22898] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22902"
 , "c1link" : "./qc/apps/s_client.c.html#22902"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22902] The expression c_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22912"
 , "c1link" : "./qc/apps/s_client.c.html#22912"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22912] The expression c_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22917"
 , "c1link" : "./qc/apps/s_client.c.html#22917"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22917] The expression c_status_req applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22994"
 , "c1link" : "./qc/apps/s_client.c.html#22994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22994] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23009"
 , "c1link" : "./qc/apps/s_client.c.html#23009"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23009] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23041"
 , "c1link" : "./qc/apps/s_client.c.html#23041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23041] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23106"
 , "c1link" : "./qc/apps/s_client.c.html#23106"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23106] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23117"
 , "c1link" : "./qc/apps/s_client.c.html#23117"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23117] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23126"
 , "c1link" : "./qc/apps/s_client.c.html#23126"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23126] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23130"
 , "c1link" : "./qc/apps/s_client.c.html#23130"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23130] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23153"
 , "c1link" : "./qc/apps/s_client.c.html#23153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23153] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23165"
 , "c1link" : "./qc/apps/s_client.c.html#23165"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23165] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23172"
 , "c1link" : "./qc/apps/s_client.c.html#23172"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23172] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23193"
 , "c1link" : "./qc/apps/s_client.c.html#23193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23193] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23197"
 , "c1link" : "./qc/apps/s_client.c.html#23197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23197] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23197"
 , "c1link" : "./qc/apps/s_client.c.html#23197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23197] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23202"
 , "c1link" : "./qc/apps/s_client.c.html#23202"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23202] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23202"
 , "c1link" : "./qc/apps/s_client.c.html#23202"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23202] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23288"
 , "c1link" : "./qc/apps/s_client.c.html#23288"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23288] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23313"
 , "c1link" : "./qc/apps/s_client.c.html#23313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[23313] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "23319"
 , "c1link" : "./qc/apps/s_client.c.html#23319"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23319] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23323"
 , "c1link" : "./qc/apps/s_client.c.html#23323"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23323] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23328"
 , "c1link" : "./qc/apps/s_client.c.html#23328"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23328] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23333"
 , "c1link" : "./qc/apps/s_client.c.html#23333"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23333] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23341"
 , "c1link" : "./qc/apps/s_client.c.html#23341"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23341] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23351"
 , "c1link" : "./qc/apps/s_client.c.html#23351"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23351] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23358"
 , "c1link" : "./qc/apps/s_client.c.html#23358"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23358] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23364"
 , "c1link" : "./qc/apps/s_client.c.html#23364"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23364] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23395"
 , "c1link" : "./qc/apps/s_client.c.html#23395"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23395] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23433"
 , "c1link" : "./qc/apps/s_client.c.html#23433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23433] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23441"
 , "c1link" : "./qc/apps/s_client.c.html#23441"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23441] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23450"
 , "c1link" : "./qc/apps/s_client.c.html#23450"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23450] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23480"
 , "c1link" : "./qc/apps/s_client.c.html#23480"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23480] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23488"
 , "c1link" : "./qc/apps/s_client.c.html#23488"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23488] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23493"
 , "c1link" : "./qc/apps/s_client.c.html#23493"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23493] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23503"
 , "c1link" : "./qc/apps/s_client.c.html#23503"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23503] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23540"
 , "c1link" : "./qc/apps/s_client.c.html#23540"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23540] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23548"
 , "c1link" : "./qc/apps/s_client.c.html#23548"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23548] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23551"
 , "c1link" : "./qc/apps/s_client.c.html#23551"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23551] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23563"
 , "c1link" : "./qc/apps/s_client.c.html#23563"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23563] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23573"
 , "c1link" : "./qc/apps/s_client.c.html#23573"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23573] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23590"
 , "c1link" : "./qc/apps/s_client.c.html#23590"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23590] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23595"
 , "c1link" : "./qc/apps/s_client.c.html#23595"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23595] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23599"
 , "c1link" : "./qc/apps/s_client.c.html#23599"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23599] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23633"
 , "c1link" : "./qc/apps/s_client.c.html#23633"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23633] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23636"
 , "c1link" : "./qc/apps/s_client.c.html#23636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23636] The expression  ! finish applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23651"
 , "c1link" : "./qc/apps/s_client.c.html#23651"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23651] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23662"
 , "c1link" : "./qc/apps/s_client.c.html#23662"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23662] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23666"
 , "c1link" : "./qc/apps/s_client.c.html#23666"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23666] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23666"
 , "c1link" : "./qc/apps/s_client.c.html#23666"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23666] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23671"
 , "c1link" : "./qc/apps/s_client.c.html#23671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23671] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23675"
 , "c1link" : "./qc/apps/s_client.c.html#23675"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23675] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23675"
 , "c1link" : "./qc/apps/s_client.c.html#23675"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23675] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23698"
 , "c1link" : "./qc/apps/s_client.c.html#23698"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23698] The expression in_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23701"
 , "c1link" : "./qc/apps/s_client.c.html#23701"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23701] The expression c_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23710"
 , "c1link" : "./qc/apps/s_client.c.html#23710"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23710] The expression starttls_proto applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23713"
 , "c1link" : "./qc/apps/s_client.c.html#23713"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23713] The expression  ! reconnect applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23717"
 , "c1link" : "./qc/apps/s_client.c.html#23717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23717] The expression reconnect applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23724"
 , "c1link" : "./qc/apps/s_client.c.html#23724"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23724] goto statement jump to re_start"
}} 
,
{ "ligne" : {
   "c1" : "23731"
 , "c1link" : "./qc/apps/s_client.c.html#23731"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23731] The expression  ! ssl_pending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23733"
 , "c1link" : "./qc/apps/s_client.c.html#23733"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23733] The expression tty_on applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23742"
 , "c1link" : "./qc/apps/s_client.c.html#23742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23742] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23742"
 , "c1link" : "./qc/apps/s_client.c.html#23742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23742] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23758"
 , "c1link" : "./qc/apps/s_client.c.html#23758"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23758] The expression write_tty applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23761"
 , "c1link" : "./qc/apps/s_client.c.html#23761"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23761] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23761"
 , "c1link" : "./qc/apps/s_client.c.html#23761"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23761] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23778"
 , "c1link" : "./qc/apps/s_client.c.html#23778"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23778] The expression read_ssl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23781"
 , "c1link" : "./qc/apps/s_client.c.html#23781"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23781] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23781"
 , "c1link" : "./qc/apps/s_client.c.html#23781"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23781] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23796"
 , "c1link" : "./qc/apps/s_client.c.html#23796"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23796] The expression write_ssl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23799"
 , "c1link" : "./qc/apps/s_client.c.html#23799"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23799] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23799"
 , "c1link" : "./qc/apps/s_client.c.html#23799"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23799] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23829"
 , "c1link" : "./qc/apps/s_client.c.html#23829"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23829] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23863"
 , "c1link" : "./qc/apps/s_client.c.html#23863"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23863] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23898"
 , "c1link" : "./qc/apps/s_client.c.html#23898"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23898] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23913"
 , "c1link" : "./qc/apps/s_client.c.html#23913"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23913] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23923"
 , "c1link" : "./qc/apps/s_client.c.html#23923"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23923] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23957"
 , "c1link" : "./qc/apps/s_client.c.html#23957"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23957] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23989"
 , "c1link" : "./qc/apps/s_client.c.html#23989"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23989] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24025"
 , "c1link" : "./qc/apps/s_client.c.html#24025"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24025] The expression c_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24029"
 , "c1link" : "./qc/apps/s_client.c.html#24029"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24029] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24033"
 , "c1link" : "./qc/apps/s_client.c.html#24033"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24033] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24038"
 , "c1link" : "./qc/apps/s_client.c.html#24038"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24038] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24064"
 , "c1link" : "./qc/apps/s_client.c.html#24064"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24064] The expression crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24096"
 , "c1link" : "./qc/apps/s_client.c.html#24096"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24096] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24125"
 , "c1link" : "./qc/apps/s_client.c.html#24125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24125] The expression in_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24140"
 , "c1link" : "./qc/apps/s_client.c.html#24140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24140] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24144"
 , "c1link" : "./qc/apps/s_client.c.html#24144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24144] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24144"
 , "c1link" : "./qc/apps/s_client.c.html#24144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24144] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24149"
 , "c1link" : "./qc/apps/s_client.c.html#24149"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24149] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24149"
 , "c1link" : "./qc/apps/s_client.c.html#24149"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24149] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24254"
 , "c1link" : "./qc/apps/s_client.c.html#24254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24254] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24259"
 , "c1link" : "./qc/apps/s_client.c.html#24259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24259] The expression full applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24295"
 , "c1link" : "./qc/apps/s_client.c.html#24295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24295] The expression c_showcerts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24388"
 , "c1link" : "./qc/apps/s_client.c.html#24388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24388] The expression (0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24388"
 , "c1link" : "./qc/apps/s_client.c.html#24388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24388] The expression (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24394"
 , "c1link" : "./qc/apps/s_client.c.html#24394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24394] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24407"
 , "c1link" : "./qc/apps/s_client.c.html#24407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24407] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24407"
 , "c1link" : "./qc/apps/s_client.c.html#24407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24407] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24407"
 , "c1link" : "./qc/apps/s_client.c.html#24407"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24407] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24416"
 , "c1link" : "./qc/apps/s_client.c.html#24416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24416] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24425"
 , "c1link" : "./qc/apps/s_client.c.html#24425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24425] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24441"
 , "c1link" : "./qc/apps/s_client.c.html#24441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24441] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24447"
 , "c1link" : "./qc/apps/s_client.c.html#24447"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24447] The expression istls13 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24519"
 , "c1link" : "./qc/apps/s_client.c.html#24519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24519] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24556"
 , "c1link" : "./qc/apps/s_client.c.html#24556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24556] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24565"
 , "c1link" : "./qc/apps/s_client.c.html#24565"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24565] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24567"
 , "c1link" : "./qc/apps/s_client.c.html#24567"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24567] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24575"
 , "c1link" : "./qc/apps/s_client.c.html#24575"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24575] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24577"
 , "c1link" : "./qc/apps/s_client.c.html#24577"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24577] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24588"
 , "c1link" : "./qc/apps/s_client.c.html#24588"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24588] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24595"
 , "c1link" : "./qc/apps/s_client.c.html#24595"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24595] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24597"
 , "c1link" : "./qc/apps/s_client.c.html#24597"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24597] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
