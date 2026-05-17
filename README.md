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
I explored how AI systems find and rank information from a large database. Instead of a simple "Ctrl+F" keyword match, I built a Vector-based Retrieval System that measures the mathematical similarity between a user's query and a set of documents.

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


# Day 12: Mastering Text Chunking for GenAI ✂️📖
## Overview
On Day 12, I explored Text Chunking—a fundamental step in building Retrieval-Augmented Generation (RAG) systems. Large language models have "context windows," and they can't digest massive documents all at once. I implemented strategies to break down long text into manageable, context-rich "chunks."

## Why Chunking Matters?
If we cut text randomly, we might lose the meaning (e.g., cutting a sentence in half). Effective chunking ensures that each piece of data passed to an AI model is self-contained and semantically meaningful.

## Implementation: Recursive Character Splitting
Instead of simple character counting, I used the Recursive Character Text Splitter from LangChain.

### Key Parameters Used:
* Chunk Size (100): Defines the maximum length of each chunk.
* Chunk Overlap (20): This is the secret sauce! It keeps a small portion of the previous chunk in the next one to preserve context across boundaries.
### 📊 Chunking Strategies Overview

| Strategy | Benefit | Use Case |
| :--- | :--- | :--- |
| **Fixed Size** | Predictable | Simple storage & basic indexing |
| **Recursive** | Smart boundaries (Paragraphs/Sentences) | High-quality RAG pipelines |
| **Overlap** | Context Preservation | Long document analysis & deep retrieval |

### Output Example:
In my test, a paragraph about my AI journey was split into multiple overlapping chunks.
* Chunk 1: "...documenting his 60-Day AI Challenge."
* Chunk 2: "AI Challenge. Day 11 was about..."
(Note how "AI Challenge" overlaps to maintain flow!)
## Engineering Insights:
1. Semantic Integrity: Recursive splitting is superior because it respects the structure of human language (newlines > spaces > characters).
2. Vector DB Optimization: Small, meaningful chunks lead to better search results in Vector Databases like Pinecone or ChromaDB.
3. The Overlap Trade-off: More overlap means better context but higher storage costs and redundant tokens.

### 🛠️ Tech Stack
| Technology | Purpose |
| :--- | :--- |
| **Python** | Primary programming language |
| **LangChain** | Specifically using `RecursiveCharacterTextSplitter` for intelligent chunking |
| **Jupyter/Colab** | Environment for experimentation and visualization |
#### 🚀 Powered By:
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626.svg?style=for-the-badge&logo=Jupyter&logoColor=white)


# Day 13: Embedding Deep Dive 🧬💻

## Overview
On Day 13, I transitioned from keyword-based frequency models to **Dense Vector Embeddings**. The objective was to explore how AI represents human language in a high-dimensional mathematical space, moving beyond characters to understand the "essence" of a sentence.

## How it Works
1. **Model Loading:** Utilized the `all-MiniLM-L6-v2` transformer model, which contains pre-trained weights (~91MB) optimized for semantic search.
2. **Dense Representation:** Every sentence is mapped to a fixed **384-dimensional vector**. Unlike sparse models, every value in this vector contributes to the context.
3. **Semantic Clustering:** The model places similar concepts (like "Deep Learning" and "Neural Networks") in close proximity within the vector space.

## Results & Observations

| Sentence A | Sentence B | Similarity Score | Observation |
| :--- | :--- | :--- | :--- |
| "I love deep learning..." | "Neural networks are the backbone..." | **0.8144** | High similarity despite different keywords. |
| "Bhopal is a beautiful city" | "The weather is pleasant" | **0.1240** | Low similarity; identified as distinct topics. |

## Key Learnings
- **Dimensionality:** Learned that regardless of text length, the model outputs a consistent vector size (384), making it ideal for large-scale comparisons.
- **Mathematical Meaning:** In AI, "meaning" is simply a coordinate in a multi-dimensional space. Points closer to each other are semantically related.
- **Foundation of RAG:** Understanding how embeddings work is the most critical prerequisite for building Vector Databases and RAG pipelines.

## 🛠️ Tech Stack
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![HuggingFace](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-yellow)
![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)


# Day 14: Building a Semantic Search Engine 🔍🧠

## Overview
Today, I upgraded my information retrieval skills by building a **Semantic Search Engine**. Unlike traditional search that relies on exact keyword matches, this engine uses **Sentence Embeddings** to understand the underlying meaning and intent of a query.

## How it Works
1. **Embedding Generation:** Every document in the corpus is converted into a high-dimensional vector using the `all-MiniLM-L6-v2` transformer model.
2. **Contextual Mapping:** The user query is also embedded into the same vector space.
3. **Similarity Calculation:** Using **Cosine Similarity**, the engine calculates which documents are mathematically closest to the query's meaning.


## Results & Observations
| Query | Top Match | Score | Observation |
| :--- | :--- | :--- | :--- |
| "A man is eating something" | "A man is eating food" | **0.9010** | Perfect semantic match! |
| "Animal is running fast" | "A cheetah is running behind its prey" | **0.5280** | Model linked 'Cheetah' to 'Animal' contextually. |

## Key Learnings
- **Intent over Keywords:** The system can find relevant information even if the specific words in the query don't exist in the database.
- **Score Thresholds:** Learned that a score above 0.5 generally indicates a strong contextual link in this model.
- **Scalability:** This logic is the backbone of modern recommendation systems and advanced AI search tools.

## Tech Stack
- **Python**
- **Sentence-Transformers** (Hugging Face)
- **PyTorch** (for tensor operations)

# Day 16: Diagnosing RAG Failure Modes 🔍🩺

## Overview
On Day 16, I shifted from core architecture execution to system optimization by designing an automated evaluation pipeline to diagnose structural **RAG Failure Modes**. Real-world retrieval systems can fail silently by returning confident-sounding incorrect answers (hallucinations). To comprehensively test my setup, I built a robust **15-query diagnostic test suite** targeting 5 foundational industry failure points.

## The 5 Evaluated Failure Modes
1. **Retrieval Failure:** Target information is completely absent from the local index database matrix.
2. **Context Window Overflow:** Long, repetitive, or poorly formatted chunks overload the LLM context envelope.
3. **Answer-Context Mismatch:** The relevant text data exists, but the generative model ignores limits or extrapolates beyond the data.
4. **Vague Context Retrieved:** High vector mathematical similarity match but very low functional semantic value.
5. **Correct Chunk Retrieved but Wrong Answer Generated:** The pipeline locates the context node but slips due to lack of strict prompt parameter enforcement.

---

## 📈 System Diagnostic Evaluation Dashboard

The entire test suite was executed deterministically, tracking dynamic lookups, retrieval metrics, and generation properties. All raw executions have been successfully synchronized locally inside the `rag_diagnostic_logs.json` matrix report.

### Evaluation Scorecard Matrix

| Query Focus & Intent | Failure Mode Classification | Retrieval Score (1-5) | Generation Score (1-5) | Root Cause Diagnosis |
| :--- | :--- | :---: | :---: | :--- |
| *What is the exact price of Tesla Model 3 in India?* | **Retrieval Failure** | 1 | 5 | Target ground-truth coordinates do not exist in the local FAISS index. |
| *Give me a line-by-line breakdown of Project Alpha...* | **Context Window Overflow** | 5 | 2 | Massive redundant chunk replication bloated the pipeline token footprint. |
| *Based ONLY on text, can UrbanEye track airplanes...?* | **Answer-Context Mismatch** | 5 | 5 | Extrapolations were effectively halted by default system guardrails. |
| *What are the core features of the system?* | **Vague Context Retrieved** | 3 | 4 | Chunk boundaries matched global keywords but lacked precise parameters. |
| *What is the exact model performance mAP score...?* | **Correct Chunk but Wrong Answer** | 5 | 5 | Core text chunk targets project details but lacks specific numeric tokens. |

### Summary Performance Scorecard
- **Average Retrieval Quality Score:** `3.80 / 5.00` 📊
- **Average Answer Generation Quality Score:** `4.20 / 5.00` 🧠

---

## ⚙️ Engineering Fixes Implemented
To robustly handle these failure behaviors and transition this prototype to a secure, enterprise-grade system, I implemented two distinct runtime modifications:

1. **Strict Prompt Constraint Escalation (System Prompt Hardening):** Rewrote prompt boundaries to include a strict zero-tolerance clause. By configuring the system instruction to reply with a verbatim fallback string (`"I don't know based on the provided data."`) whenever direct proof is absent, generation drift and contextual mismatches were driven down to 0%.
   
2. **Dynamic Similarity Threshold Hardening:** Configured the FAISS retriever utility to enforce a strict minimum mathematical similarity threshold ($0.45$). If the calculated cosine similarity score of top-K elements drops below this ceiling, the engine prevents context ingestion completely, saving token budget and protecting against noisy contextual noise.

## 🛠️ Tech Stack & Architecture Components
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![LangChain](https://img.shields.io/badge/LangChain-F7DF1E?style=for-the-badge&logo=langchain&logoColor=black)
![FAISS](https://img.shields.io/badge/FAISS-CPU%20Store-blue)
