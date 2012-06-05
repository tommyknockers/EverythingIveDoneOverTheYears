# read in the file
f = open('spambase.data.txt')
lines = []
features = []
for line in f:
  line = line.split(',')
  # first 48 values are percentages that token appears in line
  for i in range(len(line)):
    line[i] = float(line[i])

  #tokens = line[0:47]
  #chars = line[47:53]
  #cap_run_len_avg = line[54]
  #cap_run_len_longest = line[55]
  #cap_run_len_tot = line[56]
  #is_spam = int(line[57])

  #line.append(c)
  lines.append(line)

f.close()


# get some simple stats
tot = len(lines)
tot_spam = len([l for l in lines if l[57] == 1])
tot_ham = len([l for l in lines if l[57] == 0])
prob_spam = tot_spam/float(tot)
prob_ham = tot_ham/float(tot)


######## K-Means algorithm
# k-means to cluster emails by the length of their longest run of capital letters. Spam emails probably have longer runs of capital letters
caps = []
for line in lines:
  c = [line[55], line[57]] # length of longest capital letters then is_spam
  caps.append(c)
# now divide into two groups

def kmeans(a,b):
  avg_a = sum([i[0] for i in a])/len(a)
  avg_b = sum([i[0] for i in b])/len(b)
  new_a = []
  new_b = []
  for i in a:
    dist_to_a = abs(avg_a-i[0])
    dist_to_b = abs(avg_b-i[0])
    if dist_to_a <= dist_to_b:
      new_a.append(i)
    if dist_to_a > dist_to_b:
      new_b.append(i)
  for i in b:
    dist_to_a = abs(avg_a-i[0])
    dist_to_b = abs(avg_b-i[0])
    if dist_to_a < dist_to_b:
      new_a.append(i)
    if dist_to_a >= dist_to_b:
      new_b.append(i)
  return new_a,new_b

a = caps[0:len(caps)/2-1]
b = caps[len(caps)/2:len(caps)-1]
a,b = kmeans(a,b)
while (a,b) != kmeans(a,b):
  print "iterating"
  a,b = kmeans(a,b)

avg_a = sum([i[0] for i in a])/len(a)
print "avg a", avg_a
print "pct% spam in group a", len([i for i in a if i[1] == 1])/float(len(a))
avg_b = sum([i[0] for i in b])/len(b)
print "avg b", avg_b
print "pct% spam in group b", len([i for i in b if i[1] == 1])/float(len(b))

# compute probability that any email will be in group a or b
midway = (avg_a-avg_b)/2.0
print "midway is", midway
# if < midway, not spam, if > midway, spam!
prob_spam_in_a = len([i for i in a if i[1] == 1])/float(len(a))
prob_ham_in_a = len([i for i in a if i[1] == 0])/float(len(a))
prob_grp_a = prob_spam_in_a / (prob_spam_in_a + prob_ham_in_a)

prob_spam_in_b = len([i for i in b if i[1] == 1])/float(len(b))
prob_ham_in_b = len([i for i in b if i[1] == 0])/float(len(b))
prob_grp_b = prob_spam_in_b / (prob_spam_in_b + prob_ham_in_b)

print "probability of an email being spam & in group a is ", prob_grp_a
print "probability of an email being spam & in group b is ", prob_grp_b

#import sys
#sys.exit(0)

######## BAYESIAN ALGORITHM

"""
tot_contains_f = [0 for i in range(0,47)]
tot_not_contains_f = [0 for i in range(0,47)]
for line in lines:
  for i in range(0,47):
    if line[i] > 0:
      tot_contains_f[i] += 1
    else:
      tot_not_contains_f[i] += 1
"""

# how many spams contain each feature?
tot_spam_contains_f = [0 for i in range(0,47)]
tot_spam_not_contains_f = [0 for i in range(0,47)]
for line in [l for l in lines if l[57] == 1]:
  for i in range(0,47):
    if line[i] > 0:
      tot_spam_contains_f[i] += 1
    #else:
      #tot_spam_not_contains_f[i] += 1

# how many hams contain each feature?
tot_ham_contains_f = [0 for i in range(0,47)]
tot_ham_not_contains_f = [0 for i in range(0,47)]
for line in [l for l in lines if l[57] == 0]:
  for i in range(0,47):
    if line[i] > 0:
      tot_ham_contains_f[i] += 1
    #else:
      #tot_ham_not_contains_f[i] += 1

# ensure there's some default values
for i in range(0,47):
  if tot_spam_contains_f[i] == 0:
    tot_spam_contains_f += 1
  if tot_ham_contains_f[i] == 0:
    tot_ham_contains_f += 1

  #if tot_spam_not_contains_f[i] == 0:
    #tot_spam_not_contains_f += 1
  #if tot_ham_not_contains_f[i] == 0:
    #tot_ham_not_contains_f += 1

# for each word, determine the probability of an email containing that word to be spam
prob_f_true_spam = [tot_spam_contains_f[i]/prob_spam for i in range(0,47)]
prob_f_true_ham = [tot_ham_contains_f[i]/prob_ham for i in range(0,47)]
prob_true_spam = [(prob_f_true_spam[i])/(prob_f_true_spam[i] + prob_f_true_ham[i]) for i in range(0,47)]

#prob_f_false_spam = [tot_spam_not_contains_f[i]/prob_spam for i in range(0,47)]
#prob_f_false_ham = [tot_ham_not_contains_f[i]/prob_ham for i in range(0,47)]
#prob_false_spam = [(prob_f_false_spam[i])/(prob_f_false_spam[i] + prob_f_false_ham[i]) for i in range(0,47)]

# vars used for the confusion matrix

def run_it(threshold):
  spam_spam = 0
  spam_ham = 0
  ham_spam = 0
  ham_ham = 0
  for line in lines:
    i_prob_spam = 1
    one_m_p = 1
    longest_run_caps = line[55]
    # we clustered emails into two groups a & b above using k-meansG
    for i in range(0,47):
      if line[i] > 0:
        i_prob_spam *= prob_true_spam[i]
        one_m_p *= (1 - prob_true_spam[i])
    # 
    if longest_run_caps > midway:
      i_prob_spam *= prob_grp_a
      one_m_p *= (1 - prob_grp_a)
    else:
      i_prob_spam *= prob_grp_b
      one_m_p *= (1 - prob_grp_b)

    spamicity = i_prob_spam / (i_prob_spam + one_m_p)

    #threshold = .5
    if spamicity > threshold and line[57] == 1:
      spam_spam += 1
    if spamicity > threshold and line[57] == 0:
      ham_spam += 1

    if spamicity < threshold and line[57] == 0:
      ham_ham += 1
    if spamicity < threshold and line[57] == 1:
      spam_ham += 1

  return [spam_spam, spam_ham, ham_spam, ham_ham]

#import ipdb
#ipdb.set_trace()
ret = run_it(.5)
print "Initial run.."
print "true positive", ret[0]
print "false positive", ret[1]
print "false negative", ret[2]
print "true_negative", ret[3]

#import sys
#sys.exit(0)

print "Plotting a large chart now"
tp = []
fp = []
fn = []
tn = []
r = [x * 0.05 for x in range(0, 20)]
for i in r:
  ret = run_it(i)
  tp.append(ret[0])
  fp.append(ret[1])
  fn.append(ret[2])
  tn.append(ret[3])


import matplotlib.pyplot as plt
plt.title('relationship between true pos/neg & false pos/neg w/ kmeans')
plt.ylabel('emails')
plt.xlabel('spamicity threshold')
plt.plot(r, tp, label="true pos, spam->spam")
plt.plot(r, fp, label="false pos, spam->ham")
plt.plot(r, fn, label="false neg, ham->spam")
plt.plot(r, tn, label="true neg, ham->ham")
plt.legend(loc='upper left')
plt.savefig('spamicity2.png')

#import ipdb
#ipdb.set_trace()

