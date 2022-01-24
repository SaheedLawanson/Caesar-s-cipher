# Caesar's Cipher

# Built with
- JavaScript


# Overview

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A => N, B => O and so on.

The rot13 function takes a single argument: str of data type string of which is to be decoded using the ROT13 cipher method


# Algorithm
1.	Lists "lettInAlp" and "lettInStr" are created, lettInAlp stands for letters in the alphabet while
	lettInStr stands for letters in the str argument given
2.	The "lettInRot13" is initialized and is later used to store the transformations.
3.	Loops through the content of the lettInStr (each character in the str argument) and filters out
	characters that arent alphabets
4.	A nested loop iterates through all the letters in the alphabet, at an instant in both loops, when the
	letterInStr matches that of letterInAlp, then the index of the letterInAlp is stored
5.	Now we have the indexes of all the letters in the string relative to the total list of alphabets, we can add
	13 to each of those indexes to get decode the actual value of that character
6.	if a character in the string argument is not a letter, then we just return it the way it was
7.	Each loop iteration decodes one character at a time and we concatenate the decoded characters to the 
	lettInRot13 storage variable..
