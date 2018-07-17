# ThinCats rebuild
thincats-c1f1e998f5d9.json needs to be in this dir.

deployment:
docker build . --tag asia.gcr.io/firm-champion-204312/thincats:v1.1
docker push asia.gcr.io/firm-champion-204312/thincats:v1.1
gcloud beta compute instances update-container instance-1 --container-image asia.gcr.io/firm-champion-204312/thincats:v1.1

asia.gcr.io/firm-champion-204312/thincats
docker tag 5f19d9e179e2 asia.gcr.io/firm-champion-204312/thincats:v1.1

text too small on mobile
use http2
use https

todo:
resources page - download links!
unscrew mobile view

non critical for delivery:
cloudfront caching?
icons for manifest and top of tab (favicon)

staging/prod variable for golang. should include the json key and env var for running it. Include the path export in go generate as well as the docker builds.
projectID: override hardcoded projectID
cache resource rendering/processing
router should separate out anchors and queries with ? for page routes
add compact=false to babelrc for dev build to help readability
offer to manage site uptime for half of otheras price
