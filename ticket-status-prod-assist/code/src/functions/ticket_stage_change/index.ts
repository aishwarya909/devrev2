async function handleSentimentAnalysisEvent(event: any) {
    const sentimentAnalysisData = event.payload.sentiment_analysis_data;

    if (sentimentAnalysisData) {
        const { text, sentiment_score, sentiment_label } = sentimentAnalysisData;

        console.log(`Sentiment analysis detected: ${sentiment_label} (${sentiment_score}). Text: ${text}`);
        
        // Act on sentiment
        if (sentiment_label === "positive") {
            console.log("Positive sentiment detected. Log or notify as required.");
        } else if (sentiment_label === "negative") {
            console.log("Negative sentiment detected. Escalate or notify as needed.");
        } else {
            console.log("Neutral sentiment detected. No immediate action.");
        }
    } else {
        console.log("No sentiment analysis data found in the event.");
    }
}

