#!bin/sh
#run sh dockerBuild cat /thincats123123.json
# docker build --{arg[0]} .

read -p "Version:" buildVersion
cd spa
npm run buildProd
cd ../
docker build . --tag asia.gcr.io/firm-champion-204312/thincats:$buildVersion
docker push asia.gcr.io/firm-champion-204312/thincats:$buildVersion
gcloud beta compute instances update-container instance-1 --container-image asia.gcr.io/firm-champion-204312/thincats:$buildVersion
git subtree split --prefix spa/dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages