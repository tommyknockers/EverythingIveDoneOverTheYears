import pickle
import yahoo
import math

#stock = Stock("AAPL")
#historical = stock.historical()

#f = open("aapl.p", "w")
#pickle.dump(historical, f)
#f.close()


def normal_dist(x):
    """Computes cumulative normal distribution of x."""
    #@TODO explain this

    a1 = 0.31938153
    a2 = -0.356563782
    a3 = 1.781477937
    a4 = -1.821255978
    a5 = 1.330274429

    L = math.fabs(x)
    K = 1.0 / (1.0 + 0.2316419 * L)
    w = 1.0 - 1.0 / math.sqrt(2 * math.pi) * math.exp(-L**2 / 2) * (a1 * K + a2 * K**2 + a3 * K**3 + a4 * K**4 + a5 * K**5)

    if x < 0:
        w = 1.0 - w
    return w


def black_scholes(S, X, r, sigma, time):
    """
    explain what this is and how it works.
    S = spot price
    X = strike price
    r = interest rate
    sigma = volatility
    time = time to maturity
    """

    time_sqrt = math.sqrt(time)
    d1 = (math.log(S/X) + r * time) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt
    d2 = d1 - (sigma * time_sqrt)
    c = S * normal_dist(d1) - X * math.exp(-r*time) * normal_dist(d2)
    return c


f = open("aapl.p", "r")
historical = pickle.load(f)
f.close()

#import ipdb
#ipdb.set_trace()

data = historical[-300:] # get last 300 days
daily_log_returns_avg = yahoo.mean(data) # calculate the daily log returns

S = data[-1]['adjusted_close'] # spot price
#S = 250
X = 380 # strike price
r = .03 # rate
sigma = yahoo.stddev(data) # standard deviation of the daily log return
time = 300 # one year of trading days

print "Price of European AAPL Call option that expires in one year with strike price of $380 is", black_scholes(S, X, r, sigma, time)

#import ipdb
#ipdb.set_trace()

