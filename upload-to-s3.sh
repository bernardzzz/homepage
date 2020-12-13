#!/usr/bin/env bash

bucket_name="bernard-homepage-website"

aws s3 cp ./index.html s3://${bucket_name}/
aws s3 cp ./error.html s3://${bucket_name}/
aws s3 cp --recursive ./assets/ s3://${bucket_name}/assets