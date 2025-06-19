#!/bin/bash

# Update TON Address Converter
echo "Updating TON Address Converter..."

# Navigate to the project directory
cd "$(dirname "$0")"

# Update dependencies
npm update

# Re-link the global command
npm link

echo "TON Address Converter updated successfully!"
echo "You can use it with: ton-addr [address]"

