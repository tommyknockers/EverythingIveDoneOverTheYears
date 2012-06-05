#!/usr/bin/python

counter = 0


def merge(lst,i,m,j):
    c = []
    p = i
    q = m+1
    global counter
    while (p <= m and q <= j):
        #if lst[p] > lst[q]:
            #counter += 1
        if lst[p] <= lst[q]:
            #print lst[p], lst[q]
            c.append(lst[p])
            p = p + 1
            counter += 1
        else:
            #print lst[p], lst[q]
            c.append(lst[q])
            q = q + 1
            counter += 1
    while (p <= m):
        c.append(lst[p])
        p = p + 1
        #counter += 1
    while (q <= j):
        c.append(lst[q])
        q = q + 1
        counter += 1

    for r in range(i,j+1):
        lst[r] = c[r-i]

def merge_sort_h(lst,i,j):
    if i >= j:
        return
    m = (i+j)//2
    merge_sort_h(lst,i,m)
    merge_sort_h(lst,m+1,j)
    merge(lst,i,m,j)
    #print lst

def merge_sort(lst):
    merge_sort_h(lst,0, len(lst)-1)
lst = [4, 3, 5, 2, 1]

merge_sort(lst)
print counter


