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

# Day 10: Building & Debugging an End-to-End NLP Pipeline 🏗️
## Project Overview:-
I reached a major milestone by integrating multiple NLP concepts—Cleaning, Feature Extraction, and Classification—into a single, automated Scikit-learn Pipeline. This project demonstrates the transition from individual scripts to a professional, integrated Machine Learning system.

## The Technical Workflow:- 
Instead of running manual steps, I used the Pipeline() class to bundle:
1. TF-IDF Vectorizer: To convert text into numerical weights based on term importance (moving beyond simple word counts).
2. Multinomial Naive Bayes: A robust probabilistic classifier for text data.
3. Automated Inference: One-click prediction that handles raw text as input and gives the category as output.

## The "Aha!" Moment: Debugging & Data Centricity
During initial testing, the model predicted "This is the best thing I have ever bought" as Negative.

### The Problem:
The training dataset was too small and didn't contain the word "best." The model had never "seen" this word as a positive feature, so it made a biased prediction.
### The Fix:
I expanded the training dataset with more diverse labels (adding more 'positive' and 'negative' examples). By providing a Balanced Dataset, I taught the model to recognize "best" and other top-tier descriptive words as positive indicators.

### 🎯 Final Model Inference Results

| Input Comment | Preprocessed Text | Predicted Sentiment | Status |
| :--- | :--- | :--- | :--- |
| "This is the best thing I have ever bought" | `best thing bought` | **Positive** | ✅ Fixed |
| "I really hate how slow the service is" | `hate slow servic` | **Negative** | ✅ Accurate |
| "Excellent work, highly recommend" | `excel work high recommend` | **Positive** | ✅ Accurate |
| "The quality is very poor" | `qualiti poor` | **Negative** | ✅ Accurate |
## Key Learnings 
1. Pipeline Automation: Bundling steps reduces the risk of "Data Leakage" and makes the code clean and production-ready.
2. The Power of Labels: Learned that labels act as the "Teacher" for the model. The more high-quality labeled data we provide, the smarter the AI becomes.
3. Data Over Code: In modern AI, often the best way to fix a model isn't by changing the algorithm, but by improving the quality and quantity of the training data.
## 🛠️Tech Stack
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Jupyter Notebook](https://img.shields.io/badge/jupyter-%23FA0F00.svg?style=for-the-badge&logo=jupyter&logoColor=white)

# Day 11: Building an Intelligent Retrieval System 🔍
## Overview
On Day 11, I explored how AI systems find and rank information from a large database. Instead of a simple "Ctrl+F" keyword match, I built a Vector-based Retrieval System that measures the mathematical similarity between a user's query and a set of documents.

## The Technical Logic
The system works on the principle of Vector Space Modeling:

1. TF-IDF Vectorization: Converted raw text documents into numerical vectors. This helps the system understand which words are unique and important in a document.
2. Query Transformation: When a user enters a query, it is transformed into the same vector space.
3. Cosine Similarity: Mathematically calculated the 'distance' or angle between the query vector and all document vectors. The document with the smallest distance (highest similarity) is retrieved as the top result.

## Core Functionality
The system can take a natural language query and find the most relevant piece of information from a "Knowledge Base."

### Test Case:
* **Knowledge Base:** 5 diverse sentences about AI, Python, and NLP.
* **User Query:** *"Tell me about NLP and text"*
* **Retrieved Result:** *"Natural Language Processing helps machines understand text."*
* **Confidence Score:** `0.5298`

## Key Learnings
1. Ranking vs. Filtering: Retrieval is about ranking results by relevance, not just filtering "yes" or "no."
2. Contextual Matching: Even if some words are different, the system can find relevant documents if the core keywords (like NLP and Text) carry high TF-IDF weights.
3. Foundation for RAG: This project is the first step toward building Retrieval-Augmented Generation (RAG) systems, which allow LLMs to access external data.

### 🛠️ Tech Stack

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Scikit-Learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)

| **Component** | **Usage** |
| :--- | :--- |
| **Python** | Core language for implementing the logic. |
| **Scikit-learn** | Used `TfidfVectorizer` for text-to-vector conversion and `Cosine Similarity` for ranking. |
| **Pandas** | Used for structured data handling and knowledge base management. |
