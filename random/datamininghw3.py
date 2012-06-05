from math import sqrt

X=[[1,2,0], [3,1,4], [2,1,5], [0,1,6], [2,4,3], [4,4,2], [5,2,1], [7,7,7], [0,0,0],[3,3,3]]

def distance(t1, t2):
  return sqrt( pow((t2[0]-t1[0]), 2) + pow((t2[1]-t1[1]),2) + pow((t2[2]-t1[1]),2))

d = 6
p = 2
print [t1 for t1 in X if len([t1 for t2 in X if distance(t1, t2) > d and t1 != t2]) > p ]

