tree -d -L 1 -H 'https://linuxguist.github.io/voice-acct-local' > index.html
perl -pi replacements.txt index.html

