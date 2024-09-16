# MongoDB Zen CLass Task

## Tools and Environment

I have used an extension called MongoDD for VSCode in VSCode Code Editor.

MongoDB For VSCode Extension :
[Install Here](https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode)

To use this extension we need to name our javascript file as
**_{filename}.mongodb.js_**

We can run the mongodb query using the play button which appears at the top
right corner of the file.

![Demo image](/Ext_Demo.png)

## Prerequisites

1. You need to connect to a mongodb database instance wheather it is atlas or
   local server.

2. In the mongodb.js suffixed file you can see a clickable text Connect to a
   database in the starting of the file.

3. When clicked VSCode command pallette will open and ask for the connection
   string.

4. When provided the connection string then you can run the file.

## Results Format.

1. The query for the given tasks are in the mongodb.js suffixed file

2. The results of the query are provided in the .json formatted file with the
   same name of the query file.

3. There are also mondb.js suffixed file which I used to create collections in
   the database.
