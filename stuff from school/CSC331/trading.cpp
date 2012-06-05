#include <stdlib.h>
#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <exception>
#include <math.h>
using namespace std;

#include "csc431.hpp"

/* Class Definition */

typedef vector<double>::iterator vec_it;

static string FILENAME = "mmm.csv";

class Trader {
public:
    Trader(string&,int);
    ~Trader();
    void run();
private:
    string& filename;
    int days;
    vector<double> read(string&,int);
    double model(vector<double>&);
    int strategy(vector<double>&);
    double simulate(vector<double>&,double,double,int,double);
};

Trader::Trader(string& filename=FILENAME, int days=360) : filename(filename), days(days) {}

Trader::~Trader() {}

void Trader::run() {
    // simulates the trading machine with lump sum of 1000.0 using the last 7 days prices to compute the next day's price
    vector<double> h = read(filename, days);
    cout << simulate(h, 1000.0, 0.0, 7, 0.03/360) << endl;
    cout << 1000.0 * exp(0.03) << endl;
}

vector<double> Trader::read(string& filename, int days=360) {
    // reads historical data from a csv file. csv file trading prices must be sorted by trading date in ascending order.
    ifstream file(filename.c_str());
    
    int count;
    string value;
    vector<double> historical;
    while (file.good() && count < days) {
        getline(file, value);
        historical.push_back(atof(value.c_str()));
        //count++;
    }
    
    if (historical.size() < days) {
        cerr << "Not enough data" << endl;
        exit(-1);
    }

    vector<double> prices;
    for (int i = historical.size()-1-360; i < historical.size()-1; i++) {
        prices.push_back(historical[i]);
    }
    
    return prices;
}

double Trader::model(vector<double>& last_period) {
    // Takes a list of the last week's prices and uses a linear least squares regression
    //  to compute the best idea of what the next day's price will be.
    // Models the last prices with the equation x2*x^2 + x1*x + x0. x0 becomes the next day's price since all the points 
    //  are plotted from -7 (days) to -1. x0 will be what the equation is equal to when x is 0 where x is the day of trading.
    int n = last_period.size();
    vector<double> t (n);
    for (int i = 0; i < n; i++) {
        t[i] = -i-1;
    }
    
    Matrix y (n, 1);
    for (int i = 0; i < n; i++) {
        y(i, 0) = last_period[n-i-1];
    }
    
    // Being model dependency
    Matrix A = Matrix(n, 3);
    for (int i = 0; i < n; i++) {
        A(i, 0) = 1.0;
        A(i, 1) = t[i];
        A(i, 2) = pow(t[i], 2);
    }
    
    // End model dependency
    Matrix x = inverse(transposed(A) * A) * (transposed(A) * y);
    double price_today = x(0, 0);
    
    return price_today;
}

int Trader::strategy(vector<double>& last_period) {
    // Retrieves yesterday's closing price
    // If today's price is going to be higher than yesterday's closing price, buy stock
    //  otherwise, sell stock.
    double yesterday_close = last_period[last_period.size()-1];
    double price_today = model(last_period);
    if (price_today > yesterday_close * 1.01) {
        return 1; // Buy
    } else if (price_today <= yesterday_close * 0.99) {
        return -1; // Sell
    }
    return 0; // No strategy
}

double Trader::simulate(vector<double>& historical, double amount=1000.0, double shares=0.0, int days=7, double daily_rate=0.03/360) {
    // runs our trading machine
    int n = historical.size();
    for (int t = days; t < n; t++) {
        vector<double> last_period;
        
        // Copy the slice of historical
        for (vec_it cur = historical.begin() + (t - days); cur != historical.begin() + t; ++cur) {
            last_period.push_back(*cur);
        }
        
        int suggestion = strategy(last_period);
        if (amount > 0 && suggestion == 1) { // Buy
            shares += amount / last_period[last_period.size()-1];
            amount = 0;
            //cout << "bought" << endl;
        }
        if (shares > 0 && suggestion == -1) { // Sell
            amount += shares * last_period[last_period.size()-1];
            shares = 0;
            //cout << "sold" << endl;
        }
        
        amount *= exp(daily_rate);
        
        string suggestion_string;
        switch(suggestion) {
        case 1:
            suggestion_string = "buy";
            break;
        case -1:
            suggestion_string = "sell";
            break;
        default:
            suggestion_string = "none";
            break;
        }
        
        cout << t << " " << suggestion_string << " " << amount << " " << shares << " " << amount + shares * last_period[last_period.size()-1] << endl;
    }
    return amount + shares * historical[historical.size()-1];
}

/* Main Function */

int main() {
    string fname = "mmm.csv";
    Trader a(fname);
    a.run();
    return 0;
}


