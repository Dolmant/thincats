#!bin/sh

git subtree split --prefix spa/dist -b gh-pages
git push -f origin gh-pages:gh-pages
