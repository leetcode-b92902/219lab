/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

void pushHeap(struct ListNode *node, struct ListNode **heap, int * heap_tail) {
    heap[*heap_tail] = node;
    int val = node->val;
    int i = *heap_tail;
    while (i > 0) {
        int parent = (i - 1) / 2;
        if (heap[parent]->val <= val) {
            break;
        }
        struct ListNode *t = heap[i];
        heap[i] = heap[parent];
        heap[parent] = t;
        i = parent;
    }
    *heap_tail += 1;
}
struct ListNode * popHeap(struct ListNode **heap, int *heap_tail) {
    struct ListNode * node = heap[0];
    (*heap_tail) -= 1;
    heap[0] = heap[*heap_tail];
    int i = 0;
    while ((i * 2 + 1) < *heap_tail) {
        int t = i;
        int child = i * 2 + 1;
        
        if (heap[i]->val > heap[child]->val) {
            t = child;
        }
        child += 1;
        if (child < heap_tail && heap[t]->val > heap[child]->val) {
            t = child;
        }
        if (t == i) {
            break;
        }
        struct ListNode *tmp = heap[t];
        heap[t] = heap[i];
        heap[i] = tmp;
        i = t;
    }
    return node;
}
struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    if (listsSize < 1) {
        return NULL;
    }
    struct ListNode *heap[listsSize];
    int heap_tail = 0;
    for (int i = 0; i < listsSize; ++i) {
        if (lists[i] != NULL) {
            pushHeap(lists[i], heap, &heap_tail);    
        }
    }
    
    struct ListNode head = {0, NULL};
    struct ListNode *tail = &head;
    
    while (heap_tail > 0) {
        struct ListNode *n = popHeap(heap, &heap_tail);
        if (n->next != NULL) {
            pushHeap(n->next, heap, &heap_tail);
        }
        tail->next = n;
        tail = n;
    }
    return head.next;
}
