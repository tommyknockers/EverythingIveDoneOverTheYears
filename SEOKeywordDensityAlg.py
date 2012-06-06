import re


def getTextFromHTML(raw_html):
	# make local copy
	workingText = raw_html
	
	# convert lower case
	workingText = workingText.lower()
	
	# replace newlines, tabs
	workingText = workingText.replace("\n", " ")
	workingText = workingText.replace("\r", " ")
	workingText = workingText.replace("\t", " ")
	
	# erase script tags
	workingText = re.sub("<script[^>]*?>.*?</script>", " ", workingText)
	
	# erase style tags
	workingText = re.sub("<style[^>]*?>.*?</style>", " ", workingText)
	
	# replace all img tags with alt attributes
	imgList = re.finditer("<img([^>]*?)>", workingText)
	for img in imgList:
		attributesStr = img.group(1)
		altStr = re.search('alt[\s]*?=[\s]*?[\"\'](.*?)[\"\']', attributesStr).group(1)
		workingText = workingText.replace(img.group(0), altStr)
	
	# replace keyword, description meta tags with content attribute
	metaList = re.finditer("<meta([^>]*?)>", workingText)
	for meta in metaList:
		attributesStr = meta.group(1)
		metaTypeStr = re.search('name[\s]*?=[\s]*?[\"\'](.*?)[\"\']', attributesStr)
		if not metaTypeStr: # if this meta tag doesn't have a name attribute, move to next metatag
			continue
		if metaTypeStr == "description" or metaTypeStr == "keywords":
			metaContentStr = re.search('content[\s]*?=[\s]*?[\"\'](.*?)[\"\']', attributesStr).group(1)
			workingText = workingText.replace(meta.group(0), metaContentStr)
	
	# erase comments
	workingText = re.sub("<!--.*?-->", " ", workingText)
	
	# erase single tags
	workingText = re.sub("<[^>]*?>", " ", workingText)
	
	# replace apostrophe character entities with actual apostrophies
	# erase all other html entites
	workingText = workingText.replace("&#39;", "'")
	entities = re.finditer('&(#?)(x?)(\w+);', workingText)
	for entity in entities:
		workingText = workingText.replace(entity.group(0), " ")
		
	# replace all non-alphagnumeric characters & things not apostrophies with spaces
	workingText = re.sub("[^\w']", " ", workingText)
	workingText = re.sub("\(|\)", " ", workingText)
	workingText = re.sub("\|", " ", workingText)
	
	# reduce whitespace
	while workingText.find("  ") != -1:
		workingText = workingText.replace("  ", " ")
	
	# trim all extra whitespace on beginning and end
	workingText = re.sub("^\s", "", workingText)
	workingText = re.sub("\s$", "", workingText)
	
	return workingText


# returns an array with the words & the number of times each occurs
def getSingleWords(text, min_occurences=0, min_length=0):
	# split text into words
	words = text.split(' ')
	
	# array will store number of occurences of each word in words
	keywords = {}
	
	for word in words:
		if word.isdigit(): # don't count digits
			continue
		if len(word) < min_length: # skip short words
			continue
		
		# record number of occurences of each word
		if word not in keywords:
			keywords[word] = 0
		keywords[word] += 1
	
	# remove keywords from keywords array that don't occur enough
	for keyword in keywords:
		if keywords[keyword] < min_occurences:
			del keywords[keyword]
	
	return keywords


def getDoubleWords(text, min_occurences=0, min_length=0):
	# split text by spaces
	words = text.split(' ')

	# loop through all words & create all possible double words
	keywords = {}
	for i in range(len(words)-2):
		firstWord = words[i]
		secondWord = words[i+1]
		if firstWord.isdigit() or secondWord.isdigit(): # skip digits
			continue
		word = " ".join([firstWord, secondWord])
		
		if len(word) < min_length: # skip short words
			continue
		
		# record number of occurences of each word
		if word not in keywords:
			keywords[word] = 0
		keywords[word] += 1
	
	# remove keywords from keywords array that don't occur enough
	for keyword in keywords:
		if keywords[keyword] < min_occurences:
			del keywords[keyword]
	
	return keywords


def getTripleWords(text, min_occurences=0, min_length=0):
	# split text by spaces
	words = text.split(' ')

	# loop through all words & create all possible triple words
	keywords = {}
	for i in range(len(words)-3):
		firstWord = words[i]
		secondWord = words[i+1]
		thirdWord = words[i+2]
		if firstWord.isdigit() or secondWord.isdigit() or thirdWord.isdigit(): # skip digits
			continue
		word = " ".join([firstWord, secondWord, thirdWord])
		
		if len(word) < min_length: # skip short words
			continue
		
		# record number of occurences of each word
		if word not in keywords:
			keywords[word] = 0
		keywords[word] += 1
	
	# remove keywords from keywords array that don't occur enough
	for keyword in keywords:
		if keywords[keyword] < min_occurences:
			del keywords[keyword]
	
	return keywords
