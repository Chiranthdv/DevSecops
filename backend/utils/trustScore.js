const calculateTrustScore = async (worker) => {
  let score = 0;

  if (worker.verificationStatus === "approved") {
    score += 30;
  }

  // later we add document + jobs

  return score;
};

module.exports = calculateTrustScore;