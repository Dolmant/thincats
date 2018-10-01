# ThinCats rebuild
deployment:
sh dockerBuild.sh {version}

todo:
fix weird drop (text drops on deployed version)

non critical for delivery:
cloudfront caching?
icons for manifest and top of tab (favicon)

offer to manage site uptime for half of otheras price

staging/prod variable for golang. should include the json key and env var for running it. Include the path export in go generate as well as the docker builds.
projectID: override hardcoded projectID with config
cache resource rendering/processing
router should separate out anchors and queries with ? for page routes
add compact=false to babelrc for dev build to help readability

