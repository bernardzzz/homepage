#!/usr/bin/env bash

bucket_name="bernard-homepage-website"

aws s3 cp --recursive . s3://${bucket_name}/ --exclude "*.sh" --exclude "*.js" --exclude "*.md" --exclude ".git/*" --exclude ".idea/*"