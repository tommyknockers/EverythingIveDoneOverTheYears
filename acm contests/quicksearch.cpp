#include <iostream>
#include <fstream>
#include <vector>
#include <queue>
#include <set>
#include <algorithm>
#include <string>
#include <sstream>
#include <locale>

using namespace std;

const int MAX_SITES = 20;
vector<int> graph[MAX_SITES];

int s, n, p; // sites, officers & paths between sites in that order

//#define DEBUG
#define OTHERID

#ifdef OTHERID
class StateDB {
  public:
    vector<long> idList;
    bool seenBefore(long stateID) {
      if (binary_search(idList.begin(), idList.end(), stateID))
        return true;

      idList.push_back(stateID);
      sort(idList.begin(), idList.end());
      return false;
    }

    // imp
    void clear() {
      idList.clear();
    }
};
#else
class StateDB {
  public:
    vector<pair<int,int> > idList;
    bool seenBefore(pair<int, int> stateID) {
      if (binary_search(idList.begin(), idList.end(), stateID))
        return true;

      idList.push_back(stateID);
      sort(idList.begin(), idList.end());
      return false;
    }

    // imp
    void clear() {
      idList.clear();
    }
};
#endif

StateDB statedb;

locale loc;
const collate<char>& coll = use_facet<collate<char> >(loc);

// an array of numbers of size k == p where each k0, k1, k2..kp is the index of an officer. 'A' + officers[k] is the node the officer is on
class State {
  public:
    vector<int> officers;
    vector<bool> visited;
    int depth;

    bool isSolution() {
      for (int i = 0; i < visited.size(); i++)
        if (!visited[i])
          return false;

      return true;
    }

#ifdef DEBUG
    void dump() const {
      cout << "visited: ";
      for (int k=0; k < visited.size(); k++)  // intentionally ignore 'A' as its always covered
        if (visited[k])
          cout << char('A' + k);
      cout << endl;

      cout << "police: ";
      for (int k=0; k < officers.size(); k++)
        cout << char('A' + officers[k]);
      cout << endl;
    }
#endif


#ifdef OTHERID
    long getID() {
      string derp;
      for (int i = 0; i < officers.size(); i++) {
        derp += (char)('A'+officers[i]);
      }
      for (int i = 0; i < visited.size(); i++) {
        derp += (char)('1'+visited[i]);
      }
      long myhash = coll.hash(derp.data(),derp.data()+derp.length());
      cout << derp << ":" << myhash << endl;

      return myhash;
    }
#else
    pair<int,int> getID() {
      int numSites = s;
      int first = 0;
      for (int k=1; k < visited.size(); k++)  // intentionally ignore 'A' as its always covered
        if (visited[k])
          first += 1<<(visited.size() - 1 - k);

      int second(0);
      int digit = 1;
      for (int k=0; k < officers.size(); k++) {
        second += officers[k] * digit;
        digit *= numSites;
      }

      return make_pair(first,second);
    }
#endif

    vector<State> getNeighbors() {
      vector<State> neighbors;
      // create every combination of state

      vector<int> choices(n,0);
      //for (int i = 0; i < officers.size(); i++)
        //choices.push_back(0);

      vector<int> limits;
      vector<int> comparableLimits;
      for (int i = 0; i < officers.size(); i++) {
        limits.push_back(graph[officers[i]].size());
        comparableLimits.push_back(graph[officers[i]].size()-1);
      }


      /*
#ifdef DEBUG
      cout << "Limits are: ";
      for (int i = 0; i < limits.size(); i++)
        cout << limits[i] << " ";
      cout << endl;
#endif
*/

      // insert the first state in traditional loop and a half format
      State perm(*this);
      for (int j = 0; j < officers.size(); j++) {
        perm.officers[j] = graph[officers[j]][choices[j]];
        perm.visited[perm.officers[j]] = true;
      }
      perm.depth++;
      neighbors.push_back(perm);

      /*
#ifdef DEBUG
      cout << "made this one: ";
      for (int i = 0; i < choices.size(); i++)
        cout << choices[i] << " ";
      cout << endl;
#endif
*/

      while (!equal(choices.begin(), choices.end(), comparableLimits.begin())) {
        int k = choices.size()-1;
        while (k > -1) {
          if (choices[k] < limits[k]-1) {
            choices[k]++;
            break;
          } else {
            choices[k] = 0;
            k--;
          }
        }
        
        /*
#ifdef DEBUG
        cout << "made this one: ";
        for (int i = 0; i < choices.size(); i++)
          cout << choices[i] << " ";
        cout << endl;
#endif
*/
        
        State perm(*this);
        for (int j = 0; j < officers.size(); j++) {
          perm.officers[j] = graph[officers[j]][choices[j]];
          perm.visited[perm.officers[j]] = true;
        }
        // sort the officers for more efficiency?
        sort(perm.officers.begin(), perm.officers.end());
        perm.depth++;
        neighbors.push_back(perm);
      }

#ifdef DEBUG
      cout << "current state" << endl;
      dump();
      cout << "has following neighbors:" << endl;
      for (int k=0; k<neighbors.size(); k++)
        neighbors[k].dump();
#endif

      return neighbors;
    }
};


int increment = 1;
int main() {
  string line;
  ifstream fin("search.in");
  s = n = p = -1;

  while (s != 0) {
#ifdef DEBUG
    cout << "Solving problem " << increment << endl;
#endif
    //getline(input, line);


    fin >> s >> n >> p;

    if (s == 0) break;

    // clear the graph
    for (int i = 0; i < MAX_SITES; i++)
      graph[i].clear();

    string site;
    for (int i = 0; i < p; i++) {
      fin >> site;
      int s1 = site[0] - 'A';
      int s2 = site[1] - 'A';
      graph[s1].push_back(s2);
      graph[s2].push_back(s1);
    }

    // create an initial state & start searching from there
    State state;
    for (int i = 0; i < n; i++)
      state.officers.push_back(0);
    for (int i = 0; i < s; i++)
      state.visited.push_back(false);
    state.visited[0] = true; // A is always visited first

    state.depth = 0;

    statedb.clear();
    statedb.seenBefore(state.getID()); // put it into the state db

    // if it's a graph with one node..
    if (state.isSolution()) {
      cout << "0" << endl;
      continue;
    }

#ifdef DEBUG
    vector<State> next;
    next.push_back(state);
#else
    queue<State> next;
    next.push(state);
#endif

    bool breakit = false;

    while (next.size() > 0 && !breakit) {
#ifdef DEBUG
      cout << "Number of fringes: " << next.size() << endl;

      cout << "These states are up for review" << endl;
      for (int i = 0; i < next.size(); i++) {
        next[i].dump();
      }
#endif

#ifdef DEBUG
      State state(next[0]);
      //next.pop_front();
      next.erase(next.begin());
#else
      State state(next.front());
      next.pop();
#endif

#ifdef DEBUG
      cout << "Considering fringe state:" << endl;
      state.dump();
#endif

      vector<State> neighbors = state.getNeighbors();

#ifdef DEBUG
      cout << "Fringe state produced:" << neighbors.size() << endl;
#endif

      //} catch (int e) {
        //cout << "DeRP";
      //};
/*
#ifdef DEBUG
      cout << "We found " << neighbors.size() << endl;
#endif
*/

      int accepted = 0;
      for (int i = 0; i < neighbors.size(); i++) {
        if (!statedb.seenBefore(neighbors[i].getID())) {
          accepted++;
          if (neighbors[i].isSolution()) {
            //cout << neighbors[i].depth << endl;
            increment++;
            breakit = true;
            break;
          }
#ifdef DEBUG
          next.push_back(neighbors[i]);
#else
          next.push(neighbors[i]);
#endif
        }
      }
#ifdef DEBUG
      cout << "Fringe states accepted: " << accepted << endl;
#endif


//#ifdef DEBUG
      //cout << "next is " << next.size() << endl;
//#endif
      //cout << "next is " << next.size() << endl;
    };
  if (next.size() == 0)
    cout << "Unsolvable!" << endl;

  }
  return 0;
}

