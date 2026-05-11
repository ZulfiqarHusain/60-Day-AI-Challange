# 60-Day-AI-Challange
My Daily AI Coding Challange

# Day 8: NLP Preprocessing Pipeline 
## Project Overview:-
I focused on the Data Cleaning phase of Natural Language Processing. Raw text is often messy and contains "noise" that can confuse a Machine Learning model. I built a preprocessing pipeline to standardize text before feeding it into the Naive Bayes classifier.

## What I Did:
Implemented a multi-stage cleaning function using NLTK and Regex:
1. Lowercasing: Standardized all text to avoid case-sensitivity issues.
2. Noise Removal: Used Regular Expressions to strip out special characters, numbers, and punctuation.
3. Stop-words Removal: Filtered out common words (is, the, and) that don't contribute to sentiment.
4. Stemming: Used PorterStemmer to chop words down to their root form (e.g., loving -> love).

### 📊 Comparative Results (Manual Testing)

| Original Text | Processed (Cleaned) Text | Predicted Sentiment |
| :--- | :--- | :--- |
| "I am loving this so much!" | "love much" | **Positive** |
| "It was not a good movie." | "good movi" *(Note: 'not' handling)* | **Negative** |
| "Absolutely waste of money." | "absolut wast money" | **Negative** |
| "The plot was incredibly amazing" | "plot incred amaz" | **Positive** |

## Key Observations:
1. Vocabulary Compression: Stemming significantly reduced the number of unique words, making the model faster and more memory-efficient.
2. The "Not" Paradox: Removing stop-words can sometimes be risky. If "not" is removed, the sentiment can flip. I learned to carefully curate the stop-word list.
3. Efficiency: Standardized data led to clearer probability scores in the Multinomial Naive Bayes model.

## Tech Stack: 

### Language: 
Python
### Libraries: 
NLTK, Scikit-learn, Pandas, Re (Regex)


# Day 9: Semantic Similarity with Embeddings 🧬

## Overview
Moving beyond Day 7 & 8, where we used Bag-of-Words and Preprocessing, Day 9 focuses on **Vector Embeddings**. Instead of counting words, we are now measuring the "meaning" of sentences.

## Key Implementation
- **Model:** `all-MiniLM-L6-v2` (Sentence-Transformers)
- **Concept:** Cosine Similarity

## Test Results
- **Pair 1:** "The cat sits outside" vs "The feline is resting outdoors"
  - **Similarity Score:** 0.6241 (High Semantic Link)
- **Pair 2:** "A man is playing guitar" vs "He is strumming a musical instrument"
  - **Similarity Score:** 0.5893 (High Contextual Link)

## Learnings
1. **Word Overlap != Meaning:** Sentences can be similar without sharing common words.
2. **Embeddings:** Learned how to map text into a 384-dimensional vector space.

Day 10: Building & Debugging an End-to-End NLP Pipeline 🏗️Project OverviewOn Day 10, I reached a major milestone by integrating multiple NLP concepts—Cleaning, Feature Extraction, and Classification—into a single, automated Scikit-learn Pipeline. This project demonstrates the transition from individual scripts to a professional, integrated Machine Learning system.The Technical WorkflowInstead of running manual steps, I used the Pipeline() class to bundle:TF-IDF Vectorizer: To convert text into numerical weights based on term importance (moving beyond simple word counts).Multinomial Naive Bayes: A robust probabilistic classifier for text data.Automated Inference: One-click prediction that handles raw text as input and gives the category as output.The "Aha!" Moment: Debugging & Data CentricityDuring initial testing, the model predicted "This is the best thing I have ever bought" as Negative.The Problem:The training dataset was too small and didn't contain the word "best." The model had never "seen" this word as a positive feature, so it made a biased prediction.The Fix:I expanded the training dataset with more diverse labels (adding more 'positive' and 'negative' examples). By providing a Balanced Dataset, I taught the model to recognize "best" and other top-tier descriptive words as positive indicators.Final Test ResultsInput CommentPredicted Sentiment"This is the best thing I have ever bought"Positive ✅"I really hate how slow the service is"Negative ✅3 Key LearningsPipeline Automation: Bundling steps reduces the risk of "Data Leakage" and makes the code clean and production-ready.The Power of Labels: Learned that labels act as the "Teacher" for the model. The more high-quality labeled data we provide, the smarter the AI becomes.Data Over Code: In modern AI, often the best way to fix a model isn't by changing the algorithm, but by improving the quality and quantity of the training data.Tech StackPythonScikit-learn (Pipeline, TF-IDF, Naive Bayes)Pandas
