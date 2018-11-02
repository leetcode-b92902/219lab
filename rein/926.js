/**  
  * @param {string} S  
  * @return {number}  
  */  
  
var minFlipsMonoIncr = function(S) {  
     const countOf1 = [];  
     let one = 0;  
       for (let i = 0; i < S.length; ++i) {  
           if (S[i] == '1') {  
             ++one;  
         }  
           countOf1[i] = one;  
     }  
     let m = one;  
     let zero = 0;  
       for (let i = S.length - 1; i >= 0; --i) {  
           m = Math.min(m, zero + countOf1[i]);  
           if (S[i] == '0') {  
             zero += 1;   
         }  
     }  
     return Math.min(m, zero);
};
