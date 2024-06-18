# LevelDB Reader for Chrome Extension

## Overview

This project provides a tool to read and display all key-value pairs stored by a Chrome extension in a LevelDB database. The tool uses Node.js and the `level` library to access the data. It is designed to work with a Chrome extension that stores values using the `chrome.storage` API.

## Features

- Fetch and display all key-value pairs stored in LevelDB by a Chrome extension.
- Easy setup and execution with Node.js.
- Handles JSON and non-JSON data seamlessly.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. Download it from [nodejs.org](https://nodejs.org/).
- **Chrome**: You need Google Chrome installed with a specific extension you want to read data from.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/leveldb-reader.git
cd leveldb-reader
npm install
npm start
