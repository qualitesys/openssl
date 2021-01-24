console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/apps/s_client.c.html" 
 , "texte" : "File apps/s_client.c 289 rule violations " 
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
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-CPP000013"
 , "c3" : "Inline assembly code"
 , "c4" : "6"
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
   "c1" : "17446"
 , "c1link" : "./qc/apps/s_client.c.html#17446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17446] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17752"
 , "c1link" : "./qc/apps/s_client.c.html#17752"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17752] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18026"
 , "c1link" : "./qc/apps/s_client.c.html#18026"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18026] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19102"
 , "c1link" : "./qc/apps/s_client.c.html#19102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19102] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19104"
 , "c1link" : "./qc/apps/s_client.c.html#19104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19104] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19994"
 , "c1link" : "./qc/apps/s_client.c.html#19994"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19994] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19996"
 , "c1link" : "./qc/apps/s_client.c.html#19996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19996] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "19998"
 , "c1link" : "./qc/apps/s_client.c.html#19998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19998] The expression  ! hint applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20000"
 , "c1link" : "./qc/apps/s_client.c.html#20000"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20000] The expression c_debug applies to a single value or variable, might be ambiguous."
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
   "c1" : "20012"
 , "c1link" : "./qc/apps/s_client.c.html#20012"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20012] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20013"
 , "c1link" : "./qc/apps/s_client.c.html#20013"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20013] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20039"
 , "c1link" : "./qc/apps/s_client.c.html#20039"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20039] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20044"
 , "c1link" : "./qc/apps/s_client.c.html#20044"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20044] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20077"
 , "c1link" : "./qc/apps/s_client.c.html#20077"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20077] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20111"
 , "c1link" : "./qc/apps/s_client.c.html#20111"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20111] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20122"
 , "c1link" : "./qc/apps/s_client.c.html#20122"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20122] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20252"
 , "c1link" : "./qc/apps/s_client.c.html#20252"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20252] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20256"
 , "c1link" : "./qc/apps/s_client.c.html#20256"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20256] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20302"
 , "c1link" : "./qc/apps/s_client.c.html#20302"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20302] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20334"
 , "c1link" : "./qc/apps/s_client.c.html#20334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20334] The expression  ! c_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20339"
 , "c1link" : "./qc/apps/s_client.c.html#20339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20339] The expression i applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20380"
 , "c1link" : "./qc/apps/s_client.c.html#20380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20380] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20382"
 , "c1link" : "./qc/apps/s_client.c.html#20382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20382] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "20413"
 , "c1link" : "./qc/apps/s_client.c.html#20413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20413] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20463"
 , "c1link" : "./qc/apps/s_client.c.html#20463"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20463] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20493"
 , "c1link" : "./qc/apps/s_client.c.html#20493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20493] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20512"
 , "c1link" : "./qc/apps/s_client.c.html#20512"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20512] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21276"
 , "c1link" : "./qc/apps/s_client.c.html#21276"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[21276] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "21276"
 , "c1link" : "./qc/apps/s_client.c.html#21276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21276] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "21280"
 , "c1link" : "./qc/apps/s_client.c.html#21280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21280] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21280"
 , "c1link" : "./qc/apps/s_client.c.html#21280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21280] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21285"
 , "c1link" : "./qc/apps/s_client.c.html#21285"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[21285] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "21285"
 , "c1link" : "./qc/apps/s_client.c.html#21285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21285] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "21289"
 , "c1link" : "./qc/apps/s_client.c.html#21289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21289] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21289"
 , "c1link" : "./qc/apps/s_client.c.html#21289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21289] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21310"
 , "c1link" : "./qc/apps/s_client.c.html#21310"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21310] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21320"
 , "c1link" : "./qc/apps/s_client.c.html#21320"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21320] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21326"
 , "c1link" : "./qc/apps/s_client.c.html#21326"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21326] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21332"
 , "c1link" : "./qc/apps/s_client.c.html#21332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21332] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21337"
 , "c1link" : "./qc/apps/s_client.c.html#21337"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21337] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21344"
 , "c1link" : "./qc/apps/s_client.c.html#21344"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21344] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21350"
 , "c1link" : "./qc/apps/s_client.c.html#21350"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[21350] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21352"
 , "c1link" : "./qc/apps/s_client.c.html#21352"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21352] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21356"
 , "c1link" : "./qc/apps/s_client.c.html#21356"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21356] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21421"
 , "c1link" : "./qc/apps/s_client.c.html#21421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21421] The expression  ! c_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21429"
 , "c1link" : "./qc/apps/s_client.c.html#21429"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21429] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21445"
 , "c1link" : "./qc/apps/s_client.c.html#21445"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21445] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21449"
 , "c1link" : "./qc/apps/s_client.c.html#21449"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21449] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21459"
 , "c1link" : "./qc/apps/s_client.c.html#21459"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21459] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21459"
 , "c1link" : "./qc/apps/s_client.c.html#21459"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21459] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21476"
 , "c1link" : "./qc/apps/s_client.c.html#21476"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21476] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21481"
 , "c1link" : "./qc/apps/s_client.c.html#21481"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21481] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21486"
 , "c1link" : "./qc/apps/s_client.c.html#21486"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21486] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21498"
 , "c1link" : "./qc/apps/s_client.c.html#21498"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21498] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21518"
 , "c1link" : "./qc/apps/s_client.c.html#21518"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21518] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21524"
 , "c1link" : "./qc/apps/s_client.c.html#21524"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21524] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21528"
 , "c1link" : "./qc/apps/s_client.c.html#21528"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21528] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21582"
 , "c1link" : "./qc/apps/s_client.c.html#21582"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21582] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21594"
 , "c1link" : "./qc/apps/s_client.c.html#21594"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21594] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21754"
 , "c1link" : "./qc/apps/s_client.c.html#21754"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21754] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21838"
 , "c1link" : "./qc/apps/s_client.c.html#21838"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21838] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21866"
 , "c1link" : "./qc/apps/s_client.c.html#21866"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21866] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21907"
 , "c1link" : "./qc/apps/s_client.c.html#21907"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21907] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21948"
 , "c1link" : "./qc/apps/s_client.c.html#21948"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21948] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21953"
 , "c1link" : "./qc/apps/s_client.c.html#21953"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21953] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21958"
 , "c1link" : "./qc/apps/s_client.c.html#21958"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21958] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21960"
 , "c1link" : "./qc/apps/s_client.c.html#21960"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21960] The expression noservername applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21969"
 , "c1link" : "./qc/apps/s_client.c.html#21969"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21969] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21979"
 , "c1link" : "./qc/apps/s_client.c.html#21979"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21979] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21990"
 , "c1link" : "./qc/apps/s_client.c.html#21990"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21990] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22007"
 , "c1link" : "./qc/apps/s_client.c.html#22007"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22007] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22011"
 , "c1link" : "./qc/apps/s_client.c.html#22011"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22011] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22033"
 , "c1link" : "./qc/apps/s_client.c.html#22033"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22033] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22049"
 , "c1link" : "./qc/apps/s_client.c.html#22049"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22049] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22057"
 , "c1link" : "./qc/apps/s_client.c.html#22057"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22057] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22060"
 , "c1link" : "./qc/apps/s_client.c.html#22060"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22060] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22072"
 , "c1link" : "./qc/apps/s_client.c.html#22072"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22072] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22076"
 , "c1link" : "./qc/apps/s_client.c.html#22076"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22076] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22092"
 , "c1link" : "./qc/apps/s_client.c.html#22092"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22092] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22096"
 , "c1link" : "./qc/apps/s_client.c.html#22096"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22096] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22105"
 , "c1link" : "./qc/apps/s_client.c.html#22105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22105] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22125"
 , "c1link" : "./qc/apps/s_client.c.html#22125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22125] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22138"
 , "c1link" : "./qc/apps/s_client.c.html#22138"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22138] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22151"
 , "c1link" : "./qc/apps/s_client.c.html#22151"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22151] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22173"
 , "c1link" : "./qc/apps/s_client.c.html#22173"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22173] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22187"
 , "c1link" : "./qc/apps/s_client.c.html#22187"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22187] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22196"
 , "c1link" : "./qc/apps/s_client.c.html#22196"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22196] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22211"
 , "c1link" : "./qc/apps/s_client.c.html#22211"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22211] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22221"
 , "c1link" : "./qc/apps/s_client.c.html#22221"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22221] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22226"
 , "c1link" : "./qc/apps/s_client.c.html#22226"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22226] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22259"
 , "c1link" : "./qc/apps/s_client.c.html#22259"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22259] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22270"
 , "c1link" : "./qc/apps/s_client.c.html#22270"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22270] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22279"
 , "c1link" : "./qc/apps/s_client.c.html#22279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22279] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22283"
 , "c1link" : "./qc/apps/s_client.c.html#22283"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22283] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22294"
 , "c1link" : "./qc/apps/s_client.c.html#22294"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22294] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22309"
 , "c1link" : "./qc/apps/s_client.c.html#22309"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22309] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22316"
 , "c1link" : "./qc/apps/s_client.c.html#22316"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22316] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22318"
 , "c1link" : "./qc/apps/s_client.c.html#22318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22318] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22324"
 , "c1link" : "./qc/apps/s_client.c.html#22324"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22324] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22327"
 , "c1link" : "./qc/apps/s_client.c.html#22327"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22327] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22343"
 , "c1link" : "./qc/apps/s_client.c.html#22343"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22343] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22354"
 , "c1link" : "./qc/apps/s_client.c.html#22354"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22354] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22365"
 , "c1link" : "./qc/apps/s_client.c.html#22365"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22365] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22377"
 , "c1link" : "./qc/apps/s_client.c.html#22377"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22377] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22386"
 , "c1link" : "./qc/apps/s_client.c.html#22386"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22386] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22403"
 , "c1link" : "./qc/apps/s_client.c.html#22403"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22403] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22408"
 , "c1link" : "./qc/apps/s_client.c.html#22408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22408] The expression ssl_client_engine applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22413"
 , "c1link" : "./qc/apps/s_client.c.html#22413"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22413] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22425"
 , "c1link" : "./qc/apps/s_client.c.html#22425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22425] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22444"
 , "c1link" : "./qc/apps/s_client.c.html#22444"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22444] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22463"
 , "c1link" : "./qc/apps/s_client.c.html#22463"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22463] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22487"
 , "c1link" : "./qc/apps/s_client.c.html#22487"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22487] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22507"
 , "c1link" : "./qc/apps/s_client.c.html#22507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22507] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22509"
 , "c1link" : "./qc/apps/s_client.c.html#22509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[22509] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "22517"
 , "c1link" : "./qc/apps/s_client.c.html#22517"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22517] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22522"
 , "c1link" : "./qc/apps/s_client.c.html#22522"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22522] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22554"
 , "c1link" : "./qc/apps/s_client.c.html#22554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22554] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22562"
 , "c1link" : "./qc/apps/s_client.c.html#22562"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22562] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22566"
 , "c1link" : "./qc/apps/s_client.c.html#22566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22566] The expression ct_validation applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22568"
 , "c1link" : "./qc/apps/s_client.c.html#22568"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22568] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22586"
 , "c1link" : "./qc/apps/s_client.c.html#22586"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22586] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22592"
 , "c1link" : "./qc/apps/s_client.c.html#22592"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22592] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22594"
 , "c1link" : "./qc/apps/s_client.c.html#22594"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22594] The expression  ! noservername applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22603"
 , "c1link" : "./qc/apps/s_client.c.html#22603"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22603] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22626"
 , "c1link" : "./qc/apps/s_client.c.html#22626"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22626] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22644"
 , "c1link" : "./qc/apps/s_client.c.html#22644"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22644] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22652"
 , "c1link" : "./qc/apps/s_client.c.html#22652"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22652] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22654"
 , "c1link" : "./qc/apps/s_client.c.html#22654"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22654] The expression enable_pha applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22671"
 , "c1link" : "./qc/apps/s_client.c.html#22671"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22671] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22690"
 , "c1link" : "./qc/apps/s_client.c.html#22690"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22690] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22695"
 , "c1link" : "./qc/apps/s_client.c.html#22695"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22695] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22701"
 , "c1link" : "./qc/apps/s_client.c.html#22701"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22701] The expression fallback_scsv applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22740"
 , "c1link" : "./qc/apps/s_client.c.html#22740"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22740] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22753"
 , "c1link" : "./qc/apps/s_client.c.html#22753"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22753] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22762"
 , "c1link" : "./qc/apps/s_client.c.html#22762"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22762] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22767"
 , "c1link" : "./qc/apps/s_client.c.html#22767"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22767] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22769"
 , "c1link" : "./qc/apps/s_client.c.html#22769"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22769] The expression dane_ee_no_name applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22778"
 , "c1link" : "./qc/apps/s_client.c.html#22778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22778] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22790"
 , "c1link" : "./qc/apps/s_client.c.html#22790"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22790] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22794"
 , "c1link" : "./qc/apps/s_client.c.html#22794"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22794] The expression c_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22797"
 , "c1link" : "./qc/apps/s_client.c.html#22797"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22797] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22802"
 , "c1link" : "./qc/apps/s_client.c.html#22802"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22802] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22812"
 , "c1link" : "./qc/apps/s_client.c.html#22812"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22812] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22819"
 , "c1link" : "./qc/apps/s_client.c.html#22819"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22819] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22830"
 , "c1link" : "./qc/apps/s_client.c.html#22830"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22830] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22841"
 , "c1link" : "./qc/apps/s_client.c.html#22841"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22841] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22851"
 , "c1link" : "./qc/apps/s_client.c.html#22851"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22851] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22864"
 , "c1link" : "./qc/apps/s_client.c.html#22864"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22864] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "22874"
 , "c1link" : "./qc/apps/s_client.c.html#22874"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22874] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "22888"
 , "c1link" : "./qc/apps/s_client.c.html#22888"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22888] The expression nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22895"
 , "c1link" : "./qc/apps/s_client.c.html#22895"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22895] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22899"
 , "c1link" : "./qc/apps/s_client.c.html#22899"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22899] The expression c_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22909"
 , "c1link" : "./qc/apps/s_client.c.html#22909"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22909] The expression c_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22914"
 , "c1link" : "./qc/apps/s_client.c.html#22914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22914] The expression c_status_req applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22991"
 , "c1link" : "./qc/apps/s_client.c.html#22991"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22991] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23006"
 , "c1link" : "./qc/apps/s_client.c.html#23006"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23006] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23038"
 , "c1link" : "./qc/apps/s_client.c.html#23038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23038] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23103"
 , "c1link" : "./qc/apps/s_client.c.html#23103"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23103] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23114"
 , "c1link" : "./qc/apps/s_client.c.html#23114"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23114] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23123"
 , "c1link" : "./qc/apps/s_client.c.html#23123"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23123] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23127"
 , "c1link" : "./qc/apps/s_client.c.html#23127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23127] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23150"
 , "c1link" : "./qc/apps/s_client.c.html#23150"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23150] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23162"
 , "c1link" : "./qc/apps/s_client.c.html#23162"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23162] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23169"
 , "c1link" : "./qc/apps/s_client.c.html#23169"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23169] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23190"
 , "c1link" : "./qc/apps/s_client.c.html#23190"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23190] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23190"
 , "c1link" : "./qc/apps/s_client.c.html#23190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23190] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23194"
 , "c1link" : "./qc/apps/s_client.c.html#23194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23194] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23194"
 , "c1link" : "./qc/apps/s_client.c.html#23194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23194] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23199"
 , "c1link" : "./qc/apps/s_client.c.html#23199"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23199] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23199"
 , "c1link" : "./qc/apps/s_client.c.html#23199"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23199] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23285"
 , "c1link" : "./qc/apps/s_client.c.html#23285"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23285] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23310"
 , "c1link" : "./qc/apps/s_client.c.html#23310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[23310] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "23316"
 , "c1link" : "./qc/apps/s_client.c.html#23316"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23316] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23320"
 , "c1link" : "./qc/apps/s_client.c.html#23320"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23320] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23325"
 , "c1link" : "./qc/apps/s_client.c.html#23325"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23325] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23330"
 , "c1link" : "./qc/apps/s_client.c.html#23330"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23330] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23338"
 , "c1link" : "./qc/apps/s_client.c.html#23338"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23338] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23348"
 , "c1link" : "./qc/apps/s_client.c.html#23348"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23348] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23355"
 , "c1link" : "./qc/apps/s_client.c.html#23355"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23355] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23361"
 , "c1link" : "./qc/apps/s_client.c.html#23361"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23361] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23392"
 , "c1link" : "./qc/apps/s_client.c.html#23392"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23392] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23430"
 , "c1link" : "./qc/apps/s_client.c.html#23430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23430] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23438"
 , "c1link" : "./qc/apps/s_client.c.html#23438"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23438] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23447"
 , "c1link" : "./qc/apps/s_client.c.html#23447"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23447] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23477"
 , "c1link" : "./qc/apps/s_client.c.html#23477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23477] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23485"
 , "c1link" : "./qc/apps/s_client.c.html#23485"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23485] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23490"
 , "c1link" : "./qc/apps/s_client.c.html#23490"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23490] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23500"
 , "c1link" : "./qc/apps/s_client.c.html#23500"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23500] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23537"
 , "c1link" : "./qc/apps/s_client.c.html#23537"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23537] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23545"
 , "c1link" : "./qc/apps/s_client.c.html#23545"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23545] goto statement jump to end"
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
   "c1" : "23560"
 , "c1link" : "./qc/apps/s_client.c.html#23560"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23560] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23570"
 , "c1link" : "./qc/apps/s_client.c.html#23570"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23570] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23587"
 , "c1link" : "./qc/apps/s_client.c.html#23587"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23587] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23592"
 , "c1link" : "./qc/apps/s_client.c.html#23592"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23592] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23596"
 , "c1link" : "./qc/apps/s_client.c.html#23596"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23596] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23630"
 , "c1link" : "./qc/apps/s_client.c.html#23630"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23630] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23633"
 , "c1link" : "./qc/apps/s_client.c.html#23633"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23633] The expression  ! finish applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23648"
 , "c1link" : "./qc/apps/s_client.c.html#23648"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23648] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23659"
 , "c1link" : "./qc/apps/s_client.c.html#23659"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23659] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23659"
 , "c1link" : "./qc/apps/s_client.c.html#23659"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23659] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23663"
 , "c1link" : "./qc/apps/s_client.c.html#23663"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23663] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23663"
 , "c1link" : "./qc/apps/s_client.c.html#23663"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23663] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23668"
 , "c1link" : "./qc/apps/s_client.c.html#23668"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23668] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23668"
 , "c1link" : "./qc/apps/s_client.c.html#23668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23668] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23672"
 , "c1link" : "./qc/apps/s_client.c.html#23672"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23672] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23672"
 , "c1link" : "./qc/apps/s_client.c.html#23672"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23672] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23695"
 , "c1link" : "./qc/apps/s_client.c.html#23695"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23695] The expression in_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23698"
 , "c1link" : "./qc/apps/s_client.c.html#23698"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23698] The expression c_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23707"
 , "c1link" : "./qc/apps/s_client.c.html#23707"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23707] The expression starttls_proto applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23710"
 , "c1link" : "./qc/apps/s_client.c.html#23710"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23710] The expression  ! reconnect applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23714"
 , "c1link" : "./qc/apps/s_client.c.html#23714"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23714] The expression reconnect applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23721"
 , "c1link" : "./qc/apps/s_client.c.html#23721"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23721] goto statement jump to re_start"
}} 
,
{ "ligne" : {
   "c1" : "23728"
 , "c1link" : "./qc/apps/s_client.c.html#23728"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23728] The expression  ! ssl_pending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23730"
 , "c1link" : "./qc/apps/s_client.c.html#23730"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23730] The expression tty_on applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23739"
 , "c1link" : "./qc/apps/s_client.c.html#23739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23739] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23739"
 , "c1link" : "./qc/apps/s_client.c.html#23739"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23739] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23755"
 , "c1link" : "./qc/apps/s_client.c.html#23755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23755] The expression write_tty applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23758"
 , "c1link" : "./qc/apps/s_client.c.html#23758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23758] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23758"
 , "c1link" : "./qc/apps/s_client.c.html#23758"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23758] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23775"
 , "c1link" : "./qc/apps/s_client.c.html#23775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23775] The expression read_ssl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23778"
 , "c1link" : "./qc/apps/s_client.c.html#23778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23778] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23778"
 , "c1link" : "./qc/apps/s_client.c.html#23778"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23778] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23793"
 , "c1link" : "./qc/apps/s_client.c.html#23793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23793] The expression write_ssl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23796"
 , "c1link" : "./qc/apps/s_client.c.html#23796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23796] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23796"
 , "c1link" : "./qc/apps/s_client.c.html#23796"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23796] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23826"
 , "c1link" : "./qc/apps/s_client.c.html#23826"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23826] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23860"
 , "c1link" : "./qc/apps/s_client.c.html#23860"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23860] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23895"
 , "c1link" : "./qc/apps/s_client.c.html#23895"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23895] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23910"
 , "c1link" : "./qc/apps/s_client.c.html#23910"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23910] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23920"
 , "c1link" : "./qc/apps/s_client.c.html#23920"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23920] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23954"
 , "c1link" : "./qc/apps/s_client.c.html#23954"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23954] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23986"
 , "c1link" : "./qc/apps/s_client.c.html#23986"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23986] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24022"
 , "c1link" : "./qc/apps/s_client.c.html#24022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24022] The expression c_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24026"
 , "c1link" : "./qc/apps/s_client.c.html#24026"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24026] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24030"
 , "c1link" : "./qc/apps/s_client.c.html#24030"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24030] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24035"
 , "c1link" : "./qc/apps/s_client.c.html#24035"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24035] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24061"
 , "c1link" : "./qc/apps/s_client.c.html#24061"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24061] The expression crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24093"
 , "c1link" : "./qc/apps/s_client.c.html#24093"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24093] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24122"
 , "c1link" : "./qc/apps/s_client.c.html#24122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24122] The expression in_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24137"
 , "c1link" : "./qc/apps/s_client.c.html#24137"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24137] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24137"
 , "c1link" : "./qc/apps/s_client.c.html#24137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24137] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24141"
 , "c1link" : "./qc/apps/s_client.c.html#24141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24141] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24141"
 , "c1link" : "./qc/apps/s_client.c.html#24141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24141] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24146"
 , "c1link" : "./qc/apps/s_client.c.html#24146"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24146] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24146"
 , "c1link" : "./qc/apps/s_client.c.html#24146"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24146] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24251"
 , "c1link" : "./qc/apps/s_client.c.html#24251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24251] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24256"
 , "c1link" : "./qc/apps/s_client.c.html#24256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24256] The expression full applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24292"
 , "c1link" : "./qc/apps/s_client.c.html#24292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24292] The expression c_showcerts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24385"
 , "c1link" : "./qc/apps/s_client.c.html#24385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24385] The expression (0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24385"
 , "c1link" : "./qc/apps/s_client.c.html#24385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24385] The expression (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24391"
 , "c1link" : "./qc/apps/s_client.c.html#24391"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24391] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24404"
 , "c1link" : "./qc/apps/s_client.c.html#24404"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24404] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24404"
 , "c1link" : "./qc/apps/s_client.c.html#24404"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24404] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24404"
 , "c1link" : "./qc/apps/s_client.c.html#24404"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24404] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24413"
 , "c1link" : "./qc/apps/s_client.c.html#24413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24413] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24422"
 , "c1link" : "./qc/apps/s_client.c.html#24422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24422] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24438"
 , "c1link" : "./qc/apps/s_client.c.html#24438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24438] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24444"
 , "c1link" : "./qc/apps/s_client.c.html#24444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24444] The expression istls13 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24516"
 , "c1link" : "./qc/apps/s_client.c.html#24516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24516] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24553"
 , "c1link" : "./qc/apps/s_client.c.html#24553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24553] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24562"
 , "c1link" : "./qc/apps/s_client.c.html#24562"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24562] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24564"
 , "c1link" : "./qc/apps/s_client.c.html#24564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24564] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24572"
 , "c1link" : "./qc/apps/s_client.c.html#24572"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24572] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24574"
 , "c1link" : "./qc/apps/s_client.c.html#24574"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24574] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24585"
 , "c1link" : "./qc/apps/s_client.c.html#24585"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24585] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24592"
 , "c1link" : "./qc/apps/s_client.c.html#24592"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24592] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24594"
 , "c1link" : "./qc/apps/s_client.c.html#24594"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24594] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
