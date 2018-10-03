#include<stdio.h>
#include<assert.h>
#include<string.h>
#include<stdbool.h>

int longestValidParentheses(char* s) {
    int sLen = strlen(s);
    if (sLen == 0) {
        return 0;
    }
    int dp[sLen];
    int max = 0;
    dp[0] = 0;
    for (int i = 1; i < sLen; ++i) {
        dp[i] = 0;
        if (s[i] == '(') {
            continue;
        }
        assert(s[i] == ')');
        int pair = i - dp[i - 1] - 1;
        if (pair >= 0 && s[pair] == '(') {
            dp[i] = i - pair + 1;
            if (pair > 0) {
                dp[i] += dp[pair - 1];
            }
        }
        if (dp[i] > max) {
            max = dp[i];
        }
    }
    return max;
}

int main(void) {
    char *s[] = {
        "(()",
        ")()())",
        ")(()())",
        "((()())",
        "(()())(",
        "(()()))",
        ")()())",
        ""
    };
    size_t sSize = sizeof(s) / sizeof(*s);

    for (int i = 0; i < sSize; ++i) {
        printf("%s %d\n", s[i], longestValidParentheses(s[i]));
    }
    return 0;
}
