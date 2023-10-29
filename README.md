# File statistics

This is a Typescript command line application that asks the user for a path or an URL pointing to some text and then 
prints on the console these statistics:
- total number of words;
- total number of letters;
- total number of blanks;
- words repeated more than 10 times.

## How to run the project
### Linux and Mac
At the first execution of the program run in a console window from the root of the project `./scripts/prepare.sh`. 
Then to call the program run `./scripts/prepare.sh`.
### Windows (or manual execution)
To prepare the environment run in a command window.
```
npm install
npm run build
```
Then to run the program:
```
npm start
```
### Docker
This is best suited for URL files, even if you could mount a volume containing text files. Run
`docker compose run file-statistics npm start`

## Running tests
After having prepared the environment (see above) run `npm run test`
