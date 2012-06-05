X = range(0,12)
Y = [2.34, 2.26, 4.63, 4.77, 7.97, 10.96, 26.64, 26.91, 52.48, 75.30, 74.37, 31.45]

m = (len(X)*sum([X[i] * Y[i] for i in range(0,12)])-sum(X)*sum(Y))/(len(X)*sum([pow(x,2) for x in X])-pow(sum(X),2))
b = (sum(Y) - m*sum(X))/len(X)

print "Slope is " + str(m)
print "Intercept is " + str(b)


