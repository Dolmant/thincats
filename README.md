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

james:

last item:
The hint of yellow and blue (within the summary page) looks good. Wouldn’t mind seeing these colour combos – in the same proportion - in the other tabs ‘resources’, ‘investor portal’ etc. i.e. outlines, heading etc.
remove clipping of text on homepage 

todo:
resources page - download links!
parse hashlinks to go to the correct place
faq links need to be working
unscrew mobile view
FAQ needs to be its own section?

non critical for delivery:
cloudfront caching?
icons for manifest and top of tab (favicon)

staging/prod variable for golang. should include the json key and env var for running it. Include the path export in go generate as well as the docker builds.
projectID: override hardcoded projectID
cache resource rendering/processing
router should separate out anchors and queries with ? for page routes
add compact=false to babelrc for dev build to help readability
offer to manage site uptime for half of otheras price
