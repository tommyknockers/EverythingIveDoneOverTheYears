#!/usr/bin/python
import pdb

directory = "/media/BOOTCAMP/Documents and Settings/Administrator/Desktop/GamespotAllSentences"
import os
import zipfile
zip = zipfile.ZipFile('yar.zip', 'w')
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.txt'):
            zip.write(os.path.join(root,file))
zip.close()

