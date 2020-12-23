# Mixed Messages Project

## Introduction

The project is to build a message generator program. Every time the program is run a different message will be provided as an output to the terminal.

The output is in the form of a non-sensical joke randomly selected from a database of sentence stems and two different keywords or phrases.

## Technologies

This project uses Node.js v12.18.4

## Further word

Since interpolation inside of the object wasn't working the code had to be refactored.
This included moving the sentenceStems to be a new variable instead of a component of the db object.
The code could be further refactored to have the random Sentence selector outside of the db object.

Additionally a test file could be developed to check the fringe cases specifically and generally monitor the performance of the program is it is refactored.