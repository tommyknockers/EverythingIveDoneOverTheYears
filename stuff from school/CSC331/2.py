import math
from copy import deepcopy

def normalize(V, c):
    """ Normalizes column c in matrix V.
    
    Parameters
    ----------
    V : list
        A matrix (list of lists)
    """
    rows = len(V)
    inverse_norm = 1.0 / math.sqrt(sum([(V[r][c])**2 for r in range(rows)]))
    for r in range(rows):
        V[r][c] *= inverse_norm
    return

def ortogonalize(M):
    """ Ortogonalizes the matrix using the Gramm-Schmidt
    method as described here:
    http://en.wikipedia.org/wiki/Gram%E2%80%93Schmidt_process
    
    Parameters
    ----------
    M : list
        A matrix (list of lists)
    
    Returns
    -------
    list
    """
    V = deepcopy(M)
    rows = len(M)
    cols = len(M[0])
    
    for c in range(cols):
        for i in range(c):
            D = sum([V[p][i] * V[p][c] for p in range(rows)])
            for p in range(rows):
                V[p][c] -= (D * V[p][i])
        normalize(V, c)
    
    return V

if __name__ == '__main__':
    m = [[1,0,0], [1,1,0], [1,1,1]]
    print ortogonalize(m)
