import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

setGlobalOptions({maxInstances: 10});

export const askBot = onRequest((req, res) => {
  logger.info("Received a request!", {structuredData: true});

  const {question} = req.body;

  // Simple dummy response (you can later call OpenAI or your own logic here)
  res.json({
    answer: `Ghosts love this question: "${question}" 👻`,
    fromCache: false,
  });
});

