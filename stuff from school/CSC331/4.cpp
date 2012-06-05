#include <iostream>
#include <cmath>
#include <fstream>
#include <vector>
#include <string>
#include <stdlib.h>

using namespace std;

#define _USE_MATH_DEFINES

// Cumulative normal distribution
double N(double x) {
    double L, K, w ;
    /* constants */
    double const a1 = 0.31938153, a2 = -0.356563782, a3 = 1.781477937;
    double const a4 = -1.821255978, a5 = 1.330274429;

    L = fabs(x);
    K = 1.0 / (1.0 + 0.2316419 * L);
    w = 1.0 - 1.0 / sqrt(2 * M_PI) * exp(-L *L / 2) * (a1 * K + a2 * K *K + a3 * pow(K,3) + a4 * pow(K,4) + a5 * pow(K,5));

    if (x < 0 ){
        w= 1.0 - w;
    }
    return w;
}

double option_price_call_black_scholes(const double& S, // spot price
                                       const double& X, // strike price
                                       const double& r, // interest rate
                                       const double& sigma, // volatility
                                       const double& time) { // time to maturity
    double time_sqrt = sqrt(time);
    double d1 = (log(S/X) + r * time) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt;
    double d2 = d1 - (sigma * time_sqrt);
    double c = S * N(d1) - X * exp(-r*time) * N(d2);
    return c;
}

vector<double> read(const char * filename, int days=300) {
    ifstream file(filename);
    
    int count = 0;
    string value;
    vector<double> historical;
    while (file.good() && count < days) {
        getline(file, value);
        historical.push_back(atof(value.c_str()));
    }

    if (historical.size() < days) {
        cerr << "Not enough data" << endl;
        exit(-1);
    }

    vector<double> prices;
    for (int i = historical.size()-1-days; i < historical.size()-1; i++) {
        prices.push_back(historical[i]);
    }
    
    return prices;
}

double calc_avg_log_returns(vector<double> & prices) {
    double sum = 0.0;
    int count = prices.size();
    for (int i = 1; i < count; i++) {
        double log_return = log(prices[i]-prices[i-1]);
        sum += log_return;
    }

    return sum/count;
}


double stddev(vector<double> & prices) {
    int count = prices.size();

    double sum = 0.0;
    for (int i = 1; i < count; i++) {
        sum += prices[i];
    }

    double mean = (sum / (double)count);

    double sumdev = 0.0;
    for (int i = 0; i < count; i++) {
        double deviation = prices[i] - mean;
        sumdev += (deviation * deviation);
    }

    double variance = (sumdev / (count - 1));
    double stddev = sqrt(variance);

    return stddev;
}

int main() {
    // Read prices from file
    vector<double> prices = read("aapl.csv");

    // Calculate average of daily log returns
    double avg_log_returns = calc_avg_log_returns(prices);
    
    // Calculate standard deviation of daily log returns (volatility)
    double volatility = stddev(prices);
    
    // Constants
    const double time = 300; // 1 year with 300 trading days
    const double strike = 380; // $
    const double interest_rate = 0.03; // 3%
    
    // Current price
    double spot = prices[prices.size()-1];
    
    // Calculate call price
    cout << "\nPrice = $" << option_price_call_black_scholes(spot, strike, interest_rate, volatility, time) << endl;
    
    return 0;
}

