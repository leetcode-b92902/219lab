/**
 * @param {number} N
 * @return {number}
 */

/*
N=1 : C=1,P=1
  X
  X
N=2 : C=1,P=2,S=3
  XX  P(1)P(1)
  YY
N=3 : C=2,P=5,S=8
  XYY XXY  N(1){N(2),N(1)N(1)}=N(1)P(2) N(2)P(1)
  XXY XYY
N=4 : C=2,P=11,S=19
  XYYZ XXZZ N(1){N(3),N(1)N(2),N(2)N(1),N(1)(1)(1)} N(2){N(2),N(1)N(1)} N(3)N(1)
  XXZZ XYYZ
    1 +  1  + 1*(2   + 1*1    +  1* 1  + 1*1*1)   +  1 * (1 + 1*1)    + 2 * 1  = 11  
  XYYZ XXZZ N(1)P(3) N(2)P(2) N(3)P(1)
  XXZZ XYYZ
    1 +  1  + 1*5   +  1 * 2    + 2 * 1  = 11  
N=5 : C=2,P=24,S=43
  XYYZZ XXYYZ N(i)P(5-i) (i=1~4)
  XXWWZ XWWZZ
    1 + 1   + 1*11 + 1*5 + 2*2 + 2*1 = 24
    1 + 1   + P(4)=11 + P(3)=5 + 2*S(2)=3 = 24
N=6
    2 + P(5)=24 + P(4)=11 + 2*S(3)=8 = 53
  XYYZZA XXWWAA
  XXWWAA XYYZZA
*/
var numTilings = function(N) {
    if (N == 1) return 1;
    if (N == 2) return 2;
    const MOD = 1000 * 1000 * 1000 + 7;
    const add = (nums) => nums.reduce((s, n) => (s + n) % MOD, 0)
    /*
    const P = [0, 1, 2];
    const S = [0, 1, 3];
    
    for (let i = 3; i <= N; ++i) {
        S[i-1] = add([P[i-1], S[i-2]]);
        P[i] = add([2, P[i-1], P[i-2], 2*S[i-3]]);
    }
    */
    let [P2, P1] = [1, 2];
    let [S3, S2] = [0, 1];
    for (let i = 3; i <= N; ++i) {
        const S1 = add([P1, S2]);
        const P = add([2, P1, P2, S3, S3]);
        [P2, P1] = [P1, P];
        [S3, S2] = [S2, S1];
    }
    
    return P1;
};
