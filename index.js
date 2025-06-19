#!/usr/bin/env node

const { Address } = require("@ton/ton");
const { Command } = require("commander");

const program = new Command();

program
  .name("ton-address-converter")
  .description(
    "CLI utility to convert TON wallet addresses to different formats"
  )
  .version("1.0.6");

program
  .argument("<address>", "TON wallet address to convert")
  .option(
    "-f, --format <format>",
    "specific format to output (raw, user-friendly, bounceable, non-bounceable)",
    "all"
  )
  .option("-u, --uppercase", "output in uppercase")
  .option("-l, --lowercase", "output in lowercase")
  .option("-o, --original", "output in original case (default)")
  .action((addressInput, options) => {
    try {
      // Parse the address
      const address = Address.parse(addressInput);

      const results = {};

      // Get all available formats
      if (options.format === "all" || options.format === "raw") {
        results.raw = address.toRawString();
      }

      if (options.format === "all" || options.format === "user-friendly") {
        results.userFriendly = address.toString();
      }

      if (options.format === "all" || options.format === "bounceable") {
        results.bounceable = address.toString({ bounceable: true });
      }

      if (options.format === "all" || options.format === "non-bounceable") {
        results.nonBounceable = address.toString({ bounceable: false });
      }

      // Additional formats
      if (options.format === "all") {
        results.testnetOnly = address.toString({ testOnly: true });
        results.bounceableTestnet = address.toString({
          bounceable: true,
          testOnly: true,
        });
        results.nonBounceableTestnet = address.toString({
          bounceable: false,
          testOnly: true,
        });
        results.urlSafe = address.toString({ urlSafe: true });
        results.nonUrlSafe = address.toString({ urlSafe: false });
      }

      // Apply case transformation
      const transformCase = (str, formatKey) => {
        if (formatKey === "raw") {
          const parts = str.split(":");
          if (parts.length === 2) {
            const workchain = parts[0];
            let hexPart = parts[1];
            if (options.uppercase) {
              hexPart = hexPart.toUpperCase();
            } else if (options.lowercase) {
              hexPart = hexPart.toLowerCase();
            }
            return `${workchain}:${hexPart}`;
          }
          // Fallback if raw string is not in "workchain:hex" format
          if (options.uppercase) return str.toUpperCase();
          else if (options.lowercase) return str.toLowerCase();
          return str; // original case if not "workchain:hex" and no case option
        }
        // For other formats
        if (options.uppercase) return str.toUpperCase();
        else if (options.lowercase) return str.toLowerCase();
        return str; // original case
      };

      // Output results
      console.log("TON Address Conversion Results:");
      console.log("================================");
      console.log(`Input: ${addressInput}`);
      console.log("");

      for (const [formatName, value] of Object.entries(results)) {
        const displayName = formatName
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
        console.log(
          `${displayName.padEnd(25)}: ${transformCase(value, formatName)}`
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
      console.error("Please provide a valid TON address.");
      process.exit(1);
    }
  });

// Add individual format commands for convenience
program
  .command("raw")
  .description("Convert to raw format only")
  .argument("<address>", "TON wallet address")
  .option("-U, --sub-uppercase", "output raw in uppercase") // Changed flag
  .option("-L, --sub-lowercase", "output raw in lowercase") // Changed flag
  .action((addressInput, options, command) => { 
    const cmdOpts = command.opts(); 
    // console.log('DEBUG: RAW Subcommand cmdOpts:', cmdOpts); // Temporarily remove or keep for one more test
    try {
      const address = Address.parse(addressInput);
      let rawString = address.toRawString();
      let result;

      const parts = rawString.split(":");
      if (parts.length === 2) {
        const workchain = parts[0];
        let hexPart = parts[1];
        if (cmdOpts.subUppercase) { // Use new flag name
          hexPart = hexPart.toUpperCase();
        } else if (cmdOpts.subLowercase) { // Use new flag name
          hexPart = hexPart.toLowerCase();
        }
        result = `${workchain}:${hexPart}`;
      } else {
        // Fallback: apply case to the whole string if not in "workchain:hex" format
        result = rawString;
        if (cmdOpts.subUppercase) { // Use new flag name
          result = result.toUpperCase();
        } else if (cmdOpts.subLowercase) { // Use new flag name
          result = result.toLowerCase();
        }
      }

      console.log(result);
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1);
    }
  });

program
  .command("user-friendly")
  .description("Convert to user-friendly format only")
  .argument("<address>", "TON wallet address")
  .option("-u, --uppercase", "output in uppercase")
  .option("-l, --lowercase", "output in lowercase")
  .action((addressInput, options) => {
    try {
      const address = Address.parse(addressInput);
      let result = address.toString();

      if (options.uppercase) {
        result = result.toUpperCase();
      } else if (options.lowercase) {
        result = result.toLowerCase();
      }

      console.log(result);
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1);
    }
  });

program
  .command("bounceable")
  .description("Convert to bounceable format only")
  .argument("<address>", "TON wallet address")
  .option("-u, --uppercase", "output in uppercase")
  .option("-l, --lowercase", "output in lowercase")
  .action((addressInput, options) => {
    try {
      const address = Address.parse(addressInput);
      let result = address.toString({ bounceable: true });

      if (options.uppercase) {
        result = result.toUpperCase();
      } else if (options.lowercase) {
        result = result.toLowerCase();
      }

      console.log(result);
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1);
    }
  });

program
  .command("non-bounceable")
  .description("Convert to non-bounceable format only")
  .argument("<address>", "TON wallet address")
  .option("-u, --uppercase", "output in uppercase")
  .option("-l, --lowercase", "output in lowercase")
  .action((addressInput, options) => {
    try {
      const address = Address.parse(addressInput);
      let result = address.toString({ bounceable: false });

      if (options.uppercase) {
        result = result.toUpperCase();
      } else if (options.lowercase) {
        result = result.toLowerCase();
      }

      console.log(result);
    } catch (error) {
      console.error("Error:", error.message);
      process.exit(1);
    }
  });

// Add help examples
program.addHelpText(
  "after",
  `
Examples:
  $ ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
  $ ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --format raw --uppercase
  $ ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --uppercase
  $ ton-addr raw EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ -U
  $ ton-addr raw EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --sub-lowercase
  $ ton-addr user-friendly EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ -l
  $ ton-addr bounceable EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
`
);

program.parse();
