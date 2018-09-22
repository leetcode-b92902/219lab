/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* majorityElement(int* nums, int numsSize, int* returnSize) {
    int candidates[2];
    int candidatesCount[2];
    int candidatesSize = 0;
    
    for (int i = 0; i < numsSize; ++i) {
        int n = nums[i];
        if (candidatesSize > 0 && candidates[0] == n) {
            candidatesCount[0] += 1;
            continue;
        }
        if (candidatesSize > 1 && candidates[1] == n) {
            candidatesCount[1] += 1;
            continue;
        }
        if (candidatesSize < 2) {
            candidates[candidatesSize] = n;
            candidatesCount[candidatesSize] = 1;
            candidatesSize += 1;
            continue;
        }
        candidatesCount[0] -= 1;
        candidatesCount[1] -= 1;
        if (candidatesCount[1] == 0) {
            candidatesSize = candidatesCount[0] == 0 ? 0 : 1;
        } else if (candidatesCount[0] == 0) {
            candidates[0] = candidates[1];
            candidatesCount[0] = candidatesCount[1];
            candidatesSize = 1;
        }
    }
    int ansSize = 0;
    for (int i = 0; i < candidatesSize; ++i) {
        int n = candidates[i];
        int count = 0;
        for (int j = 0; j < numsSize; ++j) {
            if (nums[j] == n) {
                count += 1;
            }
        }
        if (count * 3 > numsSize) {
            ansSize += 1;
        } else {
            candidatesCount[i] = 0;
        }
    }
    *returnSize = ansSize;
    if (ansSize == 0) {
        return NULL;
    }
    int *ans = malloc(sizeof(*ans) * ansSize);
    ansSize = 0;
    for (int i = 0; i < candidatesSize; ++i) {
        if (candidatesCount[i] > 0) {
            ans[ansSize] = candidates[i];
            ansSize += 1;
        }
    }
    
    return ans;
}
