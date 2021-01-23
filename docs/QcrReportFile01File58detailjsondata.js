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
   "c1" : "17448"
 , "c1link" : "./qc/apps/s_client.c.html#17448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17448] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "17754"
 , "c1link" : "./qc/apps/s_client.c.html#17754"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[17754] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "18028"
 , "c1link" : "./qc/apps/s_client.c.html#18028"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[18028] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "19106"
 , "c1link" : "./qc/apps/s_client.c.html#19106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19106] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19996"
 , "c1link" : "./qc/apps/s_client.c.html#19996"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[19996] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "19998"
 , "c1link" : "./qc/apps/s_client.c.html#19998"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[19998] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20000"
 , "c1link" : "./qc/apps/s_client.c.html#20000"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20000] The expression  ! hint applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20002"
 , "c1link" : "./qc/apps/s_client.c.html#20002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20002] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20005"
 , "c1link" : "./qc/apps/s_client.c.html#20005"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20005] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20014"
 , "c1link" : "./qc/apps/s_client.c.html#20014"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20014] goto statement jump to out_err"
}} 
,
{ "ligne" : {
   "c1" : "20015"
 , "c1link" : "./qc/apps/s_client.c.html#20015"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20015] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20041"
 , "c1link" : "./qc/apps/s_client.c.html#20041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20041] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20046"
 , "c1link" : "./qc/apps/s_client.c.html#20046"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20046] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20079"
 , "c1link" : "./qc/apps/s_client.c.html#20079"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20079] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20113"
 , "c1link" : "./qc/apps/s_client.c.html#20113"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20113] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20124"
 , "c1link" : "./qc/apps/s_client.c.html#20124"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[20124] goto statement jump to err"
}} 
,
{ "ligne" : {
   "c1" : "20254"
 , "c1link" : "./qc/apps/s_client.c.html#20254"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20254] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20258"
 , "c1link" : "./qc/apps/s_client.c.html#20258"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20258] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20304"
 , "c1link" : "./qc/apps/s_client.c.html#20304"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20304] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20336"
 , "c1link" : "./qc/apps/s_client.c.html#20336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20336] The expression  ! c_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "20341"
 , "c1link" : "./qc/apps/s_client.c.html#20341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[20341] The expression i applies to a single value or variable, might be ambiguous."
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
   "c1" : "20384"
 , "c1link" : "./qc/apps/s_client.c.html#20384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20384] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
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
   "c1" : "20415"
 , "c1link" : "./qc/apps/s_client.c.html#20415"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20415] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20465"
 , "c1link" : "./qc/apps/s_client.c.html#20465"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20465] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "20495"
 , "c1link" : "./qc/apps/s_client.c.html#20495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[20495] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "20514"
 , "c1link" : "./qc/apps/s_client.c.html#20514"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[20514] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21278"
 , "c1link" : "./qc/apps/s_client.c.html#21278"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[21278] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "21278"
 , "c1link" : "./qc/apps/s_client.c.html#21278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21278] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "21282"
 , "c1link" : "./qc/apps/s_client.c.html#21282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21282] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21282"
 , "c1link" : "./qc/apps/s_client.c.html#21282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21282] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21287"
 , "c1link" : "./qc/apps/s_client.c.html#21287"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[21287] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "21287"
 , "c1link" : "./qc/apps/s_client.c.html#21287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[21287] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "21291"
 , "c1link" : "./qc/apps/s_client.c.html#21291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21291] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21291"
 , "c1link" : "./qc/apps/s_client.c.html#21291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[21291] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "21312"
 , "c1link" : "./qc/apps/s_client.c.html#21312"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21312] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21322"
 , "c1link" : "./qc/apps/s_client.c.html#21322"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21322] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21328"
 , "c1link" : "./qc/apps/s_client.c.html#21328"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21328] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21334"
 , "c1link" : "./qc/apps/s_client.c.html#21334"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21334] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21339"
 , "c1link" : "./qc/apps/s_client.c.html#21339"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21339] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21346"
 , "c1link" : "./qc/apps/s_client.c.html#21346"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21346] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21352"
 , "c1link" : "./qc/apps/s_client.c.html#21352"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000010[21352] The switch case refers to the jump label opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21354"
 , "c1link" : "./qc/apps/s_client.c.html#21354"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21354] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21358"
 , "c1link" : "./qc/apps/s_client.c.html#21358"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21358] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21423"
 , "c1link" : "./qc/apps/s_client.c.html#21423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21423] The expression  ! c_quiet applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21431"
 , "c1link" : "./qc/apps/s_client.c.html#21431"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21431] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21447"
 , "c1link" : "./qc/apps/s_client.c.html#21447"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21447] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21451"
 , "c1link" : "./qc/apps/s_client.c.html#21451"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21451] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21461"
 , "c1link" : "./qc/apps/s_client.c.html#21461"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21461] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21461"
 , "c1link" : "./qc/apps/s_client.c.html#21461"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21461] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21478"
 , "c1link" : "./qc/apps/s_client.c.html#21478"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21478] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21483"
 , "c1link" : "./qc/apps/s_client.c.html#21483"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21483] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21488"
 , "c1link" : "./qc/apps/s_client.c.html#21488"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21488] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21500"
 , "c1link" : "./qc/apps/s_client.c.html#21500"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21500] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21520"
 , "c1link" : "./qc/apps/s_client.c.html#21520"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21520] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21526"
 , "c1link" : "./qc/apps/s_client.c.html#21526"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21526] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21530"
 , "c1link" : "./qc/apps/s_client.c.html#21530"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21530] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21584"
 , "c1link" : "./qc/apps/s_client.c.html#21584"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[21584] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "21596"
 , "c1link" : "./qc/apps/s_client.c.html#21596"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21596] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21756"
 , "c1link" : "./qc/apps/s_client.c.html#21756"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21756] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21840"
 , "c1link" : "./qc/apps/s_client.c.html#21840"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21840] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21868"
 , "c1link" : "./qc/apps/s_client.c.html#21868"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21868] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "21909"
 , "c1link" : "./qc/apps/s_client.c.html#21909"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21909] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21950"
 , "c1link" : "./qc/apps/s_client.c.html#21950"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21950] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21955"
 , "c1link" : "./qc/apps/s_client.c.html#21955"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21955] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21960"
 , "c1link" : "./qc/apps/s_client.c.html#21960"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21960] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21962"
 , "c1link" : "./qc/apps/s_client.c.html#21962"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[21962] The expression noservername applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "21971"
 , "c1link" : "./qc/apps/s_client.c.html#21971"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21971] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21981"
 , "c1link" : "./qc/apps/s_client.c.html#21981"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21981] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "21992"
 , "c1link" : "./qc/apps/s_client.c.html#21992"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[21992] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22009"
 , "c1link" : "./qc/apps/s_client.c.html#22009"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22009] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22013"
 , "c1link" : "./qc/apps/s_client.c.html#22013"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22013] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22035"
 , "c1link" : "./qc/apps/s_client.c.html#22035"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22035] goto statement jump to opthelp"
}} 
,
{ "ligne" : {
   "c1" : "22051"
 , "c1link" : "./qc/apps/s_client.c.html#22051"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22051] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22059"
 , "c1link" : "./qc/apps/s_client.c.html#22059"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22059] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22062"
 , "c1link" : "./qc/apps/s_client.c.html#22062"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22062] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22074"
 , "c1link" : "./qc/apps/s_client.c.html#22074"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22074] The expression  ! res applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22078"
 , "c1link" : "./qc/apps/s_client.c.html#22078"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22078] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22094"
 , "c1link" : "./qc/apps/s_client.c.html#22094"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22094] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22098"
 , "c1link" : "./qc/apps/s_client.c.html#22098"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22098] The expression next_proto_neg_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22107"
 , "c1link" : "./qc/apps/s_client.c.html#22107"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22107] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22127"
 , "c1link" : "./qc/apps/s_client.c.html#22127"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22127] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22140"
 , "c1link" : "./qc/apps/s_client.c.html#22140"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22140] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22153"
 , "c1link" : "./qc/apps/s_client.c.html#22153"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22153] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22175"
 , "c1link" : "./qc/apps/s_client.c.html#22175"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22175] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22189"
 , "c1link" : "./qc/apps/s_client.c.html#22189"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22189] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22198"
 , "c1link" : "./qc/apps/s_client.c.html#22198"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22198] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22213"
 , "c1link" : "./qc/apps/s_client.c.html#22213"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22213] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22223"
 , "c1link" : "./qc/apps/s_client.c.html#22223"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22223] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22228"
 , "c1link" : "./qc/apps/s_client.c.html#22228"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22228] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22261"
 , "c1link" : "./qc/apps/s_client.c.html#22261"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22261] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22272"
 , "c1link" : "./qc/apps/s_client.c.html#22272"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22272] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22281"
 , "c1link" : "./qc/apps/s_client.c.html#22281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22281] The expression sdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22285"
 , "c1link" : "./qc/apps/s_client.c.html#22285"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22285] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22296"
 , "c1link" : "./qc/apps/s_client.c.html#22296"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22296] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22311"
 , "c1link" : "./qc/apps/s_client.c.html#22311"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22311] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22318"
 , "c1link" : "./qc/apps/s_client.c.html#22318"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22318] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22320"
 , "c1link" : "./qc/apps/s_client.c.html#22320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22320] The expression ignore_unexpected_eof applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22326"
 , "c1link" : "./qc/apps/s_client.c.html#22326"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22326] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22329"
 , "c1link" : "./qc/apps/s_client.c.html#22329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22329] The expression async applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22345"
 , "c1link" : "./qc/apps/s_client.c.html#22345"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22345] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22356"
 , "c1link" : "./qc/apps/s_client.c.html#22356"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22356] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22367"
 , "c1link" : "./qc/apps/s_client.c.html#22367"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22367] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22379"
 , "c1link" : "./qc/apps/s_client.c.html#22379"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22379] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22388"
 , "c1link" : "./qc/apps/s_client.c.html#22388"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22388] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22405"
 , "c1link" : "./qc/apps/s_client.c.html#22405"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22405] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22410"
 , "c1link" : "./qc/apps/s_client.c.html#22410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22410] The expression ssl_client_engine applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22415"
 , "c1link" : "./qc/apps/s_client.c.html#22415"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22415] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22427"
 , "c1link" : "./qc/apps/s_client.c.html#22427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22427] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22446"
 , "c1link" : "./qc/apps/s_client.c.html#22446"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22446] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22465"
 , "c1link" : "./qc/apps/s_client.c.html#22465"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22465] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22489"
 , "c1link" : "./qc/apps/s_client.c.html#22489"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22489] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22509"
 , "c1link" : "./qc/apps/s_client.c.html#22509"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22509] The expression alpn_in applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22511"
 , "c1link" : "./qc/apps/s_client.c.html#22511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[22511] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "22519"
 , "c1link" : "./qc/apps/s_client.c.html#22519"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22519] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22524"
 , "c1link" : "./qc/apps/s_client.c.html#22524"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22524] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22556"
 , "c1link" : "./qc/apps/s_client.c.html#22556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22556] The expression state applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22564"
 , "c1link" : "./qc/apps/s_client.c.html#22564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22564] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22568"
 , "c1link" : "./qc/apps/s_client.c.html#22568"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22568] The expression ct_validation applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22570"
 , "c1link" : "./qc/apps/s_client.c.html#22570"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22570] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22588"
 , "c1link" : "./qc/apps/s_client.c.html#22588"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22588] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22594"
 , "c1link" : "./qc/apps/s_client.c.html#22594"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22594] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22596"
 , "c1link" : "./qc/apps/s_client.c.html#22596"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22596] The expression  ! noservername applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22605"
 , "c1link" : "./qc/apps/s_client.c.html#22605"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22605] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22628"
 , "c1link" : "./qc/apps/s_client.c.html#22628"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22628] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22646"
 , "c1link" : "./qc/apps/s_client.c.html#22646"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22646] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22654"
 , "c1link" : "./qc/apps/s_client.c.html#22654"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22654] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22656"
 , "c1link" : "./qc/apps/s_client.c.html#22656"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22656] The expression enable_pha applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22673"
 , "c1link" : "./qc/apps/s_client.c.html#22673"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22673] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22692"
 , "c1link" : "./qc/apps/s_client.c.html#22692"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22692] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22697"
 , "c1link" : "./qc/apps/s_client.c.html#22697"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22697] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22703"
 , "c1link" : "./qc/apps/s_client.c.html#22703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22703] The expression fallback_scsv applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22742"
 , "c1link" : "./qc/apps/s_client.c.html#22742"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22742] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22755"
 , "c1link" : "./qc/apps/s_client.c.html#22755"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22755] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22764"
 , "c1link" : "./qc/apps/s_client.c.html#22764"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22764] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22769"
 , "c1link" : "./qc/apps/s_client.c.html#22769"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22769] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22771"
 , "c1link" : "./qc/apps/s_client.c.html#22771"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22771] The expression dane_ee_no_name applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22780"
 , "c1link" : "./qc/apps/s_client.c.html#22780"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22780] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22792"
 , "c1link" : "./qc/apps/s_client.c.html#22792"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22792] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22796"
 , "c1link" : "./qc/apps/s_client.c.html#22796"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22796] The expression c_nbio applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22799"
 , "c1link" : "./qc/apps/s_client.c.html#22799"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22799] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22804"
 , "c1link" : "./qc/apps/s_client.c.html#22804"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22804] The expression isdtls applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22814"
 , "c1link" : "./qc/apps/s_client.c.html#22814"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[22814] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "22821"
 , "c1link" : "./qc/apps/s_client.c.html#22821"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22821] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22832"
 , "c1link" : "./qc/apps/s_client.c.html#22832"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22832] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "22843"
 , "c1link" : "./qc/apps/s_client.c.html#22843"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22843] The expression enable_timeouts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22853"
 , "c1link" : "./qc/apps/s_client.c.html#22853"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22853] The expression socket_mtu applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22866"
 , "c1link" : "./qc/apps/s_client.c.html#22866"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22866] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "22876"
 , "c1link" : "./qc/apps/s_client.c.html#22876"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[22876] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "22890"
 , "c1link" : "./qc/apps/s_client.c.html#22890"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22890] The expression nbio_test applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22897"
 , "c1link" : "./qc/apps/s_client.c.html#22897"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22897] The expression c_debug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22901"
 , "c1link" : "./qc/apps/s_client.c.html#22901"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22901] The expression c_msg applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22911"
 , "c1link" : "./qc/apps/s_client.c.html#22911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22911] The expression c_tlsextdebug applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22916"
 , "c1link" : "./qc/apps/s_client.c.html#22916"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22916] The expression c_status_req applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "22993"
 , "c1link" : "./qc/apps/s_client.c.html#22993"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[22993] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23008"
 , "c1link" : "./qc/apps/s_client.c.html#23008"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23008] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23040"
 , "c1link" : "./qc/apps/s_client.c.html#23040"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23040] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23105"
 , "c1link" : "./qc/apps/s_client.c.html#23105"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23105] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23116"
 , "c1link" : "./qc/apps/s_client.c.html#23116"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23116] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23125"
 , "c1link" : "./qc/apps/s_client.c.html#23125"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23125] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23129"
 , "c1link" : "./qc/apps/s_client.c.html#23129"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23129] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23152"
 , "c1link" : "./qc/apps/s_client.c.html#23152"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23152] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23164"
 , "c1link" : "./qc/apps/s_client.c.html#23164"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23164] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23171"
 , "c1link" : "./qc/apps/s_client.c.html#23171"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23171] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23192"
 , "c1link" : "./qc/apps/s_client.c.html#23192"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23192] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23192"
 , "c1link" : "./qc/apps/s_client.c.html#23192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23192] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23196"
 , "c1link" : "./qc/apps/s_client.c.html#23196"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23196] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23196"
 , "c1link" : "./qc/apps/s_client.c.html#23196"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23196] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23201"
 , "c1link" : "./qc/apps/s_client.c.html#23201"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23201] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23201"
 , "c1link" : "./qc/apps/s_client.c.html#23201"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23201] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23287"
 , "c1link" : "./qc/apps/s_client.c.html#23287"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23287] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23312"
 , "c1link" : "./qc/apps/s_client.c.html#23312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[23312] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "23318"
 , "c1link" : "./qc/apps/s_client.c.html#23318"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23318] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23322"
 , "c1link" : "./qc/apps/s_client.c.html#23322"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23322] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23327"
 , "c1link" : "./qc/apps/s_client.c.html#23327"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23327] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23332"
 , "c1link" : "./qc/apps/s_client.c.html#23332"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23332] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23340"
 , "c1link" : "./qc/apps/s_client.c.html#23340"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23340] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23350"
 , "c1link" : "./qc/apps/s_client.c.html#23350"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23350] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23357"
 , "c1link" : "./qc/apps/s_client.c.html#23357"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23357] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23363"
 , "c1link" : "./qc/apps/s_client.c.html#23363"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23363] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23394"
 , "c1link" : "./qc/apps/s_client.c.html#23394"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23394] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23432"
 , "c1link" : "./qc/apps/s_client.c.html#23432"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23432] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23440"
 , "c1link" : "./qc/apps/s_client.c.html#23440"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23440] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23449"
 , "c1link" : "./qc/apps/s_client.c.html#23449"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23449] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23479"
 , "c1link" : "./qc/apps/s_client.c.html#23479"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23479] The expression  ! foundit applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23487"
 , "c1link" : "./qc/apps/s_client.c.html#23487"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23487] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23492"
 , "c1link" : "./qc/apps/s_client.c.html#23492"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23492] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23502"
 , "c1link" : "./qc/apps/s_client.c.html#23502"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23502] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23539"
 , "c1link" : "./qc/apps/s_client.c.html#23539"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23539] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23547"
 , "c1link" : "./qc/apps/s_client.c.html#23547"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23547] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23550"
 , "c1link" : "./qc/apps/s_client.c.html#23550"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23550] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23562"
 , "c1link" : "./qc/apps/s_client.c.html#23562"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23562] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23572"
 , "c1link" : "./qc/apps/s_client.c.html#23572"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23572] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23589"
 , "c1link" : "./qc/apps/s_client.c.html#23589"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23589] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23594"
 , "c1link" : "./qc/apps/s_client.c.html#23594"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23594] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23598"
 , "c1link" : "./qc/apps/s_client.c.html#23598"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23598] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23632"
 , "c1link" : "./qc/apps/s_client.c.html#23632"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23632] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23635"
 , "c1link" : "./qc/apps/s_client.c.html#23635"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23635] The expression  ! finish applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23650"
 , "c1link" : "./qc/apps/s_client.c.html#23650"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23650] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23661"
 , "c1link" : "./qc/apps/s_client.c.html#23661"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23661] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23661"
 , "c1link" : "./qc/apps/s_client.c.html#23661"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23661] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23665"
 , "c1link" : "./qc/apps/s_client.c.html#23665"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23665] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23665"
 , "c1link" : "./qc/apps/s_client.c.html#23665"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23665] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23670"
 , "c1link" : "./qc/apps/s_client.c.html#23670"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[23670] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "23670"
 , "c1link" : "./qc/apps/s_client.c.html#23670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[23670] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "23674"
 , "c1link" : "./qc/apps/s_client.c.html#23674"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23674] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23674"
 , "c1link" : "./qc/apps/s_client.c.html#23674"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[23674] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "23697"
 , "c1link" : "./qc/apps/s_client.c.html#23697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23697] The expression in_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23700"
 , "c1link" : "./qc/apps/s_client.c.html#23700"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23700] The expression c_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23709"
 , "c1link" : "./qc/apps/s_client.c.html#23709"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23709] The expression starttls_proto applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23712"
 , "c1link" : "./qc/apps/s_client.c.html#23712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23712] The expression  ! reconnect applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23716"
 , "c1link" : "./qc/apps/s_client.c.html#23716"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23716] The expression reconnect applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23723"
 , "c1link" : "./qc/apps/s_client.c.html#23723"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23723] goto statement jump to re_start"
}} 
,
{ "ligne" : {
   "c1" : "23730"
 , "c1link" : "./qc/apps/s_client.c.html#23730"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23730] The expression  ! ssl_pending applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23732"
 , "c1link" : "./qc/apps/s_client.c.html#23732"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23732] The expression tty_on applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23741"
 , "c1link" : "./qc/apps/s_client.c.html#23741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23741] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23741"
 , "c1link" : "./qc/apps/s_client.c.html#23741"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23741] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23757"
 , "c1link" : "./qc/apps/s_client.c.html#23757"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23757] The expression write_tty applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23760"
 , "c1link" : "./qc/apps/s_client.c.html#23760"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23760] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23760"
 , "c1link" : "./qc/apps/s_client.c.html#23760"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23760] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23777"
 , "c1link" : "./qc/apps/s_client.c.html#23777"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23777] The expression read_ssl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23780"
 , "c1link" : "./qc/apps/s_client.c.html#23780"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23780] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23780"
 , "c1link" : "./qc/apps/s_client.c.html#23780"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23780] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23795"
 , "c1link" : "./qc/apps/s_client.c.html#23795"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[23795] The expression write_ssl applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "23798"
 , "c1link" : "./qc/apps/s_client.c.html#23798"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23798] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23798"
 , "c1link" : "./qc/apps/s_client.c.html#23798"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[23798] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "23828"
 , "c1link" : "./qc/apps/s_client.c.html#23828"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23828] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23862"
 , "c1link" : "./qc/apps/s_client.c.html#23862"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23862] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "23897"
 , "c1link" : "./qc/apps/s_client.c.html#23897"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23897] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23912"
 , "c1link" : "./qc/apps/s_client.c.html#23912"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23912] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23922"
 , "c1link" : "./qc/apps/s_client.c.html#23922"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23922] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23956"
 , "c1link" : "./qc/apps/s_client.c.html#23956"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23956] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "23988"
 , "c1link" : "./qc/apps/s_client.c.html#23988"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[23988] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24024"
 , "c1link" : "./qc/apps/s_client.c.html#24024"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24024] The expression c_brief applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24028"
 , "c1link" : "./qc/apps/s_client.c.html#24028"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24028] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24032"
 , "c1link" : "./qc/apps/s_client.c.html#24032"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24032] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24037"
 , "c1link" : "./qc/apps/s_client.c.html#24037"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24037] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24063"
 , "c1link" : "./qc/apps/s_client.c.html#24063"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24063] The expression crlf applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24095"
 , "c1link" : "./qc/apps/s_client.c.html#24095"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24095] goto statement jump to shut"
}} 
,
{ "ligne" : {
   "c1" : "24124"
 , "c1link" : "./qc/apps/s_client.c.html#24124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24124] The expression in_init applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24139"
 , "c1link" : "./qc/apps/s_client.c.html#24139"
 , "c2" : "MINOR"
 , "c3" : "QC-CPP000013[24139] Inline assembly code"
}} 
,
{ "ligne" : {
   "c1" : "24139"
 , "c1link" : "./qc/apps/s_client.c.html#24139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000006[24139] The condition of do while loop is constant, infinite loop risk : 0"
}} 
,
{ "ligne" : {
   "c1" : "24143"
 , "c1link" : "./qc/apps/s_client.c.html#24143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24143] The expression 0 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24143"
 , "c1link" : "./qc/apps/s_client.c.html#24143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24143] The expression 0 is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24148"
 , "c1link" : "./qc/apps/s_client.c.html#24148"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24148] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24148"
 , "c1link" : "./qc/apps/s_client.c.html#24148"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24148] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24253"
 , "c1link" : "./qc/apps/s_client.c.html#24253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24253] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24258"
 , "c1link" : "./qc/apps/s_client.c.html#24258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24258] The expression full applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24294"
 , "c1link" : "./qc/apps/s_client.c.html#24294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24294] The expression c_showcerts applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24387"
 , "c1link" : "./qc/apps/s_client.c.html#24387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24387] The expression (0) applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24387"
 , "c1link" : "./qc/apps/s_client.c.html#24387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000012[24387] The expression (0) is invariable, always true or false"
}} 
,
{ "ligne" : {
   "c1" : "24393"
 , "c1link" : "./qc/apps/s_client.c.html#24393"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24393] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24406"
 , "c1link" : "./qc/apps/s_client.c.html#24406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24406"
 , "c1link" : "./qc/apps/s_client.c.html#24406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24406"
 , "c1link" : "./qc/apps/s_client.c.html#24406"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24406] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24415"
 , "c1link" : "./qc/apps/s_client.c.html#24415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24415] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24424"
 , "c1link" : "./qc/apps/s_client.c.html#24424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24424] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24440"
 , "c1link" : "./qc/apps/s_client.c.html#24440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24440] The expression srtp_profile applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24446"
 , "c1link" : "./qc/apps/s_client.c.html#24446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000011[24446] The expression istls13 applies to a single value or variable, might be ambiguous."
}} 
,
{ "ligne" : {
   "c1" : "24518"
 , "c1link" : "./qc/apps/s_client.c.html#24518"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24518] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24555"
 , "c1link" : "./qc/apps/s_client.c.html#24555"
 , "c2" : "BLOCKER"
 , "c3" : "QC-CPP000005[24555] Suspicious declaration of a pointer to unsigned char, in case of memcpy"
}} 
,
{ "ligne" : {
   "c1" : "24564"
 , "c1link" : "./qc/apps/s_client.c.html#24564"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24564] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24566"
 , "c1link" : "./qc/apps/s_client.c.html#24566"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24566] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24574"
 , "c1link" : "./qc/apps/s_client.c.html#24574"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24574] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24576"
 , "c1link" : "./qc/apps/s_client.c.html#24576"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24576] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24587"
 , "c1link" : "./qc/apps/s_client.c.html#24587"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24587] goto statement jump to end"
}} 
,
{ "ligne" : {
   "c1" : "24594"
 , "c1link" : "./qc/apps/s_client.c.html#24594"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPPCWE481[24594] Assigning instead of comparing (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "24596"
 , "c1link" : "./qc/apps/s_client.c.html#24596"
 , "c2" : "MAJOR"
 , "c3" : "QC-CPP000007[24596] goto statement jump to end"
}} 
]
};
console.log('leListeStr 99 main end');
