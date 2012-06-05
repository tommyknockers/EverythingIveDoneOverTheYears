from numeric import *
import math

def read(stock='mmm',days=360):
    lines = open('%s.csv' % stock,'r').read().split('\n')
    prices = [float(line) for line in lines if line.strip()]
    if len(prices)<days: raise RuntimeError, "Not enough data"
    #return prices
    return prices[-days:]

def model(last_period): # last_period = [3,5,2,7,8,9,5]
    n = len(last_period)
    t = [-i-1 for i in range(n)]  # t = [-1,-2,-3,-4,-5,-6,-7]
    y = [[last_period[n-i-1]] for i in range(n)] # 

    #ipdb.set_trace()
    # begin of model dependency
    A = matrix(n,3) 
    for i in range(n):
        A[i][0] = 1.0
        A[i][1] = t[i]
        A[i][2] = t[i]**2
    # end of model dependency
    x = multiply(inverse(multiply(transpose(A),A)),multiply(transpose(A),y))
    t_today = 0
    price_today = x[0][0]
    #print price_today
    return price_today

def strategy(last_period):
    yesterday_close = last_period[-1]
    price_today = model(last_period)
    if price_today>yesterday_close*1.01: return 'buy'
    elif price_today<=yesterday_close*0.99: return 'sell'

def simulate(historical,amount=1000.0,shares=0.0,days=7,daily_rate=0.03/360):
    for t in range(days,len(historical)):
        last_period =  historical[t-days:t]
        suggestion = strategy(last_period)
        if amount and suggestion=='buy':
            shares += amount/last_period[-1]
            amount = 0
        if shares and suggestion=='sell':
            amount += shares*last_period[-1]
            shares = 0
        amount*=math.exp(daily_rate)
        print t, suggestion, amount, shares, amount+shares*last_period[-1]
    return amount+shares*historical[-1]

historical = read('mmm',360)
print simulate(historical,days=7)
print 1000.0*math.exp(0.03)

