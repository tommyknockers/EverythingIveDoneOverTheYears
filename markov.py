import random

n1n1 = '\n', '\n'

def new_key(key, word):
  if word == '\n': return n1n1
  else: return (key[1], word)

def markov_data_from_words(words):
  data = {}
  key = n1n1
  for word in words:
    data.setdefault(key, []).append(word)
    key = new_key(key, word)
  return data

def words_from_markov_data(data):
  key = n1n1
  while 1:
    word = random.choice(data.get(key, n1n1))
    key = new_key(key, word)
    yield word

def words_from_file(f):
  for line in f:
    words = line.split()
    if len(words):
      for word in words:
        yield word
    else:
      yield '\n'
  yield '\n'


def paragraph_from_words(words):
  result = []
  for word in words:
    if word == '\n': break
    result.append(word)
  return ' '.join(result)

if __name__ == '__main__':
  import sys
  print paragraph_from_words(
      words_from_markov_data(
        markov_data_from_words(
          words_from_file(
            sys.stdin))))


