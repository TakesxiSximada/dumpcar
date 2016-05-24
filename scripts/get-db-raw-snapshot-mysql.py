import getpass
import argparse
import subprocess


parser = argparse.ArgumentParser()
parser.add_argument('host')
parser.add_argument('user')
parser.add_argument('db')
args = parser.parse_args()

child = subprocess.run('mysqldump -h {} -u {} {}'.format(
    args.host, args.user, args.db), shell=True)
child.wait()
child = subprocess.run('mysqldump -h {} -u {} {}'.format(
    args.host, args.user, args.db), shell=True)
child.wait()
