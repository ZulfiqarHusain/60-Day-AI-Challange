# 60-Day-AI-Challange
My Daily AI Coding Challange

# Day 8: NLP Preprocessing Pipeline 
## Project Overview:-
I focused on the Data Cleaning phase of Natural Language Processing. Raw text is often messy and contains "noise" that can confuse a Machine Learning model. I built a preprocessing pipeline to standardize text before feeding it into the Naive Bayes classifier.

# What I Did:
Implemented a multi-stage cleaning function using NLTK and Regex:
1. Lowercasing: Standardized all text to avoid case-sensitivity issues.
2. Noise Removal: Used Regular Expressions to strip out special characters, numbers, and punctuation.
3. Stop-words Removal: Filtered out common words (is, the, and) that don't contribute to sentiment.
4. Stemming: Used PorterStemmer to chop words down to their root form (e.g., loving -> love).
# Comparative Results (Manual Testing):

Original Text,Processed (Cleaned) Text,Predicted Sentiment
"""I am loving this so much!""","""love much""",Positive
"""It was not a good movie.""","""good movi"" (Note: 'not' was kept/removed based on list)",Negative
"""Absolutely waste of money.""","""absolut wast money""",Negative
"""The plot was incredibly amazing""","""plot incred amaz""",Positive

# Key Observations:
1. Vocabulary Compression: Stemming significantly reduced the number of unique words, making the model faster and more memory-efficient.
2. The "Not" Paradox: Removing stop-words can sometimes be risky. If "not" is removed, the sentiment can flip. I learned to carefully curate the stop-word list.
3. Efficiency: Standardized data led to clearer probability scores in the Multinomial Naive Bayes model.

# Tech Stack: 

## Language: Python
## Libraries: NLTK, Scikit-learn, Pandas, Re (Regex)
