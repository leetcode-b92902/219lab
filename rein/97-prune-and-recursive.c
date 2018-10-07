#include<stdio.h>
#include<string.h>
#include<assert.h>
#include<stdbool.h>

bool isInterleave(char* s1, char* s2, char* s3) {
    while (*s3 != 0) {
        char c = *s3;
        if (*s1 != *s2) {
            ++s3;
            if (*s1 == c) {
                ++s1;
                continue;
            }
            if (*s2 == c) {
                ++s2;
                continue;
            }
            return false;
        }
        int i = 0;
        for (; *s3 == c; ++s3) {
            ++i;
        }
        int i1 = 0, i2 = 0;
        for (char *t = s1; *t == c; ++t) {
            ++i1;
        }
        for (char *t = s2; *t == c; ++t) {
            ++i2;
        }
        if (i > (i1 + i2)) {
            return false;
        }
        if (i == (i1 + i2)) {
            s1 += i1;
            s2 += i2;
            continue;
        }
        return (isInterleave(s1 + i1, s2 + (i - i1), s3) ||
                isInterleave(s1 + (i - i2), s2 + i2, s3));
    }
    return *s1 == 0 && *s2 == 0;
}

void try (char *s1, char *s2, char *s3, bool expect) {
    bool actual = isInterleave(s1, s2, s3);
    if (actual != expect) {
        printf("expect: %d:  %s %s %s\n", expect, s1, s2, s3);
    }
}

int main(void) {
    try("aabcc", "dbbca", "aadbbcbcac", true);
    try("aabcc", "dbbca", "aadbbcbcca", true);
    try("aabcc", "dbbca", "aadbbcbccc", false);
    try("aab", "aad", "aaabad", true);
    try("aabc", "aad", "aaabad", false);
    try("", "", "", true);
    try("", "", "a", false);
    try("a", "", "", false);
    try("a", "a", "a", false);
    try("aaaab", "baaaa", "aaaabbaaaa", true);
    try("aaaab", "baaaa", "baaaaaaaab", true);
    try("aaaab", "baaaa", "baaabaaaaa", false);
    try("aba", "aab", "aaabba", true);
    try("aba", "aab", "aabaab", true);
    try("aba", "aab", "ababaa", false);
    try("aabc", "abad", "aabcabad", true);
    try("abcd", "abce", "aabbccde", true);
    try("abcd", "abce", "abcabcde", true);
    try("abcd", "abce", "aacbbdce", false);
    try("abad", "aabc", "aabcabad", true);
    try("abad", "aabc", "aabcabade", false);
    try("abade", "aabc", "aabcabad", false);
    try("abad", "aabc", "aaaabdbc", false);
    try("ababababababc", "ababababababd",
            "aabbaabbaabbaabbaabbaabbdc",
            true);
    try("ababababababc", "ababababababd",
            "aaabaabbaabbaabbaabbaabbdc",
            false);
    try("ababababababc", "ababababababd",
            "ababababababababababababdc",
            true);
    try("aababaababaababaababaababaababaababaababaababaababz",
            "abaababaababaababaababaababaababaababaababaababaabx",
            "aababaababaababaababaababaababaababaababaababaabababaababaababaababaababaababaababaababaababaababaabxz",
            true);

    return 0;
}
