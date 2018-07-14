# ThinCats rebuild
thincats-c1f1e998f5d9.json needs to be in this dir.

deployment:
docker build . --tag asia.gcr.io/firm-champion-204312/thincats:v1
docker push asia.gcr.io/firm-champion-204312/thincats:v1
gcloud beta compute instances update-container instance-1 --container-image asia.gcr.io/firm-champion-204312/thincats:v1

asia.gcr.io/firm-champion-204312/thincats
docker tag 5f19d9e179e2 asia.gcr.io/firm-champion-204312/thincats:v1

failed audits:
text too small on mobile
missing meta description
manifests short name too long
use http2
no fetched manifest and no meta theme colour
use https

todo:
back button should trigger the back of the app as well
parse hashlinks to go to the correct place
faq links need to be working
unscrew mobile view
FAQ needs to be its own section
concrete external link

non critical for delivery:
like material ui a loading bar at the top on the html element whenever you click a link or menu (make it a store action)
staging/prod variable for golang. should include the json key and env var for running it. Include the path export in go generate as well as the docker builds.
todo put all golang stuff in a cloud function?
projectID: override hardcoded projectID
cache resource rendering/processing
router should separate out anchors and queries with ? for page routes
add compact=false to babelrc for dev build to help readability
offer to manage site uptime for half of otheras price
