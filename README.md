[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/buschmais/software-analytics-starter/master)

# software-analytics-starter

This is a starter project for Software Analytics with jQAssistant, Neo4j, Jupyter Notebooks, and mybinder.
The project shows how to use Software Analytics to gain new insights on software systems based on example use cases and 
focuses on a structured approach to make the analysis reusable and shareable. 

## Why you should do Software Analytics

No matter if you have a specific refactoring to work on, have to identify hotspots and root causes for problems occuring in production, want to identify the impact of code changes on the whole source code or simply want to get to know your software system better, Software Analytics will help you in doing so.

While looking into the source code via the IDE, you only have a limited scope and due to the nature of code with its many outgoing and incoming dependencies, it's hard to understand the structures and overall workings of your system in its whole. Software Analytics aims at abstracting away from source details while still keeping structures and dependencies, and at bringing source code together with other infomration sources like its development history to gain even more insights.

Abstracting away from source code and collecting analysis results helps to summarize technical details on a higher level suitable for communication with colleagues and decision makers, thus establishing a foundation for making directed progress.

## How to do Software Analytics

There are to aspects of how to do software analytics to be answered.

First off, on the technical preconditions for doing software analytics, i.e. what are the tools to use and how to setup them. 
Second, on the actual implementation of Software Analytics.

### Tooling 

The Software Analytics pipeline consists of the follwoing tools:

1. jQAssistant
    * an open-source tool that scans source code and other information like Git repositories and maps it towards a queryable graph structure
2. Neo4j
    * a native graph database that stores the information scanned by jQAssistant and allows to query and enrich the data
3. Jupyter Notebooks
    * a Python workbench allwoing to write markdown, Python code including generating visualizations, and Neo4j queries directly in the Notebook

In this starter, everything is prepared so that no integration is needed in the example software system. However,
if you want to try Software Analytics on your own system, you can check out following resources:

- [Tutorial on integrating jQAssistant into a Maven project](https://101.jqassistant.org/getting-started-spring-boot-maven/index.html)
- [Docker-Image with Jupyter configured to connect to a Neo4j db](https://github.com/jQAssistant/jqa-docker-images/blob/master/jupyter-notebook/README.md)
- [Example using Dockercompose to spin up a Neo4j and a Jupyter container](https://github.com/jqassistant-demo/cwa-server/blob/feature/jqassistant/jqassistant-docker-compose.yml)

### Doing

When doing Software Analytics it should be known upfront what question shall be answered and what the aim of the exercise is.
If the execution a concrete refactoring shall be planned, a more detailed llok is needed in the analysis report then if the overall implementation of the functional split shall be asserted. This goes hand-in-hand with the target audience, i.e. a preparation for developers needs to be more technical then a summary for the management and focuses more on the doing instead of costs and risks. 

The Jupyter Notebooks in this starter are structured based on the [Software Analytics Canvas](https://www.feststelltaste.de/software-analytics-canvas/) created by Markus Harrer. The canvas provides a general structure to follow in the analysis and is a good starting point for every analysis.

## About this Starter

This starter uses the shopizer e-Commerce Shop System (Version 2.12.0) for analysis. It was only modified in the way that jQAssistant was added, the code can be found in the [Shopizer Fork](https://github.com/buschmais/shopizer) repository.

### How to Use

To launch the Jupyter Notebook simply click the mybinder badge on top of this readme. 
A new tab will then be opened where you can see the environment including Jupyter and Neo4j getting spinned up.

![01-Binder-Loading](https://user-images.githubusercontent.com/6312229/128904466-0db93783-fca2-4aa3-b3eb-067dab5f6eef.png)

Afterwards, you'll be sseing the overview of the available Notebooks.

![02-Jupyter-Overview](https://user-images.githubusercontent.com/6312229/128904557-9ee68b2c-37fc-43ee-bd91-dc64ecd31157.png)

After opening a Notebook, you can execute t via Kernel -> Restart & Run All

![03-Jupyter-Notebook](https://user-images.githubusercontent.com/6312229/128904657-0027443a-8093-4b42-8987-d3693c5ac118.png)

### Provided Notebooks

There are five Notebooks provided:

1. 'Software Analytics - 00 - Intro.ipynb' - an introduction to using Jupyter Notebooks
2. 'Software Analytics - 01 - Functional Split.ipynb' - a Notebook about how to identify functional components in a software system
3. 'Software Analytics - 02 - Responsibilities.ipynb' - a Notebook about identifying domain experts based on the number of commits
4. 'Software Analytics - 03 - Hot Spots by Change Frequency.ipynb' - a Notebook about identifying often changed code
5. 'Software Analytics - 04 - Instability.ipynb' - a Notebook calculating complexity metrics as defined by Robert C. Martin
6. 'Software Analytics - 05 - Template.ipynb' - an empty Notebook to be used as a template
