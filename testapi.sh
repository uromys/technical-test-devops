#!/bin/bash

# Define the URL you want to check
URL="https://selego-api.onrender.com/"

# Use curl to make a GET request and store the HTTP status code in a variable
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)

# Check if the HTTP status code is 200 (OK)
if [ "$HTTP_STATUS" == "200" ]; then
  echo "The website $URL is returning a 200 OK response."
  exit 0
else
  echo "The website $URL is not returning a 200 OK response. Status code: $HTTP_STATUS"
  exit 1
fi