# TON Address Converter

A simple command-line utility to convert TON (The Open Network) wallet addresses into various formats.

## Features

- Convert TON addresses to multiple formats: Raw, User-Friendly (Base64), Bounceable, Non-Bounceable.
- Additional formats: Testnet Only, Bounceable Testnet, Non-Bounceable Testnet, URL Safe.
- Option to output addresses in uppercase or lowercase.
- Convenient shortcuts for specific format conversions.

## Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (usually comes with Node.js)

### Global Installation (Recommended)

You can install `cli-ton-address-converter` globally using npm:

```bash
npm install -g cli-ton-address-converter
```

Once installed, the command `ton-addr` will be available in your terminal.

*(Note: If you are developing locally or have cloned the repository, you can link the package globally from the project's root directory: `npm link`)*

## Usage

### Basic Commands

To display all available formats for an address:

```bash
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
```

To display a specific format:

```bash
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --format raw
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --format user-friendly
# etc.
```

### Quick Format Access

For quicker access to a specific format:

```bash
ton-addr raw EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
ton-addr user-friendly EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
ton-addr bounceable EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
ton-addr non-bounceable EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
```

### Formatting Options

Output all addresses in uppercase:

```bash
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --uppercase
```

Output all addresses in lowercase:

```bash
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --lowercase
```

Output a specific format in uppercase/lowercase:

```bash
ton-addr raw EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --uppercase
ton-addr user-friendly EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --lowercase
```
*(Note: For RAW format, uppercase/lowercase applies only to the hex part of the address, e.g., `0:ABCDEF...`)*

## Supported Formats

- **Raw**: Hexadecimal format (e.g., `0:ab12...ef`)
- **User Friendly**: Standard user-friendly Base64 encoded format (bounceable by default)
- **Bounceable**: Address with the bounceable flag set
- **Non Bounceable**: Address with the bounceable flag unset
- **Testnet Only**: Address marked for testnet usage
- **Bounceable Testnet**: Bounceable address marked for testnet
- **Non Bounceable Testnet**: Non-bounceable address marked for testnet
- **URL Safe**: Base64 format using URL-safe characters (`_` and `-`)

## Example Output

```bash
$ ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_

TON Address Conversion Results:
================================
Input: EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_

Raw                      : 0:521e1c5deced8db6c40a65f288cb019592cd7419a562741e47e95278c3c019c4
User Friendly            : EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
Bounceable               : EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
Non Bounceable           : UQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxLy6
Testnet Only             : kQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxFr1
Bounceable Testnet       : kQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxFr1
Non Bounceable Testnet   : 0QBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxAcw
Url Safe                 : EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
```

## Help

For a full list of commands and options:

```bash
ton-addr --help
```

## System Requirements

- Node.js (v14+)
- npm

Compatible with macOS, Linux, and Windows.

## Dependencies

- `@ton/ton`: Core library for TON blockchain interactions.
- `commander`: Command-line interface framework.
