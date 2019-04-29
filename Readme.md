This project is the hands-on work for the below GraphQL tutorial

https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1

Example:

Single Query:

query getSingleCourse($courseID: Int!) {
    course(id: $courseID) {
title
author
description
topic
url
}
}

```Query Variables:

{
  "courseID": 1
}


~~~ Expected Output:

{
  "data": {
    "course": {
      "title": "The Complete Node.js Developer Course",
      "author": "Andrew Mead, Rob Percival",
      "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
      "topic": "Node.js",
      "url": "https://codingthesmartway.com/courses/nodejs/"
    }
  }
}


Multiple Query:

query getMultipleCourse($courseID1: Int!, $courseID2: Int!) {
    course1: course(id: $courseID1) {
        title
        author
        description
        topic
        url
  },
  course2: course(id: $courseID2) {
        title
        author
        description
        topic
        url
    }
}


~~~ Query Variables:

{
  "courseID1": 1,
  "courseID2": 2
}


~~~ Expected Output:

{
  "data": {
    "course1": {
      "title": "The Complete Node.js Developer Course",
      "author": "Andrew Mead, Rob Percival",
      "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
      "topic": "Node.js",
      "url": "https://codingthesmartway.com/courses/nodejs/"
    },
    "course2": {
      "title": "The Complete Node.js Developer Course",
      "author": "Andrew Mead, Rob Percival",
      "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
      "topic": "Node.js",
      "url": "https://codingthesmartway.com/courses/nodejs/"
    }
  }
}

Thanks for visiting!!
```
