1. "docker run -v ${PWD}:/app -w /app node:alpine npx create-react-app -appname-"
2. package.json change -> "start": "WATCHPACK_POLLING=true react-scripts start"
3. "cd -appname-"
4. "docker build -t -appname- ."
5. "docker run -p 3000:3000 -v ${PWD}:/app -appname-" (repeated command for each time you want to start working on this container)
