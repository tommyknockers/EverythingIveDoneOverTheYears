import shlex, subprocess
import time
import os
import sys
from operator import itemgetter, attrgetter
import shutil
import ipdb


def execute(command_line):
    args = shlex.split(command_line)
    p = subprocess.Popen(args, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    return p


def shoot_mode(bus, dev):
    p = execute("ptpcam --chdk --bus %d --dev %d" % (bus, dev))
    print "Transferring modes"
    p.stdin.writelines('mode 1\n')
    time.sleep(3)
    p.stdin.writelines('q\n')
    p.communicate()


def shoot(bus, dev):
    p = execute("ptpcam --chdk --bus %d --dev %d" % (bus, dev))
    print "shooting"
    p.stdin.writelines('lua shoot()\n')
    time.sleep(3.5)
    p.stdin.writelines('q\n')
    p.communicate()
    print "done shooting."


def download(bus, dev):
    print "downloading"
    p = execute("ptpcam -G --bus %d --dev %d" % (bus, dev))
    p.communicate()
    for subdir, dirs, files in os.walk(os.path.join(os.getcwd(), 'left')):
        for file in files:
            if not f.endswith('JPG'):
                os.remove(os.path.join(subdir, file))
    for subdir, dirs, files in os.walk(os.path.join(os.getcwd(), 'right')):
        for file in files:
            if not f.endswith('JPG'):
                os.remove(os.path.join(subdir, file))
    print "done downloading."


def clear(bus, dev):
    print "clearing"
    p = execute("ptpcam --chdk --bus %d --dev %d" % (bus, dev))
    p.stdin.writelines("mode 0\n")
    time.sleep(2)
    p.stdin.writelines('lua press("menu")\n')
    time.sleep(2)
    p.stdin.writelines('lua press("up")\n')
    time.sleep(1)
    p.stdin.writelines('lua press("up")\n')
    time.sleep(1)
    p.stdin.writelines('lua press("up")\n')
    time.sleep(1)
    p.stdin.writelines('lua press("up")\n')
    time.sleep(1)
    p.stdin.writelines('lua press("set")\n')
    time.sleep(1)
    p.stdin.writelines('lua press("left")\n')
    time.sleep(1)
    p.stdin.writelines('lua press("set")\n')
    time.sleep(3)
    p.stdin.writelines("q\n")
    p.communicate()
    print "done clearing."


def get_camera_ids():
    p = execute('lsusb')
    data = p.stdout.read()
    cameras = []
    lines = data.split('\n')
    for line in lines:
        line = line.split(' ')
        if len(line) == 1:
            continue
        if line[6] == "Canon,":
            bus = int(line[1])
            device = int(line[3][0:-1])
            cameras.append([bus, device])
    return cameras

cameras = get_camera_ids()
# left
bus0 = cameras[0][0]
dev0 = cameras[0][1]

# right
bus1 = cameras[1][0]
dev1 = cameras[1][1]

cameras = 2

print "initializing."
shoot_mode(bus0, dev0)
if cameras == 2:
    shoot_mode(bus1, dev1)

while True:
    input = raw_input(":")
    if input == "":
        if cameras == 2:
            pid = os.fork()
            if pid == 0:
                shoot(bus0, dev0)
                sys.exit()
            else:
                shoot(bus1, dev1)
                os.wait()
        else:
            shoot(bus0, dev0)

    if input in ["download", " "]:
        if cameras == 2:
            pid = os.fork()
            if pid == 0:
                cur_path = os.getcwd()
                os.chdir(os.path.join(cur_path, 'left'))
                download(bus0, dev0)
                clear(bus0, dev0)
                shoot_mode(bus0, dev0)
                os.chdir(cur_path)
                sys.exit()
            else:
                cur_path = os.getcwd()
                os.chdir(os.path.join(cur_path, 'right'))
                download(bus1, dev1)
                clear(bus1, dev1)
                shoot_mode(bus1, dev1)
                os.chdir(cur_path)
                os.wait()
        else:
            download(bus0, dev0)
            clear(bus0, dev0)
            shoot_mode(bus0, dev0)

    if input == "merge":
        print "merging"

        # get modification date of all left pages
        left = []
        for subdir, dirs, files in os.walk(os.path.join(os.getcwd(), 'left')):
            for file in files:
                left.append([os.path.join(subdir, file), os.path.getmtime(os.path.join(subdir, file))])

        # get modification date of all right pages
        right = []
        for subdir, dirs, files in os.walk(os.path.join(os.getcwd(), 'right')):
            for file in files:
                right.append([os.path.join(subdir, file), os.path.getmtime(os.path.join(subdir, file))])

        # sort 
        sorted(left, key=itemgetter(1))
        sorted(right, key=itemgetter(1))

        # merge left and right pages
        merged = []
        while len(left) != 0 and len(right) != 0:
            merged.append(left.pop())
            merged.append(right.pop())
        
        # check for last created page number in merged folder
        # start from there
        pages = []
        for subdir, dirs, files in os.walk(os.path.join(os.getcwd(), 'merged')):
            for file in files:
                filename = int(file.split(".")[0])
                pages.append(filename)
        pages.sort(reverse=True)

        if len(pages) > 0:
            last_page = pages[0]
        else:
            last_page = 0
        
        index = last_page + 1
        for file in merged:
            PATH = 0
            shutil.move(file[PATH], os.path.join(os.path.join(os.getcwd(), 'merged'), str(index) + ".jpg"))
            index += 1

        print "done merging."

