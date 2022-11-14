const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  let candidate = null;
  try {
    if (!event && !candidate) {
      // if no event candidate
      candidate = TRIVIAL_PARTITION_KEY;
    } else {
      // check if event has partition key
      if (event.partitionKey) {
        candidate =
          typeof partitionKey !== "string"
            ? JSON.stringify(candidate)
            : event.partitionKey;
      } else {
        candidate = crypto
          .createHash("sha3-512")
          .update(JSON.stringify(event))
          .digest("hex");
      }
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
    return candidate;
  } catch (err) {
    throw err;
  }
};
